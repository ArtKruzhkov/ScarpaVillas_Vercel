import React from 'react';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './borgo.css';

export function Borgo() {
  const { t, i18n } = useTranslation();
  const langPrefix = i18n.language === 'en' ? '' : `/${i18n.language}`;

  return (
    <section
      id="borgo"
      className="scroll-mt-[86px] relative w-full bg-[#2C3654] py-6 px-6 sm:px-10 sm:py-10">
      {/* FULL IMAGE SECTION */}
      <div className="relative w-full h-[85vh] lg:h-[95vh] min-h-[720px] lg:min-h-[800px] 2xl:h-full">
        {/* IMAGE */}
        <div className="overflow-hidden h-full">
          <motion.div
            className="h-full"
            initial={{
              scale: 1.12,
            }}
            whileInView={{
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.1,
            }}
            transition={{
              duration: 2,
              ease: 'easeOut',
            }}>
            <picture>
              <source
                media="(max-width: 639px)"
                srcSet={`${process.env.PUBLIC_URL}/images/borgo/borgo-hero_mob.webp`}
              />

              <img
                src={`${process.env.PUBLIC_URL}/images/borgo/borgo-hero.webp`}
                alt="The Borgo"
                className="borgo-hero-image"
              />
            </picture>
          </motion.div>
        </div>

        {/* CONTENT */}
        <motion.div
          className="absolute inset-0 z-10 flex flex-col sm:items-center px-6 pt-6 lg:pt-12 2xl:pt-16 sm:text-center"
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 1,
            delay: 0.5,
          }}>
          {/* TITLE */}
          <AnimatePresence mode="wait">
            <motion.h2
              key={`borgo-title-${i18n.language}`}
              className="borgo-title"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}>
              <span className="block">{t('borgo.title1')}</span>
              <span className="block lg:mt-1">{t('borgo.title2')}</span>
            </motion.h2>
          </AnimatePresence>

          {/* DESCRIPTION DESKTOP*/}
          <AnimatePresence mode="wait">
            <motion.p
              key={`borgo-desktop-${i18n.language}`}
              className="hidden font-sans sm:block mt-5 max-w-[900px] xl:max-w-[1000px] 2xl:max-w-[1200px] text-[15px] leading-[1.6] sm:text-[14px] lg:text-[14.9px] xl:text-[16px] 2xl:text-[19.8px] 2xl:leading-[1.7] text-[#2C3654]"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}>
              {t('borgo.descriptionDesktop')}
            </motion.p>
          </AnimatePresence>

          {/* DESCRIPTION MOBILE */}
          <AnimatePresence mode="wait">
            <motion.p
              key={`borgo-mobile-${i18n.language}`}
              className="mt-2 font-sans text-[14px] leading-[1.4] text-[#2C3654] sm:hidden"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}>
              <span>{t('borgo.descriptionMobile1')}</span>
              <br />
              <span>{t('borgo.descriptionMobile2')}</span>
            </motion.p>
          </AnimatePresence>

          {/* BUTTON */}
          <Link to={`${langPrefix}/borgo`} className="borgo-btn">
            <AnimatePresence mode="wait">
              <motion.span
                key={t('borgo.button')}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}>
                {t('borgo.button')}
              </motion.span>
            </AnimatePresence>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
