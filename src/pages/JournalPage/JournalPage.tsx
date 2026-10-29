import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { SEO } from '../../components/SEO/SEO';
import { ContactUs } from '../../components/ui/ContactUs';
import { JournalHero } from '../../sections/JournalPageSections/JournalHero/JournalHero';
import { JournalIntro } from '../../sections/JournalPageSections/JournalIntro/JournalIntro';
import { JournalArticles } from '../../sections/JournalPageSections/JournalArticles/JournalArticles';
import { smoothScrollToTop } from '../../utils/smoothScrollToTop/smoothScrollToTop';

export function JournalPage() {
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
        title={t('seo.journal.title')}
        description={t('seo.journal.description')}
        image="/images/seo/OG-imagine-Discover-Journal.jpg"
      />

      <main className="mx-auto max-w-8xl 2xl:max-w-[1920px]">
        <JournalHero />
        <JournalIntro />
        <JournalArticles />
      </main>

      <ContactUs phone="393484765176" className="fixed bottom-4 right-4 z-50" />
    </>
  );
}
