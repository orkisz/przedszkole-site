import * as React from 'react'
import { graphql, Link, StaticQuery } from 'gatsby';

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
            allNodeArticle(limit: 3, sort: {fields: created, order: DESC}) {
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
                      status
                    }
                  }
                  title
                  field_image {
                    alt
                  }
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
                         <li key={article.node.id}
                             id={article.node.id}>
                           <h3><Link to={article.node.id}>{article.node.title}</Link></h3>
                           <div>
                             Zajawka:
                             <br/>
                             {article.node.body.processed.replace(/(<([^>]+)>)/gi, '').substr(0, 50) + '...'}
                           </div>
                           <div dangerouslySetInnerHTML={{ __html: article.node.body.processed }}/>
                           <img src={'http://localhost:8080' + article.node.relationships.field_image.uri.url}
                                alt={article.node.field_image.alt}/>
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
