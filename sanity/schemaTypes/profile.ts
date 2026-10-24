import { defineType, defineField } from 'sanity';

export default defineType({
  title: 'Profile',
  name: 'profile',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (rule) => rule.required(),
      initialValue: 'Andrii Lytvyn',
    }),
    defineField({
      name: 'avatar',
      title: 'Profile Picture',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'bio',
      title: 'Bio / Description',
      type: 'text',
      rows: 6,
      validation: (rule) => rule.required(),
      description: 'Main bio displayed on the homepage. Line breaks are preserved.',
    }),
    defineField({
      name: 'telegram',
      title: 'Telegram URL',
      type: 'url',
      validation: (rule) =>
        rule.uri({ scheme: ['http', 'https'] }),
      initialValue: 'https://t.me/nneeeooo',
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      initialValue: 'lytvyn.andrii.contact@gmail.com',
    }),
    defineField({
      name: 'resumeFile',
      title: 'Resume PDF (File Upload)',
      type: 'file',
      options: {
        accept: 'application/pdf',
      },
      description: 'Upload a PDF resume directly to Sanity CDN.',
    }),
    defineField({
      name: 'resumeUrl',
      title: 'Resume URL (Fallback / External)',
      type: 'string',
      description: 'Optional path or external link (e.g. /Resume_Andrii_Lytvyn_Aug_2026.pdf).',
    }),
    defineField({
      name: 'customLinks',
      title: 'Additional Links',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'customLink',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'url',
              validation: (rule) =>
                rule.uri({ scheme: ['http', 'https', 'mailto'] }).required(),
            }),
          ],
        },
      ],
    }),
  ],
});
