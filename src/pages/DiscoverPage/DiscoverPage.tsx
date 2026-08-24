import { useEffect } from 'react';
import { ContactUs } from '../../components/ui/ContactUs';
import { DiscoverHero } from '../../sections/DiscoverPageSections/DiscoverHero/DiscoverHero';
import { DiscoverIntro } from '../../sections/DiscoverPageSections/DiscoverIntro/DiscoverIntro';
import { DiscoverExplore } from '../../sections/DiscoverPageSections/DiscoverExplore/DiscoverExplore';
import { DiscoverLinks } from '../../sections/DiscoverPageSections/DiscoverLinks/DiscoverLinks';
import { DiscoverPlanStay } from '../../sections/DiscoverPageSections/DiscoverPlanStay/DiscoverPlanStay';
import { smoothScrollToTop } from '../../utils/smoothScrollToTop/smoothScrollToTop';

export function DiscoverPage() {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  useEffect(() => {
    smoothScrollToTop();
  }, []);

  return (
    <>
      <main className="mx-auto max-w-8xl 2xl:max-w-[1920px]">
        <DiscoverHero />
        <DiscoverIntro />
        <DiscoverExplore />
        <DiscoverLinks />
        <DiscoverPlanStay />
      </main>

      <ContactUs phone="34620165833" className="fixed bottom-4 right-4 z-50" />
    </>
  );
}
