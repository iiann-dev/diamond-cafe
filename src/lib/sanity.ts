import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url'
export type { SanityImageSource } from '@sanity/image-url'

export const client = createClient({
  projectId: 'd7y9du0u',
  dataset: 'production',
  apiVersion: '2025-01-01',
  useCdn: true,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

// ─── GROQ queries ─────────────────────────────────────────────
export const siteInfoQuery = `*[_type == "siteInfo"][0]`
export const heroQuery = `*[_type == "heroContent"][0]`
export const featuresQuery = `*[_type == "feature"] | order(order asc)`
export const categoriesQuery = `*[_type == "menuCategory"] | order(order asc)`
export const menuItemsQuery = `*[_type == "menuItem"] | order(order asc) {
  ...,
  category->{name, slug}
}`
export const galleryQuery = `*[_type == "galleryImage"] | order(order asc)`
export const aboutQuery = `*[_type == "aboutContent"][0]`
export const valuesQuery = `*[_type == "value"] | order(order asc)`
export const hoursQuery = `*[_type == "hoursRow"] | order(order asc)`
export const seoSettingsQuery = `*[_type == "seoSettings"]`
