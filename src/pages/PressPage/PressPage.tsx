import { useEffect } from 'react';
import { ContactUs } from '../../components/ui/ContactUs';
import { PressHero } from '../../sections/PressPageSections/PressHero/PressHero';
import { PressIntro } from '../../sections/PressPageSections/PressIntro/PressIntro';
import { PressArticles } from '../../sections/PressPageSections/PressArticles/PressArticles';
import { smoothScrollToTop } from '../../utils/smoothScrollToTop/smoothScrollToTop';

export function PressPage() {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  useEffect(() => {
    smoothScrollToTop();
  }, []);

  return (
    <>
      <main className="mx-auto max-w-8xl 2xl:max-w-[1920px]">
        <PressHero />
        <PressIntro />
        <PressArticles />
      </main>

      <ContactUs phone="34620165833" className="fixed bottom-4 right-4 z-50" />
    </>
  );
}
