import * as React from 'react'

import '../styles/styles.scss';
import BlogArea from '../layouts/partials/blog-area';
import Layout from '../layouts/layout';
import * as styles from './index.module.css';

const IndexPage = () => {
  return (
    <Layout>
      <section className={`hero is-large ${styles.hero}`}>
        <div className="hero-body">
          <div className="container">
            <h3>
              Witamy w naszym przedszkolu
            </h3>
            <h1>
              Razem bawimy się, uczymy i rośniemy!
            </h1>
            <button className="button is-primary is-large is-rounded">Dowiedz się wiecej</button>
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
        <BlogArea/>
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
    </Layout>
  )
}

export default IndexPage
