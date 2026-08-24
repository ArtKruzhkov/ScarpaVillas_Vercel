import { useEffect } from 'react';
import { ContactUs } from '../../components/ui/ContactUs';
import { JournalHero } from '../../sections/JournalPageSections/JournalHero/JournalHero';
import { JournalIntro } from '../../sections/JournalPageSections/JournalIntro/JournalIntro';
import { JournalArticles } from '../../sections/JournalPageSections/JournalArticles/JournalArticles';
import { smoothScrollToTop } from '../../utils/smoothScrollToTop/smoothScrollToTop';

export function JournalPage() {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  useEffect(() => {
    smoothScrollToTop();
  }, []);

  return (
    <>
      <main className="mx-auto max-w-8xl 2xl:max-w-[1920px]">
        <JournalHero />
        <JournalIntro />
        <JournalArticles />
      </main>

      <ContactUs phone="34620165833" className="fixed bottom-4 right-4 z-50" />
    </>
  );
}
