import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import './villasHero.css';

export function VillasHero() {
  const { t } = useTranslation();

  return (
    <section
      id="villas-top"
      className="relative flex section-height justify-center items-center overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        {/* Mobile video */}
        <video
          className="block h-full w-full object-cover lg:hidden"
          autoPlay
          muted
          loop
          playsInline
          preload="auto">
          <source
            src={`${process.env.PUBLIC_URL}/images/VillasPage/villas_hero/villas_hero_vid_mob.mp4`}
            type="video/mp4"
          />
        </video>

        {/* Laptop video */}
        <video
          className="hidden h-full w-full object-cover lg:block 2xl:hidden"
          autoPlay
          muted
          loop
          playsInline
          preload="auto">
          <source
            src={`${process.env.PUBLIC_URL}/images/VillasPage/villas_hero/villas_hero_vid_laptop.mp4`}
            type="video/mp4"
          />
        </video>

        {/* Desktop video */}
        <video
          className="hidden h-full w-full object-cover 2xl:block"
          autoPlay
          muted
          loop
          playsInline
          preload="auto">
          <source
            src={`${process.env.PUBLIC_URL}/images/VillasPage/villas_hero/villas_hero_vid_desk.mp4`}
            type="video/mp4"
          />
        </video>

        {/* OVERLAY */}
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex w-full justify-center px-6">
        <div className="flex flex-col items-center justify-end text-center">
          {/* HERO TEXT */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={t('villasHero.title')}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}>
                <h1 className="villas_hero-title">{t('villasHero.title')}</h1>

                <p className="mt-2 xl:mt-4 font-serif text-[22px] leading-[28px] sm:leading-normal sm:text-[28px] lg:text-[32px] text-white">
                  {t('villasHero.subtitle')}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
