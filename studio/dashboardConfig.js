export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ec4890c557f7a4fa6b2870c',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-z5s7y28o',
                  apiId: '43fe6583-2a20-4241-bac9-dbbfaf5e5590'
                },
                {
                  buildHookId: '5ec4890c65b5435ec01aa669',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-9589rujc',
                  apiId: 'ded8f7a8-0f25-4943-bf24-91aca11cd0cd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/onetwothreebutter/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-9589rujc.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
