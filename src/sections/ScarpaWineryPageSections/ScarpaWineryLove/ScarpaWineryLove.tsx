import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trans, useTranslation } from 'react-i18next';

export function ScarpaWineryLove() {
  const { t, i18n } = useTranslation();

  const baseUrl = process.env.PUBLIC_URL;

  return (
    <section className="bg-white overflow-hidden">
      <div className="mx-auto grid max-w-8xl lg:grid-cols-[45%_55%]">
        {/* LEFT */}
        <motion.div
          viewport={{ once: true, amount: 0.25 }}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex items-center bg-[#2C3654] px-6 sm:px-10 lg:px-6 2xl:px-16 py-10 lg:py-16 text-white">
          <div className="w-full">
            {/* Title */}
            <AnimatePresence mode="wait">
              <motion.h2
                key={t('scarpaWineryLove.title')}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="font-serif text-[26px] leading-[30px] md:text-[34px] md:leading-[40px] lg:text-[38px] lg:leading-[48px] 2xl:text-[42px] 2xl:leading-[50px]">
                {t('scarpaWineryLove.title')}
              </motion.h2>
            </AnimatePresence>

            <div className="mt-6 lg:mt-8 h-[2px] w-[140px] md:w-[175px] lg:w-[195px] 2xl:w-[205px] bg-white" />

            {/* Text */}
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
                className="mt-6 lg:mt-10 space-y-6 lg:space-y-10 font-sans text-[15px] leading-[1.5] text-white md:text-[17px] lg:text-[18px] lg:leading-[30px]">
                <p>
                  <Trans
                    i18nKey="scarpaWineryLove.paragraph1"
                    components={{
                      strong: <strong className="font-semibold text-white" />,
                    }}
                  />
                </p>

                <p>
                  <Trans
                    i18nKey="scarpaWineryLove.paragraph2"
                    components={{
                      strong: <strong className="font-semibold text-white" />,
                    }}
                  />
                </p>

                <p className="2xl:max-w-[650px]">
                  <Trans
                    i18nKey="scarpaWineryLove.paragraph3"
                    components={{
                      strong: <strong className="font-semibold text-white" />,
                    }}
                  />
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          viewport={{ once: true, amount: 0.25 }}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative min-h-[440px] overflow-hidden lg:min-h-[740px]">
          <motion.img
            src={`${baseUrl}/images/ScarpaWineryPage/scarpa_winery_love/right.webp`}
            alt="Scarpa Winery"
            className="absolute inset-0 h-full w-full object-cover object-[25%_center] lg:object-center"
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
      </div>
    </section>
  );
}
