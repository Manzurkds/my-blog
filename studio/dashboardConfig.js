export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '5dbecf35e0516ba9d337da83',
                  title: 'Sanity Studio',
                  name: 'my-blog-studio',
                  apiId: 'ab5e1b9a-ee56-42b8-b26d-7c51e6aa98ed'
                },
                {
                  buildHookId: '5dbecf35aa2c1669ff1767f3',
                  title: 'Blog Website',
                  name: 'my-blog-web',
                  apiId: 'c6aaba8d-680c-4f5e-a849-231e4d58be59'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Manzurkds/my-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://my-blog-web.netlify.com', category: 'apps'}
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
