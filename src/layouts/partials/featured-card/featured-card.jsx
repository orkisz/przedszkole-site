import * as React from 'react'
import * as styles from './featured-card.module.scss';

const FeaturedCard = ({ className, color, image, title, children }) => {
  return (
          <article className={`${className} ${styles.featuredCard}`}>
            <div className={`my-custom-background-${color}-darken ${styles.outerCard}`}>
              <div className={`my-custom-background-${color} ${styles.innerCard} has-text-centered`}>
                <figure className={`image is-1-by-1 ${styles.image}`}>
                  <img src={image}
                       alt={title}/>
                </figure>
                <header className={styles.title}>
                  {title}
                </header>
                <div className={styles.text}>
                  {children}
                </div>
              </div>
            </div>
          </article>
  );
};

export default FeaturedCard;
