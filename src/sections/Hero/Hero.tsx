import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import './hero.css';

export function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="top"
      className="relative flex section-height items-end justify-center overflow-hidden">
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
          <source src={`${process.env.PUBLIC_URL}/images/hero/hero_vid_mob.mp4`} type="video/mp4" />
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
            src={`${process.env.PUBLIC_URL}/images/hero/hero_vid_laptop.mp4`}
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
            src={`${process.env.PUBLIC_URL}/images/hero/hero_vid_desk.mp4`}
            type="video/mp4"
          />
        </video>

        {/* OVERLAY */}
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex w-full justify-center px-6 pb-[6.5rem] sm:pb-[4.1rem]">
        <div className="flex max-w-[900px] flex-col items-center text-center">
          {/* ICON */}
          <img
            src={`${process.env.PUBLIC_URL}/images/hero/logo_hero.svg`}
            alt="Scarpa Villas"
            className="hero-logo"
          />

          {/* HERO TEXT */}
          <div className="mt-5 sm:mt-6 max-w-[900px]">
            {/* <h2 className="hero-title">
              Stay among the
              <span className="italic"> vineyards of Monvigliero</span>,
              <span className="mt-2 block">in your own private villa</span>
            </h2> */}

            <AnimatePresence mode="wait">
              <motion.h2
                key={t('hero.titlePart1')}
                className="hero-title"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}>
                {t('hero.titlePart1')}
                <span className="italic"> {t('hero.titleItalic')}</span>,
                <span className="mt-2 block">{t('hero.titlePart2')}</span>
              </motion.h2>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
