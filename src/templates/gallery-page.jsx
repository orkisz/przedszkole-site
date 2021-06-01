import { graphql } from 'gatsby';
import partialRight from 'lodash/partialRight';
import React, { useState } from 'react';
import MainLayout from '../layouts/main-layout/main-layout';
import Header from '../layouts/partials/header';
import Lightbox from '../layouts/partials/lightbox/lightbox';
import { applyTransform, TRANSFORMATION_4BY3, TRANSFORMATION_FULL_SCREEN } from '../utils/image';
import * as styles from './gallery-page.module.scss';

const GalleryPage = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const item = data.markdownRemark;
  const { title, date } = item.frontmatter;
  const imagesList = item.frontmatter.imagesList.map(i => i[0]);
  const fullScreenTransform = partialRight(applyTransform, TRANSFORMATION_FULL_SCREEN);
  return (
          <MainLayout>
            <Header title={title}
                    date={date}/>
            <div className="container has-text-centered">
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
            <Lightbox images={imagesList.map(image => fullScreenTransform(image))}
                      onClose={() => setIsOpen(false)}
                      isOpen={isOpen}
                      currentIndex={currentIndex}
                      onCurrentIndexChange={idx => setCurrentIndex(idx)}/>
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
