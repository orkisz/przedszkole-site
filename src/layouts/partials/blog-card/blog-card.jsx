import React from 'react';
import { Link, navigate } from 'gatsby';
import * as styles from './blog-card.module.scss';

const BlogCard = ({ node }) => {
  let heading = (node.html || '').replace(/(<([^>]+)>)/gi, '');
  const spaceIdx = heading.substr(0, 200).lastIndexOf(' ');
  heading = heading.substring(0, spaceIdx).replace(/\W+$/, '').trim() + '...';

  const formattedDate = new Date(node.frontmatter.date).toLocaleDateString();

  return (
          <div className="column is-4">
            <div className={`${styles.card} card`}>
              {node.frontmatter.image &&
              <div className="card-image">
                <figure className="image is-5by3">
                  <img src={node.frontmatter.image.publicURL}
                       alt="TODO"/>
                  <hr className={styles.borderEffect}/>
                </figure>
                <time className={styles.datestamp}
                      dateTime={node.frontmatter.date}>{formattedDate}</time>
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
