import { useEffect } from 'react';
import { VillasHero } from '../../sections/VillasPageSections/VillasHero/VillasHero';
import { VillasShare } from '../../sections/VillasPageSections/VillasShare/VillasShare';
import { VillasAdviceCTA } from '../../sections/VillasPageSections/VillasAdviceCTA/VillasAdviceCTA';
import { VillasPlanStayCTA } from '../../sections/VillasPageSections/VillasPlanStay/VillasPlanStay';
import { VillasGrid } from '../../sections/VillasPageSections/VillasGrid/VillasGrid';
import { ContactUs } from '../../components/ui/ContactUs';
import { smoothScrollToTop } from '../../utils/smoothScrollToTop/smoothScrollToTop';

export function VillasPage() {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  useEffect(() => {
    smoothScrollToTop();
  }, []);

  return (
    <>
      <main className="mx-auto max-w-8xl 2xl:max-w-[1920px]">
        <VillasHero />
        <VillasShare />
        <VillasGrid />
        <VillasAdviceCTA />
        <VillasPlanStayCTA />
      </main>

      <ContactUs phone="34620165833" className="fixed bottom-4 right-4 z-50" />
    </>
  );
}
