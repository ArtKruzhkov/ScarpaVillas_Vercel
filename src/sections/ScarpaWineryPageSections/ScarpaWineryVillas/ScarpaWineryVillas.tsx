import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function ScarpaWineryVillas() {
  const baseUrl = process.env.PUBLIC_URL;
  const { t, i18n } = useTranslation();

  const langPrefix = i18n.language === 'it' ? '/it' : '';

  return (
    <section className="bg-white pt-8 lg:pb-6 lg:pt-20 overflow-hidden">
      <div className="mx-auto grid max-w-8xl gap-6 xl:gap-0 px-4 lg:px-8 lg:grid-cols-[1.2fr_2.8fr]">
        {/* LEFT */}
        <motion.div
          className="flex items-center"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}>
          <div className="">
            <AnimatePresence mode="wait">
              <motion.h2
                key={t('scarpaWineryVillas.title')}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-center lg:text-start font-serif text-[26px] leading-[30px] md:text-[34px] md:leading-[40px] lg:text-[38px] lg:leading-[48px] 2xl:text-[42px] 2xl:leading-[50px] text-[#2C3654]">
                {t('scarpaWineryVillas.title')}
              </motion.h2>
            </AnimatePresence>

            <div className="mx-auto lg:mx-0 mt-4 lg:mt-8 h-[2px] w-[175px] md:w-[205px] lg:w-[220px] bg-[#2C3654]" />

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
                <p className="mx-auto lg:mx-0 text-center lg:text-start text-[#2C3654] mt-4 lg:mt-8 font-sans text-[15px] leading-[1.5] md:text-[17px] lg:text-[18px] lg:leading-[30px] max-w-[220px] sm:max-w-none lg:max-w-[270px]">
                  {t('scarpaWineryVillas.paragraph1')}
                </p>

                <p className="text-center lg:text-start text-[#2C3654] mt-6 lg:mt-8 font-sans text-[15px] leading-[1.5] md:text-[17px] lg:text-[18px] lg:leading-[30px] lg:max-w-[380px]">
                  {t('scarpaWineryVillas.paragraph2')}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}>
          <div className="overflow-hidden">
            <motion.img
              src={`${baseUrl}/images/ScarpaWineryPage/scarpa_winery_villas/villas.webp`}
              alt="Scarpa Villas"
              className="h-full w-full object-cover min-h-[240px] lg:min-h-[520px]"
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
          </div>

          <Link
            to={`${langPrefix}/experiences#wine-taste`}
            className="mt-4 lg:mt-6 flex h-[44px] w-full items-center justify-center bg-[#2C3654] font-sans text-[12px] font-semibold uppercase tracking-[0.24em] text-white transition-opacity duration-300 hover:opacity-80 md:h-[57px] md:text-[18px] xl:w-[60%]">
            <AnimatePresence mode="wait">
              <motion.span
                key={t('scarpaWineryVillas.button')}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}>
                {t('scarpaWineryVillas.button')}
              </motion.span>
            </AnimatePresence>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
