import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { SEO } from '../../components/SEO/SEO';
import { VillasHero } from '../../sections/VillasPageSections/VillasHero/VillasHero';
import { VillasShare } from '../../sections/VillasPageSections/VillasShare/VillasShare';
import { VillasAdviceCTA } from '../../sections/VillasPageSections/VillasAdviceCTA/VillasAdviceCTA';
import { VillasPlanStayCTA } from '../../sections/VillasPageSections/VillasPlanStay/VillasPlanStay';
import { VillasGrid } from '../../sections/VillasPageSections/VillasGrid/VillasGrid';
import { ContactUs } from '../../components/ui/ContactUs';
import { smoothScrollToTop } from '../../utils/smoothScrollToTop/smoothScrollToTop';

export function VillasPage() {
  const { t } = useTranslation();
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  useEffect(() => {
    smoothScrollToTop();
  }, []);

  return (
    <>
      <SEO title={t('seo.villas.title')} description={t('seo.villas.description')} />

      <main className="mx-auto max-w-8xl 2xl:max-w-[1920px]">
        <VillasHero />
        <VillasShare />
        <VillasGrid />
        <VillasAdviceCTA />
        <VillasPlanStayCTA />
      </main>

      <ContactUs phone="393484765176" className="fixed bottom-4 right-4 z-50" />
    </>
  );
}
