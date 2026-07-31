import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'heroContent',
  title: 'Hero Content',
  type: 'document',
  fields: [
    defineField({ name: 'eyebrow', title: 'Eyebrow Label', type: 'string', description: 'Shown above the headline (e.g. Noe Valley, San Francisco)' }),
    defineField({ name: 'headlineTop', title: 'Headline — First Part', type: 'string', description: 'e.g. "Diamond"' }),
    defineField({ name: 'headlineAccent', title: 'Headline — Accent Word', type: 'string', description: 'Italic blue word, e.g. "Cafe"' }),
    defineField({ name: 'subheadline', title: 'Subheadline', type: 'string' }),
    defineField({
      name: 'image',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({ name: 'primaryCtaLabel', title: 'Primary CTA Label', type: 'string' }),
    defineField({ name: 'primaryCtaUrl', title: 'Primary CTA URL', type: 'url' }),
    defineField({ name: 'secondaryCtaLabel', title: 'Secondary CTA Label', type: 'string' }),
    defineField({ name: 'secondaryCtaTarget', title: 'Secondary CTA Target Page', type: 'string', options: { list: ['/menu', '/gallery', '/about', '/contact'] } }),
    defineField({ name: 'sinceBadge', title: 'Since Badge (e.g. Since 2014)', type: 'string' }),
  ],
})
