import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import { fixOrphans, getFirstParagraph, stripHtmlTags } from '../../utils/html';
import Accordion from './accordion/accordion';
import AccordionItem from './accordion/accordion-item';
import * as styles from './groups-accordion.module.scss';

const GroupsAccordion = () => {
  return (
          <StaticQuery query={graphql`
            query GroupsQuery {
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
                               <Accordion className={`${styles.accordion} mb-6`}>
                                 {data.groups.fields.groupFormatted.slice(0, 3).map((group, index) => {
                                   const firstPara = fixOrphans(stripHtmlTags(getFirstParagraph(group.body)));
                                   return (
                                           <AccordionItem key={group.name}
                                                          title={group.name}
                                                          image={group.image[0]}
                                                          headClassName={styles[`accordionItem${index + 1}`]}
                                                          contentClassName={styles.accordionContent}>
                                             <span dangerouslySetInnerHTML={{ __html: firstPara }}/>
                                           </AccordionItem>
                                   )
                                 })}
                               </Accordion>
                       )}/>
  )
}

export default GroupsAccordion;
