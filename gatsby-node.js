const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`)


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

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  // Ensures we are processing only markdown files
  //   console.log(node);
  if (node.internal.type === 'MarkdownRemark') {
    // Use `createFilePath` to turn markdown files in our `data/faqs` directory into `/faqs/slug`
    const relativeFilePath = createFilePath({
      node,
      getNode,
      basePath: 'content/blog'
    })

    // Creates new query'able field with name of 'slug'
    createNodeField({
      node,
      name: 'slug',
      value: `/blog${relativeFilePath}`
    })
  }
}
