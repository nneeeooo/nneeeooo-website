import { defineType, defineField } from 'sanity';

export default defineType({
  title: 'Design Item',
  name: 'designItem',
  type: 'document',
  preview: {
    select: {
      media: 'preview',
      mediaType: 'preview._type',
    },
    prepare({ media, mediaType }) {
      return {
        title: 'Design Item',
        media,
        mediaType,
      };
    },
  },
  fields: [
    defineField({
      name: 'preview',
      description: '0.3x of A2, sRGB, 72dpi',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'link',
      description: '(optional)',
      type: 'url',
    }),
  ],
});
