import { StructureBuilder } from 'sanity/structure';

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Profile / Home')
        .child(
          S.document()
            .title('Profile / Home')
            .schemaType('profile')
            .documentId('profile')
        ),
      S.listItem()
        .title('Webdev')
        .child(
          S.document()
            .title('Webdev')
            .schemaType('webdev')
            .documentId('webdev')
        ),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            'profile',
            'webdev',
            'webdevItem',
            'designItem',
            'media.tag',
          ].includes(`${listItem.getId()}`)
      ),
    ]);
