import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export function ScarpaWineryVineyards() {
  const baseUrl = process.env.PUBLIC_URL;
  const { t, i18n } = useTranslation();

  return (
    <section className="bg-white overflow-hidden">
      <motion.div
        className="relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}>
        {/* BACKGROUND */}
        <motion.img
          src={`${baseUrl}/images/ScarpaWineryPage/scarpa_winery_vineyards/background.webp`}
          alt="Scarpa Vineyards"
          className="h-[480px] w-full object-cover md:h-[660px] lg:h-full lg:min-h-[730px]"
          initial={{
            scale: 1.08,
          }}
          whileInView={{
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 1.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        />

        {/* CONTENT */}
        <motion.div
          className="absolute inset-0 flex items-end justify-center px-6 lg:px-0"
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
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}>
          <div className="w-full max-w-[720px] bg-white px-4 py-8 text-center shadow-sm md:px-12 md:py-12 lg:px-12 lg:py-14">
            <AnimatePresence mode="wait">
              <motion.h2
                key={t('scarpaWineryVineyards.title')}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="font-serif text-[22px] md:text-[32px] lg:text-[34px] 2xl:text-[38px] uppercase tracking-[0.1em] text-[#2C3654]">
                {t('scarpaWineryVineyards.title')}
              </motion.h2>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={i18n.language}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}>
                <p className="mt-2 lg:mt-4 font-sans text-[13px] leading-[18px] md:text-[16px] md:leading-[22px] lg:text-[18px] lg:leading-[28px] text-[#2C3654] lg:mx-auto lg:max-w-[552px]">
                  {t('scarpaWineryVineyards.paragraph1')}
                </p>

                <p className="mt-4 lg:mt-6 font-sans text-[13px] leading-[18px] md:text-[16px] md:leading-[22px] lg:text-[18px] lg:leading-[28px] text-[#2C3654]">
                  {t('scarpaWineryVineyards.paragraph2')}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
