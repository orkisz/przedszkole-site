import * as React from 'react'
import { graphql, StaticQuery } from 'gatsby';

const pageStyles = {
  color: '#232129',
  padding: 96,
  fontFamily: '-apple-system, Roboto, sans-serif, serif'
}

const IndexPage = () => {
  return (
    <StaticQuery query={graphql`
          query MainQuery {
            site {
              siteMetadata {
                title
              }
            }
            allNodeArticle(limit: 4, sort: {fields: created, order: DESC}) {
              edges {
                node {
                  id
                  body {
                    processed
                  }
                  created
                  relationships {
                    field_image {
                      uri {
                        url
                      }
                    }
                  }
                  title
                }
              }
            }
          }
          `}
                 render={data => (
                   <>
                     <main style={pageStyles}>
                       <h1>{data.site.siteMetadata.title}</h1>
                     </main>
                     <ul>
                       {data.allNodeArticle.edges.map(article => (
                         <li>
                           <h3>{article.node.title}</h3>
                           <div>
                             Zajawka:
                             <br/>
                             { article.node.body.processed.replace(/(<([^>]+)>)/gi, "").substr(0, 50) + '...' }
                           </div>
                           <div dangerouslySetInnerHTML={{__html: article.node.body.processed}} />
                           <img src={'http://localhost:8080' + article.node.relationships.field_image.uri.url}/>
                         </li>
                       ))
                       }
                     </ul>
                   </>
                 )}>
    </StaticQuery>
  );
}

export default IndexPage
