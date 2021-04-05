import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layouts/layout';

const BlogPage = ({ data }) => {
  const item = data.markdownRemark;
  return (
          <Layout>
            <section className="container">
              <div className="columns">
                <div className="column is-8 is-offset-2">
                  <article className="content">
                    {item.frontmatter.image && (
                            <img src={item.frontmatter.image.publicURL}
                                 alt="TODO"/>
                    )}
                    <h3>{item.frontmatter.title}</h3>
                    <div dangerouslySetInnerHTML={{ __html: item.html }}/>
                  </article>
                </div>
              </div>
            </section>
          </Layout>
  )
}

export default BlogPage;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date
        image {
          publicURL
        }
      }
    }
  }
`;
