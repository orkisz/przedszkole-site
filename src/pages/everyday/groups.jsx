import { graphql, StaticQuery } from 'gatsby';
import * as React from 'react';
import MainLayout from '../../layouts/main-layout/main-layout';
import Header from '../../layouts/partials/header';
import { fixOrphans } from '../../utils/html';
import { applyTransform, TRANSFORMATION_4BY3 } from '../../utils/image';
import * as styles from './groups.module.scss';

const Groups = () => {
  const groupColors = ['blue', 'green', 'yellow'];

  return (
          <StaticQuery query={graphql`
          query GroupsDetailsQuery {
            allMarkdownRemark(
              filter: {fields: {category: {eq: "group"}}}
              sort: {fields: frontmatter___order}
              limit: 3
            ) {
              edges {
                node {
                  frontmatter {
                    name
                    image
                    photo
                  }
                  html
                  id
                }
              }
            }
          }
          `}
                       render={data => (
                               <MainLayout>
                                 <Header title="Grupy"
                                         subtitle="W naszej placówce działają trzy grupy przedszkolne, w&nbsp;których dzieci podzielone są ze względu na wiek."/>
                                 <div className="container">
                                   {data.allMarkdownRemark.edges.map((edge, index) => {
                                     const even = index % 2 !== 0;
                                     const text = (
                                             <div className={`column has-text-justified is-7-desktop is-full-touch`}>
                                               <div className="content"
                                                    dangerouslySetInnerHTML={{ __html: fixOrphans(edge.node.html) }}/>
                                             </div>
                                     );
                                     const img = (
                                             <div className={`column is-5-desktop ${styles.imageColumn}`}>
                                               <figure className={`image is-4by3 fancy-image ${groupColors[index]} ${even ? '' : 'fancy-reverse'}`}>
                                                 <img src={applyTransform(edge.node.frontmatter.photo[0], TRANSFORMATION_4BY3)}
                                                      alt={edge.node.frontmatter.name}/>
                                               </figure>
                                             </div>
                                     );
                                     let elements = [text, img];
                                     if (even) {
                                       elements = elements.reverse();
                                     }

                                     return (
                                             <div key={edge.node.frontmatter.name}>
                                               <div className={`has-text-centered is-uppercase my-6 is-size-3 has-text-weight-bold my-custom-color-${groupColors[index]}`}>
                                                 {edge.node.frontmatter.name}
                                               </div>
                                               <div className="columns is-variable is-8">
                                                 {elements}
                                               </div>
                                             </div>
                                     )
                                   })}
                                 </div>
                               </MainLayout>
                       )}/>
  );
}

export default Groups;
