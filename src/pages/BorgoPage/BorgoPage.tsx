import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { SEO } from '../../components/SEO/SEO';
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
  const { t } = useTranslation();

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  useEffect(() => {
    smoothScrollToTop();
  }, []);

  return (
    <>
      <SEO
        title={t('seo.borgo.title')}
        description={t('seo.borgo.description')}
        image="/images/seo/OG-image-Borgo.jpg"
      />

      <main className="mx-auto max-w-8xl 2xl:max-w-[1920px]">
        <BorgoHero />
        <BorgoEstate />
        <BorgoAbout />
        <BorgoMoments />
        <BorgoExperiences />
        <BorgoPhilosophy />
        <BorgoCTA />
      </main>

      <ContactUs phone="393484765176" className="fixed bottom-4 right-4 z-50" />
    </>
  );
}
