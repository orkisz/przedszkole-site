import * as React from 'react'
import * as styles from './featured-card.module.scss';

const FeaturedCard = ({ className, color, image, title, children }) => {
  const chilrenArray = React.Children.toArray(children);
  const header = chilrenArray.find(elem => elem.type === 'header');
  const rest = chilrenArray.filter(elem => elem !== header);
  return (
          <article className={`${className} ${styles.featuredCard}`}>
            <div className={`my-custom-background-${color}-darken ${styles.outerCard}`}>
              <div className={`my-custom-background-${color} ${styles.innerCard} has-text-centered`}>
                <figure className={`image is-1-by-1 ${styles.figure}`}>
                  <img className={`is-rounded ${styles.image}`} src={image}
                       alt={title}/>
                </figure>
                <div className={styles.title}>
                  {header}
                </div>
                <div className={styles.text}>
                  {rest}
                </div>
              </div>
            </div>
          </article>
  );
};

export default FeaturedCard;
