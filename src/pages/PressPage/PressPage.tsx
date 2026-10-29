import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { SEO } from '../../components/SEO/SEO';
import { ContactUs } from '../../components/ui/ContactUs';
import { PressHero } from '../../sections/PressPageSections/PressHero/PressHero';
import { PressIntro } from '../../sections/PressPageSections/PressIntro/PressIntro';
import { PressArticles } from '../../sections/PressPageSections/PressArticles/PressArticles';
import { smoothScrollToTop } from '../../utils/smoothScrollToTop/smoothScrollToTop';

export function PressPage() {
  const { t } = useTranslation();

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  useEffect(() => {
    smoothScrollToTop();
  }, []);

  return (
    <>
      <SEO title={t('seo.press.title')} description={t('seo.press.description')} />

      <main className="mx-auto max-w-8xl 2xl:max-w-[1920px]">
        <PressHero />
        <PressIntro />
        <PressArticles />
      </main>

      <ContactUs phone="393484765176" className="fixed bottom-4 right-4 z-50" />
    </>
  );
}
