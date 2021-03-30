import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Accordion from './accordion/accordion';
import AccordionItem from './accordion/accordion-item';
import * as styles from './groups-accordion.module.scss';

const GroupsAccordion = () => {
  console.log(styles);
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
                    description
                    image {
                      publicURL
                    }
                  }
                  id
                }
              }
            }
          }
          `}
                       render={data => (
                               <Accordion className={styles.accordion}>
                                 {data.allMarkdownRemark.edges.map((edge, index) => (
                                         <AccordionItem key={edge.node.id}
                                                        title={edge.node.frontmatter.name}
                                                        image={edge.node.frontmatter.image.publicURL}
                                                        headClassName={styles[`accordionItem${index + 1}`]}>
                                           {edge.node.frontmatter.description}
                                         </AccordionItem>
                                 ))}
                               </Accordion>
                       )}/>
  )
}

export default GroupsAccordion;
