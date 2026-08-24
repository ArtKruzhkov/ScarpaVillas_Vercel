import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ContactUs } from '../../components/ui/ContactUs';
import { ExperiencesHero } from '../../sections/ExperiencesPageSections/ExperiencesHero/ExperiencesHero';
import { ExperiencesIntro } from '../../sections/ExperiencesPageSections/ExperiencesIntro/ExperiencesIntro';
import { ExperiencesCategory } from '../../sections/ExperiencesPageSections/ExperiencesCategory/ExperiencesCategory';
import { ExperiencesPlanStay } from '../../sections/ExperiencesPageSections/ExperiencesPlanStay/ExperiencesPlanStay';
import { smoothScrollToTop } from '../../utils/smoothScrollToTop/smoothScrollToTop';

export function ExperiencesPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');

      requestAnimationFrame(() => {
        const element = document.getElementById(id);

        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      });

      return;
    }

    // window.scrollTo({
    //   top: 0,
    //   left: 0,
    //   behavior: 'auto',
    // });
    smoothScrollToTop();
  }, [location.hash]);

  const wineAndTaste = {
    id: 'wine-taste',
    translationKey: 'experiencesCategories.wineTaste',
    variant: 'gold' as const,
    cards: [
      {
        translationKey: 'privateWineTastings',
        image: '/images/ExperiencesPage/experiences_categories/private-wine-tastings.webp',
      },
      {
        translationKey: 'scarpaWinery',
        image: '/images/ExperiencesPage/experiences_categories/scarpa-winery.webp',
      },
      {
        translationKey: 'merendaSinoira',
        image: '/images/ExperiencesPage/experiences_categories/merenda-sinoira.webp',
      },
      {
        translationKey: 'cookingClasses',
        image: '/images/ExperiencesPage/experiences_categories/cooking-classes.webp',
      },
    ],
  };

  const cultureAndDiscovery = {
    id: 'culture-discovery',
    translationKey: 'experiencesCategories.cultureDiscovery',
    variant: 'blue' as const,
    cards: [
      {
        translationKey: 'langheBaroloTours',
        image: '/images/ExperiencesPage/experiences_categories/langhe-barolo-tours.webp',
      },
      {
        translationKey: 'localProducers',
        image: '/images/ExperiencesPage/experiences_categories/local-producers.webp',
      },
      {
        translationKey: 'turinExperiences',
        image: '/images/ExperiencesPage/experiences_categories/turin-experiences.webp',
      },
    ],
  };

  const natureAndMovement = {
    id: 'nature-movement',
    translationKey: 'experiencesCategories.natureMovement',
    variant: 'gold' as const,
    cards: [
      {
        translationKey: 'truffleHunting',
        image: '/images/ExperiencesPage/experiences_categories/truffle-hunting.webp',
      },
      {
        translationKey: 'hotAirBalloon',
        image: '/images/ExperiencesPage/experiences_categories/hot-air-balloon.webp',
      },
      {
        translationKey: 'vineyardPicnics',
        image: '/images/ExperiencesPage/experiences_categories/vineyard-picnics.webp',
      },
      {
        translationKey: 'vespaEbike',
        image: '/images/ExperiencesPage/experiences_categories/vespa-ebike.webp',
      },
    ],
  };

  return (
    <>
      <main className="mx-auto max-w-8xl 2xl:max-w-[1920px]">
        <ExperiencesHero />
        <ExperiencesIntro />
        <ExperiencesCategory {...wineAndTaste} />
        <ExperiencesCategory {...cultureAndDiscovery} />
        <ExperiencesCategory {...natureAndMovement} />
        <ExperiencesPlanStay />
      </main>

      <ContactUs phone="34620165833" className="fixed bottom-4 right-4 z-50" />
    </>
  );
}
