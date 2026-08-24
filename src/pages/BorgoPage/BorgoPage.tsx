import { useEffect } from 'react';
import { BorgoAbout } from '../../sections/BorgoPageSections/BorgoAbout/BorgoAbout';
import { BorgoEstate } from '../../sections/BorgoPageSections/BorgoEstate/BorgoEstate';
import { BorgoHero } from '../../sections/BorgoPageSections/BorgoHero/BorgoHero';
import { BorgoMoments } from '../../sections/BorgoPageSections/BorgoMoments/BorgoMoments';
import { BorgoExperiences } from '../../sections/BorgoPageSections/BorgoExperiences/BorgoExperiences';
import { BorgoPhilosophy } from '../../sections/BorgoPageSections/BorgoPhilosophy/BorgoPhilosophy';
import { BorgoCTA } from '../../sections/BorgoPageSections/BorgoCTA/BorgoCTA';
import { ContactUs } from '../../components/ui/ContactUs';
import { smoothScrollToTop } from '../../utils/smoothScrollToTop/smoothScrollToTop';

export function BorgoPage() {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  useEffect(() => {
    smoothScrollToTop();
  }, []);

  return (
    <>
      <main className="mx-auto max-w-8xl 2xl:max-w-[1920px]">
        <BorgoHero />
        <BorgoEstate />
        <BorgoAbout />
        <BorgoMoments />
        <BorgoExperiences />
        <BorgoPhilosophy />
        <BorgoCTA />
      </main>

      <ContactUs phone="34620165833" className="fixed bottom-4 right-4 z-50" />
    </>
  );
}
