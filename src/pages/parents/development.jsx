import { graphql, StaticQuery } from 'gatsby';
import * as React from 'react';
import MainLayout from '../../layouts/main-layout/main-layout';
import Header from '../../layouts/partials/header';

const Development = () => {
  return (
          <StaticQuery query={graphql`
          query DevelopmentQuery {
            development {
              content
              fields {
                formatted
              }
            }
          }
          `}
                       render={data => (
                               <MainLayout>
                                 <Header title="Rozwój i wychowanie"/>
                                 <div className="container">
                                   <div className="columns">
                                     <div className="column is-8 is-offset-2">
                                       <div className="content"
                                            dangerouslySetInnerHTML={{ __html: data.development.fields.formatted }}>
                                       </div>
                                     </div>
                                   </div>
                                 </div>
                               </MainLayout>
                       )}/>
  );
}

export default Development;
