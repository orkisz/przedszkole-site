import React from 'react';
import { graphql } from 'gatsby';

const NewsItem = ({ data }) => {
  // const news = data.nodeArticle;
  return (
    <div></div>
    // <article>
    //   <img src={'http://localhost:8080' + news.relationships.field_image.uri.url}
    //        alt={news.field_image.alt}/>
    //   <h3>{news.title}</h3>
    //   <div dangerouslySetInnerHTML={{ __html: news.body.processed }}/>
    // </article>
  )
}

export default NewsItem;

// export const query = graphql`
//   query($id: String!) {
//     nodeArticle(id: { eq: $id }) {
//       body {
//         processed
//       }
//       created
//       title
//       field_image {
//         alt
//       }
//       relationships {
//         field_image {
//           uri {
//             url
//           }
//         }
//       }
//     }
//   }
// `;
