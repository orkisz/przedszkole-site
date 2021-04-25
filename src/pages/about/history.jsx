import * as React from 'react';
import BlogLikeLayout from '../../layouts/blog-like-layout';
import MainLayout from '../../layouts/main-layout/main-layout';
import img1 from './history-1.png';
import img2 from './history-2.png';
import img3 from './history-3.png';

const Blog = () => {
  return (
          <MainLayout>
            <BlogLikeLayout title="Historia Przedszkola w Rudawie"
                            subtitle="Zgromadzenie Sióstr Służebniczek założone w 1850 roku przez błogosławionego Edmunda Bojanowskiego wyrosło z jego głębokiej troski o los dziecka wiejskiego, pozbawionego w czasach jemu współczesnych elementarnej opieki.">
              <p>Zasadniczym celem tego zgromadzenia było zakładanie i prowadzenie ochronek wiejskich dla dzieci w
                 wieku przedszkolnym, w których siostry nie tylko miały opiekować się dziećmi, ale także troszczyć się
                 o ich rozwój fizyczny, intelektualny i religijno-duchowy. Drugim celem zgromadzenia była służba
                 ludziom chorym, biednym i opuszczonym na wsi.</p>
              <p>Zanim Siostry Służebniczki przybyły do Rudawy, 72 lata posługiwały w sąsiednich Pisarach zaproszone w
                 1869 r przez hrabinę Katarzynę Potocką. Oprócz zajmowania się dziećmi Siostry prowadziły przydomowy
                 ogródek oraz uprawiały pole. Musiały również wypełniać
                 zobowiązania względem fundatorów odpracowując półtora dnia tygodniowo pańszczyzny. Dbały o
                 ukulturalnienie ludności wiejskiej, prowadziły kurs kroju i szycia, oraz spotkania dlakobiet, tzw.
                 wieczornice.</p>
              <figure className="image">
                <img src={img2}/>
                <figcaption>Zakończenie kursu w Pisarach.</figcaption>
              </figure>
              <p>W czasie I wojny światowej ksiądz Józef Łobczowski – proboszcz parafii Rudawa - planował budowę dużej
                 ochronki dla ubogich dzieci w Rudawie. Posługę miały w niej pełnić Siostry Służebniczki, których
                 pracę w Ochronce w Pisarach ksiądz Łobczowski bardzo cenił. W tym
                 celu zakupił grunt pod przyszłe przedszkole o wielkości 3 morgów. Niestety plany budowy, z powodu
                 choroby i śmierci proboszcza, nie doszły do skutku. Dopiero po II wojnie światowej podjęto ostateczną
                 decyzję o budowie domu Sióstr w Rudawie i przejściu z Pisar. Odpowiedzialnym za budowę został wikary
                 parafii Rudawa - ks. Józef Czekaj.</p>
              <p>W maju 1949 roku, na ziemi ofiarowanej Służebniczkom przez księdza Łobczowskiego rozpoczęto budowę
                 nowego domu. Po niemal trzech latach intensywnych prac, przy zaangażowaniu dużej liczby mieszkańców
                 parafii, księży i sióstr, przy olbrzymim nakładzie finansowym jaki pochłonęła budowa, dnia 6 stycznia
                 1952 roku ksiądz proboszcz Marcin Siedlecki, w obecności księdza Józefa Czekaja, dokonał uroczystego
                 poświęcenia domu.</p>
              <figure className="image">
                <img src={img1}/>
                <figcaption>Dzieci z przedszkola „Caritas” z siostrą Lucjaną Grochmal i Władysławą Mandecką.
                </figcaption>
              </figure>
              <p>Ostateczna przeprowadzka i opuszczenie domu w Pisarach odbyło się w maju, kiedy to siostry przewiozły
                 wszystkie sprzęty, meble i zwierzęta. Od 1949 do 1953 roku w Rudawie działało przedszkole Caritas, w
                 którym zatrudniona była s. Lucyna Grochmal. Uczęszczało do
                 niego ok. 40 dzieci w wieku od 3 do 7 lat. Ówczesna antyklerykalna polityka władz państwowych
                 doprowadziła do zamknięcia przedszkola.
                 Zlikwidowanie przedszkola w Rudawie, chociaż bardzo utrudniło wychowanie dzieci z parafii, stało się
                 impulsem do kontynuowania działalności pedagogicznej. Siostry Służebniczki w swoim domu zakonnym
                 katechizowały dzieci, przygotowywały je do przyjęcia Sakramentu I Komunii świętej, opiekowały się
                 dziećmi sypiącymi kwiaty podczas oktawy Bożego Ciała, troszczyły się o osoby chore oraz pomagały w
                 kościele w Rudawie.</p>
              <p>W styczniu 1957 roku po raz pierwszy w nowym domu Służebniczki zorganizowały kurs kroju i kroju.
                 Oprócz wyżej wymienionych zajęć siostry pracowały na swoim polu oraz ogrodzie.</p>
              <figure className="image">
                <img src={img3}/>
                <figcaption>Przywitanie biskupa Franciszka Jopa dnia 8 czerwca 1954 roku przed domem służebniczek w
                            Rudawie.
                </figcaption>
              </figure>
              <p>Po powrocie religii do szkół w roku 1990 siostry uczyły katechezy w
                 Rudawie, Kochanowie,Brzezince, Nielepicach i Niegoszowicach. W każdą
                 sobotę w roku szkolnym do salki katechetycznej przy kościele
                 przychodziły dzieci przedszkolne, gdzie siostra prowadziła dla nich
                 naukę religii.</p>
              <p>Otwierając się na potrzeby lokalnej społeczności związane z brakiem
                 przedszkola, od 1996 r. siostry zaczęły rozbudowywać swój dom
                 zakonny. Najważniejsze prace były związane ze zmianą dachu i
                 przygotowaniem pokoi dla sióstr na poddaszu. Z dotychczasowych
                 pomieszczeń, które użytkowały siostry zrobiono pomieszczenia dla
                 przedszkola. Jedna sala była przeznaczona do codziennych zajęć i
                 zabawy dla dzieci, drugą przeznaczono na sypialnię dla dzieci a trzecią
                 na jadalnię. Oprócz tych pomieszczeń przygotowano szatnię, łazienkę
                 dla dzieci, oraz pomywalnię na naczynia. Po trwającym prawie dwa lata
                 remoncie, w październiku 1998, ochronka w domu Sióstr Służebniczek
                 w Rudawie rozpoczęła swoją działalność.</p>
              <p>Dnia 28 października w obecności dzieci i rodziców, a także licznie
                 przybyłych wiernych odbyła się Msza inaugurująca działalność ochronki,
                 której przewodniczył proboszcz z Rudawy, ksiądz Julian Kóska. Po Mszy
                 świętej dokonał onpoświęcenia wszystkich pomieszczeń ochronkowych.
                 Przełożoną domu, a zarazem dyrektorką przedszkola, została siostra
                 Wiesława Staszczyk. 20 sierpnia 1999 roku dokonano wpisu Ochronki w
                 Rudawie do ewidencji placówek oświatowych.</p>
              <p>Po dzień dzisiejszy siostry, wraz z pracownikami świeckimi, z miłością
                 służą najmłodszym dzieciom, poświęcają swoje siły, stwarzając w
                 Ochronce atmosferę wzajemnego zrozumienia i życzliwości, bowiem jak
                 mawiał bł. Edmund Bojanowski „dzieci to najdroższy skarb Pana
                 Jezusa”.ZV</p>
            </BlogLikeLayout>
          </MainLayout>
  );
}

export default Blog;
