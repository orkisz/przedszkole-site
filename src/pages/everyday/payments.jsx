import * as React from 'react';
import MainLayout from '../../layouts/main-layout/main-layout';
import SimpleTwoColumnLayout from '../../layouts/simple-two-column-layout';

const Blog = () => {
  return (
          <MainLayout>
            <SimpleTwoColumnLayout title="Opłaty">
              <>
                <p>Czesne w&nbsp;przedszkolu wynosi 130 zł/mc. W&nbsp;czesne wliczona jest opłata za zajęcia dodatkowe, warsztaty,
                   teatrzyki. Dzienna stawka żywieniowa przelewana po zakończonym miesiącu do firmy Cateringowej wynosi
                   12
                   zł. Dodatkowo rodzice dwa razy w&nbsp;roku uiszczają 30 zł opłaty na tzw. wyprawkę, w&nbsp;którą jest wliczony
                   zakup artykułów plastycznych, oraz higienicznych. Na początku roku szkolnego rodzice zakupują
                   podręczniki, oraz opłacają ubezpieczenie dziecka.</p>
              </>
              <>
                <p>Dzieci mają możliwość uczestniczyć w&nbsp;terapii logopedycznej. Cotygodniowe, półgodzinne spotkanie
                   opłacane przez rodziców kosztuje 25 zł. </p>
                <p>Dla rodziców pragnących wychowywać dzieci w&nbsp;duchu wartości chrześcijańskich, którzy borykają się z&nbsp;trudnościami finansowymi a&nbsp;chcą posłać swoje dziecko do naszego przedszkola - jest możliwe zwolnienie
                   z&nbsp;części lub całości czesnego.</p>
              </>
            </SimpleTwoColumnLayout>
          </MainLayout>
  );
}

export default Blog;
