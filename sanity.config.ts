import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { media } from 'sanity-plugin-media';
import { projectId, dataset } from './src/sanity/env';
import { schemaTypes } from './src/sanity/schemaTypes';

export default defineConfig({
  basePath: '/studio',
  name: 'default',
  title: 'andrii-lytvyn-portfolio',
  projectId,
  dataset,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Main')
          .items([
            S.listItem()
              .title('Webdev')
              .child(S.document().title('Webdev').schemaType('webdev').documentId('webdev')),
            ...S.documentTypeListItems().filter(
              (listItem) =>
                !['webdev', 'webdevItem', 'designItem', 'media.tag'].includes(
                  `${listItem.getId()}`
                )
            ),
          ]),
    }),
    media(),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
});
