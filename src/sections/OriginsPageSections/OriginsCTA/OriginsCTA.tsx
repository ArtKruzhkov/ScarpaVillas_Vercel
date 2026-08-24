import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function OriginsCTA() {
  const baseUrl = process.env.PUBLIC_URL;
  const { t, i18n } = useTranslation();

  const langPrefix = i18n.language === 'it' ? '/it' : '';

  return (
    <section className="relative h-[560px] overflow-hidden sm:h-[760px] lg:min-h-[760px] 2xl:min-h-[850px]">
      {/* Background */}
      <motion.picture
        initial={{
          scale: 1.08,
          opacity: 0,
        }}
        whileInView={{
          scale: 1,
          opacity: 1,
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{
          duration: 1.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute inset-0">
        <source
          media="(max-width: 1023px)"
          srcSet={`${baseUrl}/images/OriginsPage/origins_cta/background_mob.webp`}
        />

        <img
          src={`${baseUrl}/images/OriginsPage/origins_cta/background.webp`}
          alt="Scarpa Villas"
          className="h-full w-full object-cover"
        />
      </motion.picture>

      {/* Optional overlay */}
      <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />

      {/* Content */}
      <div className="relative h-full text-center z-10 flex flex-col items-center justify-between px-4 md:px-6 py-12 lg:py-16 lg:pt-16 lg:pb-14">
        {/* TOP TITLE */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex flex-col items-center">
          <AnimatePresence mode="wait">
            <motion.h2
              key={t('originsCTA.title')}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-serif leading-[1.15] max-w-[327px] sm:max-w-[432px] lg:max-w-none text-[24px] sm:text-[32px] lg:text-[38px] 2xl:text-[48px] uppercase tracking-[0.08em] text-[#2C3654]">
              {t('originsCTA.title')}
            </motion.h2>
          </AnimatePresence>
        </motion.div>

        {/* Bottom content */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex flex-col items-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={t('originsCTA.textLine1')}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-[1022px] font-sans text-white text-[11px] md:text-[14px] lg:text-[16px] 2xl:text-[18px] leading-[16px] md:leading-[20px] lg:leading-[24px] 2xl:leading-[26px] font-semibold uppercase tracking-[0.05em] md:tracking-[0.1em] lg:tracking-[0.18em]">
              {t('originsCTA.textLine1')}
              <br className="hidden sm:block" />
              {t('originsCTA.textLine2')}
              <br className="hidden sm:block" />
              {t('originsCTA.textLine3')}
            </motion.p>
          </AnimatePresence>

          <Link
            to={`${langPrefix}/villas`}
            className="mt-6 lg:mt-8 flex h-[44px] min-w-[320px] lg:min-w-[466px] items-center justify-center bg-white px-12 lg:px-28 font-sans text-[13px] font-semibold uppercase tracking-[0.22em] text-[#2C3654] transition-colors duration-300 hover:bg-[#2C3654] hover:text-white md:h-[57px] lg:text-[16px]">
            <AnimatePresence mode="wait">
              <motion.span
                key={t('originsCTA.button')}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}>
                {t('originsCTA.button')}
              </motion.span>
            </AnimatePresence>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
