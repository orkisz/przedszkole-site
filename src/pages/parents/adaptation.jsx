import * as React from 'react';
import MainLayout from '../../layouts/main-layout/main-layout';
import SimpleTwoColumnLayout from '../../layouts/simple-two-column-layout';

const Blog = () => {
  return (
          <MainLayout>
            <SimpleTwoColumnLayout title="Adaptacja"
                                   subtitle="Kilka wskazówek, które ułatwią dziecku start w&nbsp;nowym środowisku">
              <>
                <p>Posłanie dziecka do przedszkola jest zazwyczaj dużym przeżyciem dla rodziców, którzy często po raz
                   pierwszy oddają swój największy Skarb pod opiekę osób obcych, których dziecko nie zna. Naturalną
                   reakcją są więc obawy, które mogą pojawić się u&nbsp;Rodziców w&nbsp;takiej sytuacji, a&nbsp;obecnie, w&nbsp;związku z&nbsp;koronawirusem, mogą być większe.</p>
                <p><strong>Warto zatroszczyć się, aby rozmawiać o&nbsp;tych obawach podczas nieobecności
                           dziecka.</strong> Dziecko czuje się bezpieczne widząc, że rodzice są spokojni o&nbsp;jego los.
                                             Warto wcześniej opowiadać dzieciom o&nbsp;przedszkolu, przedstawiać pozytywny
                                             obraz przedszkola, jeśli Państwo chodzili do przedszkola to można odwołać
                                             się do swoich pozytywnych wspomnień, pokazać zdjęcia itp. Istotnym
                                             elementem dalszego przygotowania do pójścia maluszka do przedszkola jest
                                             nauka samodzielności.</p>
                <p><strong>Przekroczenie progu przedszkola jest krokiem milowym</strong> w&nbsp;rozwoju dziecka, które ma
                                                                                         szansę na doświadczenie swojej
                                                                                         niezależności, odrębności, ale
                                                                                         i&nbsp;bycia członkiem grupy,
                                                                                         wspólnej zabawy, dzielenia się,
                                                                                         troski o&nbsp;kolegów. Aby łatwiej
                                                                                         dziecku było zaadoptować się w&nbsp;nowej rzeczywistości naukę
                                                                                         samodzielności należy zacząć
                                                                                         już teraz!</p>
              </>
              <>
                <p>
                  Pozwólcie Waszemu maluszkowi samodzielnie spożywać posiłki, zakładać i&nbsp;zdejmować podstawowe elementy
                  garderoby (spodnie, bluzka, kurteczka, czapka), samodzielnie zakładać pantofle. Pantofle do
                  przedszkola można zakupić wcześniej, tak aby dziecko wiedziało, że to są jego buciki, oraz nauczyło
                  się je zakładać i&nbsp;zdejmować. Praktyka pokazuje, że najlepiej sprawdzają się sandałki na rzepy, które
                  trzymają się dobrze stopy i&nbsp;są łatwe w&nbsp;zakładaniu. Warto uczyć też dziecko proszenia o&nbsp;pomoc,
                  informowania o&nbsp;swoich potrzebach, tak aby gdy znajdzie się w&nbsp;przedszkolu potrafiło poprosić o&nbsp;pomoc,
                  ponieważ - mimo, że dokładamy wszelkich starań, aby odgadnąć potrzeby maluszka - jest dużo łatwiej i&nbsp;pewniej, że czegoś nie przeoczymy, gdy dziecko będzie samo potrafiło upomnieć się o&nbsp;to co mu jest
                  potrzebne, czego brakuje, poprosić o&nbsp;dokładkę picia, lub powiedzieć, że chce skorzystać z&nbsp;toalety.</p>
                <p>Zazwyczaj w&nbsp;trzy ostatnie dni robocze sierpnia organizujemy zajęcia adaptacyjne, w&nbsp;trakcie których
                   dzieci, razem z&nbsp;rodzicami, poznają przedszkole, salę maluszków, plac zabaw, oraz po raz pierwszy
                   spotykają się z&nbsp;nauczycielami.</p>
              </>
            </SimpleTwoColumnLayout>
          </MainLayout>
  );
}

export default Blog;
