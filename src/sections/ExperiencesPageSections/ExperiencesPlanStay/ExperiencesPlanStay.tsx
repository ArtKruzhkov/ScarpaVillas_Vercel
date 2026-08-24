import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export function ExperiencesPlanStay() {
  const baseUrl = process.env.PUBLIC_URL;
  const { t, i18n } = useTranslation();

  return (
    <section className="bg-[#2C3654] mt-4 lg:mt-0 p-4 md:p-6 lg:p-8 2xl:p-10">
      <div className="relative mx-auto max-w-[1920px] overflow-hidden">
        {/* Background */}
        <motion.img
          src={`${baseUrl}/images/ExperiencesPage/experiences_planStay/background.webp`}
          alt="Experiences in the Langhe"
          className="block h-auto w-full object-cover min-h-[460px] md:min-h-[620px]"
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
        />

        {/* Content */}
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
          className="absolute inset-x-0 top-0 z-10 mx-auto flex max-w-[1208px] flex-col items-center px-6 pt-8 md:pt-10 lg:pt-12 text-center">
          {/* Title + Subtitle */}
          <AnimatePresence mode="wait">
            <motion.div
              key={i18n.language}
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
              className="flex w-full flex-col items-center">
              {/* Title */}
              <h2 className="font-serif max-w-[295px] sm:max-w-[520px] md:max-w-[680px] lg:max-w-none text-[18px] leading-[20px] tracking-[0.02em] text-[#2C3654] md:text-[28px] md:leading-[30px] lg:text-[32px] lg:leading-[36px] 2xl:text-[38px] 2xl:leading-[44px]">
                {t('experiencesPlanStay.titleLine1')}
                <br className="hidden lg:block" />
                {t('experiencesPlanStay.titleLine2')}
              </h2>

              {/* Subtitle */}
              <p className="mt-5 font-sans max-w-[270px] md:max-w-[320px] lg:max-w-none text-[13px] leading-[18px] text-[#2C3654] md:text-[15px] md:leading-[22px] lg:mt-6 lg:text-[18px] lg:leading-[26px]">
                {t('experiencesPlanStay.subtitle')}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Button */}
          <a
            href="https://www.simplebooking.it/ibe2/hotel/9131"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 flex h-[44px] min-w-[280px] items-center justify-center overflow-hidden border-2 border-[#2C3654] px-8 font-sans text-[13px] font-semibold uppercase tracking-[0.22em] text-[#2C3654] transition-colors duration-300 hover:bg-[#2C3654] hover:text-white md:h-[57px] md:min-w-[320px] lg:mt-8 lg:min-w-[460px] md:text-[16px] lg:text-[18px]">
            <AnimatePresence mode="wait">
              <motion.span
                key={i18n.language}
                initial={{
                  opacity: 0,
                  y: 8,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -8,
                }}
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}>
                {t('experiencesPlanStay.button')}
              </motion.span>
            </AnimatePresence>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
