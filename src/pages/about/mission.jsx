import * as React from 'react';
import MainLayout from '../../layouts/main-layout/main-layout';
import SimpleTwoColumnLayout from '../../layouts/simple-two-column-layout';

const Blog = () => {
  return (
          <MainLayout>
            <SimpleTwoColumnLayout title="Misja przedszkola"
                                   subtitle="Nasze Przedszkole wspiera rodziców w&nbsp;integralnym wychowaniu dzieci w&nbsp;duchu wartości chrześcijańskich wg koncepcji pedagogicznej bł. Edmunda Bojanowskiego.">
              <>
                <p>
                  Wychowawcy i&nbsp;cała społeczność przedszkola dbają o&nbsp;rodzinną atmosferę w&nbsp;placówce, w&nbsp;której dzieci
                  wychowywane są w&nbsp;oparciu o&nbsp;patriotyzm i&nbsp;szacunek dla tradycji, oraz poprzez bezpośrednie doświadczenia
                  i&nbsp;działania. Indywidualne podejście do dziecka pomaga nam odkryć jego zdolności, wspomagać w&nbsp;trudnościach i&nbsp;wychowywać do twórczej współpracy z&nbsp;innymi. Pragniemy wychować dzieci świadome własnej
                  wartości i&nbsp;wrażliwe na potrzeby innych. Wysoka jakość kształcenia, prymat zabawy i&nbsp;ruchu oraz ciekawe
                  metody i&nbsp;formy zajęć sprawiają, że dzieci czują się u&nbsp;nas bezpieczne i&nbsp;szczęśliwe.
                </p>
                <p>
                  Wierzymy w&nbsp;miłość i&nbsp;dobro zasiane przez Boga w&nbsp;sercu każdego człowieka. Pragniemy by nasi podopieczni
                  czuli się kochani i&nbsp;akceptowani, by mogli z&nbsp;odwagą i&nbsp;twórczo podejmować życiowe wyzwania i&nbsp;rozwijać
                  się fizycznie, intelektualnie i&nbsp;duchowo.
                </p>
              </>
              <>
                <p>
                  Naszą troską otaczamy nie tylko
                  dzieci, ale także ich rodziny, chcemy angażować rodziców w&nbsp;życie przedszkola, by świadomie i&nbsp;odpowiedzialnie wychowywali dzieci.
                </p>
                <p>
                  Chcemy, by nasze przedszkole kształciło dzieci na wysokim poziomie, zarówno intelektualnie, fizycznie
                  jak i&nbsp;duchowo, by odważnie i&nbsp;twórczo weszli w&nbsp;nowe obowiązki. Pragniemy, by w&nbsp;naszym przedszkolu
                  dzieci, rodzice i&nbsp;pracownicy tworzyli wspólnotę, w&nbsp;której mogą się rozwijać, wzrastać duchowo i&nbsp;współdziałać w&nbsp;oparciu o&nbsp;wiarę i&nbsp;najwyższe wartości, mając na względzie troskę o&nbsp;spójne wychowanie
                  najmłodszego pokolenia.
                </p>
              </>
            </SimpleTwoColumnLayout>
          </MainLayout>
  );
}

export default Blog;
