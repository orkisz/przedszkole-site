import partialRight from 'lodash/partialRight';
import React, { useState } from 'react';
import { formatDate } from '../utils/date';
import {
  applyTransform,
  TRANSFORMATION_4BY3,
  TRANSFORMATION_FULL_BLOG,
  TRANSFORMATION_FULL_SCREEN
} from '../utils/image';
import Lightbox from './partials/lightbox/lightbox';

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
                        <img className="mb-5"
                             src={applyTransform(firstImage, TRANSFORMATION_FULL_BLOG)}
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
            <Lightbox images={images.map(image => fullScreenTransform(image))}
                      onClose={() => setIsOpen(false)}
                      isOpen={isOpen}
                      currentIndex={currentIndex}
                      onCurrentIndexChange={idx => setCurrentIndex(idx)}/>
          </article>
  )
}

export default BlogLikeLayout;
