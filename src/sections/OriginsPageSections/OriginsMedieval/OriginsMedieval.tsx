import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export function OriginsMedieval() {
  const baseUrl = process.env.PUBLIC_URL;
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden border-y-[20px] border-white py-24 md:py-20 lg:py-0">
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
          srcSet={`${baseUrl}/images/OriginsPage/origins_medieval/background_mob.webp`}
        />

        <img
          src={`${baseUrl}/images/OriginsPage/origins_medieval/background.webp`}
          alt="Barolo vineyards"
          className="h-full w-full object-cover"
        />
      </motion.picture>

      {/* White center panel */}
      <div className="relative z-10 mx-auto lg:min-h-[720px] flex w-[86%] max-w-[370px] md:max-w-[560px] lg:max-w-[710px] 2xl:max-w-[960px] flex-col items-center justify-center bg-white px-6 py-12 text-center sm:px-8 sm:py-12 lg:px-12 lg:py-16 2xl:px-20">
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
              src={`${baseUrl}/images/OriginsPage/origins_medieval/logo.svg`}
              alt=""
              className="h-[54px] xl:h-[74px] w-auto shrink-0"
            />

            <div className="h-[2px] flex-1 bg-[#2C3654]" />
          </div>

          {/* Title */}
          <AnimatePresence mode="wait">
            <motion.h2
              key={t('originsMedieval.titleLine1')}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-6 md:mt-10 lg:mt-16 font-serif text-[18px] leading-[22px] md:text-[22px] md:leading-[26px] lg:text-[26px] lg:leading-[32px] 2xl:text-[32px] 2xl:leading-[38px] text-[#2C3654]">
              {t('originsMedieval.titleLine1')}
              <br className="hidden lg:block" />
              {t('originsMedieval.titleLine2')}
              <br className="hidden lg:block" />
              {t('originsMedieval.titleLine3')}
              <br className="hidden lg:block" />
              {t('originsMedieval.titleLine4')}
            </motion.h2>
          </AnimatePresence>

          {/* Description */}
          <AnimatePresence mode="wait">
            <motion.p
              key={t('originsMedieval.text')}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-6 md:mt-8 lg:mt-10 max-w-[390px] lg:max-w-[450px] xl:max-w-[480px] font-sans text-[13px] leading-[18px] lg:text-[15px] lg:leading-[23px] xl:text-[18px] xl:leading-[26px] text-[#2C3654]">
              {t('originsMedieval.text')}
            </motion.p>
          </AnimatePresence>

          {/* Bottom line */}
          <div className="mt-10 md:mt-16 lg:mt-20 h-[2px] w-full bg-[#2C3654]" />
        </motion.div>
      </div>
    </section>
  );
}
