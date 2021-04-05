import * as React from 'react'
import { graphql, StaticQuery } from 'gatsby';
import '../styles/styles.scss';
import Navigation from './partials/navigation/nav';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';

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
                                 <footer className="site-footer has-text-centered mt-6">
                                   <span>Copyright &copy; 2021 Niepubliczne Przedszkole Sióstr Służebniczek Zgromadzenia NMP NP</span>
                                   <hr/>
                                   <a className="plain"
                                      href="https://www.facebook.com/Przedszkole-Niepubliczne-Si%C3%B3str-S%C5%82u%C5%BCebniczek-NMP-NP-w-Rudawie-111121330268531"
                                      target="_blank">
                                     <FontAwesomeIcon icon={faFacebookF}/>
                                   </a>
                                 </footer>
                               </>
                       )}/>
  )
}

export default Layout;
