import { Link, navigate } from 'gatsby';
import React from 'react';
import { formatDate } from '../../../utils/date';
import { stripHtmlTags } from '../../../utils/html';
import { applyTransform, TRANSFORMATION_5BY3 } from '../../../utils/image';
import * as styles from './blog-card.module.scss';

const BlogCard = ({ node }) => {
  let heading = stripHtmlTags(node.html);
  const spaceIdx = heading.substr(0, 200).lastIndexOf(' ');
  heading = heading.substring(0, spaceIdx).replace(/\W+$/, '').trim() + '...';

  return (
          <div className="column is-4">
            <div className={`${styles.card} card`}>
              {node.frontmatter.images.length &&
              <div className="card-image">
                <figure className="image is-5by3">
                  <img src={applyTransform(node.frontmatter.images[0], TRANSFORMATION_5BY3)}
                       alt="TODO"/>
                  <hr className={styles.borderEffect}/>
                </figure>
                <time className={styles.datestamp}
                      dateTime={node.frontmatter.date}>{formatDate(node.frontmatter.date)}</time>
              </div>
              }
              <div className={`card-content`}>
                <h4 className={`${styles.title} my-3`}
                    role="link"
                    onClick={() => navigate(node.fields.slug)}>{node.frontmatter.title}</h4>
                <div className="content mb-6">
                  <p>{heading}</p>
                </div>
                <Link className={styles.link}
                      to={node.fields.slug}>czytaj więcej</Link>
              </div>
            </div>
          </div>
  )
}

export default BlogCard;
