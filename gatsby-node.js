const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const pageTemplate = path.resolve(`./src/templates/blog-page.jsx`);

  const result = await graphql(`
    query {
      allMarkdownRemark(filter: {fields: {category: {eq: "blog"}}}) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const { slug } = node.fields;

    createPage({
      path: slug,
      component: pageTemplate,
      context: {
        slug,
      },
    });
  });
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  // Ensures we are processing only markdown files
  if (node.internal.type === 'MarkdownRemark') {
    const nodeCategory = node.fileAbsolutePath.replace(__dirname, '').replace('/content/', '').split('/')[0];
    // Use `createFilePath` to turn markdown files in our `data/faqs` directory into `/faqs/slug`

    createNodeField({
      node,
      name: 'category',
      value: nodeCategory
    });

    if (nodeCategory === 'blog') {
      const relativeFilePath = createFilePath({
        node,
        getNode,
        basePath: 'content/blog'
      });

      // Creates new query'able field with name of 'slug'
      createNodeField({
        node,
        name: 'slug',
        value: relativeFilePath
      });
    }
  }
}
