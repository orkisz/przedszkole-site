import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import MainLayout from '../../layouts/main-layout/main-layout';
import SimpleTwoColumnLayout from '../../layouts/simple-two-column-layout';

const Blog = () => {
  return (
          <MainLayout>
            <SimpleTwoColumnLayout title="Rekrutacja"
                                   subtitle="Ogólne zasady rekrutacji do przedszkola Sióstr Służebniczek">
              <>
                <p>W naszym Przedszkolu funkcjonują 3 oddziały przedszkolne liczące do 25 wychowanków.</p>
                <p>Rekrutacja na kolejny rok szkolny rozpoczyna się 1 marca i trwa przez 10 dni roboczych. Rodzice
                   pobierają <a href="/KARTA ZGŁOSZENIA DZIECKA.pdf"
                                target="_blank">KARTĘ ZGŁOSZENIA</a> dziecka w przedszkolu lub ze strony internetowej
                   przedszkola. Rodzice,
                   którzy chcą posłać swoje dziecko do przedszkola, wypełnioną kartę zgłoszenia przynoszą na
                   indywidualne spotkanie z Siostrą Dyrektor w wyznaczonym dniu.
                </p>
                <p>Rodzicie dzieci, które już chodzą do przedszkola i chcą kontynuować naukę w kolejnym roku szkolnym
                   oddają kartę zgłoszenia nauczycielom grup.</p>
                <hr/>
                <p className="mt-6"><strong>Przydatne dokumenty:</strong></p>
                <ul>
                  <li>

                    <a href="/KARTA ZGŁOSZENIA DZIECKA.pdf"
                       target="_blank">
                      <FontAwesomeIcon className="mr-3"
                                       icon={faDownload}/>Karta zgłoszenia
                    </a>
                  </li>
                  <li>
                    <a href="/UPOWAŻNIENIE-DO-ODBIORU-DZIECKA-Z-PRZEDSZKOLA-NIEPUBLICZNEGO.pdf"
                       target="_blank">
                      <FontAwesomeIcon className="mr-3"
                                       icon={faDownload}/>Upoważnienie do odbioru dziecka
                    </a>
                  </li>
                </ul>
              </>
              <>
                <p>Głównym kryterium przyjęcia kandydata jest pragnienie wychowywania go przez rodziców w duchu wartości
                   chrześcijańskich, czego wyrazem jest m.in. zobowiązanie się rodziców do uczestnictwa w proponowanych
                   przez przedszkole dniach skupienia. Dzieci są zakwalifikowane do przedszkola po podjęciu pozytywnej
                   decyzji przez Dyrektora, a w przypadku większej liczby zgłoszeń niż liczba wolnych miejsc, przez
                   Komisję Rekrutacyjną.</p>
                <p>Nie ma znaczenia kolejność oddawanych Kart Zgłoszeń! Wyniki rekrutacji ogłoszone są w ciągu trzech
                   dni roboczych po zakończeniu postepowania rekrutacyjnego. Regulamin Rekrutacji znajduje się do wglądu
                   rodziców w Przedszkolu.</p>
              </>
            </SimpleTwoColumnLayout>
          </MainLayout>
  );
}

export default Blog;
