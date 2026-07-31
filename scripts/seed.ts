/**
 * Seed script — pushes Diamond Cafe's existing content into Sanity.
 * Run: npm run seed
 * Uses SANITY_API_TOKEN from .env.local (never committed).
 */
import { createClient } from '@sanity/client'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import 'dotenv/config'
import dotenv from 'dotenv'
dotenv.config({ path: '.env.local' })
import {
  SITE,
  HOURS,
  FEATURES,
  MENU_ITEMS,
  MENU_CATEGORIES,
  IMAGES,
  SOCIALS,
  ORDER_URL,
  LOGOS,
} from '../src/data'

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID!,
  dataset: process.env.SANITY_DATASET!,
  apiVersion: '2025-01-01',
  token: process.env.SANITY_API_TOKEN!,
  useCdn: false,
})

/** Upload an image asset from a URL or local path. Returns asset _id. */
async function uploadImage(url: string, filename: string) {
  let buf: Buffer
  if (url.startsWith('/')) {
    buf = readFileSync(join(process.cwd(), 'public', url))
  } else {
    const res = await fetch(url)
    if (!res.ok) throw new Error(`fetch failed ${url}: ${res.status}`)
    buf = Buffer.from(await res.arrayBuffer())
  }
  const asset = await client.assets.upload('image', buf, { filename })
  return asset._id
}

/** Upload an image and build a Sanity image field with hotspot. */
async function imageField(url: string, filename: string) {
  const assetId = await uploadImage(url, filename)
  return {
    _type: 'image',
    asset: { _type: 'reference', _ref: assetId },
    hotspot: { x: 0.5, y: 0.5, height: 1, width: 1 },
  }
}

async function main() {
  // ── 1. siteInfo ──────────────────────────────────────────
  const siteInfoDoc = {
    _type: 'siteInfo',
    _id: 'siteInfo',
    name: SITE.name,
    tagline: SITE.tagline,
    description: SITE.description,
    neighborhood: SITE.neighborhood,
    address: SITE.address,
    phone: SITE.phone,
    email: SITE.email,
    founded: SITE.founded,
    hoursLabel: SITE.days,
    hoursRange: SITE.hours,
    orderUrl: ORDER_URL,
    mapEmbed: SITE.mapEmbed,
    socials: [
      { _key: 'fb', platform: 'facebook', url: SOCIALS.facebook },
      { _key: 'ig', platform: 'instagram', url: SOCIALS.instagram },
    ],
    logos: {
      square: await imageField(LOGOS.square, 'logo-square.png'),
      wide: await imageField(LOGOS.wide, 'logo-wide.png'),
    },
  }

  // ── 2. heroContent ───────────────────────────────────────
  const heroDoc = {
    _type: 'heroContent',
    _id: 'heroContent',
    eyebrow: SITE.neighborhood,
    headlineTop: 'Diamond',
    headlineAccent: 'Cafe',
    subheadline: 'Fresh coffee, homemade food, and the warmest welcome in Noe Valley.',
    image: await imageField(IMAGES.hero, 'hero.png'),
    primaryCtaLabel: 'Order Online',
    primaryCtaUrl: ORDER_URL,
    secondaryCtaLabel: 'View Menu',
    secondaryCtaTarget: '/menu',
    sinceBadge: `Since ${SITE.founded}`,
  }

  // ── 3. features ──────────────────────────────────────────
  const featureDocs = FEATURES.map((f: { title: string; desc: string; icon: string }, i: number) => ({
    _type: 'feature',
    _id: `feature-${i}`,
    title: f.title,
    description: f.desc,
    icon: f.icon,
    order: i,
  }))

  // ── 4. menu categories ───────────────────────────────────
  const categoryDocs = MENU_CATEGORIES.map((cat: string, i: number) => ({
    _type: 'menuCategory',
    _id: `menuCategory-${cat}`,
    name: cat.charAt(0).toUpperCase() + cat.slice(1),
    slug: { _type: 'slug', current: cat },
    order: i,
  }))

  // ── 5. menu items (reference categories) ─────────────────
  const menuItemDocs = MENU_ITEMS.map((item: { id: string; name: string; category: string; description: string; popular?: boolean }, i: number) => ({
    _type: 'menuItem',
    _id: `menuItem-${item.id}`,
    name: item.name,
    description: item.description,
    category: { _type: 'reference', _ref: `menuCategory-${item.category}` },
    popular: !!item.popular,
    order: i,
  }))

  // ── 6. gallery images (upload each asset) ────────────────
  const galleryDocs = await Promise.all(
    IMAGES.gallery.map(async (img: { src: string; alt: string; span?: string }, i: number) => ({
      _type: 'galleryImage',
      _id: `galleryImage-${i}`,
      title: img.alt,
      image: await imageField(img.src, `gallery-${i}.jpg`),
      alt: img.alt,
      span: img.span ?? 'normal',
      order: i,
    }))
  )

  // ── 7. aboutContent ──────────────────────────────────────
  const aboutDoc = {
    _type: 'aboutContent',
    _id: 'aboutContent',
    eyebrow: 'About Diamond Cafe',
    headlineTop: 'Our',
    headlineAccent: 'Story',
    story:
      'Nestled in the heart of Noe Valley, Diamond Cafe is a minority-owned family treasure. With Mike and Gaby at the helm — bringing over two decades of culinary expertise — we serve crepes, breakfast favorites, and the kind of warmth that turns first-time visitors into regulars. Since opening our doors in 2014, your support has been our backbone. Here\'s to celebrating 10 incredible years together.',
    heroImage: await imageField(IMAGES.hero, 'about-hero.png'),
    heroImageCaption: '— Morning light on Diamond Street —',
    philosophyLabel: 'Our Philosophy',
    philosophyQuote:
      '"A neighborhood cafe should feel like an extension of your living room — warm, familiar, and always welcoming."',
    philosophyAuthor: 'The Diamond Family',
    closingTitleTop: 'Family-Run',
    closingTitleAccent: `Since ${SITE.founded}`,
    closingText:
      'What started as a dream between two siblings has grown into the heart of the neighborhood. Stop by and taste the difference that fifteen years of care makes.',
  }

  // ── 8. values ────────────────────────────────────────────
  const valueDocs = [
    {
      _type: 'value',
      _id: 'value-1',
      number: '01',
      titleTop: 'Crafted with',
      titleAccent: 'Care',
      body: 'From the espresso pull to the pastry finish, every detail matters. We source locally and make everything from scratch. No shortcuts, no compromises — just honest food made with intention.',
      image: await imageField('https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=700&h=520&fit=crop&q=70', 'value-1.jpg'),
      imageAlt: 'Latte art being poured',
      order: 0,
    },
    {
      _type: 'value',
      _id: 'value-2',
      number: '02',
      titleTop: 'Community',
      titleAccent: 'First',
      body: 'Diamond Cafe is your living room away from home. A place to gather, connect, and feel welcome. Every face that walks through our door becomes part of the family — regulars and newcomers alike.',
      image: await imageField('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700&h=520&fit=crop&q=70', 'value-2.jpg'),
      imageAlt: 'Warm cafe interior atmosphere',
      order: 1,
    },
    {
      _type: 'value',
      _id: 'value-3',
      number: '03',
      titleTop: 'Quality',
      titleAccent: 'Ingredients',
      body: 'We believe great food starts with great ingredients. Locally sourced, thoughtfully prepared, and served with pride — every plate tells a story of care from farm to table.',
      image: await imageField('https://images.unsplash.com/photo-1580933073521-dc49ac0d4e6a?w=700&h=520&fit=crop&q=80', 'value-3.jpg'),
      imageAlt: 'Fresh coffee beans',
      order: 2,
    },
  ]

  // ── 9. HOURS rows ────────────────────────────────────────
  const hoursDocs = HOURS.map((h: { day: string; hours: string }, i: number) => ({
    _type: 'hoursRow',
    _id: `hoursRow-${i}`,
    day: h.day,
    hours: h.hours,
    order: i,
  }))

  // ── 10. SEO settings (one per page) ─────────────────────
  const seoDocs = [
    {
      _type: 'seoSettings',
      _id: 'seo-home',
      page: 'home',
      title: 'Diamond Cafe — Noe Valley, SF',
      description:
        'Diamond Cafe is a family-owned cafe in Noe Valley, San Francisco. Fresh coffee, homemade crepes, breakfast favorites, and warm vibes since 2014.',
    },
    {
      _type: 'seoSettings',
      _id: 'seo-menu',
      page: 'menu',
      title: 'Menu | Diamond Cafe',
      description:
        'Browse the Diamond Cafe menu — fresh crepes, breakfast favorites, bagels, sandwiches, scramblers, eggs, and salads made fresh daily in Noe Valley, SF.',
    },
    {
      _type: 'seoSettings',
      _id: 'seo-gallery',
      page: 'gallery',
      title: 'Gallery | Diamond Cafe',
      description:
        'Photos of Diamond Cafe — the cozy interior, fresh coffee, homemade pastries, and warm neighborhood atmosphere in Noe Valley, San Francisco.',
    },
    {
      _type: 'seoSettings',
      _id: 'seo-about',
      page: 'about',
      title: 'About Us | Diamond Cafe',
      description:
        'The story of Diamond Cafe — a minority-owned, family-run neighborhood cafe in Noe Valley, San Francisco since 2014. Fresh food, warm hospitality, community first.',
    },
    {
      _type: 'seoSettings',
      _id: 'seo-contact',
      page: 'contact',
      title: 'Contact & Hours | Diamond Cafe',
      description:
        'Find Diamond Cafe at 751 Diamond Street, Noe Valley, San Francisco. Open daily 7:00 am — 3:00 pm. Call (415) 655-3674 or get directions.',
    },
  ]

  // Build the mutation list. createOrReplace keeps it idempotent.
  const docs = [
    siteInfoDoc,
    heroDoc,
    ...featureDocs,
    ...categoryDocs,
    ...menuItemDocs,
    ...galleryDocs,
    aboutDoc,
    ...valueDocs,
    ...hoursDocs,
    ...seoDocs,
  ]

  console.log(`Seeding ${docs.length} docs...`)
  const tx = client.transaction()
  for (const doc of docs) {
    tx.createOrReplace(doc as { _id: string; _type: string })
  }
  await tx.commit()
  console.log('✅ Seed complete!')
}

main().catch((err) => {
  console.error('❌ Seed failed:', err.message ?? err)
  process.exit(1)
})
