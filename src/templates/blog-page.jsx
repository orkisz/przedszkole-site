import { graphql } from 'gatsby';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import MainLayout from '../layouts/main-layout';

const BlogPage = ({ data }) => {
  const item = data.markdownRemark;
  return (
          <MainLayout>
            <section className="container">
              <div className="columns">
                <div className="column is-8 is-offset-2">
                  <article className="content">
                    {item.frontmatter.images.length === 1 && (
                            <img src={item.frontmatter.images[0]}
                                 alt="TODO"/>
                    )}
                    {item.frontmatter.images.length > 1 && (
                            <Carousel>
                              {item.frontmatter.images.map(image => (
                                      <div key={image}>
                                        <img src={image}/>
                                      </div>
                              ))}
                            </Carousel>
                    )}
                    <h3>{item.frontmatter.title}</h3>
                    <div dangerouslySetInnerHTML={{ __html: item.html }}/>
                  </article>
                </div>
              </div>
            </section>
          </MainLayout>
  )
}

export default BlogPage;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date
        images
      }
    }
  }
`;
