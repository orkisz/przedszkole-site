import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { formatDate } from '../utils/date';
import { getTransformedImg } from '../utils/image'; // requires a loader

const BlogLikeLayout = ({ title, subtitle, date, images, children }) => {
  const thumbWidth = 80;
  const renderThumbs = (children) => {
    return children.map(imgElem => getTransformedImg(imgElem.key, `w_${thumbWidth},c_scale`));
  }
  const renderItem = (item) => getTransformedImg(item.key, `w_872,c_scale`);
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
                <div className={`mb-6`}>
                  {((typeof images === 'string') || (Array.isArray(images) && images.length === 1)) && (
                          <img src={images}
                               alt="TODO"/>
                  )}
                  {Array.isArray(images) && images.length > 1 && (
                          <Carousel renderThumbs={renderThumbs}
                                    renderItem={renderItem}>
                            {images.map(image => (
                                    <img key={image}
                                         src={image}/>
                            ))}
                          </Carousel>
                  )}
                </div>
                <article className="content">
                  {children}
                </article>
              </div>
            </div>
          </article>
  )
}

export default BlogLikeLayout;
