import * as React from 'react';
import MainLayout from '../../layouts/main-layout/main-layout';
import SimpleTwoColumnLayout from '../../layouts/simple-two-column-layout';
import bojanowskiImage from './bojanowski.png';

const Blog = () => {
  return (
          <MainLayout>
            <SimpleTwoColumnLayout title="Nasz patron bł.&nbsp;Edmund&nbsp;Bojanowski"
                                   subtitle="Podstawą i najwyższym celem wychowania u Edmunda Bojanowskiego była idea religijna, „by człowiek stał się obrazem i podobieństwem do Boga na ziemi”. Jest to bardzo szerokie ujęcie celu, który uwzględnia wszechstronny rozwój człowieka, jego elementy ludzkie i boskie.">
              <>
                <figure className="image">
                  <img src={bojanowskiImage}
                       alt="bł. Edmund Bojanowski (1814-1871)"/>
                  <figcaption>bł. Edmund Bojanowski (1814-1871)
                  </figcaption>
                </figure>
              </>
              <>
                <p>
                  Edmund Bojanowski (1814-1871) pochodził z Grabonoga (Wielkopolska) z rodzinyziemiańskiej, głęboko
                  religijnej i patriotycznej. Od najmłodszych lat przejawiał zainteresowania humanistyczne i zdolności
                  literackie. Studiował na uniwersytetach we Wrocławiu i Berlinie. Uczestniczył w wykładach z dziedziny
                  literatury, języków słowiańskich, filozofii i psychologii.W czasie studiów rozpoczął działalność
                  literacką i już wtedy współpracował ze znanymi ludźmi ze świata kultury.
                </p>
                <p>
                  Ze względu na chorobę płuc musiał przerwać studia i dobrze zapowiadającą się karierę literacką. Po
                  powrocie do Grabonoga w 1838 r. poświęcił się pracy charytatywnej i społecznej, koncentrując swe
                  zainteresowania na trzech dziedzinach: oświaty ludu wiejskiego, wychowania i miłosierdzia. W 1849 r.
                  podczas trwającej w
                  Wielkopolsce epidemii cholery zorganizował szpital, ochronkę i sierociniec dla dzieci.
                </p>
                <p>
                  Dzięki tej działalności poznał całą nędzę materialną i moralną ludu wiejskiego. Pragnął jej zaradzić,
                  zwłaszcza poprzez tworzenie Ochronek i włączenie do służby w nich wiejskich dziewcząt. W 1850 r.
                  założył pierwsza Ochronkę wiejską w Podrzeczu k. Gostynia. Wydarzenie to uważa się za początek
                  Zgromadzenia Sióstr Służebniczek Najświętszej Maryi Panny.
                </p>
                <p>
                  Bojanowski kładł nacisk na wychowanie integralne dzieci i ludu w kontekście przeżywania oraz
                  przyswajania przez osobę i wspólnotę wartości religijnych i kulturowych pielęgnowanych przez naród.
                  Przedmiotem jego szczególnej troski i dociekań stała się sprawa wczesnego wychowania dziecka, które
                  stanowiło podstawę pełnego rozwoju jego osobowości. Stworzył spójny i dynamiczny system wychowania
                  dziecka, określił wszystkie jego elementy i brał udział we wprowadzaniu ich w życie. Sformułował jasno
                  cele i wskazał konkretne zadania wychowawcze, uczył posługiwania się metodami i technikami
                  oddziaływania wychowawczego oraz dobierania najbardziej odpowiednich form organizacyjnych.
                </p>
                <p>
                  Ze swoją wizją wychowania i nowatorskimi rozwiązaniami organizacyjnymi wpisał się w nurt rodzącej się
                  w XIX w. pedagogiki wieku przedszkolnego. Jego koncepcja pedagogiczna do dziś realizowana jest przez
                  Służebniczki oraz stanowi inspirację i podstawę do konstruowania programów integralnego wychowania
                  dziecka w wieku przedszkolnym.
                </p>
                <p>
                  <strong>
                    Edmund Bojanowski został beatyfikowany 13 czerwca 1999 r. w Warszawie przez Papieża Jana Pawła II i
                    jest patronem naszego przedszkola.
                  </strong>
                </p>
              </>
            </SimpleTwoColumnLayout>
          </MainLayout>
  );
}

export default Blog;
