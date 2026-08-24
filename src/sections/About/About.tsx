import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Container } from '../../components/layout/Container';
import './about.css';

export function About() {
  const { t, i18n } = useTranslation();
  return (
    <section
      id="story"
      className="scroll-mt-[86px] relative overflow-hidden section-height flex items-end">
      {/* BACKGROUND IMAGE */}
      <motion.div
        className="absolute inset-0"
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
        <picture>
          <source
            media="(max-width: 639px)"
            srcSet={`${process.env.PUBLIC_URL}/images/about/about-hero_mob.webp`}
          />

          <img
            src={`${process.env.PUBLIC_URL}/images/about/about-hero.webp`}
            alt="Scarpa Villas Landscape"
            className="h-full w-full object-cover"
          />
        </picture>

        <div className="hero-overlay absolute inset-0 sm:hidden" />
      </motion.div>

      {/* CONTENT */}
      <Container className="relative z-10 h-full pb-8 lg:h-auto lg:pb-10 2xl:pb-14">
        <div className="flex h-full flex-col items-center justify-between px-3 lg:px-6 lg:block lg:h-auto lg:max-w-[912px] lg:ml-auto xl:max-w-[1074px] min-[1780px]:max-w-[1290px] xl:mr-6 xl:px-0 2xl:mr-12 min-[1780px]:mr-[5rem]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}>
            <AnimatePresence mode="wait">
              <motion.h2
                key={`about-title-${i18n.language}`}
                className="pt-12 sm:pt-6 max-w-[310px] sm:max-w-[360px] md:max-w-[430px] lg:max-w-full font-serif text-center text-[24px] leading-[30px] font-medium uppercase tracking-[0.08em] text-[#2C3654] sm:text-[30px] sm:leading-[38px] md:text-[35px] lg:pt-0 lg:text-left lg:text-[36px] lg:leading-[38px] lg:text-white"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}>
                {t('about.title')}
              </motion.h2>
            </AnimatePresence>
          </motion.div>

          <motion.div
            className="lg:mt-4 max-w-[440px] sm:max-w-[490px] lg:max-w-full"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}>
            <AnimatePresence mode="wait">
              <motion.p
                key={`about-text-${i18n.language}`}
                className="about-text"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}>
                <span className="block">{t('about.text1')}</span>
                <span className="block mt-3 xl:mt-2">{t('about.text2')}</span>
                <span className="block mt-3 xl:mt-2">{t('about.text3')}</span>
              </motion.p>
            </AnimatePresence>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
