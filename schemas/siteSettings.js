import { MdSettings } from 'react-icons/md'

export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  liveEdit: false,
  __experimental_actions: ['update', 'publish' /* 'create', 'delete' */],
  icon: MdSettings,
  fieldsets: [
    { title: 'SEO Info',
      name: 'seo',
      options: { collapsible: true, collapsed: true }
    }
  ],
  fields: [
    {
      name: 'seoTitle',
      description: 'Home Page SEO Title',
      title: 'SEO Title',
      type: 'string',
      fieldset: 'seo',
      validation: Rule => Rule.required().error('The SEO Title is missing.')

    },
    {
      name: 'seoDescription',
      description: 'Home Page SEO Description',
      title: 'SEO Description',
      type: 'text',
      fieldset: 'seo',
      validation: Rule => Rule.required().error('The SEO Description is missing.')
      
    },
    {
      name: 'onlineOrdersOpen',
      title: 'Are you accepting online orders?',
      description: 'This controls if the online order buttons show up on the website or not.',
      type: 'boolean'
    },
    {
      name: 'heroText',
      title: 'Hero Text',
      description: 'This appears under the order buttons on the home page hero.',
      type: 'minimalPortableText'
    },
    {
      name: 'hoursOfOperation',
      title: 'Hours Of Operation',
      type: 'blockText'
    },
    {
      name: 'footerText',
      description: 'This appeares in the footer of the website. Used for the locations text.',
      title: 'Footer Text',
      type: 'text'
    }

    // {
    //   name: 'title',
    //   title: 'Title',
    //   type: 'string'
    // },
    // {
    //   name: 'description',
    //   title: 'Description',
    //   type: 'text'
    // }
    // {
    //   name: 'keywords',
    //   title: 'Keywords',
    //   type: 'array',
    //   of: [{ type: 'string' }],
    //   options: {
    //     layout: 'tags'
    //   }
    // },
    // {
    //   name: 'author',
    //   title: 'Author',
    //   type: 'string'
    // }
  ]
}
