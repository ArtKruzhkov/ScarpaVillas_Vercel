import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { SEO } from '../../components/SEO/SEO';
import { ContactUs } from '../../components/ui/ContactUs';
import { PeopleHero } from '../../sections/PeoplePageSections/PeopleHero/PeopleHero';
import { PeopleIntro } from '../../sections/PeoplePageSections/PeopleIntro/PeopleIntro';
import { PeopleTeam } from '../../sections/PeoplePageSections/PeopleTeam/PeopleTeam';
import { smoothScrollToTop } from '../../utils/smoothScrollToTop/smoothScrollToTop';

export function PeoplePage() {
  const { t } = useTranslation();

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  useEffect(() => {
    smoothScrollToTop();
  }, []);

  return (
    <>
      <SEO title={t('seo.people.title')} description={t('seo.people.description')} />

      <main className="mx-auto max-w-8xl 2xl:max-w-[1920px]">
        <PeopleHero />
        <PeopleIntro />
        <PeopleTeam />
      </main>

      <ContactUs phone="393484765176" className="fixed bottom-4 right-4 z-50" />
    </>
  );
}
