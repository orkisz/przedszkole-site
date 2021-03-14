import React from 'react';

const BlogCard = ({ data }) => {
  const item = data.node;
  const heading = (item.frontmatter.description || item.html || '').replace(/(<([^>]+)>)/gi, '').substr(0, 500) + '...';

  return (
      <div className="column is-4">
        <div className="card is-shady">
          <div className="card-image has-text-centered">
            <i className="fa fa-paw"/>
          </div>
          <div className="card-content">
            <div className="content">
              <h4>{item.frontmatter.title}</h4>
              <p>{heading}</p>
              <p>
                <a href={item.fields.slug}>Learn more</a>
              </p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default BlogCard;
