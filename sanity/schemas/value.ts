import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'value',
  title: 'About Value',
  type: 'document',
  fields: [
    defineField({ name: 'number', title: 'Number Label', type: 'string', description: 'e.g. 01' }),
    defineField({ name: 'titleTop', title: 'Title — First Part', type: 'string', description: 'e.g. Crafted with' }),
    defineField({ name: 'titleAccent', title: 'Title — Accent Word', type: 'string', description: 'e.g. Care' }),
    defineField({ name: 'body', title: 'Body', type: 'text', rows: 5 }),
    defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'imageAlt', title: 'Image Alt Text', type: 'string' }),
    defineField({ name: 'order', title: 'Order', type: 'number', initialValue: 0 }),
  ],
})
