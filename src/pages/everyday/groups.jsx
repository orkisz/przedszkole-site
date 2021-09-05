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
              groups {
                fields {
                  groupFormatted {
                    body
                    image
                    photo
                    name
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
                                   {data.groups.fields.groupFormatted.slice(0, 3).map((group, index) => {
                                     const even = index % 2 !== 0;
                                     const text = (
                                             <div className={`column has-text-justified is-7-desktop is-full-touch`}>
                                               <div className="content"
                                                    dangerouslySetInnerHTML={{ __html: fixOrphans(group.body) }}/>
                                             </div>
                                     );
                                     const img = (
                                             <div className={`column is-5-desktop ${styles.imageColumn}`}>
                                               <figure className={`image is-4by3 fancy-image ${groupColors[index]} ${even ? '' : 'fancy-reverse'}`}>
                                                 <img src={applyTransform(group.photo[0], TRANSFORMATION_4BY3)}
                                                      alt={group.name}/>
                                               </figure>
                                             </div>
                                     );
                                     let elements = [text, img];
                                     if (even) {
                                       elements = elements.reverse();
                                     }

                                     return (
                                             <div key={group.name}>
                                               <div className={`has-text-centered is-uppercase my-6 is-size-3 has-text-weight-bold my-custom-color-${groupColors[index]}`}>
                                                 {group.name}
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
