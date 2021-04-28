import { graphql, Link, StaticQuery } from 'gatsby';
import * as React from 'react';
import MainLayout from '../layouts/main-layout/main-layout';
import { applyTransform } from '../utils/image';
import * as styles from './gallery.module.scss';

const Gallery = () => {
  return (
          <StaticQuery query={graphql`
            query AllGalleryQuery {
              allMarkdownRemark(
                  sort: {fields: frontmatter___date, order: ASC}
                  filter: {fields: {category: {eq: "gallery"}}}
                ) {
                edges {
                  node {
                    id
                    frontmatter {
                      title
                      date
                      imagesList
                    }
                    fields {
                      slug
                    }
                  }
                }
              }
            }
          `}
                       render={data => (
                               <MainLayout>
                                 <div className="container has-text-centered">
                                   <h2 className="my-6">Galeria</h2>
                                   <div className="columns is-multiline">
                                     {data.allMarkdownRemark.edges.map(edge => {
                                       const { node } = edge;
                                       const { title, date, imagesList } = node.frontmatter;
                                       const firstImg = imagesList[0][0];
                                       const transformedUrl = applyTransform(firstImg, `w_500,c_scale`);
                                       return (
                                               <Link className="column is-4"
                                                     key={node.id}
                                                     to={node.fields.slug}>
                                                 <div className={`${styles.card} card`}>
                                                   <div className={`${styles.cardImage} card-image`}>
                                                     <figure className="image is-4by3">
                                                       <img src={transformedUrl}
                                                            alt={title}/>
                                                     </figure>
                                                   </div>
                                                   <div className={`${styles.cardContent} card-content`}>
                                                     <div className="title is-4">{title}</div>
                                                   </div>
                                                 </div>
                                               </Link>
                                       );
                                     })}
                                   </div>
                                 </div>
                               </MainLayout>
                       )}/>
  );
}

export default Gallery;
