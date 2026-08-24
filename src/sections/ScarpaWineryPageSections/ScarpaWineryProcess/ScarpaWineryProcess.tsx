import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trans, useTranslation } from 'react-i18next';

export function ScarpaWineryProcess() {
  const { t, i18n } = useTranslation();

  const baseUrl = process.env.PUBLIC_URL;

  return (
    <section className="bg-white overflow-hidden">
      <div className="mx-auto grid max-w-8xl lg:grid-cols-[55%_45%]">
        {/* LEFT IMAGE */}
        <motion.div
          viewport={{ once: true, amount: 0.25 }}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative min-h-[440px] overflow-hidden lg:min-h-[740px] order-2 lg:order-1">
          <motion.img
            src={`${baseUrl}/images/ScarpaWineryPage/scarpa_winery_process/process.webp`}
            alt="Scarpa Winery"
            className="absolute inset-0 h-full w-full object-cover"
            initial={{ scale: 1.08 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 1.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        </motion.div>

        {/* RIGHT TEXT */}
        <motion.div
          viewport={{ once: true, amount: 0.25 }}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex order-1 lg:order-2 items-center bg-[#2C3654] px-6 py-10 text-white sm:px-10 lg:px-6 2xl:px-16 lg:py-16">
          <div className="w-full">
            <AnimatePresence mode="wait">
              <motion.h2
                key={t('scarpaWineryProcess.title')}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="font-serif text-[26px] leading-[30px] md:text-[34px] md:leading-[40px] lg:text-[38px] lg:leading-[48px] 2xl:text-[42px] 2xl:leading-[50px]">
                {t('scarpaWineryProcess.title')}
              </motion.h2>
            </AnimatePresence>

            <div className="mt-6 lg:mt-8 h-[2px] w-[140px] md:w-[190px] lg:w-[200px] 2xl:w-[220px] bg-white" />

            <AnimatePresence mode="wait">
              <motion.div
                key={i18n.language}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-6 lg:mt-10 space-y-6 lg:space-y-10 font-sans text-[14.8px] leading-[1.5] text-white md:text-[17px] lg:text-[18px] lg:leading-[30px]">
                <p className="max-w-[240px] sm:max-w-none">
                  <Trans
                    i18nKey="scarpaWineryProcess.paragraph1"
                    components={{
                      strong: <strong className="font-semibold text-white" />,
                    }}
                  />
                </p>

                <p>
                  <Trans
                    i18nKey="scarpaWineryProcess.paragraph2"
                    components={{
                      strong: <strong className="font-semibold text-white" />,
                    }}
                  />
                </p>

                <p className="lg:max-w-[600px]">
                  <Trans
                    i18nKey="scarpaWineryProcess.paragraph3"
                    components={{
                      strong: <strong className="font-semibold text-white" />,
                    }}
                  />
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
