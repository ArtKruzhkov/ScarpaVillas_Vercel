import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './borgoHero.css';

export function BorgoHero() {
  const { t } = useTranslation();

  return (
    <section
      id="borgo-top"
      className="relative flex section-height items-center justify-center overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src={`${process.env.PUBLIC_URL}/images/BorgoPage/borgo_hero/borgo_hero.webp`}
          alt="The Borgo"
          className="h-full w-full object-cover object-[center_bottom]"
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex w-full justify-center px-6">
        <div className="flex max-w-[900px] flex-col items-center text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={t('borgoHero.title')}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}>
              <h1 className="borgo_hero-title">{t('borgoHero.title')}</h1>

              <p className="mt-2 font-serif text-[22px] leading-[28px] text-white sm:text-[28px] sm:leading-normal lg:text-[32px] xl:mt-4">
                {t('borgoHero.subtitle')}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
