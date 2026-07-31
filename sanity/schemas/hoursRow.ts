import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'hoursRow',
  title: 'Hours Row',
  type: 'document',
  fields: [
    defineField({ name: 'day', title: 'Day', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'hours', title: 'Hours', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'order', title: 'Order', type: 'number', initialValue: 0 }),
  ],
})
