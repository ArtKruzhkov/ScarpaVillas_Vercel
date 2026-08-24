import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function RegionPlanStay() {
  const baseUrl = process.env.PUBLIC_URL;

  const { t, i18n } = useTranslation();

  const langPrefix = i18n.language === 'en' ? '' : `/${i18n.language}`;

  return (
    <section className="overflow-hidden bg-white px-6 py-6 lg:px-8 lg:py-10">
      <div className="mx-auto grid max-w-8xl gap-6 lg:grid-cols-2 lg:gap-8">
        {/* LEFT */}
        <motion.div
          className="relative min-h-[440px] overflow-hidden sm:min-h-[620px] lg:min-h-[680px] 2xl:min-h-[780px]"
          initial={{
            opacity: 0,
            x: -30,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}>
          {/* IMAGE */}
          <motion.img
            src={`${baseUrl}/images/RegionPage/region_planStay/experiences.png`}
            alt="Langhe countryside"
            className="absolute inset-0 h-full w-full object-cover"
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

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent md:hidden" />

          {/* CONTENT */}
          <motion.div
            className="absolute inset-x-0 bottom-0 z-10 px-6 pb-8 text-white sm:px-8 sm:pb-10 lg:px-10 lg:pb-12"
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}>
            {/* TEXT */}
            <AnimatePresence mode="wait">
              <motion.p
                key={`experiences-text-${i18n.language}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="max-w-[760px] font-serif text-[16px] leading-[1.4] sm:text-[18px] 2xl:text-[22px]">
                {t('regionPlanStay.experiencesText')}
              </motion.p>
            </AnimatePresence>

            {/* BUTTON */}
            <div className="mt-4 inline-block lg:mt-6">
              <Link
                to={`${langPrefix}/experiences`}
                className="flex h-[40px] w-fit items-center justify-center overflow-hidden border-y border-white font-sans text-[13px] font-semibold uppercase tracking-[0.2em] transition-opacity duration-300 hover:opacity-60 md:h-[50px] 2xl:h-[52px] md:text-[16px] 2xl:text-[18px]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={`experiences-button-${i18n.language}`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{
                      duration: 0.3,
                      ease: [0.22, 1, 0.36, 1],
                    }}>
                    {t('regionPlanStay.experiencesButton')}
                  </motion.span>
                </AnimatePresence>
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          className="relative min-h-[440px] overflow-hidden sm:min-h-[620px] lg:min-h-[680px] 2xl:min-h-[780px]"
          initial={{
            opacity: 0,
            x: 30,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}>
          {/* IMAGE */}
          <motion.img
            src={`${baseUrl}/images/RegionPage/region_planStay/stay.png`}
            alt="Scarpa Villas"
            className="absolute inset-0 h-full w-full object-cover"
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

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/5 to-transparent" />

          {/* CONTENT */}
          <motion.div
            className="absolute inset-x-0 top-0 z-10 px-6 pt-8 text-white sm:px-8 sm:pt-10 lg:px-10 lg:pt-12"
            initial={{
              opacity: 0,
              y: -20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}>
            {/* TEXT */}
            <AnimatePresence mode="wait">
              <motion.p
                key={`stay-text-${i18n.language}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="font-serif text-[16px] leading-[1.45] sm:text-[18px] 2xl:text-[22px]">
                {t('regionPlanStay.stayTextLine1')}
                <br className="hidden md:block" />
                {t('regionPlanStay.stayTextLine2')}
              </motion.p>
            </AnimatePresence>

            {/* BUTTON */}
            <div className="mt-4 inline-block lg:mt-6">
              <a
                href="https://www.simplebooking.it/ibe2/hotel/9131"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-[40px] w-fit items-center justify-center overflow-hidden border-y border-white font-sans text-[13px] font-semibold uppercase tracking-[0.2em] transition-opacity duration-300 hover:opacity-60 md:h-[50px] 2xl:h-[52px] md:text-[16px] 2xl:text-[18px]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={`stay-button-${i18n.language}`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{
                      duration: 0.3,
                      ease: [0.22, 1, 0.36, 1],
                    }}>
                    {t('regionPlanStay.stayButton')}
                  </motion.span>
                </AnimatePresence>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
