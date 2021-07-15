import { graphql, StaticQuery } from 'gatsby';
import * as React from 'react';
import MainLayout from '../layouts/main-layout/main-layout';
import BlogCard from '../layouts/partials/blog-card/blog-card';
import Header from '../layouts/partials/header';

const Blog = () => {
  return (
          <StaticQuery query={graphql`
            query AllBlogQuery {
              allMarkdownRemark(
                  sort: {fields: frontmatter___date, order: DESC}
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
                               <MainLayout>
                                 <Header title="Aktualności"/>
                                 <div className="container has-text-centered">
                                   <div className="columns is-multiline features">
                                     {data.allMarkdownRemark.edges.map(edge => (
                                             <BlogCard node={edge.node}
                                                       key={edge.node.id}/>
                                     ))}
                                   </div>
                                 </div>
                               </MainLayout>
                       )}/>
  );
}

export default Blog;
