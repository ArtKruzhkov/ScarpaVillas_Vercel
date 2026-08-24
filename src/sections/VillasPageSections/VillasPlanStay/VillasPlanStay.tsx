import React from 'react';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './villasPlanStay.css';

export function VillasPlanStayCTA() {
  const { t, i18n } = useTranslation();

  const langPrefix = i18n.language === 'it' ? '/it' : '';

  return (
    <section className="relative section-height overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <motion.img
          src={`${process.env.PUBLIC_URL}/images/VillasPage/villas_planStay/villas-plan-stay.webp`}
          alt="Scarpa Villas"
          className="h-full w-full object-cover"
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
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent lg:hidden" />
      </div>

      {/* Content */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center lg:justify-start"
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
          duration: 0.8,
          delay: 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}>
        <div className="px-6 lg:pl-10 lg:pr-0 text-center lg:text-left text-white">
          <AnimatePresence mode="wait">
            <motion.h2
              key={t('villasPlanStayCTA.title')}
              className="mx-auto lg:mx-0 max-w-[688px] lg:max-w-[430px] xl:max-w-[494px] min-[1400px]:max-w-[588px] min-[1640px]:max-w-[648px] font-serif text-[28px] lg:text-[34px] xl:text-[40px] min-[1640px]:text-[52px] uppercase leading-[1] tracking-[0.03rem]"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}>
              {t('villasPlanStayCTA.title')}
            </motion.h2>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.p
              key={t('villasPlanStayCTA.text1')}
              className="mx-auto lg:mx-0 mt-8 lg:mt-10 max-w-[688px] lg:max-w-[430px] min-[1400px]:max-w-[588px] min-[1640px]:max-w-[688px] font-serif text-[18px] xl:text-[21px] min-[1640px]:text-[24px] leading-[1.2]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}>
              {t('villasPlanStayCTA.text1')} <em>{t('villasPlanStayCTA.textItalic')}</em> —{' '}
              {t('villasPlanStayCTA.text1End')}
            </motion.p>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.p
              key={t('villasPlanStayCTA.text2')}
              className="mx-auto lg:mx-0 mt-8 lg:mt-10 max-w-[410px] min-[1400px]:max-w-[500px] min-[1640px]:max-w-[574px] font-serif text-[18px] xl:text-[21px] min-[1640px]:text-[24px] leading-[1.2]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}>
              {t('villasPlanStayCTA.text2')}
            </motion.p>
          </AnimatePresence>

          <Link to={`${langPrefix}/borgo`} className="plan-stay-button">
            <AnimatePresence mode="wait">
              <motion.span
                key={t('villasPlanStayCTA.button')}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}>
                {t('villasPlanStayCTA.button')}
              </motion.span>
            </AnimatePresence>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
