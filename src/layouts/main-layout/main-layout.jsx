import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faClock, faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { graphql, StaticQuery } from 'gatsby';
import * as React from 'react'
import { Helmet } from 'react-helmet';
import logoImage from '../../images/logo.png';
import iconImage from '../../images/icon.png';
import '../../styles/styles.scss';
import Navigation from '../partials/navigation/nav';
import * as styles from './main-layout.module.scss';

const MainLayout = ({ footerClassName = 'mt-6', children }) => {
  const navigateToMap = () => {
    if (window) {
      window.open('https://www.google.pl/maps/place/Przedszkole+Niepubliczne+Si%C3%B3str+S%C5%82u%C5%BCebniczek+NMP+NP/@50.1232534,19.7048713,17z/data=!3m1!4b1!4m5!3m4!1s0x4716f700c80eeafd:0xb6cfd60f7e175d3a!8m2!3d50.12325!4d19.70706', 'blank');
    }
  }
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
                                         meta={[
                                           {
                                             name: 'description',
                                             content: 'Nasze Przedszkole wspiera rodziców w&nbsp;integralnym wychowaniu dzieci w&nbsp;duchu wartości chrześcijańskich wg koncepcji pedagogicznej bł. Edmunda Bojanowskiego.'
                                           },
                                           {
                                             name: 'keywords',
                                             content: 'przedszkole Rudawa Siostry Służebniczki NMP'
                                           },
                                           {
                                             name: 'og:title',
                                             content: data.site.siteMetadata.title
                                           },
                                           {
                                             name: 'og:description',
                                             content: 'Nasze Przedszkole wspiera rodziców w&nbsp;integralnym wychowaniu dzieci w&nbsp;duchu wartości chrześcijańskich wg koncepcji pedagogicznej bł. Edmunda Bojanowskiego.'
                                           },
                                           {
                                             name: 'og:image',
                                             content: iconImage
                                           }
                                         ]}
                                         defer={false}/>
                                 <Navigation/>
                                 <div className={styles.contentWrapper}>
                                   {children}
                                 </div>
                                 <footer className={footerClassName}>
                                   <section className={styles.topFooter}>
                                     <div className={styles.leftBg}/>
                                     <div className={styles.rightBg}
                                          onClick={navigateToMap}
                                          role="link"/>
                                     <div className="container">
                                       <div className="columns">
                                         <div className="column is-half-desktop is-flex is-flex-direction-column is-align-items-center">
                                           <figure className={`${styles.logoImage} image mt-6`}>
                                             <img src={logoImage}
                                                  alt="Logo przedszkola"/>
                                           </figure>
                                           <div>
                                             <h2 className={`${styles.contact} mt-5`}>Kontakt</h2>
                                             <ul className="mt-4 mb-6">
                                               <li className={styles.contactsListItem}>
                                                 <FontAwesomeIcon icon={faPhone}
                                                                  size="2x"
                                                                  listItem/>
                                                 <span>
                                                   <a href="tel:+48122838050">+48 12 283 80 50</a>
                                                 </span>
                                               </li>
                                               <li className={styles.contactsListItem}>
                                                 <FontAwesomeIcon icon={faEnvelope}
                                                                  size="2x"
                                                                  listItem/>
                                                 <span>
                                                   <a href="mailto:przedszkole.rudawa@sluzebniczkikr.pl">przedszkole.rudawa@sluzebniczkikr.pl</a>
                                                 </span>
                                               </li>
                                               <li className={styles.contactsListItem}>
                                                 <FontAwesomeIcon icon={faMapMarkerAlt}
                                                                  size="2x"
                                                                  listItem/>
                                                 <span>ul. Polaczka 27, 32-064 Rudawa</span>
                                               </li>
                                               <li className={styles.contactsListItem}>
                                                 <FontAwesomeIcon icon={faClock}
                                                                  size="2x"
                                                                  listItem/>
                                                 <span>6:30 - 16:30 (od poniedziałku do piątku)</span>
                                               </li>
                                             </ul>
                                           </div>
                                         </div>
                                       </div>
                                     </div>
                                   </section>
                                   <section className={`${styles.bottomFooter} has-text-centered`}>
                                     <span className={styles.separated}>Copyright &copy; 2021 Katarzyna i&nbsp;Krzysztof Orkisz</span>
                                     <a className="plain"
                                        href="https://www.facebook.com/Przedszkole-Niepubliczne-Si%C3%B3str-S%C5%82u%C5%BCebniczek-NMP-NP-w-Rudawie-111121330268531"
                                        target="_blank">
                                       <FontAwesomeIcon icon={faFacebookF}/>
                                     </a>
                                   </section>
                                 </footer>
                               </>
                       )}/>
  )
}

export default MainLayout;
