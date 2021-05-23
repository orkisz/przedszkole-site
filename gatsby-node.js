const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`)
const marked = require('marked');
const createDOMPurify = require('dompurify');
const { JSDOM } = require('jsdom');

const window = new JSDOM('').window;
const DOMPurify = createDOMPurify(window);


exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const blogTemplate = path.resolve(`./src/templates/blog-page.jsx`);

  const blogs = await graphql(`
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

  blogs.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const { slug } = node.fields;

    createPage({
      path: slug,
      component: blogTemplate,
      context: {
        slug,
      },
    });
  });


  const galleryTemplate = path.resolve(`./src/templates/gallery-page.jsx`);

  const galleries = await graphql(`
    query {
      allMarkdownRemark(filter: {fields: {category: {eq: "gallery"}}}) {
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

  galleries.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const { slug } = node.fields;

    createPage({
      path: slug,
      component: galleryTemplate,
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

    if (nodeCategory === 'gallery') {
      const relativeFilePath = createFilePath({
        node,
        getNode,
        basePath: 'content/gallery'
      });

      // Creates new query'able field with name of 'slug'
      createNodeField({
        node,
        name: 'slug',
        value: relativeFilePath
      });
    }
  } else if (node.internal.type === 'development') {
    const formatted = DOMPurify.sanitize(marked(node.content));
    createNodeField({
      node,
      name: 'formatted',
      value: formatted
    });
  }
}
