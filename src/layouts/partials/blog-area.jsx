import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import BlogCard from './blog-card/blog-card';

const BlogArea = () => {
  return (
          <StaticQuery query={graphql`
      query BlogQuery {
        allMarkdownRemark(
            sort: {fields: frontmatter___date, order: DESC}
            filter: {fields: {category: {eq: "blog"}}}
            limit: 3
          ) {
          edges {
            node {
              id
              frontmatter {
                title
                description,
                image {
                  publicURL
                }
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
                               <div className="columns features">
                                 {data.allMarkdownRemark.edges.map(edge => (
                                         <BlogCard node={edge.node}
                                                   key={edge.node.id}/>
                                 ))}
                               </div>
                       )}/>
  );
}

export default BlogArea;
