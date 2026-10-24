import { defineType, defineField } from 'sanity';

export default defineType({
  title: 'Webdev',
  name: 'webdev',
  type: 'document',
  fields: [
    defineField({
      name: 'webdev',
      type: 'array',
      of: [{ type: 'webdevItem' }],
      validation: (rule) => rule.min(1).required(),
    }),
  ],
});
