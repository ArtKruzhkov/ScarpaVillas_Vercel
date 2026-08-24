import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export function RegionIntro() {
  const { t, i18n } = useTranslation();
  const baseUrl = process.env.PUBLIC_URL;

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-8xl">
        <div className="grid overflow-hidden lg:grid-cols-2">
          {/* IMAGE */}
          <motion.div
            className="overflow-hidden p-6 lg:p-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}>
            <motion.img
              src={`${baseUrl}/images/RegionPage/region_intro/region_intro.png`}
              alt="Piedmont vineyards and villages"
              className="h-[380px] w-full object-cover sm:h-[460px] lg:h-full"
              initial={{ scale: 1.08 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 1.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          </motion.div>

          {/* CONTENT */}
          <motion.div
            className="flex items-center px-6 pb-6 lg:py-20 lg:pr-6 lg:pl-0"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}>
            <div className="w-full">
              {/* TITLE */}
              <AnimatePresence mode="wait">
                <motion.h2
                  key={`title-${i18n.language}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{
                    duration: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="font-sans max-w-[327px] sm:max-w-none text-[13px] md:text-[18px] 2xl:text-[20px] font-semibold uppercase leading-[1.45] tracking-[0.04em] lg:tracking-[0.2em] text-[#2C3654]">
                  {t('regionIntro.titleLine1')}
                  <br className="hidden lg:block" /> {t('regionIntro.titleLine2')}
                  <br className="hidden lg:block" /> {t('regionIntro.titleLine3')}
                </motion.h2>
              </AnimatePresence>

              {/* LINE */}
              <div className="my-4 lg:my-8 h-[2px] w-[220px] bg-[#2C3654] lg:my-10" />

              {/* TEXT */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`text-${i18n.language}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{
                    duration: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="max-w-[780px] space-y-4 lg:space-y-6 font-sans text-[13px] leading-[1.45] text-[#2C3654] md:text-[16px] lg:text-[18px]">
                  <p>{t('regionIntro.paragraph1')}</p>

                  <p>{t('regionIntro.paragraph2')}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
