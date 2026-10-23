import { defineType, defineField } from 'sanity';

export default defineType({
  title: 'Photo',
  name: 'photo',
  type: 'document',
  preview: {
    select: {
      title: 'date',
      media: 'images.0',
      mediaType: 'images.0._type',
    },
    prepare({ title, media, mediaType }) {
      return {
        title: title
          ? new Date(title).toLocaleDateString('en', { year: 'numeric', month: 'long' })
          : 'Untitled Photo',
        media,
        mediaType,
      };
    },
  },
  fields: [
    defineField({
      name: 'date',
      type: 'date',
      options: {
        dateFormat: 'MMMM, YYYY',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'images',
      description: '1600x1200 or higher, 4/3, sRGB, 72dpi',
      type: 'array',
      of: [{ type: 'image' }],
      validation: (rule) => rule.min(1).required(),
    }),
  ],
});
