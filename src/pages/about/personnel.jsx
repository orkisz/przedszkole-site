import { graphql, StaticQuery } from 'gatsby';
import * as React from 'react';
import MainLayout from '../../layouts/main-layout/main-layout';
import Header from '../../layouts/partials/header';
import { applyTransform, TRANSFORMATION_PERSONNEL_1BY1 } from '../../utils/image';
import * as styles from './personnel.module.scss';

const Personnel = () => {
  const colors = ['blue', 'green', 'yellow'];

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
                                   {data.allPersonnel.edges[0].node.person.map((person, index) => {
                                     const { description, name, role, photo } = person;
                                     const even = index % 2 !== 0;
                                     const colorIndex = index % 3;
                                     const textClass = photo ? 'is-7-desktop is-full-touch' : 'is-8-desktop is-offset-2-desktop is-full-touch';
                                     const text = (
                                             <div className={`column ${textClass}`}>
                                               <h4><p className="mb-0">{role}</p></h4>
                                               <h2><p>{name}</p></h2>
                                               <p className="mt-5 has-text-justified">
                                                 {description}
                                               </p>
                                             </div>
                                     );
                                     const img = photo && (
                                             <div className={`column is-5-desktop ${styles.imageColumn}`}>
                                               <figure className={`image is-1by1`}>
                                                 <img className={`is-rounded ${styles.image} ${styles[colors[colorIndex]]}`}
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
                                             <div key={name}
                                                  className="columns is-variable is-8 my-6">
                                               {elements}
                                             </div>
                                     )
                                   })}
                                 </div>
                               </MainLayout>
                       )}/>
  );
}

export default Personnel;
