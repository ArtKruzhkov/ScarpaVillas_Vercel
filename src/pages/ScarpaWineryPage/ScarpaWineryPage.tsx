import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { SEO } from '../../components/SEO/SEO';
import { ContactUs } from '../../components/ui/ContactUs';
import { ScarpaWineryHero } from '../../sections/ScarpaWineryPageSections/ScarpaWineryHero/ScarpaWineryHero';
import { ScarpaWineryIntro } from '../../sections/ScarpaWineryPageSections/ScarpaWineryIntro/ScarpaWineryIntro';
import { ScarpaWineryLove } from '../../sections/ScarpaWineryPageSections/ScarpaWineryLove/ScarpaWineryLove';
import { ScarpaWineryEvolution } from '../../sections/ScarpaWineryPageSections/ScarpaWineryEvolution/ScarpaWineryEvolution';
import { ScarpaWineryProcess } from '../../sections/ScarpaWineryPageSections/ScarpaWineryProcess/ScarpaWineryProcess';
import { ScarpaWineryVineyards } from '../../sections/ScarpaWineryPageSections/ScarpaWineryVineyards/ScarpaWineryVineyards';
import { ScarpaWineryCellar } from '../../sections/ScarpaWineryPageSections/ScarpaWineryCellar/ScarpaWineryCellar';
import { ScarpaWineryVillas } from '../../sections/ScarpaWineryPageSections/ScarpaWineryVillas/ScarpaWineryVillas';
import { smoothScrollToTop } from '../../utils/smoothScrollToTop/smoothScrollToTop';
import { ScarpaWineryCTA } from '../../sections/ScarpaWineryPageSections/ScarpaWineryCTA/ScarpaWineryCTA';

export function ScarpaWineryPage() {
  const { t } = useTranslation();

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  useEffect(() => {
    smoothScrollToTop();
  }, []);

  return (
    <>
      <SEO title={t('seo.scarpaWinery.title')} description={t('seo.scarpaWinery.description')} />

      <main className="mx-auto max-w-8xl 2xl:max-w-[1920px]">
        <ScarpaWineryHero />
        <ScarpaWineryIntro />
        <ScarpaWineryLove />
        <ScarpaWineryEvolution />
        <ScarpaWineryProcess />
        <ScarpaWineryCTA />
        <ScarpaWineryVineyards />
        <ScarpaWineryCellar />
        <ScarpaWineryVillas />
      </main>

      <ContactUs phone="393484765176" className="fixed bottom-4 right-4 z-50" />
    </>
  );
}
