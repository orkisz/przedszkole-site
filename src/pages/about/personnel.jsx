import { graphql, StaticQuery } from 'gatsby';
import * as React from 'react';
import MainLayout from '../../layouts/main-layout/main-layout';
import Header from '../../layouts/partials/header';
import { fixOrphans } from '../../utils/html';
import { applyTransform, TRANSFORMATION_PERSONNEL_1BY1 } from '../../utils/image';
import * as styles from './personnel.module.scss';

const Personnel = () => {
  const colors = ['blue', 'green', 'yellow'];

  return (
          <StaticQuery query={graphql`
          query PersonnelQuery {
            personnel {
              person {
                description
                name
                photo
                role
              }
            }
          }
          `}
                       render={data => (
                               <MainLayout footerClassName={styles.footer}>
                                 <Header title="Kadra"
                                         subtitle="Poznajmy się lepiej! Wychowawcy w&nbsp;naszym przedszkolu to nie tylko doświadczeni pedagodzy, ale osoby życzliwe i&nbsp;pełne pasji w&nbsp;pracy z&nbsp;dziećmi."
                                         containerStyle={styles.header}/>
                                 <div className="dark-background py-6">
                                   <div className="container">
                                     {data.personnel.person.map((person, index, arr) => {
                                       const { description, name, role, photo } = person;
                                       const even = index % 2 !== 0;
                                       const colorIndex = index % 3;
                                       const textClass = photo ? 'is-7-desktop' : 'is-8-desktop is-offset-2-desktop';
                                       const text = (
                                               <div key={`${name}-desc`}
                                                    className={`column ${textClass}`}>
                                                 <h4><p className="mb-0"
                                                        dangerouslySetInnerHTML={{ __html: fixOrphans(role) }}/></h4>
                                                 <h2><p dangerouslySetInnerHTML={{ __html: fixOrphans(name) }}/></h2>
                                                 <p className="mt-5 has-text-justified"
                                                    dangerouslySetInnerHTML={{ __html: fixOrphans(description) }}>
                                                 </p>
                                               </div>
                                       );
                                       const img = photo && (
                                               <div key={`${name}-img`}
                                                    className={`column is-5-desktop`}>
                                                 <div className={styles.imageWrap}>
                                                   <figure className={`image is-1by1`}>
                                                     <img className={`is-rounded ${styles.image} ${styles[colors[colorIndex]]}`}
                                                          src={applyTransform(photo[0], TRANSFORMATION_PERSONNEL_1BY1)}
                                                          alt={name}/>
                                                   </figure>
                                                 </div>
                                               </div>
                                       );
                                       let elements = [text, img];
                                       if (even) {
                                         elements = elements.reverse();
                                       }

                                       return (
                                               <div key={name}
                                                    className={`columns is-variable is-8 ${index === 0 ? 'mb-6' : (index === arr.length - 1 ? 'mt-6' : 'my-6')} ${even ? styles.columns : styles.columnsReverse}`}>
                                                 {elements}
                                               </div>
                                       )
                                     })}
                                   </div>
                                 </div>
                               </MainLayout>
                       )}/>
  );
}

export default Personnel;
