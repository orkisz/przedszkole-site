import partialRight from 'lodash/partialRight';
import React, { useState } from 'react';
import {
  applyTransform,
  TRANSFORMATION_4BY3,
  TRANSFORMATION_FULL_BLOG,
  TRANSFORMATION_FULL_SCREEN
} from '../utils/image';
import Header from './partials/header';
import Lightbox from './partials/lightbox/lightbox';

const BlogLikeLayout = ({ title, subtitle, date, images = [], children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [firstImage, ...restImages] = images;
  const fullScreenTransform = partialRight(applyTransform, TRANSFORMATION_FULL_SCREEN);
  return (
          <>
            <Header title={title}
                    subtitle={subtitle}
                    date={date}/>
            <article className="container">
              <div className="columns">
                <div className="column is-8 is-offset-2">
                  {firstImage && (
                          <img className="mb-5"
                               src={applyTransform(firstImage, TRANSFORMATION_FULL_BLOG)}
                               alt={`${title}: Obraz nr 1`}
                               onClick={() => {
                                 setCurrentIndex(0);
                                 setIsOpen(true);
                               }}/>
                  )}
                  <article className="content has-text-justified">
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
          </>
  )
}

export default BlogLikeLayout;
