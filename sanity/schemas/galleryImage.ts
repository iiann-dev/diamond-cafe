import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'galleryImage',
  title: 'Gallery Image',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true }, validation: (r) => r.required() }),
    defineField({ name: 'alt', title: 'Alt Text', type: 'string', description: 'Describe the image for SEO + accessibility' }),
    defineField({
      name: 'span',
      title: 'Layout Span',
      type: 'string',
      options: { list: [{ title: 'Normal', value: 'normal' }, { title: 'Tall', value: 'tall' }, { title: 'Wide', value: 'wide' }, { title: 'Big', value: 'big' }] },
      initialValue: 'normal',
    }),
    defineField({ name: 'order', title: 'Order', type: 'number', initialValue: 0 }),
  ],
})
