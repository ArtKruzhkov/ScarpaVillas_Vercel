import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export function ScarpaWineryEvolution() {
  const baseUrl = process.env.PUBLIC_URL;
  const { t } = useTranslation();

  return (
    <section className="bg-white lg:py-6 overflow-hidden">
      <div className="mx-auto grid max-w-8xl lg:gap-5 lg:grid-cols-[1fr_3fr_1fr] px-4">
        {/* LEFT */}
        <motion.div
          className="flex flex-col justify-end px-2 py-8 lg:px-0 lg:py-0"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}>
          <div className="lg:pl-4">
            <AnimatePresence mode="wait">
              <motion.h2
                key={t('scarpaWineryEvolution.title')}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="font-serif text-[26px] leading-[30px] md:text-[34px] md:leading-[40px] text-[#2C3654]">
                {t('scarpaWineryEvolution.title')}
              </motion.h2>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.p
                key={t('scarpaWineryEvolution.leftText')}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-3 md:mt-5 font-sans text-[15px] leading-[1.5] lg:text-[17px] lg:leading-[26px] 2xl:text-[18px] 2xl:leading-[28px] text-[#2C3654]">
                {t('scarpaWineryEvolution.leftText')}
              </motion.p>
            </AnimatePresence>
          </div>

          <motion.img
            src={`${baseUrl}/images/ScarpaWineryPage/scarpa_winery_evolution/postcard_left.webp`}
            alt="Historic postcard"
            className="mt-6 lg:mt-10 w-full"
            initial={{ scale: 1.08 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 1.6,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        </motion.div>

        {/* CENTER IMAGE */}
        <motion.div
          className="relative overflow-hidden px-2 lg:px-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}>
          <motion.img
            src={`${baseUrl}/images/ScarpaWineryPage/scarpa_winery_evolution/center.webp`}
            alt="Scarpa Winery"
            className="h-full w-full object-cover min-h-[220px] xl:min-h-[620px]"
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
        </motion.div>

        {/* RIGHT */}
        <motion.div
          className="flex flex-col px-2 py-8 lg:px-0 lg:py-0"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}>
          <motion.img
            src={`${baseUrl}/images/ScarpaWineryPage/scarpa_winery_evolution/postcard_right.webp`}
            alt="Historic letter"
            className="w-full self-end"
            initial={{ scale: 1.08 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 1.6,
              ease: [0.22, 1, 0.36, 1],
            }}
          />

          <AnimatePresence mode="wait">
            <motion.p
              key={t('scarpaWineryEvolution.rightText')}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-6 lg:mt-10 font-sans text-[15px] leading-[1.5] lg:text-[17px] lg:leading-[26px] 2xl:text-[18px] 2xl:leading-[28px] text-[#2C3654] lg:pr-10">
              {t('scarpaWineryEvolution.rightText')}
            </motion.p>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
