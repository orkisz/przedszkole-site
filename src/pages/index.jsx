import * as React from 'react'
import { graphql, StaticQuery } from 'gatsby';

import '../styles/styles.scss';
import Navigation from './partials/nav';
import { Helmet } from 'react-helmet';
import BlogArea from './partials/blog-area';

const IndexPage = () => {
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
                             defer={false}/>
                     <section className="hero is-info is-medium is-bold">
                       <div className="hero-head">
                         <Navigation/>
                       </div>
                       <div className="hero-body">
                         <div className="container has-text-centered">
                           <h1 className="title">
                             The new standard in &lt;insert industry here&gt;
                           </h1>
                           <h2 className="subtitle">
                             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                             ut labore et
                             dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                             nisi ut aliquip ex
                             ea commodo consequat.
                           </h2>
                         </div>
                       </div>
                     </section>
                     <div className="box cta">
                       <p className="has-text-centered">
                         <span className="tag is-primary">New</span> Ut enim ad minim veniam, quis nostrud exercitation
                                                                     ullamco laboris
                                                                     nisi ut aliquip ex ea commodo consequat.
                       </p>
                     </div>
                     <section className="container">
                       <BlogArea />
                       <div className="intro column is-8 is-offset-2">
                         <h2 className="title">Perfect for developers or designers!</h2><br/>
                         <p className="subtitle">Vel fringilla est ullamcorper eget nulla facilisi. Nulla facilisi
                                                 nullam vehicula
                                                 ipsum a.
                                                 Neque egestas congue quisque egestas diam in arcu cursus.</p>
                       </div>
                       <div className="sandbox">
                         <div className="tile is-ancestor">
                           <div className="tile is-parent is-shady">
                             <article className="tile is-child notification is-white">
                               <p className="title">Hello World</p>
                               <p className="subtitle">What is up?</p>
                             </article>
                           </div>
                           <div className="tile is-parent is-shady">
                             <article className="tile is-child notification is-white">
                               <p className="title">Foo</p>
                               <p className="subtitle">Bar</p>
                             </article>
                           </div>
                           <div className="tile is-parent is-shady">
                             <article className="tile is-child notification is-white">
                               <p className="title">Third column</p>
                               <p className="subtitle">With some content</p>
                               <div className="content">
                                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu
                                    pellentesque
                                    tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat
                                    facilisis.</p>
                               </div>
                             </article>
                           </div>
                         </div>
                         <div className="tile is-ancestor">
                           <div className="tile is-vertical is-8">
                             <div className="tile">
                               <div className="tile is-parent is-vertical">
                                 <article className="tile is-child notification is-white">
                                   <p className="title">Vertical tiles</p>
                                   <p className="subtitle">Top box</p>
                                 </article>
                                 <article className="tile is-child notification is-white">
                                   <p className="title">Vertical tiles</p>
                                   <p className="subtitle">Bottom box</p>
                                 </article>
                               </div>
                               <div className="tile is-parent">
                                 <article className="tile is-child notification is-white">
                                   <p className="title">Middle box</p>
                                   <p className="subtitle">With an image</p>
                                   <figure className="image is-4by3">
                                     <img src="https://picsum.photos/640/480/?random"
                                          alt="Description"/>
                                   </figure>
                                 </article>
                               </div>
                             </div>
                             <div className="tile is-parent is-shady">
                               <article className="tile is-child notification is-white">
                                 <p className="title">Wide column</p>
                                 <p className="subtitle">Aligned with the right column</p>
                                 <div className="content">
                                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros,
                                      eu pellentesque
                                      tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat
                                      facilisis.</p>
                                 </div>
                               </article>
                             </div>
                           </div>
                           <div className="tile is-parent is-shady">
                             <article className="tile is-child notification is-white">
                               <div className="content">
                                 <p className="title">Tall column</p>
                                 <p className="subtitle">With even more content</p>
                                 <div className="content">
                                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat
                                      pulvinar, at
                                      pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero
                                      rhoncus ut.
                                      Morbi
                                      maximus, leo sit amet vehicula
                                      eleifend, nunc dui porta orci, quis semper odio felis ut quam.</p>
                                   <p>Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a
                                      sagittis.
                                      Pellentesque
                                      interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin
                                      felis neque sit
                                      amet
                                      erat. Maecenas imperdiet
                                      felis nisi, fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam,
                                      finibus
                                      dignissim
                                      turpis. Sed eget varius ligula, at volutpat tortor.</p>
                                   <p>Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae
                                      congue lectus dolor
                                      consequat libero. Donec leo ligula, maximus et pellentesque sed, gravida a metus.
                                      Cras
                                      ullamcorper a
                                      nunc ac porta. Aliquam
                                      ut aliquet lacus, quis faucibus libero. Quisque non semper leo.</p>
                                 </div>
                               </div>
                             </article>
                           </div>
                         </div>
                         <div className="tile is-ancestor">
                           <div className="tile is-parent is-shady">
                             <article className="tile is-child notification is-white">
                               <p className="title">Side column</p>
                               <p className="subtitle">With some content</p>
                               <div className="content">
                                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu
                                    pellentesque
                                    tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat
                                    facilisis.</p>
                               </div>
                             </article>
                           </div>
                           <div className="tile is-parent is-8 is-shady">
                             <article className="tile is-child notification is-white">
                               <p className="title">Main column</p>
                               <p className="subtitle">With some content</p>
                               <div className="content">
                                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu
                                    pellentesque
                                    tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat
                                    facilisis.</p>
                               </div>
                             </article>
                           </div>
                         </div>
                         <div className="tile is-ancestor">
                           <div className="tile is-parent is-8 is-shady">
                             <article className="tile is-child notification is-white">
                               <p className="title">Murphy's law</p>
                               <p className="subtitle">Anything that can go wrong will go wrong</p>
                               <div className="content">
                                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu
                                    pellentesque
                                    tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat
                                    facilisis.</p>
                               </div>
                             </article>
                           </div>
                           <div className="tile is-parent is-shady">
                             <article className="tile is-child notification is-white">
                               <p className="title">Main column</p>
                               <p className="subtitle">With some content</p>
                               <div className="content">
                                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu
                                    pellentesque
                                    tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat
                                    facilisis.</p>
                               </div>
                             </article>
                           </div>
                         </div>
                       </div>
                     </section>
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

export default IndexPage
