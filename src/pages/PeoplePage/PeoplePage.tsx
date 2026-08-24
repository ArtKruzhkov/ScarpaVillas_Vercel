import { useEffect } from 'react';
import { ContactUs } from '../../components/ui/ContactUs';
import { PeopleHero } from '../../sections/PeoplePageSections/PeopleHero/PeopleHero';
import { PeopleIntro } from '../../sections/PeoplePageSections/PeopleIntro/PeopleIntro';
import { PeopleTeam } from '../../sections/PeoplePageSections/PeopleTeam/PeopleTeam';
import { smoothScrollToTop } from '../../utils/smoothScrollToTop/smoothScrollToTop';

export function PeoplePage() {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  useEffect(() => {
    smoothScrollToTop();
  }, []);

  return (
    <>
      <main className="mx-auto max-w-8xl 2xl:max-w-[1920px]">
        <PeopleHero />
        <PeopleIntro />
        <PeopleTeam />
      </main>

      <ContactUs phone="34620165833" className="fixed bottom-4 right-4 z-50" />
    </>
  );
}
