import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export function OriginsMonvigliero() {
  const baseUrl = process.env.PUBLIC_URL;
  const { t } = useTranslation();

  return (
    <section className="bg-white overflow-hidden">
      {/* TOP IMAGE */}
      <div className="relative overflow-hidden">
        <motion.img
          src={`${baseUrl}/images/OriginsPage/origins_monvigliero/top.webp`}
          alt="Monvigliero vineyard"
          className="h-[440px] w-full object-cover sm:h-[460px] lg:h-full"
          initial={{
            opacity: 0,
            scale: 1.08,
          }}
          whileInView={{
            opacity: 1,
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

        {/* Mobile overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-transparent" />

        {/* Title */}
        <div className="absolute inset-x-0 bottom-8 lg:bottom-16 flex justify-center pointer-events-none">
          <motion.h2
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
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="font-serif text-[32px] sm:text-[38px] lg:text-[52px] uppercase tracking-[0.18em] text-white">
            MONVIGLIERO
          </motion.h2>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="mx-auto grid max-w-8xl lg:grid-cols-[2fr_1fr] p-6">
        {/* LEFT IMAGE */}
        <motion.div
          className="relative overflow-hidden order-2 lg:order-1"
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
          <motion.picture
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
            className="block h-[280px] sm:h-[440px] lg:h-full lg:max-h-[920px] w-full">
            <source
              media="(max-width: 1023px)"
              srcSet={`${baseUrl}/images/OriginsPage/origins_monvigliero/monvigliero_mob.webp`}
            />

            <img
              src={`${baseUrl}/images/OriginsPage/origins_monvigliero/monvigliero.webp`}
              alt="Monvigliero"
              className="h-full w-full object-cover"
            />
          </motion.picture>

          {/* TITLE */}
          {/* <div className="hidden lg:flex pointer-events-none absolute inset-0 flex items-center justify-center">
            <motion.h2
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
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-serif text-[42px] uppercase tracking-[0.2em] text-white sm:text-[56px] lg:text-[62px]">
              MONVIGLIERO
            </motion.h2>
          </div> */}
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          className="flex justify-center bg-white pt-2 pb-10 sm:px-10 lg:pl-10 lg:pr-0 lg:py-16 2xl:pr-4 order-1 lg:order-2"
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
          <div className="flex flex-col justify-center">
            {/* TITLE */}
            <AnimatePresence mode="wait">
              <motion.h2
                key={t('originsMonvigliero.titleLine1')}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="font-serif text-[22px] leading-[26px] md:text-[28px] md:leading-[32px] lg:text-[32px] lg:leading-[38px] text-[#2C3654]">
                {t('originsMonvigliero.titleLine1')}
                <br />
                {t('originsMonvigliero.titleLine2')}
              </motion.h2>
            </AnimatePresence>

            {/* LINE */}
            <div className="mt-6 lg:mt-10 h-[2px] w-[120px] lg:w-[200px] bg-[#2C3654]" />

            {/* TEXT */}
            <AnimatePresence mode="wait">
              <motion.div
                key={t('originsMonvigliero.text1')}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-6 lg:mt-10 space-y-10 font-sans text-[13px] leading-[18px] md:text-[15px] md:leading-[20px] lg:text-[18px] lg:leading-[26px] text-[#2C3654]">
                <p>{t('originsMonvigliero.text1')}</p>

                <p>
                  {t('originsMonvigliero.text2Start')}{' '}
                  <strong>{t('originsMonvigliero.text2Bold')}</strong>
                  {t('originsMonvigliero.text2End')}
                </p>

                <p className="lg:max-w-[454px]">
                  {t('originsMonvigliero.text3Start')}{' '}
                  <strong>{t('originsMonvigliero.text3Bold')}</strong>
                  {t('originsMonvigliero.text3End')}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
