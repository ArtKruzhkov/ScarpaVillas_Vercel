import { OtherVillas } from '../../sections/VillaPageSections/OtherVillas/OtherVillas';
import { VillaAmenities } from '../../sections/VillaPageSections/VillaAmenities/VillaAmenities';
import { VillaBookingCTA } from '../../sections/VillaPageSections/VillaBookingCTA/VillaBookingCTA';
import { VillaFeatures } from '../../sections/VillaPageSections/VillaFeatures/VillaFeatures';
import { VillaHero } from '../../sections/VillaPageSections/VillaHero/VillaHero';
import { VillaOverview } from '../../sections/VillaPageSections/VillaOverview/VillaOverview';
import { smoothScrollToTop } from '../../utils/smoothScrollToTop/smoothScrollToTop';
import { useTranslation } from 'react-i18next';

import { villas } from '../../data/villas';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { ContactUs } from '../../components/ui/ContactUs';
import { SEO } from '../../components/SEO/SEO';
import { NotFoundPage } from '../NotFoundPage/NotFoundPage';

export function VillaPage() {
  const { villaId } = useParams();
  const { t } = useTranslation();

  // useEffect(() => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: 'smooth',
  //   });
  // }, [villaId]);
  useEffect(() => {
    smoothScrollToTop();
  }, [villaId]);

  const villa = villas.find((villa) => villa.id === villaId);

  if (!villa) {
    return <NotFoundPage />;
  }

  const seoKey = `seo.villa.${villa.id}`;

  return (
    <>
      <SEO title={t(`${seoKey}.title`)} description={t(`${seoKey}.description`)} />

      <main key={villa.id} className="mx-auto max-w-8xl 2xl:max-w-[1920px]">
        <VillaHero hero={villa.hero} />
        <VillaOverview overview={villa.overview} hero={villa.hero} />
        <VillaFeatures features={villa.features} hero={villa.hero} />
        <VillaAmenities amenities={villa.amenities} hero={villa.hero} />
        <VillaBookingCTA bookingCTA={villa.bookingCTA} />
        <OtherVillas currentVillaId={villa.id} />
      </main>

      <ContactUs phone="393484765176" className="fixed bottom-4 right-4 z-50" />
    </>
  );
}
