import * as React from 'react';
import MainLayout from '../../layouts/main-layout/main-layout';
import SimpleTwoColumnLayout from '../../layouts/simple-two-column-layout';

const Blog = () => {
  return (
          <MainLayout>
            <SimpleTwoColumnLayout title="Misja przedszkola"
                                   subtitle="Nasze Przedszkole wspiera rodziców w integralnym wychowaniu dzieci w duchu wartości chrześcijańskich wg koncepcji pedagogicznej bł. Edmunda Bojanowskiego.">
              <>
                <p>
                  Wychowawcy i cała społeczność przedszkola dbają o rodzinną atmosferę w placówce, w której dzieci
                  wychowywane są w oparciu o patriotyzm i szacunek dla tradycji, oraz poprzez bezpośrednie doświadczenia
                  i działania. Indywidualne podejście do dziecka pomaga nam odkryć jego zdolności, wspomagać w
                  trudnościach i wychowywać do twórczej współpracy z innymi. Pragniemy wychować dzieci świadome własnej
                  wartości i wrażliwe na potrzeby innych. Wysoka jakość kształcenia, prymat zabawy i ruchu oraz ciekawe
                  metody i formy zajęć sprawiają, że dzieci czują się u nas bezpieczne i szczęśliwe.
                </p>
                <p>
                  Wierzymy w miłość i dobro zasiane przez Boga w sercu każdego człowieka. Pragniemy by nasi podopieczni
                  czuli się kochani i akceptowani, by mogli z odwagą i twórczo podejmować życiowe wyzwania i rozwijać
                  się fizycznie, intelektualnie i duchowo.
                </p>
              </>
              <>
                <p>
                  Naszą troską otaczamy nie tylko
                  dzieci, ale także ich rodziny, chcemy angażować rodziców w życie przedszkola, by świadomie i
                  odpowiedzialnie wychowywali dzieci.
                </p>
                <p>
                  Chcemy, by nasze przedszkole kształciło dzieci na wysokim poziomie, zarówno intelektualnie, fizycznie
                  jak i duchowo, by odważnie i twórczo weszli w nowe obowiązki. Pragniemy, by w naszym przedszkolu
                  dzieci, rodzice i pracownicy tworzyli wspólnotę, w której mogą się rozwijać, wzrastać duchowo i
                  współdziałać w oparciu o wiarę i najwyższe wartości, mając na względzie troskę o spójne wychowanie
                  najmłodszego pokolenia.
                </p>
              </>
            </SimpleTwoColumnLayout>
          </MainLayout>
  );
}

export default Blog;
