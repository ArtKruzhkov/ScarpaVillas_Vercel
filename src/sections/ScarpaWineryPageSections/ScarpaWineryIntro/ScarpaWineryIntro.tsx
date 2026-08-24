import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation, Trans } from 'react-i18next';

export function ScarpaWineryIntro() {
  const { t } = useTranslation();

  return (
    <section className="bg-white px-6 py-8 lg:py-16">
      <motion.div
        className="mx-auto flex max-w-[860px] flex-col items-center text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}>
        <AnimatePresence mode="wait">
          <motion.h2
            key={t('scarpaWineryIntro.title')}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="font-serif text-[18px] sm:text-[24px] md:text-[28px] xl:text-[32px] leading-[1.25] xl:leading-[38px] tracking-[-0.02rem] text-[#2C3654]">
            <Trans
              i18nKey="scarpaWineryIntro.title"
              components={{
                italic: <span className="italic" />,
                br: <br />,
                brMobile: <br className="md:hidden" />,
              }}
            />
          </motion.h2>
        </AnimatePresence>

        {/* Divider */}
        <div className="mt-4 lg:mt-6 h-[2px] w-[230px] bg-[#2C3654] sm:w-[260px]" />

        <AnimatePresence mode="wait">
          <motion.p
            key={t('scarpaWineryIntro.textLine1')}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-4 lg:mt-6 max-w-[860px] font-sans text-[14px] leading-[20px] sm:text-[18px] sm:leading-[26px] text-[#2C3654]">
            {t('scarpaWineryIntro.textLine1')}
            <br className="hidden sm:block" />
            {t('scarpaWineryIntro.textLine2')}
          </motion.p>
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
