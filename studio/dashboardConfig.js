export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5d89e6f820057e0e4f4163ae',
                  title: 'Sanity Studio',
                  name: 'ma-studio-studio',
                  apiId: 'c4584503-5e93-4515-84cd-b54cc381455d'
                },
                {
                  buildHookId: '5d89e6f8a2590510e0778bf3',
                  title: 'Portfolio Website',
                  name: 'ma-studio',
                  apiId: 'db811f71-247c-4a4b-9b88-2ca12fc3421a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/martinasbjornsen/ma-studio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://ma-studio.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
