import React from 'react';
import { Link } from 'gatsby';
import * as styles from './blog-card.module.scss';

const BlogCard = ({ node }) => {
  let heading = (node.html || '').replace(/(<([^>]+)>)/gi, '');
  const spaceIdx = heading.substr(0, 200).lastIndexOf(' ');
  heading = heading.substring(0, spaceIdx).trim() + '...';

  const formattedDate = new Date(node.frontmatter.date).toLocaleDateString();

  return (
          <div className="column is-4">
            <div className="card">
              {node.frontmatter.image &&
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src={node.frontmatter.image.publicURL}
                       alt="TODO"/>
                </figure>
                <time className={styles.datestamp}
                      dateTime={node.frontmatter.date}>{formattedDate}</time>
              </div>
              }
              <div className="card-content">
                <h4 className={`${styles.title} my-3`}>{node.frontmatter.title}</h4>
                <div className="content mb-5">
                  <p>{heading}</p>
                </div>
                <Link to={node.fields.slug}>Learn more</Link>
              </div>
            </div>
          </div>
  )
}

export default BlogCard;
