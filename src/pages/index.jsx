import { Link } from 'gatsby';
import * as React from 'react'
import MainLayout from '../layouts/main-layout/main-layout';
import BlogArea from '../layouts/partials/blog-area';
import FeaturedCard from '../layouts/partials/featured-card/featured-card';
import GroupsAccordion from '../layouts/partials/groups-accordion';
import '../styles/styles.scss';
import * as styles from './index.module.scss';
import learnByPlayImage from './learn-by-play.png';
import missionImage from './mission.png';
import surroundingsImage from './surroundings.png';
import teachersImage from './teachers.png';
import valuesImage from './values.png';

const Features = [
  {
    header: <>Wartości chrześcijańskie</>,
    body: <>Program nauczania opieramy na&nbsp;koncepcji pedagogicznej naszego patrona bł.&nbsp;Edmunda
            Bojanowskiego</>,
    color: 'blue',
    image: valuesImage
  },
  {
    header: <>Nauka <br className={styles.featureCardLineBreak}/>i zabawa</>,
    body: <>Poprzez zabawę dzieci poznają świat i&nbsp;budują relacje z&nbsp;rówieśnikami. Zajęcia dostosowujemy
            do&nbsp;Ich
            możliwości i&nbsp;zainteresowań</>,
    color: 'yellow',
    image: learnByPlayImage
  },
  {
    header: <>Troskliwi nauczyciele</>,
    body: <>Nasi wychowawcy to nie&nbsp;tylko pedagodzy z&nbsp;doświadczeniem w&nbsp;pracy z&nbsp;dziećmi,
            ale&nbsp;osoby pełne empatii i&nbsp;zaangażowania</>,
    color: 'red',
    image: teachersImage
  }, {
    header: <>Przyjazne otoczenie</>,
    body: <>Kolorowe sale, piękny, duży plac zabaw, zaciszna kaplica to&nbsp;wszystko buduje poczucie
            bezpieczeństwa i&nbsp;pobudza do&nbsp;aktywności</>,
    color: 'green',
    image: surroundingsImage
  }
];

const IndexPage = () => {
  return (
          <MainLayout footerClassName="">
            <section className={`hero is-large ${styles.hero}`}>
              <div className={`hero-body ${styles.heroBody}`}>
                <div className="container">
                  <div className="columns">
                    <div className="column is-half-desktop is-full-touch">
                      <h4>
                        Witamy w naszym przedszkolu
                      </h4>
                      <h1 className="mt-3 mb-6">
                        Razem bawimy się, uczymy i rośniemy!
                      </h1>
                      <Link className="button is-main is-medium is-rounded"
                            to="/everyday/groups">Dowiedz się wiecej</Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="container has-text-centered my-6">
              <h4>Poznajmy się lepiej</h4>
              <h2 className="mt-4">Naszym priorytetem jest <br/>wszechstronny rozwój każdego dziecka</h2>
            </section>
            <section className="container mb-6">
              <div className="columns is-desktop">
                {Features.map(featureDef => (
                        <FeaturedCard className="column is-full-touch is-one-quarter-desktop"
                                      color={featureDef.color}
                                      image={featureDef.image}>
                          <header>{featureDef.header}</header>
                          <>{featureDef.body}</>
                        </FeaturedCard>
                ))}
              </div>
            </section>
            <section className="py-6 dark-background">
              <div className="has-text-centered">
                <h4>Nasza misja</h4>
                <h2 className="mt-4">Wychowanie w duchu wartości chrześcijańskich</h2>
              </div>
              <div className="container py-6">
                <div className="columns">
                  <div className="column is-5-desktop">
                    <figure className="image is-4by3 fancy-image blue">
                      <img src={missionImage}/>
                    </figure>
                  </div>
                  <div className="column is-7-desktop">
                    <p> Nasze Przedszkole wspiera rodziców w integralnym wychowaniu dzieci w duchu
                        wartości chrześcijańskich wg koncepcji pedagogicznej bł. Edmunda Bojanowskiego.
                        Wychowawcy i cała społeczność przedszkola dbają o rodzinną atmosferę w
                        placówce, w której dzieci wychowywane są w oparciu o patriotyzm i szacunek dla
                        tradycji, oraz poprzez bezpośrednie doświadczenia i działania.
                        Indywidualne podejście do dziecka pomaga nam odkryć jego zdolności,
                        wspomagać w trudnościach i wychowywać do twórczej współpracy z innymi.
                        Pragniemy wychować dzieci świadome własnej wartości i wrażliwe na potrzeby
                        innych. Wysoka jakość kształcenia, prymat zabawy i ruchu oraz ciekawe metody i
                        formy zajęć sprawiają, że dzieci czują się u nas bezpieczne i szczęśliwe.
                    </p>
                    <div className="mt-6 has-text-centered-mobile">
                      <Link className="button is-main is-medium is-rounded"
                            to="/about/mission">Misja przedszkola</Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className={styles.groupsSection}>
              <div className={styles.leftBg}/>
              <div className={styles.rightBg}/>
              <div className="container">
                <div className="columns">
                  <div className="column is-half-desktop is-flex is-flex-direction-column is-align-items-center">
                    <div>
                      <h4 className="mt-6">Poznajmy się lepiej</h4>
                      <h2 className="my-4">Podział na grupy <br/>2020/2021</h2>
                      <GroupsAccordion/>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="dark-background">
              <BlogArea/>
            </section>
          </MainLayout>
  )
}

export default IndexPage
