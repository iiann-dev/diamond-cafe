import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'seoSettings',
  title: 'SEO Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'page',
      title: 'Page',
      type: 'string',
      options: {
        list: [
          { title: 'Home', value: 'home' },
          { title: 'Menu', value: 'menu' },
          { title: 'Gallery', value: 'gallery' },
          { title: 'About', value: 'about' },
          { title: 'Contact', value: 'contact' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Meta Title (browser tab / Google headline)',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Meta Description (Google snippet)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'keywords',
      title: 'Keywords (optional)',
      type: 'string',
    }),
    defineField({
      name: 'ogImage',
      title: 'Open Graph Image (shown when shared on social)',
      type: 'image',
    }),
  ],
})
