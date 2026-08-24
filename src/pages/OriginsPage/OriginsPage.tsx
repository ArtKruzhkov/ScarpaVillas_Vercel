import { useEffect } from 'react';
import { OriginsHero } from '../../sections/OriginsPageSections/OriginsHero/OriginsHero';
import { ContactUs } from '../../components/ui/ContactUs';
import { OriginsIntro } from '../../sections/OriginsPageSections/OriginsIntro/OriginsInto';
import { OriginsHistory } from '../../sections/OriginsPageSections/OriginsHistory/OriginsHistory';
import { OriginsMedieval } from '../../sections/OriginsPageSections/OriginsMedieval/OriginsMedieval';
import { OriginsMonvigliero } from '../../sections/OriginsPageSections/OriginsMonvigliero/OriginsMonvigliero';
import { OriginsCTA } from '../../sections/OriginsPageSections/OriginsCTA/OriginsCTA';
import { smoothScrollToTop } from '../../utils/smoothScrollToTop/smoothScrollToTop';

export function OriginsPage() {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  useEffect(() => {
    smoothScrollToTop();
  }, []);

  return (
    <>
      <main className="mx-auto max-w-8xl 2xl:max-w-[1920px]">
        <OriginsHero />
        <OriginsIntro />
        <OriginsHistory />
        <OriginsMedieval />
        <OriginsMonvigliero />
        <OriginsCTA />
      </main>

      <ContactUs phone="34620165833" className="fixed bottom-4 right-4 z-50" />
    </>
  );
}
