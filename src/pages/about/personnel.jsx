import { graphql, StaticQuery } from 'gatsby';
import * as React from 'react';
import MainLayout from '../../layouts/main-layout/main-layout';
import Header from '../../layouts/partials/header';
import { applyTransform, TRANSFORMATION_PERSONNEL_1BY1 } from '../../utils/image';
import * as styles from '../everyday/groups.module.scss';

const Personnel = () => {
  return (
          <StaticQuery query={graphql`
          query PersonnelQuery {
            allPersonnel {
              edges {
                node {
                  person {
                    description
                    name
                    photo
                    role
                  }
                }
              }
            }
          }
          `}
                       render={data => (
                               <MainLayout>
                                 <div className="container">
                                   <Header title="Kadra"
                                           subtitle="Poznajmy się lepiej! Wychowawcy w naszym przedszkolu to nie tylko doświadczeni pedagodzy, ale osoby życzliwe i pełne pasji w pracy z dziećmi."/>
                                   {/*<pre>{JSON.stringify(data)}</pre>*/}
                                   {data.allPersonnel.edges[0].node.person.map((person, index) => {
                                     const { description, name, role, photo } = person;
                                     const even = index % 2 !== 0;
                                     const text = (
                                             <div className={`column has-text-justified is-7-desktop is-full-touch`}>
                                               {description}
                                             </div>
                                     );
                                     const img = photo && (
                                             <div className={`column is-5-desktop ${styles.imageColumn}`}>
                                               <figure className={`image is-1by1`}>
                                                 <img className={`is-rounded`}
                                                      src={applyTransform(photo[0], TRANSFORMATION_PERSONNEL_1BY1)}
                                                      alt={name}/>
                                               </figure>
                                             </div>
                                     );
                                     let elements = [text, img];
                                     if (even) {
                                       elements = elements.reverse();
                                     }

                                     return (
                                             <div key={name}>
                                               <div className={`has-text-centered is-uppercase my-6 is-size-3 has-text-weight-bold`}>
                                                 {name}
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

export default Personnel;
