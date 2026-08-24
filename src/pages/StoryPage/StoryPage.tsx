import { useEffect } from 'react';
import { StoryChapters } from '../../sections/StoryPageSections/StoryChapters/StoryChapters';
import { StoryHero } from '../../sections/StoryPageSections/StoryHero/StoryHero';
import { StoryVillasCTA } from '../../sections/StoryPageSections/StoryVillasCTA/StoryVillasCTA';
import { ContactUs } from '../../components/ui/ContactUs';
import { smoothScrollToTop } from '../../utils/smoothScrollToTop/smoothScrollToTop';

export function StoryPage() {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  useEffect(() => {
    smoothScrollToTop();
  }, []);

  return (
    <>
      <main className="mx-auto max-w-8xl 2xl:max-w-[1920px]">
        <StoryHero />
        <StoryChapters />
        <StoryVillasCTA />
      </main>

      <ContactUs phone="34620165833" className="fixed bottom-4 right-4 z-50" />
    </>
  );
}
