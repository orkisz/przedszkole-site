import * as React from 'react';
import MainLayout from '../../layouts/main-layout/main-layout';
import Header from '../../layouts/partials/header';
import image1 from './additional-lessons-assets/image-1.png';
import image2 from './additional-lessons-assets/image-2.png';
import image3 from './additional-lessons-assets/image-3.png';
import image4 from './additional-lessons-assets/image-4.png';
import image5 from './additional-lessons-assets/image-5.png';
import image6 from './additional-lessons-assets/image-6.png';
import * as styles from './additional-lessons.module.scss';

const AdditionalLessons = () => {
  return (
          <MainLayout>

              <Header title="Zajęcia dodatkowe"
                      subtitle="Oprócz codziennych zajęć dydaktycznych staramy się, by każdy dzień w przedszkolu był dla dzieci atrakcyjny. Stąd potrzeba poszerzania naszej oferty o zajęcia dodatkowe"/>
            <div className="container">
              <div className="columns is-variable is-8">
                <div className="column is-5-desktop is-full-touch is-offset-1-desktop">
                  <p>
                    Zajęcia dodatkowe mają za zadanie:
                  </p>
                  <ul className="round mt-3">
                    <li>Stymulowanie harmonijnego rozwoju dziecka.</li>
                    <li>Przygotowanie do efektywnego przyswajania wiedzy poprzez pobudzanie zmysłów dziecka.</li>
                    <li>Wspomaganie rozwoju ruchowego, nauka koncentracji,
                        logicznego myślenia i ćwiczenie pamięci.
                    </li>
                    <li>Zabawa i kontakt z rówieśnikami.</li>
                    <li>Kształtowanie osobowości dziecka.</li>
                  </ul>
                </div>
                <div className={`column is-5-desktop ${styles.imageColumn}`}>
                  <figure className="image fancy-image yellow fancy-reverse is-4by3">
                    <img src={image1}
                         alt="Zajęcia dodatkowe - cel"/>
                  </figure>
                </div>
              </div>
            </div>
            <div className={styles.fullWidth}>
              <div className={styles.leftBg}/>
              <div className={styles.rightBg}/>
              <div className="container pt-5 pb-6 my-6">
                <div className="columns">
                  <div className="column is-5 is-offset-1 has-text-white">
                    <p>
                      Ponadto organizujemy dla dzieci:
                    </p>
                    <ul className="round mt-5">
                      <li>teatrzyki</li>
                      <li>warsztaty ceramiczne</li>
                      <li>doświadczenia, pokazy</li>
                      <li>wycieczki do ciekawych miejsc w regionie</li>
                      <li>spotkania ze zwierzętami</li>
                      <li>konkursy</li>
                      <li>bale</li>
                    </ul>
                  </div>
                  <div className={`column is-5 has-text-white ${styles.hasTextDefaultTablet}`}>
                    <div className={`${styles.hasDesktopLeftPadding5}`}>
                      <p>
                        W naszym przedszkolu ważni są także rodzice, mogą uczestniczyć w życiu Ochronki poprzez:
                      </p>
                      <ul className="round mt-5">
                        <li>zebrania</li>
                        <li>dni i zajęcia otwarte</li>
                        <li>skupienia</li>
                        <li>akademie i występy</li>
                        <li>pikniki rodzinne</li>
                        <li>prowadzenie zajęć dla dzieci</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="columns">
                <div className="column is-8 is-offset-2 has-text-centered">
                  <h2>W naszym przedszkolu realizowane są
                      następujące zajęcia dodatkowe:</h2>
                </div>
              </div>
              <div className={`columns is-variable is-8 mb-6 ${styles.lesson}`}>
                <div className={`column is-7-desktop is-full-touch ${styles.lessonDescription}`}>
                  <article>
                    <header className="my-custom-color-blue"><p>Religia</p></header>
                    <p>Na cotygodniowej katechezie pragniemy poznawać Pana Boga, aby poznawszy Go coraz bardziej kochać,
                       a kochając chcieć Go naśladować. Poznawanie Pana Boga nie ograniczamy jedynie do dwu kwadransów w
                       tygodniu, ale – zgodnie z zaleceniami bł. Edmunda Bojanowskiego –wychowanie religijne jest ściśle
                       zespolone z wychowaniem ogólnym ibazuje na naturalnych doświadczeniach dzieci.</p>
                    <p>W trakcie codziennego przebywania z dziećmi wprowadzamy je w świat wartości i symboli
                       religijnych, celebrujemy obrzędy związane z rokiem liturgicznym, razem się modlimy. Pragniemy,
                       aby dzieci doświadczyły spotkania z Bogiem bliskim, obecnym, kochającym. Świadomi nadrzędnej roli
                       rodziców w kształtowaniu się wiary dziecka stwarzamy okazję, aby także rodzice mogli pogłębiać
                       więź z Bogiem.</p>
                  </article>
                </div>
                <div className={`column is-5-desktop ${styles.imageColumn}`}>
                  <figure className="image is-4by3 fancy-image fancy-reverse blue">
                    <img src={image2}
                         alt="Religia"/>
                  </figure>
                </div>
              </div>
              <div className={`columns is-variable is-8 mb-6 ${styles.lesson}`}>
                <div className={`column is-5-desktop ${styles.imageColumn}`}>
                  <figure className="image is-4by3 fancy-image yellow">
                    <img src={image3}
                         alt="Język angielski"/>
                  </figure>
                </div>
                <div className={`column is-7-desktop is-full-touch ${styles.lessonDescription}`}>
                  <article>
                    <header className="my-custom-color-yellow"><p>Język angielski</p></header>
                    <p>W naszym przedszkolu zajęcia z języka angielskiego prowadzone są w każdej grupie wiekowej dwa
                       razy w tygodniu. Program bazuje na podejściu multisensorycznym, które ma na celu aktywizację
                       wszystkich zmysłów. Wykorzystuje metodę reagowania całym ciałem (TPR).</p>
                    <p>Nauka języka angielskiego w naszym przedszkolu to przede wszystkim świetna zabawa. Przy
                       poznawaniu i utrwalaniu nowego słownictwa oraz zwrotów i wyrażeń dzieciom pomagają atrakcyjne
                       pomoce dydaktyczne. Stałymi elementami zajęć są anglojęzyczne piosenki i rymowanki, historyjki
                       obrazkowe, anglojęzyczne książeczki, zabawy ruchowe, drama oraz gry i zabawy językowe takie jak:
                       bingo, memory,
                       dobble.</p>
                    <p>Zajęcia prowadzone są w języku angielskim, co sprzyja osłuchaniu się dzieci z akcentem i
                       intonacją języka angielskiego, co w późniejszym okresie przekłada się na lepsze wyniki w nauce
                       języka.</p>
                  </article>
                </div>
              </div>
              <div className={`columns is-variable is-8 mb-6 ${styles.lesson}`}>
                <div className={`column is-7-desktop is-full-touch ${styles.lessonDescription}`}>
                  <article>
                    <header className="my-custom-color-red"><p>Gimnastyka</p></header>
                    <p>Dzieci w wieku przedszkolnym mają niewyczerpane pokłady energii, dlatego też uwielbiają się
                       gimnastykować. Na zajęciach gimnastyki ćwiczą ogólną sprawność, koordynację ruchową, wykonują
                       ćwiczenia przeciwko płaskostopiu, korygują wady postawy a także uczestniczą w ćwiczeniach z
                       elementem
                       współzawodnictwa (to lubią najbardziej). Oprócz ćwiczeń rozwijają także samodzielność podczas
                       przebierania się w stroje gimnastyczne, dbając przy tym o porządek.</p>
                    <p>Doskonale znają hasło: Sport to zdrowie!</p>
                  </article>
                </div>
                <div className={`column is-5-desktop ${styles.imageColumn}`}>
                  <figure className="image is-4by3 fancy-image fancy-reverse red">
                    <img src={image4}
                         alt="Gimnastyka"/>
                  </figure>
                </div>
              </div>
              <div className={`columns is-variable is-8 mb-6 ${styles.lesson}`}>
                <div className={`column is-5-desktop ${styles.imageColumn}`}>
                  <figure className="image is-4by3 fancy-image green">
                    <img src={image5}
                         alt="Rytmika"/>
                  </figure>
                </div>
                <div className={`column is-7-desktop is-full-touch ${styles.lessonDescription}`}>
                  <article>
                    <header className="my-custom-color-green"><p>Rytmika</p></header>
                    <p>Pedagogika jest sztuką wychowania. Jako sztuka przemawia do duszy i uczuć rozwijającego się
                       człowieka. Spośród różnych sztuk, to właśnie muzyka odgrywa istotną rolę w wychowaniu.</p>
                    <p>Korzyści wychowawcze, jakie niesie ze sobą oddziaływanie muzyki, są trudne do przecenienia.
                       Rytmika jest techniką wychowania muzycznego, która kształtuje kulturę muzyczną i słuch dziecka.
                       To różnego rodzaju ćwiczenia muzyczno-ruchowe, wspierające także rozwój intelektualny, fizyczny,
                       emocjonalny. Zajęcia rytmiczne uczą koncentracji, poprawiają pamięć, zachęcają do aktywności
                       ruchowej, mają korzystny wpływ na motorykę i orientację przestrzenną u dzieci. Podczas zajęć
                       rytmiki w naszym przedszkolu dzieci uczą się piosenek, prostych układów tanecznych, grają na
                       instrumentach perkusyjnych, zyskują umiejętność pracy w grupie, a także mają kontakt z muzyką na
                       żywo poprzez grę na pianinie.
                    </p>
                    <p>W trakcie zajęć wykorzystywane są: chusta Klanzy, kolorowe chustki, piórka, kolorowe wstążeczki
                       oraz inne akcesoria pobudzające wyobraźnię. Dzieci uwielbiają zabawę z muzyką!
                    </p>
                  </article>
                </div>
              </div>
              <div className={`columns is-variable is-8 mb-6 ${styles.lesson}`}>
                <div className={`column is-7-desktop is-full-touch ${styles.lessonDescription}`}>
                  <article>
                    <header className="my-custom-color-blue"><p>Arteterapia</p></header>
                    <p>Arteterapia jest to terapia za pomocą sztuki. Działalność artystyczna nie tylko korzystnie wpływa
                       na rozwój psychiczny i fizyczny, ale pozwala także dać upust emocjom oraz odreagować stres.
                       Stanowi ona remedium na problem nadmiernej nieśmiałości czy agresji.
                    </p>
                    <p>Ze względu na sposób wykorzystania sztuki wyróżniamy: choreoterapie, muzykoterapie,
                       biblioterapie, dramoterapie, plastykoterapie. W trakcie zajęć arteterapii w naszym przedszkolu
                       łączymy w odpowiedni sposób poszczególne elementy sztuki dając tym samym dzieciom możliwość
                       wyrażania siebie w sposób
                       nieszablonowy, rozwijania kreatywności, wyrażania emocji – a wszystko to w klimacie świetnej
                       zabawy.</p>
                  </article>
                </div>
                <div className={`column is-5-desktop ${styles.imageColumn}`}>
                  <figure className="image is-4by3 fancy-image fancy-reverse blue">
                    <img src={image6}
                         alt="Arteterapia"/>
                  </figure>
                </div>
              </div>
            </div>
          </MainLayout>
  );
}

export default AdditionalLessons;
