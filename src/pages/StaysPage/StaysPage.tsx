import { useEffect } from 'react';
import { ContactUs } from '../../components/ui/ContactUs';
import { StaysHero } from '../../sections/StaysPageSections/StaysHero/StaysHero';
import { StaysIntro } from '../../sections/StaysPageSections/StaysIntro/StaysIntro';
import {
  StaysProgrammeProps,
  StaysProgramme,
} from '../../sections/StaysPageSections/StaysProgramme/StaysProgramme';
import { smoothScrollToTop } from '../../utils/smoothScrollToTop/smoothScrollToTop';

export function StaysPage() {
  const baseUrl = process.env.PUBLIC_URL;

  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      const id = hash.replace('#', '');

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

    // window.scrollTo(0, 0);
    smoothScrollToTop();
  }, []);

  const luxRetreat: StaysProgrammeProps = {
    id: 'lux-retreat',
    titleKey: 'staysLuxRetreat.title',
    subtitleKey: 'staysLuxRetreat.subtitle',
    descriptionKeys: ['staysLuxRetreat.description1'],
    durationKey: 'staysLuxRetreat.duration',
    image: `${baseUrl}/images/StaysPage/stays_programmes/lux-retreat.webp`,
    imageAlt: 'The Lux Retreat at Scarpa Villas',
    imagePosition: 'left',
    background: 'white',

    days: [
      {
        dayKey: 'staysLuxRetreat.days.day1.label',
        titleKey: 'staysLuxRetreat.days.day1.title',
        descriptionKeys: [
          'staysLuxRetreat.days.day1.description1',
          'staysLuxRetreat.days.day1.description2',
        ],
      },
      {
        dayKey: 'staysLuxRetreat.days.day2.label',
        titleKey: 'staysLuxRetreat.days.day2.title',
        descriptionKeys: [
          'staysLuxRetreat.days.day2.description1',
          'staysLuxRetreat.days.day2.description2',
          'staysLuxRetreat.days.day2.description3',
        ],
      },
      {
        dayKey: 'staysLuxRetreat.days.day3.label',
        titleKey: 'staysLuxRetreat.days.day3.title',
        descriptionKeys: [
          'staysLuxRetreat.days.day3.description1',
          'staysLuxRetreat.days.day3.description2',
        ],
      },
      {
        dayKey: 'staysLuxRetreat.days.day4.label',
        titleKey: 'staysLuxRetreat.days.day4.title',
        descriptionKeys: ['staysLuxRetreat.days.day4.description1'],
      },
    ],
  };

  const tasteOfLanghe: StaysProgrammeProps = {
    id: 'taste-of-langhe',
    titleKey: 'staysTasteOfLanghe.title',
    subtitleKey: 'staysTasteOfLanghe.subtitle',
    descriptionKeys: ['staysTasteOfLanghe.description1'],
    durationKey: 'staysTasteOfLanghe.duration',
    image: `${baseUrl}/images/StaysPage/stays_programmes/taste-of-langhe.webp`,
    imageAlt: 'Taste of Langhe wine experience',
    imagePosition: 'right',
    background: 'beige',

    days: [
      {
        dayKey: 'staysTasteOfLanghe.days.day1.label',
        titleKey: 'staysTasteOfLanghe.days.day1.title',
        descriptionKeys: ['staysTasteOfLanghe.days.day1.description1'],
      },
      {
        dayKey: 'staysTasteOfLanghe.days.day2.label',
        titleKey: 'staysTasteOfLanghe.days.day2.title',
        descriptionKeys: [
          'staysTasteOfLanghe.days.day2.description1',
          'staysTasteOfLanghe.days.day2.description2',
        ],
      },
      {
        dayKey: 'staysTasteOfLanghe.days.day3.label',
        titleKey: 'staysTasteOfLanghe.days.day3.title',
        descriptionKeys: ['staysTasteOfLanghe.days.day3.description1'],
      },
      {
        dayKey: 'staysTasteOfLanghe.days.day4.label',
        titleKey: 'staysTasteOfLanghe.days.day4.title',
        descriptionKeys: ['staysTasteOfLanghe.days.day4.description1'],
      },
      {
        dayKey: 'staysTasteOfLanghe.days.day5.label',
        titleKey: 'staysTasteOfLanghe.days.day5.title',
        descriptionKeys: [
          'staysTasteOfLanghe.days.day5.description1',
          'staysTasteOfLanghe.days.day5.description2',
        ],
      },
      {
        dayKey: 'staysTasteOfLanghe.days.day6.label',
        titleKey: 'staysTasteOfLanghe.days.day6.title',
        descriptionKeys: ['staysTasteOfLanghe.days.day6.description1'],
      },
    ],
  };

  const autumnGems: StaysProgrammeProps = {
    id: 'autumn-gems',
    titleKey: 'staysAutumnGems.title',
    subtitleKey: 'staysAutumnGems.subtitle',
    descriptionKeys: ['staysAutumnGems.description1'],
    durationKey: 'staysAutumnGems.duration',
    image: `${baseUrl}/images/StaysPage/stays_programmes/autumn-gems.webp`,
    imageAlt: 'Autumn Gems in the Langhe',
    imagePosition: 'left',
    background: 'white',

    days: [
      {
        dayKey: 'staysAutumnGems.days.day1.label',
        titleKey: 'staysAutumnGems.days.day1.title',
        descriptionKeys: ['staysAutumnGems.days.day1.description1'],
      },
      {
        dayKey: 'staysAutumnGems.days.day2.label',
        titleKey: 'staysAutumnGems.days.day2.title',
        descriptionKeys: ['staysAutumnGems.days.day2.description1'],
      },
      {
        dayKey: 'staysAutumnGems.days.day3.label',
        titleKey: 'staysAutumnGems.days.day3.title',
        descriptionKeys: ['staysAutumnGems.days.day3.description1'],
      },
      {
        dayKey: 'staysAutumnGems.days.day4.label',
        titleKey: 'staysAutumnGems.days.day4.title',
        descriptionKeys: ['staysAutumnGems.days.day4.description1'],
      },
      {
        dayKey: 'staysAutumnGems.days.day5.label',
        titleKey: 'staysAutumnGems.days.day5.title',
        descriptionKeys: [
          'staysAutumnGems.days.day5.description1',
          'staysAutumnGems.days.day5.description2',
        ],
      },
      {
        dayKey: 'staysAutumnGems.days.day6.label',
        titleKey: 'staysAutumnGems.days.day6.title',
        descriptionKeys: ['staysAutumnGems.days.day6.description1'],
      },
    ],
  };

  const piemonteEscape: StaysProgrammeProps = {
    id: 'piemonte-escape',
    titleKey: 'staysPiemonteEscape.title',
    subtitleKey: 'staysPiemonteEscape.subtitle',
    descriptionKeys: ['staysPiemonteEscape.description1'],
    durationKey: 'staysPiemonteEscape.duration',
    image: `${baseUrl}/images/StaysPage/stays_programmes/piemonte-escape.webp`,
    imageAlt: 'Piemonte Escape at Scarpa Villas',
    imagePosition: 'right',
    background: 'beige',

    days: [
      {
        dayKey: 'staysPiemonteEscape.days.day1.label',
        titleKey: 'staysPiemonteEscape.days.day1.title',
        descriptionKeys: ['staysPiemonteEscape.days.day1.description1'],
      },
      {
        dayKey: 'staysPiemonteEscape.days.day2.label',
        titleKey: 'staysPiemonteEscape.days.day2.title',
        descriptionKeys: ['staysPiemonteEscape.days.day2.description1'],
      },
      {
        dayKey: 'staysPiemonteEscape.days.day3.label',
        titleKey: 'staysPiemonteEscape.days.day3.title',
        descriptionKeys: ['staysPiemonteEscape.days.day3.description1'],
      },
      {
        dayKey: 'staysPiemonteEscape.days.day4.label',
        titleKey: 'staysPiemonteEscape.days.day4.title',
        descriptionKeys: ['staysPiemonteEscape.days.day4.description1'],
      },
      {
        dayKey: 'staysPiemonteEscape.days.day5.label',
        titleKey: 'staysPiemonteEscape.days.day5.title',
        descriptionKeys: ['staysPiemonteEscape.days.day5.description1'],
      },
      {
        dayKey: 'staysPiemonteEscape.days.day6.label',
        titleKey: 'staysPiemonteEscape.days.day6.title',
        descriptionKeys: ['staysPiemonteEscape.days.day6.description1'],
      },
      {
        dayKey: 'staysPiemonteEscape.days.day7.label',
        titleKey: 'staysPiemonteEscape.days.day7.title',
        descriptionKeys: ['staysPiemonteEscape.days.day7.description1'],
      },
      {
        dayKey: 'staysPiemonteEscape.days.day8.label',
        titleKey: 'staysPiemonteEscape.days.day8.title',
        descriptionKeys: ['staysPiemonteEscape.days.day8.description1'],
      },
    ],
  };

  return (
    <>
      <main className="mx-auto max-w-8xl 2xl:max-w-[1920px]">
        <StaysHero />
        <StaysIntro />
        <StaysProgramme {...luxRetreat} />
        <StaysProgramme {...tasteOfLanghe} />
        <StaysProgramme {...autumnGems} />
        <StaysProgramme {...piemonteEscape} />
      </main>

      <ContactUs phone="34620165833" className="fixed bottom-4 right-4 z-50" />
    </>
  );
}
