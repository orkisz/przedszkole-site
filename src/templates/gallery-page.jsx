import { graphql } from 'gatsby';
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import MainLayout from '../layouts/main-layout/main-layout';

const GalleryPage = ({ data }) => {
  const item = data.markdownRemark;
  const { title, date, imagesList } = item.frontmatter;
  return (
          <MainLayout>
            <pre>{JSON.stringify(item)}</pre>
          </MainLayout>
  )
}

export default GalleryPage;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date
        imagesList
      }
    }
  }
`;
