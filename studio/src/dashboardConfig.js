export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '601b34b1ea14e22a7067014a',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-rkd63vuq',
                  apiId: '0fe6bf5c-786d-4050-9ea4-7df54906f256'
                },
                {
                  buildHookId: '601b34b1608583312f148254',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-gg3tahbx',
                  apiId: '29e44df8-347a-494f-b3d5-0a1ea71ba3c6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/emileond/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-gg3tahbx.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
