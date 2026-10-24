import { defineType, defineField } from 'sanity';
import { defaultLanguage, supportedLanguages } from '../fieldLocalization';

export default defineType({
  title: 'Locale portable text',
  name: 'localePortableText',
  type: 'object',
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      options: { collapsible: true },
    },
  ],
  fields: supportedLanguages.map((lang) =>
    defineField({
      title: lang.title,
      name: lang.id,
      type: 'array',
      of: [{ type: 'block' }],
      fieldset: lang.id === defaultLanguage ? undefined : 'translations',
    })
  ),
});
