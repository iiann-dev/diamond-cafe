import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'aboutContent',
  title: 'About Content',
  type: 'document',
  fields: [
    defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string', description: 'e.g. About Diamond Cafe' }),
    defineField({ name: 'headlineTop', title: 'Headline — First Part', type: 'string', description: 'e.g. "Our"' }),
    defineField({ name: 'headlineAccent', title: 'Headline — Accent Word', type: 'string', description: 'e.g. "Story"' }),
    defineField({ name: 'story', title: 'Story', type: 'text', rows: 8 }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({ name: 'heroImageCaption', title: 'Hero Image Caption', type: 'string' }),
    defineField({ name: 'philosophyLabel', title: 'Philosophy Label', type: 'string', description: 'e.g. Our Philosophy' }),
    defineField({ name: 'philosophyQuote', title: 'Philosophy Quote', type: 'text', rows: 3 }),
    defineField({ name: 'philosophyAuthor', title: 'Philosophy Author', type: 'string' }),
    defineField({ name: 'closingTitleTop', title: 'Closing Title — First Part', type: 'string', description: 'e.g. Family-Run' }),
    defineField({ name: 'closingTitleAccent', title: 'Closing Title — Accent Word', type: 'string', description: 'e.g. Since 2014' }),
    defineField({ name: 'closingText', title: 'Closing Text', type: 'text', rows: 4 }),
  ],
})
