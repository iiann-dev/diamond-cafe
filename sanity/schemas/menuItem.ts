import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'menuItem',
  title: 'Menu Item',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'menuCategory' }],
      validation: (r) => r.required(),
    }),
    defineField({ name: 'price', title: 'Price (USD)', type: 'number', description: 'Optional — e.g. 12.50' }),
    defineField({ name: 'popular', title: 'Popular', type: 'boolean', initialValue: false }),
    defineField({ name: 'order', title: 'Order', type: 'number', initialValue: 0 }),
  ],
})
