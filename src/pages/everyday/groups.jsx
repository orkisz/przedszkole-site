import { graphql, StaticQuery } from 'gatsby';
import * as React from 'react';
import MainLayout from '../../layouts/main-layout/main-layout';
import { applyTransform, TRANSFORMATION_4BY3 } from '../../utils/image';

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
                    image {
                      publicURL
                    }
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
                                 <article>
                                   <div className="container">
                                     <div className="columns">
                                       <div className="column is-8 is-offset-2">
                                         <header className="header">
                                           <h2>Grupy</h2>
                                           <strong className="header--subtitle">
                                             W naszej placówce działają trzy grupy przedszkolne, w których dzieci
                                             podzielone są ze względu na
                                             wiek.
                                           </strong>
                                         </header>
                                       </div>
                                     </div>
                                     {data.allMarkdownRemark.edges.map((edge, index) => {
                                       const even = index % 2 !== 0;
                                       const text = (
                                               <div className={`column has-text-justified is-7 ${even ? 'pl-6' : 'pr-6'}`}>
                                                 <div dangerouslySetInnerHTML={{ __html: edge.node.html }}/>
                                               </div>
                                       );
                                       const img = (
                                               <div className="column is-5">
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
                                               <>
                                                 <div className={`has-text-centered is-uppercase my-6 is-size-3 has-text-weight-bold my-custom-color-${groupColors[index]}`}>
                                                   {edge.node.frontmatter.name}
                                                 </div>
                                                 <div className="columns is-8">
                                                   {elements}
                                                 </div>
                                               </>
                                       )
                                     })}
                                   </div>
                                 </article>
                               </MainLayout>
                       )}/>
  );
}

export default Groups;
