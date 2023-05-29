import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'featured',
  type: 'document',
  title: 'Featured Menu categories',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Featured Category name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'restaurants',
      type: 'array',
      title: 'Restaurant',
      of: [ 
        {
          type: 'reference',
          to: [
            {
              type: 'restaurant',
            },
          ],
        },
      ],
    },
  ],
})
