import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import './villasShare.css';

export function VillasShare() {
  const { t } = useTranslation();

  const sharedFeatures = [
    {
      text: t('villasShare.features.privateSpaces'),
      position: 'top',
    },
    {
      text: t('villasShare.features.pool'),
      position: 'bottom',
    },
    {
      text: t('villasShare.features.kitchen'),
      position: 'top',
    },
    {
      text: t('villasShare.features.hospitality'),
      position: 'bottom',
    },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-8xl 2xl:max-w-[1920px]">
        {/* TOP TEXT */}
        <motion.div
          className="px-6 lg:px-4 xl:px-10 2xl:px-[8rem] py-6 lg:py-10 2xl:py-14 text-center flex flex-row justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}>
          <AnimatePresence mode="wait">
            <motion.h2
              key={t('villasShare.title')}
              className="font-serif text-[19px] sm:text-[23px] md:text-[28px] xl:text-[32px] leading-[1.25] xl:leading-[38px] tracking-[-0.02rem] text-[#2C3654] lg:w-[992px] xl:w-[1148px]"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}>
              {t('villasShare.title')}{' '}
              <span className="italic">{t('villasShare.titleItalic')}</span>
            </motion.h2>
          </AnimatePresence>
        </motion.div>

        {/* IMAGE BLOCK */}
        <div className="relative overflow-hidden">
          {/* IMAGE */}
          <motion.div
            className="section-height-villas-share"
            initial={{
              scale: 1.08,
              opacity: 0,
            }}
            whileInView={{
              scale: 1,
              opacity: 1,
            }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}>
            {/* Mobile */}
            <img
              src={`${process.env.PUBLIC_URL}/images/VillasPage/villas_villasShare/villas_mob.webp`}
              alt="Scarpa Villas"
              className="block w-full object-cover md:hidden max-h-[786px] sm:max-h-[1000px] sm:h-full"
            />

            {/* Tablet */}
            <img
              src={`${process.env.PUBLIC_URL}/images/VillasPage/villas_villasShare/villas_tablet.webp`}
              alt="Scarpa Villas"
              className="hidden w-full h-full object-cover object-[center_55%] md:block lg:hidden"
            />

            {/* Desktop */}
            <img
              src={`${process.env.PUBLIC_URL}/images/VillasPage/villas_villasShare/villas.webp`}
              alt="Scarpa Villas"
              className="hidden w-full object-cover lg:block"
            />
          </motion.div>

          {/* MOBILE + TABLET CONTENT */}
          <motion.div
            className="absolute inset-0 z-10 flex flex-col px-4 pt-10 text-white md:px-8 md:pt-20 lg:hidden"
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.9,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}>
            {/* Heading */}
            <div className="bg-white px-3 py-2 text-center">
              <AnimatePresence mode="wait">
                <motion.h3
                  key={`mobile-${t('villasShare.heading')}`}
                  className="font-sans text-[14px] font-bold uppercase leading-none tracking-[0.25em] text-[#2C3654] sm:text-[16px] md:text-[18px] md:tracking-[0.35em]"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{
                    duration: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  }}>
                  {t('villasShare.heading')}
                </motion.h3>
              </AnimatePresence>
            </div>

            {/* Timeline */}
            <div className="relative mt-5 h-[190px] md:mt-10 md:h-[210px]">
              {/* Line */}
              <div className="absolute left-0 right-0 top-1/2 h-[2px] -translate-y-1/2 bg-white" />

              {/* Dots + Text */}
              <div className="relative flex h-full justify-between">
                {sharedFeatures.map((item, index) => (
                  <div key={index} className="relative flex min-w-0 flex-1 justify-center">
                    {/* Dot */}
                    <div
                      className={`absolute top-1/2 z-10 h-3 w-3 -translate-y-1/2 rounded-full bg-white ${
                        index === 0
                          ? 'left-0'
                          : index === sharedFeatures.length - 1
                            ? 'right-0'
                            : 'left-1/2 -translate-x-1/2'
                      }`}
                    />

                    {/* Text */}
                    <AnimatePresence mode="wait">
                      <motion.p
                        key={`mobile-${item.text}`}
                        className={`absolute w-[120px] font-sans text-[11px] leading-[14px] sm:w-[146px] sm:text-[13px] sm:leading-[16px] md:w-[165px] md:text-[15px] md:leading-[20px] ${
                          index === 0
                            ? 'left-0 text-left'
                            : index === sharedFeatures.length - 1
                              ? 'right-0 text-right'
                              : 'text-center'
                        } ${
                          item.position === 'top'
                            ? 'bottom-[108px] md:bottom-[120px]'
                            : 'top-[108px] md:top-[120px]'
                        }`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}>
                        {item.text.split('\n').map((line) => (
                          <React.Fragment key={line}>
                            {line}
                            <br />
                          </React.Fragment>
                        ))}
                      </motion.p>
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* DESKTOP CONTENT */}
          <motion.div
            className="absolute inset-0 z-10 hidden flex-col justify-center text-white lg:flex lg:max-w-[440px] lg:pl-12 xl:max-w-[580px] 2xl:max-w-[640px] min-[1820px]:max-w-[800px]"
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: 0.9,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}>
            <div className="mb-14 bg-white py-2 text-center">
              <AnimatePresence mode="wait">
                <motion.h3
                  key={t('villasShare.heading')}
                  className="font-sans text-[16px] font-bold uppercase leading-none tracking-[0.35em] text-[#2C3654] xl:text-[18px]"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{
                    duration: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  }}>
                  {t('villasShare.heading')}
                </motion.h3>
              </AnimatePresence>
            </div>

            <div className="relative h-[150px]">
              <div className="absolute left-0 right-0 top-1/2 h-[2px] -translate-y-1/2 bg-white" />

              <div className="relative flex h-full justify-between">
                {sharedFeatures.map((item, index) => (
                  <div key={index} className="relative flex w-[120px] justify-center">
                    <div
                      className={`absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-white ${
                        index === 0
                          ? 'left-0'
                          : index === sharedFeatures.length - 1
                            ? 'right-0'
                            : 'left-1/2 -translate-x-1/2'
                      }`}
                    />

                    <AnimatePresence mode="wait">
                      <motion.p
                        key={item.text}
                        className={`absolute w-[152px] font-sans text-[13px] leading-[17px] xl:text-[14px] xl:leading-[19px] ${
                          index === 0
                            ? 'left-0 text-left'
                            : index === sharedFeatures.length - 1
                              ? 'right-0 text-right'
                              : 'text-center'
                        } ${item.position === 'top' ? 'bottom-[100px]' : 'top-[100px]'}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}>
                        {item.text.split('\n').map((line) => (
                          <React.Fragment key={line}>
                            {line}
                            <br />
                          </React.Fragment>
                        ))}
                      </motion.p>
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
