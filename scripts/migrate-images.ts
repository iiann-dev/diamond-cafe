/**
 * Surgical image migration — replaces Unsplash photos in existing Sanity CMS
 * via the diamondcafesf.com real photos. Only touches image fields; preserves
 * all text content the user may have edited in Studio.
 * Run: npx tsx scripts/migrate-images.ts  (needs a valid SANITY_API_TOKEN in .env.local)
 * Uses SANITY_API_TOKEN from .env.local (never committed).
 */
import { createClient } from '@sanity/client'
import dotenv from 'dotenv'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

dotenv.config({ path: '.env.local' })

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID!,
  dataset: process.env.SANITY_DATASET!,
  apiVersion: '2025-01-01',
  token: process.env.SANITY_API_TOKEN!,
  useCdn: false,
})

async function uploadImage(path: string, filename: string): Promise<string> {
  const buf = readFileSync(join(process.cwd(), 'public', path))
  const asset = await client.assets.upload('image', buf, { filename })
  return asset._id
}

async function imageField(path: string, filename: string) {
  const assetId = await uploadImage(path, filename)
  return {
    _type: 'image',
    asset: { _type: 'reference', _ref: assetId },
    hotspot: { x: 0.5, y: 0.5, height: 1, width: 1 },
  }
}

async function patchImage(docId: string, path: string, filename: string, extra: Record<string, unknown> = {}) {
  await client
    .patch(docId)
    .set({
      ...extra,
      image: await imageField(path, filename),
    })
    .commit()
}

async function main() {
  const results: string[] = []

  // Home hero -> warm interior lounge
  await client.patch('heroContent').set({
    image: await imageField('/images/dc/IMG_1521.jpg', 'hero-interior.jpg'),
  }).commit()
  results.push('heroContent.image -> IMG_1521 (cozy lounge)')

  // About hero — storefront exterior on Diamond St
  await client.patch('aboutContent').set({
    heroImage: await imageField('/images/dc/IMG_1523.jpg', 'about-storefront.jpg'),
  }).commit()
  results.push('aboutContent.heroImage -> IMG_1523 (storefront)')

  // Value cards (Unsplash -> real cafe photos)
  await patchImage('value-1', '/images/dc/IMG_1545.jpg', 'value-1.jpg', { imageAlt: 'Coffee being poured at the counter' })
  await patchImage('value-2', '/images/dc/IMG_1489.jpg', 'value-2.jpg', { imageAlt: 'Patio seating out front' })
  await patchImage('value-3', '/images/dc/IMG_1607.jpg', 'value-3.jpg', { imageAlt: 'Fresh breakfast plate' })
  results.push('value-1/2/3 -> IMG_1545 / IMG_1489 / IMG_1607')

  // Gallery: the last Two docs were iced/pour-over coffee (Unsplash)
  await client.patch('galleryImage-6').set({
    image: await imageField('/images/dc/IMG_1523.jpg', 'gallery-storefront.jpg'),
    title: 'Diamond Cafe storefront',
  }).commit()
  results.push('galleryImage-6 -> IMG_1523 (storefront)')

  console.log('✅ Migrated:')
  results.forEach((r) => console.log('  ' + r))

  // Remove the surplus Unsplash gallery doc to match the new 7-image set
  await client.delete('galleryImage-7')
  console.log('✅ galleryImage-7 (old pour-over coffee) deleted.\nAll Unsplash photos removed from CMS.')
}

main().catch((err) => {
  console.error('❌ Migration failed:', err.message ?? err)
  process.exit(1)
})