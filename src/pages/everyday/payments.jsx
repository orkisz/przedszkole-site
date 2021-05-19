import * as React from 'react';
import MainLayout from '../../layouts/main-layout/main-layout';
import SimpleTwoColumnLayout from '../../layouts/simple-two-column-layout';

const Blog = () => {
  return (
          <MainLayout>
            <SimpleTwoColumnLayout title="Opłaty">
              <>
                <p>Czesne w przedszkolu wynosi 130 zł/mc. W czesne wliczona jest opłata za zajęcia dodatkowe, warsztaty,
                   teatrzyki. Dzienna stawka żywieniowa przelewana po zakończonym miesiącu do firmy Cateringowej wynosi
                   12
                   zł. Dodatkowo rodzice dwa razy w roku uiszczają 30 zł opłaty na tzw. wyprawkę, w którą jest wliczony
                   zakup artykułów plastycznych, oraz higienicznych. Na początku roku szkolnego rodzice zakupują
                   podręczniki, oraz opłacają ubezpieczenie dziecka.</p>
              </>
              <>
                <p>Dzieci mają możliwość uczestniczyć w terapii logopedycznej. Cotygodniowe, półgodzinne spotkanie
                   opłacane przez rodziców kosztuje 25 zł. </p>
                <p>Dla rodziców pragnących wychowywać dzieci w duchu wartości chrześcijańskich, którzy borykają się z
                   trudnościami finansowymi a chcą posłać swoje dziecko do naszego przedszkola - jest możliwe zwolnienie
                   z
                   części lub całości czesnego.</p>
              </>
            </SimpleTwoColumnLayout>
          </MainLayout>
  );
}

export default Blog;
