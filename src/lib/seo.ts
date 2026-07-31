import type { SanityDocument } from '@sanity/client'

const SITE_URL = 'https://diamond-cafe-one.vercel.app'

interface RestaurantData {
  siteInfo?: SanityDocument | null
  menuItems?: SanityDocument[]
  categories?: SanityDocument[]
}

export function buildRestaurantJsonLd({ siteInfo, menuItems, categories }: RestaurantData) {
  const name = siteInfo?.name || 'Diamond Cafe'
  const address = siteInfo?.address || '751 Diamond Street, San Francisco, CA 94114'
  const phone = siteInfo?.phone || '(415) 655-3674'
  const email = siteInfo?.email || 'diamondcafelunches@gmail.com'
  const hoursRange = siteInfo?.hoursRange || '7:00 am — 3:00 pm'
  const founded = siteInfo?.founded || 2014
  const orderUrl = siteInfo?.orderUrl || 'https://www.toasttab.com/diamondcafe'

  const [openTime, closeTime] = hoursRange
    .replace(/\./g, '')
    .replace(/\s*(am|pm)\s*/gi, (m: string) => m.trim().toUpperCase())
    .split('—')
    .map((t: string) => t.trim())

  const to24 = (t: string) => {
    const match = t.match(/(\d+):(\d+)\s*(AM|PM)/i)
    if (!match) return null
    let h = parseInt(match[1], 10)
    const m = match[2]
    const ap = match[3].toUpperCase()
    if (ap === 'PM' && h !== 12) h += 12
    if (ap === 'AM' && h === 12) h = 0
    return `${String(h).padStart(2, '0')}:${m}:00`
  }

  const open = to24(openTime)
  const close = to24(closeTime)

  const hasMenu = menuItems && menuItems.length > 0
  const hasCategories = categories && categories.length > 0

  const offerCatalog = hasMenu && hasCategories
    ? {
        '@type': 'OfferCatalog',
        name: 'Menu',
        itemListElement: categories!.map((cat) => ({
          '@type': 'OfferCatalog',
          name: cat.name,
          itemListElement: menuItems!
            .filter((i) => (i.category?.slug?.current ?? '') === (cat.slug?.current ?? ''))
            .map((item) => ({
              '@type': 'Offer',
              itemOffered: {
                '@type': 'MenuItem',
                name: item.name,
                description: item.description || undefined,
              },
            })),
        })),
      }
    : undefined

  return {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name,
    image: `${SITE_URL}/images/logo.png`,
    url: SITE_URL,
    telephone: phone,
    email,
    servesCuisine: ['Cafe', 'Breakfast', 'Crepes', 'Sandwiches'],
    priceRange: '$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: address.split(',')[0]?.trim() || address,
      addressLocality: 'San Francisco',
      addressRegion: 'CA',
      postalCode: '94114',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 37.759,
      longitude: -122.434,
    },
    openingHoursSpecification: open && close
      ? [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            opens: open,
            closes: close,
          },
        ]
      : undefined,
    foundingDate: String(founded),
    ...(offerCatalog ? { hasMenu: offerCatalog } : {}),
    potentialAction: {
      '@type': 'OrderAction',
      target: orderUrl,
    },
  }
}
