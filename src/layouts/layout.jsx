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
                       <div className="container">
                         <div className="columns">
                           <div className="column is-3 is-offset-2">
                             <h2><strong>Category</strong></h2>
                             <ul>
                               <li>
                                 <a href="#">Lorem ipsum dolor sit amet</a>
                               </li>
                               <li>
                                 <a href="#">Vestibulum errato isse</a>
                               </li>
                               <li>
                                 <a href="#">Lorem ipsum dolor sit amet</a>
                               </li>
                               <li>
                                 <a href="#">Aisia caisia</a>
                               </li>
                               <li>
                                 <a href="#">Murphy's law</a>
                               </li>
                               <li>
                                 <a href="#">Flimsy Lavenrock</a>
                               </li>
                               <li>
                                 <a href="#">Maven Mousie Lavender</a>
                               </li>
                             </ul>
                           </div>
                           <div className="column is-3">
                             <h2><strong>Category</strong></h2>
                             <ul>
                               <li>
                                 <a href="#">Labore et dolore magna aliqua</a>
                               </li>
                               <li>
                                 <a href="#">Kanban airis sum eschelor</a>
                               </li>
                               <li>
                                 <a href="#">Modular modern free</a>
                               </li>
                               <li>
                                 <a href="#">The king of clubs</a>
                               </li>
                               <li>
                                 <a href="#">The Discovery Dissipation</a>
                               </li>
                               <li>
                                 <a href="#">Course Correction</a>
                               </li>
                               <li>
                                 <a href="#">Better Angels</a>
                               </li>
                             </ul>
                           </div>
                           <div className="column is-4">
                             <h2><strong>Category</strong></h2>
                             <ul>
                               <li>
                                 <a href="#">Objects in space</a>
                               </li>
                               <li>
                                 <a href="#">Playing cards with coyote</a>
                               </li>
                               <li>
                                 <a href="#">Goodbye Yellow Brick Road</a>
                               </li>
                               <li>
                                 <a href="#">The Garden of Forking Paths</a>
                               </li>
                               <li>
                                 <a href="#">Future Shock</a>
                               </li>
                             </ul>
                           </div>
                         </div>
                         <div className="content has-text-centered">
                           <p>
                             <a className="icon"
                                href="https://github.com/BulmaTemplates/bulma-templates">
                               <i className="fa fa-github"/>
                             </a>
                           </p>
                           <div className="control level-item">
                             <a href="https://github.com/BulmaTemplates/bulma-templates">
                               <div className="tags has-addons">
                                 <span className="tag is-dark">Bulma Templates</span>
                                 <span className="tag is-info">MIT license</span>
                               </div>
                             </a>
                           </div>
                         </div>
                       </div>
                     </footer>
                   </>
                 )}/>
  )
}

export default Layout;
