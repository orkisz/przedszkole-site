import React from 'react';
import { Link } from 'gatsby';

const BlogCard = ({ node }) => {
  const heading = (node.frontmatter.description || node.html || '').replace(/(<([^>]+)>)/gi, '').substr(0, 500) + '...';

  return (
      <div className="column is-4">
        <div className="card is-shady">
          <div className="card-image has-text-centered">
            <i className="fa fa-paw"/>
          </div>
          <div className="card-content">
            <div className="content">
              <h4>{node.frontmatter.title}</h4>
              <p>{heading}</p>
              <p>
                <Link to={node.fields.slug}>Learn more</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default BlogCard;
