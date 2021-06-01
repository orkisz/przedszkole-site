import * as React from 'react';
import BlogLikeLayout from '../../layouts/blog-like-layout';
import MainLayout from '../../layouts/main-layout/main-layout';
import img1 from './history-1.png';
import img2 from './history-2.png';
import img3 from './history-3.png';

const Blog = () => {
  return (
          <MainLayout>
            <BlogLikeLayout title="Historia Przedszkola w&nbsp;Rudawie"
                            subtitle="Zgromadzenie Sióstr Służebniczek założone w&nbsp;1850 roku przez błogosławionego Edmunda Bojanowskiego wyrosło z&nbsp;jego głębokiej troski o&nbsp;los dziecka wiejskiego, pozbawionego w&nbsp;czasach jemu współczesnych elementarnej opieki.">
              <p>Zasadniczym celem tego zgromadzenia było zakładanie i&nbsp;prowadzenie ochronek wiejskich dla dzieci w&nbsp;wieku przedszkolnym, w&nbsp;których siostry nie tylko miały opiekować się dziećmi, ale także troszczyć się
                 o&nbsp;ich rozwój fizyczny, intelektualny i&nbsp;religijno-duchowy. Drugim celem zgromadzenia była służba
                 ludziom chorym, biednym i&nbsp;opuszczonym na wsi.</p>
              <p>Zanim Siostry Służebniczki przybyły do Rudawy, 72 lata posługiwały w&nbsp;sąsiednich Pisarach zaproszone w&nbsp;1869 r przez hrabinę Katarzynę Potocką. Oprócz zajmowania się dziećmi Siostry prowadziły przydomowy
                 ogródek oraz uprawiały pole. Musiały również wypełniać
                 zobowiązania względem fundatorów odpracowując półtora dnia tygodniowo pańszczyzny. Dbały o&nbsp;ukulturalnienie ludności wiejskiej, prowadziły kurs kroju i&nbsp;szycia, oraz spotkania dlakobiet, tzw.
                 wieczornice.</p>
              <figure className="image">
                <img src={img2}/>
                <figcaption>Zakończenie kursu w&nbsp;Pisarach.</figcaption>
              </figure>
              <p>W czasie I&nbsp;wojny światowej ksiądz Józef Łobczowski – proboszcz parafii Rudawa - planował budowę dużej
                 ochronki dla ubogich dzieci w&nbsp;Rudawie. Posługę miały w&nbsp;niej pełnić Siostry Służebniczki, których
                 pracę w&nbsp;Ochronce w&nbsp;Pisarach ksiądz Łobczowski bardzo cenił. W&nbsp;tym
                 celu zakupił grunt pod przyszłe przedszkole o&nbsp;wielkości 3 morgów. Niestety plany budowy, z&nbsp;powodu
                 choroby i&nbsp;śmierci proboszcza, nie doszły do skutku. Dopiero po II wojnie światowej podjęto ostateczną
                 decyzję o&nbsp;budowie domu Sióstr w&nbsp;Rudawie i&nbsp;przejściu z&nbsp;Pisar. Odpowiedzialnym za budowę został wikary
                 parafii Rudawa - ks. Józef Czekaj.</p>
              <p>W maju 1949 roku, na ziemi ofiarowanej Służebniczkom przez księdza Łobczowskiego rozpoczęto budowę
                 nowego domu. Po niemal trzech latach intensywnych prac, przy zaangażowaniu dużej liczby mieszkańców
                 parafii, księży i&nbsp;sióstr, przy olbrzymim nakładzie finansowym jaki pochłonęła budowa, dnia 6 stycznia
                 1952 roku ksiądz proboszcz Marcin Siedlecki, w&nbsp;obecności księdza Józefa Czekaja, dokonał uroczystego
                 poświęcenia domu.</p>
              <figure className="image">
                <img src={img1}/>
                <figcaption>Dzieci z&nbsp;przedszkola „Caritas” z&nbsp;siostrą Lucjaną Grochmal i&nbsp;Władysławą Mandecką.
                </figcaption>
              </figure>
              <p>Ostateczna przeprowadzka i&nbsp;opuszczenie domu w&nbsp;Pisarach odbyło się w&nbsp;maju, kiedy to siostry przewiozły
                 wszystkie sprzęty, meble i&nbsp;zwierzęta. Od 1949 do 1953 roku w&nbsp;Rudawie działało przedszkole Caritas, w&nbsp;którym zatrudniona była s. Lucyna Grochmal. Uczęszczało do
                 niego ok. 40 dzieci w&nbsp;wieku od 3 do 7 lat. Ówczesna antyklerykalna polityka władz państwowych
                 doprowadziła do zamknięcia przedszkola.
                 Zlikwidowanie przedszkola w&nbsp;Rudawie, chociaż bardzo utrudniło wychowanie dzieci z&nbsp;parafii, stało się
                 impulsem do kontynuowania działalności pedagogicznej. Siostry Służebniczki w&nbsp;swoim domu zakonnym
                 katechizowały dzieci, przygotowywały je do przyjęcia Sakramentu I&nbsp;Komunii świętej, opiekowały się
                 dziećmi sypiącymi kwiaty podczas oktawy Bożego Ciała, troszczyły się o&nbsp;osoby chore oraz pomagały w&nbsp;kościele w&nbsp;Rudawie.</p>
              <p>W styczniu 1957 roku po raz pierwszy w&nbsp;nowym domu Służebniczki zorganizowały kurs kroju i&nbsp;kroju.
                 Oprócz wyżej wymienionych zajęć siostry pracowały na swoim polu oraz ogrodzie.</p>
              <figure className="image">
                <img src={img3}/>
                <figcaption>Przywitanie biskupa Franciszka Jopa dnia 8 czerwca 1954 roku przed domem służebniczek w&nbsp;Rudawie.
                </figcaption>
              </figure>
              <p>Po powrocie religii do szkół w&nbsp;roku 1990 siostry uczyły katechezy w&nbsp;Rudawie, Kochanowie, Brzezince, Nielepicach i&nbsp;Niegoszowicach. W&nbsp;każdą
                 sobotę w&nbsp;roku szkolnym do salki katechetycznej przy kościele
                 przychodziły dzieci przedszkolne, gdzie siostra prowadziła dla nich
                 naukę religii.</p>
              <p>Otwierając się na potrzeby lokalnej społeczności związane z&nbsp;brakiem
                 przedszkola, od 1996 r. siostry zaczęły rozbudowywać swój dom
                 zakonny. Najważniejsze prace były związane ze zmianą dachu i&nbsp;przygotowaniem pokoi dla sióstr na poddaszu. Z&nbsp;dotychczasowych
                 pomieszczeń, które użytkowały siostry zrobiono pomieszczenia dla
                 przedszkola. Jedna sala była przeznaczona do codziennych zajęć i&nbsp;zabawy dla dzieci, drugą przeznaczono na sypialnię dla dzieci a&nbsp;trzecią
                 na jadalnię. Oprócz tych pomieszczeń przygotowano szatnię, łazienkę
                 dla dzieci, oraz pomywalnię na naczynia. Po trwającym prawie dwa lata
                 remoncie, w&nbsp;październiku 1998, ochronka w&nbsp;domu Sióstr Służebniczek
                 w&nbsp;Rudawie rozpoczęła swoją działalność.</p>
              <p>Dnia 28 października w&nbsp;obecności dzieci i&nbsp;rodziców, a&nbsp;także licznie
                 przybyłych wiernych odbyła się Msza inaugurująca działalność ochronki,
                 której przewodniczył proboszcz z&nbsp;Rudawy, ksiądz Julian Kóska. Po Mszy
                 świętej dokonał onpoświęcenia wszystkich pomieszczeń ochronkowych.
                 Przełożoną domu, a&nbsp;zarazem dyrektorką przedszkola, została siostra
                 Wiesława Staszczyk. 20 sierpnia 1999 roku dokonano wpisu Ochronki w&nbsp;Rudawie do ewidencji placówek oświatowych.</p>
              <p>Po dzień dzisiejszy siostry, wraz z&nbsp;pracownikami świeckimi, z&nbsp;miłością
                 służą najmłodszym dzieciom, poświęcają swoje siły, stwarzając w&nbsp;Ochronce atmosferę wzajemnego zrozumienia i&nbsp;życzliwości, bowiem jak
                 mawiał bł. Edmund Bojanowski „dzieci to najdroższy skarb Pana
                 Jezusa”. ZV</p>
            </BlogLikeLayout>
          </MainLayout>
  );
}

export default Blog;
