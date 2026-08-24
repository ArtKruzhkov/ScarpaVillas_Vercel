import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export function DiscoverIntro() {
  const baseUrl = process.env.PUBLIC_URL;
  const { t } = useTranslation();

  return (
    <section className="relative flex items-start justify-center overflow-hidden lg:pb-10 min-h-[720px] md:min-h-[680px] lg:min-h-min">
      {/* Background */}
      <motion.picture
        initial={{
          scale: 1.08,
        }}
        whileInView={{
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.25,
        }}
        transition={{
          duration: 1.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute inset-0">
        <source
          media="(max-width: 1023px)"
          srcSet={`${baseUrl}/images/DiscoverPage/discover_intro/background_mob.webp`}
        />

        <img
          src={`${baseUrl}/images/DiscoverPage/discover_intro/background.webp`}
          alt="Scarpa Villas Stays"
          className="h-full w-full object-cover"
        />
      </motion.picture>

      {/* White center panel */}
      <div className="relative z-10 mb-auto mt-8 my-auto lg:my-0 flex w-[86%] max-w-[350px] flex-col items-center justify-center bg-white px-6 py-10 text-center sm:px-8 sm:py-12 lg:px-12 lg:py-12 2xl:px-16 2xl:py-16 md:max-w-[560px] lg:max-w-[710px] 2xl:max-w-[920px]">
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.35,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex w-full flex-col items-center">
          {/* Top decoration */}
          <div className="flex w-full items-center gap-4 lg:gap-8">
            <div className="h-[2px] flex-1 bg-[#2C3654]" />

            <img
              src={`${baseUrl}/images/DiscoverPage/discover_intro/logo.svg`}
              alt="logo"
              className="h-[54px] w-auto shrink-0 xl:h-[74px]"
            />

            <div className="h-[2px] flex-1 bg-[#2C3654]" />
          </div>

          {/* Title */}
          <AnimatePresence mode="wait">
            <motion.h2
              key={t('discoverIntro.titleLine1')}
              initial={{
                opacity: 0,
                y: 12,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -12,
              }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-4 md:mt-8 2xl:mt-12 max-w-[275px] md:max-w-none font-serif text-[18px] leading-[22px] text-[#2C3654] md:text-[22px] md:leading-[26px] lg:text-[26px] lg:leading-[32px] 2xl:text-[32px] 2xl:leading-[38px]">
              {t('discoverIntro.titleLine1')}
              <br />
              {t('discoverIntro.titleLine2')}
            </motion.h2>
          </AnimatePresence>

          {/* Description */}
          <AnimatePresence mode="wait">
            <motion.div
              key={t('discoverIntro.text1')}
              initial={{
                opacity: 0,
                y: 12,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -12,
              }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-4 md:mt-8 font-sans text-[13px] md:text-[16px] xl:text-[18px] leading-[18px] text-[#2C3654] md:text-[16px] md:leading-[21px] xl:leading-[26px]">
              <p>{t('discoverIntro.text1')}</p>
              <p className="mt-4 md:mt-8 md:max-w-[410px] mx-auto lg:max-w-none">
                {t('discoverIntro.text2')}
                <br className="hidden lg:block" />
                {t('discoverIntro.text3')}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Bottom line — mobile/tablet only */}
          <div className="mt-6 h-[2px] w-full bg-[#2C3654] lg:hidden" />
        </motion.div>
      </div>
    </section>
  );
}
