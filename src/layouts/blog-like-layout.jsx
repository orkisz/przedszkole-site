import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { formatDate } from '../utils/date'; // requires a loader
import * as styles from './blog-like-layout.module.scss';

const BlogLikeLayout = ({ title, subtitle, date, images, children }) => {
  const thumbWidth = 80;
  const applyTransform = (imgElem, transformation) => {
    const imgUrl = imgElem.key;
    const parts = imgUrl.split('/');
    const baseUrl = parts.slice(0, -2).join('/'); // get all before /someid/img-name.ext
    const imgName = parts.slice(-1)[0]; // get just last url part
    const thumbUrl = `${baseUrl}/${transformation}/${imgName}`; // create new url
    return (
            <img key={thumbUrl}
                 src={thumbUrl}/>
    );
  }
  const renderThumbs = (children) => {
    return children.map(imgElem => applyTransform(imgElem, `w_${thumbWidth},c_scale`));
  }
  const renderItem = (item) => applyTransform(item, `w_872,c_scale`);
  return (
          <article className="container">
            <div className="columns">
              <div className="column is-8 is-offset-2">
                <header className="header">
                  <h2>{title}</h2>
                  <strong className="header--subtitle">{subtitle}</strong>
                  {date && (
                          <aside className="mb-5 is-size-7">{formatDate(date)}</aside>
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
