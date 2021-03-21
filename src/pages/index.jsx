import * as React from 'react'

import '../styles/styles.scss';
import Layout from '../layouts/layout';
import * as styles from './index.module.css';
import valuesImage from './values.png';
import surroundingsImage from './surroundings.png';
import teachersImage from './teachers.png';
import learnByPlayImage from './learn-by-play.png';
import FeaturedCard from '../layouts/partials/featured-card/featured-card';

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
            <section className="container has-text-centered">
              <h4>Poznajmy się lepiej</h4>
              <h2>Naszym priorytetem jest <br/>wszechstronny rozwój każdego dziecka</h2>
            </section>
            <section className="container">
              <div className="columns">
                <FeaturedCard className="column is-one-quarter"
                              color="blue"
                              image={valuesImage}>
                  <header>Wartości chrześcijańskie</header>
                  Program nauczania opieramy na&nbsp;koncepcji pedagogicznej naszego patrona bł.&nbsp;Edmunda
                  Bojanowskiego
                </FeaturedCard>
                <FeaturedCard className="column is-one-quarter"
                              color="yellow"
                              image={learnByPlayImage}>
                  <header>Nauka <br/>i zabawa</header>
                  Poprzez zabawę dzieci poznają świat i&nbsp;budują relacje z&nbsp;rówieśnikami. Zajęcia dostosowujemy
                  do&nbsp;Ich
                  możliwości i&nbsp;zainteresowań
                </FeaturedCard>
                <FeaturedCard className="column is-one-quarter"
                              color="red"
                              image={teachersImage}>
                  <header>Troskliwi nauczyciele</header>
                  Nasi wychowawcy to nie&nbsp;tylko pedagodzy z&nbsp;doświadczeniem w&nbsp;pracy zvdziećmi,
                  ale&nbsp;osoby pełne empatii i&nbsp;zaangażowania
                </FeaturedCard>
                <FeaturedCard className="column is-one-quarter"
                              color="green"
                              image={surroundingsImage}>
                  <header>Przyjazne otoczenie</header>
                  Kolorowe sale, piękny, duży plac zabaw, zaciszna kaplica to&nbsp;wszystko buduje poczucie
                  bezpieczeństwa i&nbsp;pobudza do&nbsp;aktywności
                </FeaturedCard>
              </div>
            </section>
          </Layout>
  )
}

export default IndexPage
