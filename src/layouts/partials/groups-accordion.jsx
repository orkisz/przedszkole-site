import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import { getFirstParagraph, stripHtmlTags } from '../../utils/html';
import Accordion from './accordion/accordion';
import AccordionItem from './accordion/accordion-item';
import * as styles from './groups-accordion.module.scss';

const GroupsAccordion = () => {
  return (
          <StaticQuery query={graphql`
          query GroupsQuery {
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
                  }
                  html
                  id
                }
              }
            }
          }
          `}
                       render={data => (
                               <Accordion className={`${styles.accordion} mb-6`}>
                                 {data.allMarkdownRemark.edges.map((edge, index) => {
                                   const firstPara = stripHtmlTags(getFirstParagraph(edge.node.html));
                                   return (
                                           <AccordionItem key={edge.node.id}
                                                          title={edge.node.frontmatter.name}
                                                          image={edge.node.frontmatter.image[0]}
                                                          headClassName={styles[`accordionItem${index + 1}`]}
                                                          contentClassName={styles.accordionContent}>
                                             {firstPara}
                                           </AccordionItem>
                                   )
                                 })}
                               </Accordion>
                       )}/>
  )
}

export default GroupsAccordion;
