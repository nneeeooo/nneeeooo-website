import { defineType, defineField } from 'sanity';

export default defineType({
  title: 'Webdev Item',
  name: 'webdevItem',
  type: 'document',
  preview: {
    select: {
      title: 'title',
      media: 'thumbnail43',
      mediaType: 'thumbnail43._type',
    },
    prepare({ title, media, mediaType }) {
      return {
        title,
        media,
        mediaType,
      };
    },
  },
  fields: [
    defineField({
      name: 'thumbnail169',
      title: 'Thumbnail Desktop',
      description: '16:9 thumbnail',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'thumbnail43',
      title: 'Thumbnail Mobile',
      description: '4:3 thumbnail',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.min(1).max(64).required(),
    }),
    defineField({
      name: 'description',
      type: 'string',
      validation: (rule) => rule.min(1).max(512).required(),
    }),
    defineField({
      name: 'stack',
      type: 'string',
      validation: (rule) => rule.min(1).max(512).required(),
    }),
    defineField({
      name: 'link',
      type: 'url',
      validation: (rule) =>
        rule.uri({ scheme: ['http', 'https'] }).required(),
    }),
  ],
});
