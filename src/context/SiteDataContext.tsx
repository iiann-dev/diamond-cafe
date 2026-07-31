import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import type { SanityDocument } from '@sanity/client'
import {
  client,
  siteInfoQuery,
  heroQuery,
  featuresQuery,
  categoriesQuery,
  menuItemsQuery,
  galleryQuery,
  aboutQuery,
  valuesQuery,
  hoursQuery,
  seoSettingsQuery,
} from '../lib/sanity'

export interface SiteData {
  siteInfo: SanityDocument | null
  hero: SanityDocument | null
  features: SanityDocument[]
  categories: SanityDocument[]
  menuItems: SanityDocument[]
  gallery: SanityDocument[]
  about: SanityDocument | null
  values: SanityDocument[]
  hours: SanityDocument[]
  seoSettings: SanityDocument[]
  loading: boolean
}

const SiteDataContext = createContext<SiteData>({
  siteInfo: null,
  hero: null,
  features: [],
  categories: [],
  menuItems: [],
  gallery: [],
  about: null,
  values: [],
  hours: [],
  seoSettings: [],
  loading: true,
})

export function SiteDataProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<SiteData>({
    siteInfo: null,
    hero: null,
    features: [],
    categories: [],
    menuItems: [],
    gallery: [],
    about: null,
    values: [],
    hours: [],
    seoSettings: [],
    loading: true,
  })

  useEffect(() => {
    let cancelled = false

    async function fetchData() {
      try {
        const [siteInfo, hero, features, categories, menuItems, gallery, about, values, hours, seoSettings] =
          await Promise.all([
            client.fetch(siteInfoQuery),
            client.fetch(heroQuery),
            client.fetch(featuresQuery),
            client.fetch(categoriesQuery),
            client.fetch(menuItemsQuery),
            client.fetch(galleryQuery),
            client.fetch(aboutQuery),
            client.fetch(valuesQuery),
            client.fetch(hoursQuery),
            client.fetch(seoSettingsQuery),
          ])
        if (!cancelled) {
          setData({
            siteInfo: siteInfo ?? null,
            hero: hero ?? null,
            features: features ?? [],
            categories: categories ?? [],
            menuItems: menuItems ?? [],
            gallery: gallery ?? [],
            about: about ?? null,
            values: values ?? [],
            hours: hours ?? [],
            seoSettings: seoSettings ?? [],
            loading: false,
          })
        }
      } catch (err) {
        console.error('Sanity fetch error:', err)
        if (!cancelled) setData((d) => ({ ...d, loading: false }))
      }
    }

    fetchData()
    return () => { cancelled = true }
  }, [])

  return <SiteDataContext.Provider value={data}>{children}</SiteDataContext.Provider>
}

export function useSiteData() {
  return useContext(SiteDataContext)
}
