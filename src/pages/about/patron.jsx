import * as React from 'react';
import MainLayout from '../../layouts/main-layout/main-layout';
import SimpleTwoColumnLayout from '../../layouts/simple-two-column-layout';
import bojanowskiImage from './bojanowski.png';

const Blog = () => {
  return (
          <MainLayout>
            <SimpleTwoColumnLayout title="Nasz patron bł.&nbsp;Edmund&nbsp;Bojanowski"
                                   subtitle="Podstawą i&nbsp;najwyższym celem wychowania u&nbsp;Edmunda Bojanowskiego była idea religijna, „by człowiek stał się obrazem i&nbsp;podobieństwem do Boga na ziemi”. Jest to bardzo szerokie ujęcie celu, który uwzględnia wszechstronny rozwój człowieka, jego elementy ludzkie i&nbsp;boskie.">
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
                  Edmund Bojanowski (1814-1871) pochodził z&nbsp;Grabonoga (Wielkopolska) z&nbsp;rodzinyziemiańskiej,
                  głęboko
                  religijnej i&nbsp;patriotycznej. Od najmłodszych lat przejawiał zainteresowania humanistyczne
                  i&nbsp;zdolności
                  literackie. Studiował na uniwersytetach we Wrocławiu i&nbsp;Berlinie. Uczestniczył w&nbsp;wykładach
                  z&nbsp;dziedziny
                  literatury, języków słowiańskich, filozofii i&nbsp;psychologii. W czasie studiów rozpoczął działalność
                  literacką i&nbsp;już wtedy współpracował ze znanymi ludźmi ze świata kultury.
                </p>
                <p>
                  Ze względu na chorobę płuc musiał przerwać studia i&nbsp;dobrze zapowiadającą się karierę literacką.
                  Po
                  powrocie do Grabonoga w&nbsp;1838 r. poświęcił się pracy charytatywnej i&nbsp;społecznej, koncentrując
                  swe
                  zainteresowania na trzech dziedzinach: oświaty ludu wiejskiego, wychowania i&nbsp;miłosierdzia.
                  W&nbsp;1849 r.
                  podczas trwającej w&nbsp;Wielkopolsce epidemii cholery zorganizował szpital, ochronkę
                  i&nbsp;sierociniec dla dzieci.
                </p>
                <p>
                  Dzięki tej działalności poznał całą nędzę materialną i&nbsp;moralną ludu wiejskiego. Pragnął jej
                  zaradzić,
                  zwłaszcza poprzez tworzenie Ochronek i&nbsp;włączenie do służby w&nbsp;nich wiejskich dziewcząt.
                  W&nbsp;1850 r.
                  założył pierwsza Ochronkę wiejską w&nbsp;Podrzeczu k. Gostynia. Wydarzenie to uważa się za początek
                  Zgromadzenia Sióstr Służebniczek Najświętszej Maryi Panny.
                </p>
                <p>
                  Bojanowski kładł nacisk na wychowanie integralne dzieci i&nbsp;ludu w&nbsp;kontekście przeżywania oraz
                  przyswajania przez osobę i&nbsp;wspólnotę wartości religijnych i&nbsp;kulturowych pielęgnowanych przez
                  naród.
                  Przedmiotem jego szczególnej troski i&nbsp;dociekań stała się sprawa wczesnego wychowania dziecka,
                  które
                  stanowiło podstawę pełnego rozwoju jego osobowości. Stworzył spójny i&nbsp;dynamiczny system
                  wychowania
                  dziecka, określił wszystkie jego elementy i&nbsp;brał udział we wprowadzaniu ich w&nbsp;życie.
                  Sformułował jasno
                  cele i&nbsp;wskazał konkretne zadania wychowawcze, uczył posługiwania się metodami i&nbsp;technikami
                  oddziaływania wychowawczego oraz dobierania najbardziej odpowiednich form organizacyjnych.
                </p>
                <p>
                  Ze swoją wizją wychowania i&nbsp;nowatorskimi rozwiązaniami organizacyjnymi wpisał się w&nbsp;nurt
                  rodzącej się
                  w&nbsp;XIX w. pedagogiki wieku przedszkolnego. Jego koncepcja pedagogiczna do dziś realizowana jest
                  przez
                  Służebniczki oraz stanowi inspirację i&nbsp;podstawę do konstruowania programów integralnego
                  wychowania
                  dziecka w&nbsp;wieku przedszkolnym.
                </p>
                <p>
                  <strong>
                    Edmund Bojanowski został beatyfikowany 13 czerwca 1999 r. w&nbsp;Warszawie przez Papieża Jana Pawła
                    II i&nbsp;jest patronem naszego przedszkola.
                  </strong>
                </p>
              </>
            </SimpleTwoColumnLayout>
          </MainLayout>
  );
}

export default Blog;
