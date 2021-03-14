import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import BlogCard from './blog-card';

const BlogArea = () => {
  return (
    <StaticQuery query={graphql`
      query BlogQuery {
        allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, limit: 3) {
          edges {
            node {
              id
              frontmatter {
                title
                description
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
                       <BlogCard data={edge}
                                 key={edge.node.id}/>
                     ))}
                   </div>
                 )}/>
  );
}

export default BlogArea;
