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
                  buildHookId: '5dbaea5e2d5d26b01cade7ef',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-xrq55w7p',
                  apiId: 'cfa84443-d782-4073-941c-267a5eed16e3'
                },
                {
                  buildHookId: '5dbaea5e710b7eaf60981b88',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-hnyi1z47',
                  apiId: '5d48163d-6a63-4b82-b9b4-3dd6d01f402d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mackrp/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-hnyi1z47.netlify.com', category: 'apps'}
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
