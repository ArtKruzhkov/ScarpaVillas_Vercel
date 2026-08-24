import { useEffect } from 'react';
import { ContactUs } from '../../components/ui/ContactUs';
import { RegionHero } from '../../sections/RegionPageSection/RegionHero/RegionHero';
import { RegionIntro } from '../../sections/RegionPageSection/RegionIntro/RegionIntro';
import { RegionExperience } from '../../sections/RegionPageSection/RegionExperience/RegionExperience';
import { RegionFeature } from '../../sections/RegionPageSection/RegionFeature/RegionFeature';
import {
  wineLandscapeSection,
  villagesHistorySection,
  foodTraditionsSection,
  beyondRoutesSection,
} from '../../data/regionFeatureSections';
import { RegionPlanStay } from '../../sections/RegionPageSection/RegionPlanStay/RegionPlanStay';
import { smoothScrollToTop } from '../../utils/smoothScrollToTop/smoothScrollToTop';

export function RegionPage() {
  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      const id = hash.replace('#', '');

      requestAnimationFrame(() => {
        const element = document.getElementById(id);

        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      });

      return;
    }

    // window.scrollTo(0, 0);
    smoothScrollToTop();
  }, []);

  return (
    <>
      <main className="mx-auto max-w-8xl 2xl:max-w-[1920px]">
        <RegionHero />
        <RegionIntro />
        <RegionExperience />
        <RegionFeature {...wineLandscapeSection} />
        <RegionFeature {...villagesHistorySection} />
        <RegionFeature {...foodTraditionsSection} />
        <RegionFeature {...beyondRoutesSection} />
        <RegionPlanStay />
      </main>

      <ContactUs phone="34620165833" className="fixed bottom-4 right-4 z-50" />
    </>
  );
}
