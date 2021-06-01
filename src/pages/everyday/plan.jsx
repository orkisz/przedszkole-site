import * as React from 'react';
import MainLayout from '../../layouts/main-layout/main-layout';
import Header from '../../layouts/partials/header';
import * as styles from './plan.module.scss';

const Blog = () => {
  return (
          <MainLayout>
            <Header title="Plan dnia"
                    subtitle="Dzienny rozkład zajęć wg koncepcji bł. E. Bojanowskiego"/>
            <div className="container">
              <div className="columns">
                <div className="column is-8 is-offset-2">
                  <div className={`${styles.dayPart} ${styles.blue}`}>
                    <div className={styles.partHeading}>6:30 – 8:10 Schodzenie się dzieci.</div>
                    <div className={styles.details}>
                      <ul className="round">
                        <li>Przywitanie się z&nbsp;nauczycielką pozdrowieniem chrześcijańskim i&nbsp;z dziećmi.</li>
                        <li>Zabawy dowolne wg zainteresowań dzieci.</li>
                        <li>Praca wyrównawczo-korekcyjna, indywidualna lub w&nbsp;małych zespołach.</li>
                        <li>Czynności porządkowo-gospodarcze w&nbsp;sali.</li>
                      </ul>
                    </div>
                  </div>
                  <div className={`${styles.dayPart} ${styles.yellow}`}>
                    <div className={styles.partHeading}>8:10 - 9:00 Ćwiczenia poranne, zabawy ruchowe.</div>
                    <div className={styles.details}>
                      <ul className="round">
                        <li>Wspólna modlitwa w&nbsp;kaplicy, wprowadzenie w&nbsp;tematykę dnia.</li>
                        <li>Przygotowanie do śniadania, krótka modlitwa, śniadanie.</li>
                      </ul>
                    </div>
                  </div>
                  <div className={`${styles.dayPart} ${styles.red}`}>
                    <div className={styles.partHeading}>9:00 – 10:00 Zabawy niekierowane wg zainteresowań dzieci.</div>
                  </div>
                  <div className={`${styles.dayPart} ${styles.green}`}>
                    <div className={styles.partHeading}>10:00 – 12:00 Zajęcia dydaktyczne.</div>
                    <div className={styles.details}>
                      <ul className="round">
                        <li>Pobyt na świeżym powietrzu, spacery, zabawy ruchowe.</li>
                        <li>Indywidualna lub zespołowa praca wyrównawcza, praca z&nbsp;dzieckiem zdolnym.</li>
                      </ul>
                    </div>
                  </div>
                  <div className={`${styles.dayPart} ${styles.blue}`}>
                    <div className={styles.partHeading}>12:00 – 13:00 Przygotowanie do obiadu, modlitwa, obiad.</div>
                    <div className={styles.details}>
                      <ul className="round">
                        <li>Relaksacja.</li>
                        <li>Słuchanie opowiadanych bajek i&nbsp;czytanej literatury dziecięcej.</li>
                      </ul>
                    </div>
                  </div>
                  <div className={`${styles.dayPart} ${styles.yellow}`}>
                    <div className={styles.partHeading}>13:00 – 14:00 Zabawy swobodne dzieci / Zajęcia praktyczne</div>
                    <div className={styles.details}>
                      <ul className="round">
                        <li>Prace w&nbsp;ogrodzie, obserwacje przyrodnicze.</li>
                        <li>Zabawy na powietrzu, gry sportowe i&nbsp;zabawy ruchowe na placu zabaw.</li>
                        <li>Zajęcia dodatkowe.</li>
                      </ul>
                    </div>
                  </div>
                  <div className={`${styles.dayPart} ${styles.red}`}>
                    <div className={styles.partHeading}>14:00 – 14:20 Podwieczorek</div>
                    <div className={styles.details}>
                      <ul className="round">
                        <li>Czynności higieniczne, przygotowanie do podwieczorku.</li>
                      </ul>
                    </div>
                  </div>
                  <div className={`${styles.dayPart} ${styles.green}`}>
                    <div className={styles.partHeading}>14:20 – 16:30 Swobodna aktywność dzieci wg ich pomysłów i&nbsp;zainteresowań.
                    </div>
                    <div className={styles.details}>
                      <ul className="round">
                        <li>Zabawy na powietrzu, zabawy ruchowe na placu zabaw.</li>
                        <li>Ćwiczenia utrwalające wiadomości.</li>
                        <li>Pożegnanie z&nbsp;nauczycielką, z&nbsp;dziećmi i&nbsp;rozchodzenie się do domu.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </MainLayout>
  );
}

export default Blog;
