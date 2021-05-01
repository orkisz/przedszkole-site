import { graphql } from 'gatsby';
import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import MainLayout from '../layouts/main-layout/main-layout';
import { formatDate } from '../utils/date';
import { applyTransform, TRANSFORMATION_4BY3 } from '../utils/image';
import * as styles from './gallery-page.module.scss';

const GalleryPage = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const item = data.markdownRemark;
  const { title, date } = item.frontmatter;
  const imagesList = item.frontmatter.imagesList.map(i => i[0]);
  return (
          <MainLayout>
            <div className="container has-text-centered">
              <h2 className="header">{title}</h2>
              <aside className="mb-6 mt-3 is-size-6">{formatDate(date)}</aside>
              <div className="columns is-multiline">
                {imagesList.map((image, index) => {
                  const transformedUrl = applyTransform(image, TRANSFORMATION_4BY3);
                  return (
                          <div className="column is-4"
                               key={image}>
                            <div className={`${styles.card} card`}
                                 onClick={() => {
                                   setCurrentIndex(index);
                                   setIsOpen(true);
                                 }}>
                              <div className={`${styles.cardImage} card-image`}>
                                <figure className="image is-4by3">
                                  <img src={transformedUrl}
                                       alt={title}/>
                                </figure>
                              </div>
                            </div>
                          </div>
                  );
                })}
              </div>
            </div>
            {isOpen && (
                    <Lightbox
                            mainSrc={imagesList[currentIndex]}
                            nextSrc={imagesList[(currentIndex + 1) % imagesList.length]}
                            prevSrc={imagesList[(currentIndex + imagesList.length - 1) % imagesList.length]}
                            onCloseRequest={() => setIsOpen(false)}
                            onMovePrevRequest={() => setCurrentIndex((currentIndex + imagesList.length - 1) % imagesList.length)}
                            onMoveNextRequest={() => setCurrentIndex((currentIndex + 1) % imagesList.length)}
                    />
            )}
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
