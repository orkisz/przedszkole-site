import React from 'react';
import { Link } from 'gatsby';

const BlogCard = ({ node }) => {
  let heading = (node.html || '').replace(/(<([^>]+)>)/gi, '');
  const spaceIdx = heading.substr(0, 100).lastIndexOf(' ');
  heading = heading.substring(0, spaceIdx).trim() + '...';
  console.log(node);
  return (
      <div className="column is-4">
        <div className="card">
          <div className="card-image has-text-centered">
            <figure className="image">
              {node.frontmatter.image && <img src={node.frontmatter.image.publicURL}/>}
            </figure>
          </div>
          <div className="card-content">
            <div className="content">
              <h4>{node.frontmatter.title}</h4>
         i     <p>{heading}</p>
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
