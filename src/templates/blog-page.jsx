import { graphql } from 'gatsby';
import React from 'react';
import BlogLikeLayout from '../layouts/blog-like-layout'; // requires a loader
import MainLayout from '../layouts/main-layout/main-layout';

const BlogPage = ({ data }) => {
  const item = data.markdownRemark;
  return (
          <MainLayout>
            <BlogLikeLayout title={item.frontmatter.title}
                            date={item.frontmatter.date}
                            images={item.frontmatter.images}>
              <div dangerouslySetInnerHTML={{ __html: item.html }}/>
            </BlogLikeLayout>
          </MainLayout>
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
        images
      }
    }
  }
`;
