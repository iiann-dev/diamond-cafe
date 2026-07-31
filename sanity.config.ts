import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemas/index.ts'

export default defineConfig({
  name: 'diamond-cafe',
  title: 'Diamond Cafe CMS',
  projectId: 'd7y9du0u',
  dataset: 'production',
  basePath: '/studio',
  plugins: [structureTool(), visionTool()],
  schema: { types: schemaTypes },
})
