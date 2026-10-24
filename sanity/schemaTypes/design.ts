import { defineType, defineField } from 'sanity';

export default defineType({
  title: 'Design',
  name: 'design',
  type: 'document',
  preview: {
    select: {
      title: 'date',
      media: 'posts.0.preview',
      mediaType: 'posts.0.preview._type',
    },
    prepare({ title, media, mediaType }) {
      return {
        title: title
          ? new Date(title).toLocaleDateString('en', { year: 'numeric', month: 'long' })
          : 'Untitled Design',
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
      name: 'posts',
      type: 'array',
      of: [{ type: 'designItem' }],
      validation: (rule) => rule.min(1).required(),
    }),
  ],
});
