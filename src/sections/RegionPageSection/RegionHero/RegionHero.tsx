import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export function RegionHero() {
  const { t } = useTranslation();

  return (
    <section
      id="region-top"
      className="relative flex section-height items-center justify-center overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src={`${process.env.PUBLIC_URL}/images/RegionPage/region_hero/region_hero.webp`}
          alt={t('regionHero.title')}
          className="h-full w-full object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex w-full justify-center px-6">
        <div className="flex flex-col items-center text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={t('regionHero.title')}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}>
              <h1 className="top-hero-title">{t('regionHero.title')}</h1>

              <p className="max-w-[300px] mx-auto sm:max-w-none mt-2 font-serif text-[22px] leading-[28px] text-white sm:text-[28px] sm:leading-normal lg:text-[32px] xl:mt-4">
                {t('regionHero.subtitle')}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
