// sanity.config.ts
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import markdown from 'sanity-plugin-markdown'


export default defineConfig({
  name: 'default',
  title: 'Your Sanity Studio',

  projectId: 'your_project_id', // replace with your actual ID
  dataset: 'production',

  plugins: [deskTool(), visionTool(), markdown()],

  schema: {
    types: schemaTypes, // or directly list your types
  },
})
