import { graphql, StaticQuery } from 'gatsby';
import * as React from 'react';
import Layout from '../layouts/layout';
import BlogCard from '../layouts/partials/blog-card/blog-card';

const Blog = () => {
  return (
          <StaticQuery query={graphql`
            query AllBlogQuery {
              allMarkdownRemark(
                  sort: {fields: frontmatter___date, order: ASC}
                  filter: {fields: {category: {eq: "blog"}}}
                ) {
                edges {
                  node {
                    id
                    frontmatter {
                      title
                      description,
                      date
                      images
                    }
                    fields {
                      slug
                    }
                    html
                  }
                }
              }
            }
          `}
                       render={data => (
                               <Layout>
                                 <div className="container has-text-centered">
                                   <h2 className="my-6">Aktualności</h2>
                                   <div className="columns is-multiline features">
                                     {data.allMarkdownRemark.edges.map(edge => (
                                             <BlogCard node={edge.node}
                                                       key={edge.node.id}/>
                                     ))}
                                   </div>
                                 </div>
                               </Layout>
                       )}/>
  );
}

export default Blog;
