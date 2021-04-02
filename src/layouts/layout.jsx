import * as React from 'react'
import { graphql, StaticQuery } from 'gatsby';

import '../styles/styles.scss';
import Navigation from './partials/navigation/nav';
import { Helmet } from 'react-helmet';

const Layout = ({ children }) => {
  return (
    <StaticQuery query={graphql`
          query MainQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
          `}
                 render={data => (
                   <>
                     <Helmet title={data.site.siteMetadata.title}
                             bodyAttributes={{ class: 'has-navbar-fixed-top' }}
                             defer={false}/>
                     <Navigation/>
                     {children}
                     <footer className="footer">
                     </footer>
                   </>
                 )}/>
  )
}

export default Layout;
