import React from 'react';
import { useEffect } from 'react';
import { Hero } from '../../sections/Hero/Hero';
import { About } from '../../sections/About/About';
import { Gallery } from '../../sections/Gallery/Gallery';
import { Experience } from '../../sections/Experience/Experience';
import { Borgo } from '../../sections/Borgo/Borgo';
import { Experiences } from '../../sections/Experiences/Experiences';
import { SignatureStays } from '../../sections/SignaturesStays/SignatureStays';
import { DiscoverLanghe } from '../../sections/Discover/Discover';
import { PlanStay } from '../../sections/Plan/PlanStay';
import { ContactUs } from '../../components/ui/ContactUs';
import { ScarpaLeadership } from '../../sections/ScarpaLeadership/ScarpaLeadership';
import { smoothScrollToTop } from '../../utils/smoothScrollToTop/smoothScrollToTop';

export function HomePage() {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  useEffect(() => {
    smoothScrollToTop();
  }, []);

  return (
    <>
      <main className="mx-auto max-w-8xl 2xl:max-w-[1920px]">
        <Hero />
        <About />
        <Experience />
        <ScarpaLeadership />
        <Gallery />
        <Borgo />
        <Experiences />
        <SignatureStays />
        <DiscoverLanghe />
        <PlanStay />
      </main>

      <ContactUs phone="34620165833" className="fixed bottom-4 right-4 z-50" />
    </>
  );
}
