import { useEffect } from 'react'
import { useSiteData } from '../context/SiteDataContext'
import { urlFor } from '../lib/sanity'

const SITE_URL = 'https://diamond-cafe-one.vercel.app'
const DEFAULT_TITLE = 'Diamond Cafe — Noe Valley, SF'
const DEFAULT_DESC =
  'Diamond Cafe is a family-owned cafe in Noe Valley, San Francisco. Fresh coffee, homemade crepes, breakfast favorites, and warm vibes since 2014.'

interface SeoProps {
  page?: string
  title?: string
  description?: string
  path?: string
  image?: string
  type?: string
  jsonLd?: object | object[]
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

export default function Seo({ page, title, description, path = '/', image, type = 'website', jsonLd }: SeoProps) {
  const { seoSettings } = useSiteData()
  const cms = page ? seoSettings.find((s) => (s as { page?: string }).page === page) : undefined
  const cmsTitle = (cms as { title?: string } | undefined)?.title
  const cmsDesc = (cms as { description?: string } | undefined)?.description
  const cmsImage = (cms as { ogImage?: unknown } | undefined)?.ogImage

  useEffect(() => {
    // CMS wins (used verbatim) → then props (with suffix) → then hardcoded defaults
    const fullTitle = cmsTitle || (title ? `${title} | Diamond Cafe` : DEFAULT_TITLE)
    const desc = cmsDesc || description || DEFAULT_DESC
    const url = `${SITE_URL}${path === '/' ? '/' : path}`
    const img = cmsImage ? urlFor(cmsImage).width(1200).url() : image || `${SITE_URL}/images/logo.png`

    document.title = fullTitle
    upsertMeta('name', 'description', desc)

    // Open Graph
    upsertMeta('property', 'og:title', fullTitle)
    upsertMeta('property', 'og:description', desc)
    upsertMeta('property', 'og:type', type)
    upsertMeta('property', 'og:url', url)
    upsertMeta('property', 'og:image', img)
    upsertMeta('property', 'og:site_name', 'Diamond Cafe')
    upsertMeta('property', 'og:locale', 'en_US')

    // Twitter
    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', fullTitle)
    upsertMeta('name', 'twitter:description', desc)
    upsertMeta('name', 'twitter:image', img)

    // Canonical
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', url)

    // JSON-LD
    const existing = document.getElementById('seo-jsonld')
    if (existing) existing.remove()
    if (jsonLd) {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.id = 'seo-jsonld'
      script.textContent = JSON.stringify(jsonLd)
      document.head.appendChild(script)
    }

    return () => {
      const el = document.getElementById('seo-jsonld')
      if (el) el.remove()
    }
  }, [title, description, path, image, type, jsonLd, cmsTitle, cmsDesc, cmsImage])

  return null
}
