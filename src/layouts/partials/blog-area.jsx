import { graphql, Link, StaticQuery } from 'gatsby';
import React from 'react';
import * as styles from './blog-area.module.scss';
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
                               <div className="container pb-6">
                                 <div className="has-text-centered">
                                   <h4 className={styles.header}>
                                     Co nowego w przedszkolu?
                                   </h4>
                                   <h2 className="my-3">
                                     Aktualności
                                   </h2>
                                   <strong className="is-block is-size-6 mb-6">
                                     Zapraszamy do zapoznania się z ostatnimi wydarzeniami z życia przedszkola
                                   </strong>
                                 </div>
                                 <div className="columns features">
                                   {data.allMarkdownRemark.edges.map(edge => (
                                           <BlogCard node={edge.node}
                                                     key={edge.node.id}/>
                                   ))}
                                 </div>
                                 <div className="has-text-centered mt-6 mb-3">
                                   <Link className="button is-primary is-large is-rounded is-outlined"
                                         to="/blog">
                                     Zobacz wszystkie artykuły
                                   </Link>
                                 </div>
                               </div>
                       )}/>
  );
}

export default BlogArea;
