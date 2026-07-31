import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'feature',
  title: 'Feature',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      options: { list: ['coffee', 'pastry', 'heart', 'map', 'star', 'leaf', 'users'] },
    }),
    defineField({ name: 'order', title: 'Order', type: 'number', initialValue: 0 }),
  ],
})
