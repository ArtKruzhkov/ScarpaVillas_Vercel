import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { SEO } from '../../components/SEO/SEO';
import { StoryChapters } from '../../sections/StoryPageSections/StoryChapters/StoryChapters';
import { StoryHero } from '../../sections/StoryPageSections/StoryHero/StoryHero';
import { StoryVillasCTA } from '../../sections/StoryPageSections/StoryVillasCTA/StoryVillasCTA';
import { ContactUs } from '../../components/ui/ContactUs';
import { smoothScrollToTop } from '../../utils/smoothScrollToTop/smoothScrollToTop';

export function StoryPage() {
  const { t } = useTranslation();

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  useEffect(() => {
    smoothScrollToTop();
  }, []);

  return (
    <>
      <SEO title={t('seo.story.title')} description={t('seo.story.description')} />

      <main className="mx-auto max-w-8xl 2xl:max-w-[1920px]">
        <StoryHero />
        <StoryChapters />
        <StoryVillasCTA />
      </main>

      <ContactUs phone="393484765176" className="fixed bottom-4 right-4 z-50" />
    </>
  );
}
