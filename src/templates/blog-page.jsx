import React from 'react';
import { graphql } from 'gatsby';

const BlogPage = ({ data }) => {
  const item = data.markdownRemark;
  return (
    <article>
      {item.frontmatter.image && (
        <img src={item.frontmatter.image.publicURL}
             alt="TODO"/>
      )}
      <h3>{item.title}</h3>
      <div dangerouslySetInnerHTML={{ __html: item.html }}/>
    </article>
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
