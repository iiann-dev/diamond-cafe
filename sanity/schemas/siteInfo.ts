import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'siteInfo',
  title: 'Site Info',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Cafe Name', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'tagline', title: 'Tagline', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 6 }),
    defineField({ name: 'neighborhood', title: 'Neighborhood', type: 'string' }),
    defineField({ name: 'address', title: 'Address', type: 'string' }),
    defineField({ name: 'phone', title: 'Phone', type: 'string' }),
    defineField({ name: 'email', title: 'Email', type: 'string' }),
    defineField({ name: 'founded', title: 'Founded Year', type: 'number' }),
    defineField({ name: 'hoursLabel', title: 'Hours Label (e.g. Open Daily)', type: 'string' }),
    defineField({ name: 'hoursRange', title: 'Hours Range (e.g. 7:00 am — 3:00 pm)', type: 'string' }),
    defineField({ name: 'orderUrl', title: 'Order Online URL', type: 'url' }),
    defineField({
      name: 'mapEmbed',
      title: 'Google Maps Embed URL',
      type: 'url',
      description: 'Full embed src (starts with https://www.google.com/maps/embed?)',
    }),
    defineField({
      name: 'socials',
      title: 'Social Links',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'socialLink',
          fields: [
            defineField({ name: 'platform', title: 'Platform', type: 'string', options: { list: ['facebook', 'instagram', 'x', 'tiktok', 'other'] } }),
            defineField({ name: 'url', title: 'URL', type: 'url' }),
          ],
        },
      ],
    }),
    defineField({
      name: 'logos',
      title: 'Logos',
      type: 'object',
      fields: [
        defineField({ name: 'square', title: 'Square Logo', type: 'image', options: { hotspot: true } }),
        defineField({ name: 'wide', title: 'Wide Logo', type: 'image', options: { hotspot: true } }),
      ],
    }),
  ],
})
