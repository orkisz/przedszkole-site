import { graphql, StaticQuery } from 'gatsby';
import * as React from 'react';
import MainLayout from '../../layouts/main-layout/main-layout';

const Groups = () => {
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
                                       const even = index % 2 === 0;
                                       const text = (
                                               <div className="column is-7">
                                                 <div dangerouslySetInnerHTML={{ __html: edge.node.html }}/>
                                               </div>
                                       );
                                       const img = (
                                               <div className="column is-5">
                                                 <figure className="image fancy-image blue">
                                                   <img src={edge.node.frontmatter.image.publicURL} alt={edge.node.frontmatter.name}/>
                                                 </figure>
                                               </div>
                                       );
                                       let elements = [text, img];
                                       if (even) {
                                         elements = elements.reverse();
                                       }

                                       return (
                                               <div className="columns">
                                                 {elements}
                                               </div>
                                       )
                                     })}
                                   </div>
                                 </article>
                               </MainLayout>
                       )}/>
  );
}

export default Groups;
