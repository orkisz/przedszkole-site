import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { formatDate } from '../utils/date';
import {
  applyTransform,
  TRANSFORMATION_4BY3,
  TRANSFORMATION_FULL_BLOG,
  TRANSFORMATION_FULL_SCREEN
} from '../utils/image';
import partialRight from 'lodash/partialRight';

const BlogLikeLayout = ({ title, subtitle, date, images, children }) => {

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [firstImage, ...restImages] = (images || []);
  const fullScreenTransform = partialRight(applyTransform, TRANSFORMATION_FULL_SCREEN);
  return (
          <article className="container">
            <div className="columns">
              <div className="column is-8 is-offset-2">
                <header className="header">
                  <h2>{title}</h2>
                  <strong className="header--subtitle">{subtitle}</strong>
                  {date && (
                          <aside className="mb-5 is-size-6">{formatDate(date)}</aside>
                  )}
                </header>
                {firstImage && (
                        <img src={applyTransform(firstImage, TRANSFORMATION_FULL_BLOG)}
                             alt={`${title}: Obraz nr 1`}
                             onClick={() => {
                               setCurrentIndex(0);
                               setIsOpen(true);
                             }}/>
                )}
                <article className="content">
                  {children}
                </article>
                {!!restImages.length && (
                        <div className="columns">
                          {restImages.map((img, imgIdx) => (
                                  <div className="column is-4">
                                    <figure className="image is-4by3">
                                      <img src={applyTransform(img, TRANSFORMATION_4BY3)}
                                           alt={`${title}: Obraz nr ${imgIdx + 2}`}
                                           onClick={() => {
                                             setCurrentIndex(imgIdx + 1);
                                             setIsOpen(true);
                                           }}/>
                                    </figure>
                                  </div>
                          ))}
                        </div>
                )}
              </div>
            </div>
            {isOpen && !!images.length && (
                    <Lightbox
                            mainSrc={fullScreenTransform(images[currentIndex])}
                            nextSrc={fullScreenTransform(images[(currentIndex + 1) % images.length])}
                            prevSrc={fullScreenTransform(images[(currentIndex + images.length - 1) % images.length])}
                            onCloseRequest={() => setIsOpen(false)}
                            onMovePrevRequest={() => setCurrentIndex((currentIndex + images.length - 1) % images.length)}
                            onMoveNextRequest={() => setCurrentIndex((currentIndex + 1) % images.length)}
                    />
            )}
          </article>
  )
}

export default BlogLikeLayout;
