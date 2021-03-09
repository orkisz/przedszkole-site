const path = require(`path`);

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
     allNodeArticle {
       edges {
         node {
           id
         }
       }
     }
    }
  `);
  result.data.allNodeArticle.edges.forEach(({ node }) => {
    createPage({
      path: node.id,
      component: path.resolve(`./src/templates/news-item.jsx`),
      context: {
        id: node.id
      }
    })
  });
}
