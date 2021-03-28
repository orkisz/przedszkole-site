import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Accordion from './accordion/accordion';
import AccordionItem from './accordion/accordion-item';

const GroupsAccordion = () => {
  return (
          <StaticQuery query={graphql`
          query GroupsQuery {
            allMarkdownRemark(
              filter: {fields: {category: {eq: "group"}}}
              sort: {fields: frontmatter___order}
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
                               <Accordion>
                                 {data.allMarkdownRemark.edges.map(edge => (
                                         <AccordionItem key={edge.node.id}
                                                        title={edge.node.frontmatter.name}
                                                        image={edge.node.frontmatter.image.publicURL}>
                                           {edge.node.frontmatter.description}
                                         </AccordionItem>
                                 ))}
                               </Accordion>
                       )}/>
  )
}

export default GroupsAccordion;
