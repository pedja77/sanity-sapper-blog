export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
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
                  buildHookId: '604b88b7370ed41437cd6327',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-8nxsuszk',
                  apiId: 'bf008304-a2f7-455a-8d97-e3697d14a3b0'
                },
                {
                  buildHookId: '604b88b778f90d177d8460c1',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-jq6xd2eb',
                  apiId: '5cf2b94f-ae8e-43ed-a395-1dcdb787070f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pedja77/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-jq6xd2eb.netlify.app', category: 'apps'}
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
