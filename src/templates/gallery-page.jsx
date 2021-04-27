import { graphql } from 'gatsby';
import React from 'react';
import MainLayout from '../layouts/main-layout/main-layout';
import { formatDate } from '../utils/date';

const GalleryPage = ({ data }) => {
  const item = data.markdownRemark;
  const { title, date, imagesList } = item.frontmatter;
  return (
          <MainLayout>
            {/*<article className="container">*/}
            {/*  <div className="column is-8 is-offset-2">*/}
            {/*    <header className={`${styles.header} has-text-centered`}>*/}
            {/*      <h2>{title}</h2>*/}
            {/*      <strong className={styles.subtitle}>{subtitle}</strong>*/}
            {/*      {date && (*/}
            {/*              <aside className="mb-5 is-size-7">{formatDate(date)}</aside>*/}
            {/*      )}*/}
            {/*    </header>*/}
            {/*    <article className="content">*/}
            {/*      {children}*/}
            {/*    </article>*/}
            {/*  </div>*/}
            {/*</article>*/}
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
