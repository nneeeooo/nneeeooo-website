import { defineType, defineField } from 'sanity';
import { defaultLanguage, supportedLanguages } from '../fieldLocalization';

export default defineType({
  title: 'Localized string',
  name: 'localeString',
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
      type: 'string',
      validation: (rule) => rule.required().min(1),
      fieldset: lang.id === defaultLanguage ? undefined : 'translations',
    })
  ),
});
