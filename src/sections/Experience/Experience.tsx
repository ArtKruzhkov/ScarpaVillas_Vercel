import React from 'react';
import { Container } from '../../components/layout/Container';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation, Trans } from 'react-i18next';

export function Experience() {
  const { t, i18n } = useTranslation();

  return (
    <section className="bg-white pt-12 pb-6 lg:pt-20 pb-10 xl:pt-[5.5rem] xl:pb-[3rem]">
      <Container className="!px-0 lg:!px-2">
        {/* Desktop */}
        <div className="hidden lg:grid grid grid-cols-1 lg:gap-10 lg:grid-cols-[450px_minmax(0,1fr)] xl:grid-cols-[574px_minmax(0,1fr)] px-6">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.4,
            }}>
            <div className="lg:max-w-[450px] xl:max-w-[574px] flex flex-col justify-center h-full">
              {/* HEADER */}
              <div className="flex flex-col items-center lg:block lg:mt-4">
                <AnimatePresence mode="wait">
                  {/* Desktop */}
                  <motion.h2
                    key={`experience-title-${i18n.language}`}
                    className="hidden lg:block font-serif text-[28px] leading-[28px] xl:text-[36px] xl:leading-[20px] text-[#2C3654]"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3 }}>
                    <span className="block">{t('experience.title1')}</span>
                    <span className="block mt-5 xl:mt-7">{t('experience.title2')}</span>
                  </motion.h2>
                </AnimatePresence>

                <div className="mt-11 h-[2px] w-[210px] bg-[#6e7a9b]" />
              </div>

              {/* TEXT */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`experience-text-${i18n.language}`}
                  className="font-sans mt-7 space-y-7 lg:mt-[2.5rem] lg:space-y-[2.5rem] text-[18px] xl:text-[20px] leading-[1.65] text-[#2C3654]"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}>
                  <p>
                    <Trans i18nKey="experience.paragraph1" components={{ strong: <strong /> }} />
                  </p>

                  <p>
                    <Trans i18nKey="experience.paragraph2" components={{ strong: <strong /> }} />
                  </p>

                  <p>
                    <Trans i18nKey="experience.paragraph3" components={{ strong: <strong /> }} />
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* IMAGE */}
          <div className="overflow-hidden mt-6 lg:mt-0">
            <motion.div
              className="h-full"
              viewport={{ once: true, amount: 0.5 }}
              initial={{
                opacity: 0,
                scale: 1.12,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 1.8,
                ease: [0.22, 1, 0.36, 1],
              }}>
              <img
                src={`${process.env.PUBLIC_URL}/images/experience/experience.webp`}
                alt="Luxury wine villa interior"
                className="h-full min-h-[380px] lg:min-h-[620px] lg:max-h-[675px] w-full object-cover"
              />
            </motion.div>
          </div>
        </div>

        {/* Mobile */}
        <div className="lg:hidden">
          <div className="lg:max-w-[450px] xl:max-w-[574px]">
            {/* HEADER */}
            <motion.div
              className="flex flex-col items-center lg:block"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}>
              {/* Mobile */}
              <AnimatePresence mode="wait">
                <motion.h2
                  key={`experience-title-mobile-${i18n.language}`}
                  className="font-serif text-[24px] leading-[30px] sm:text-[30px] sm:leading-[36px] md:text-[38px] md:leading-[48px] text-[#2C3654] text-center lg:hidden w-[311px] sm:w-[375px] md:w-[480px]"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}>
                  {t('experience.title1')}
                  <br />
                  {t('experience.title2')}
                </motion.h2>
              </AnimatePresence>

              <div className="mt-6 h-[2px] w-[210px] bg-[#6e7a9b]" />
            </motion.div>

            {/* TOP TEXT */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={`experience-top-text-${i18n.language}`}
                  className="font-sans mt-6 space-y-5  text-[14.3px] leading-[20px] sm:text-[18px] sm:leading-[26px] md:text-[21px] md:leading-[31px] text-[#2C3654] px-4 max-w-[402px] sm:max-w-[500px] md:max-w-[580px] mx-auto"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}>
                  <p>
                    <Trans i18nKey="experience.paragraph1" components={{ strong: <strong /> }} />
                  </p>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* IMAGE */}
            <div className="overflow-hidden mt-8">
              <motion.div
                className="h-full"
                viewport={{ once: true, amount: 0.5 }}
                initial={{ opacity: 0, scale: 1.12 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 1.8,
                  ease: [0.22, 1, 0.36, 1],
                }}>
                <img
                  src={`${process.env.PUBLIC_URL}/images/experience/experience_mob.webp`}
                  alt="Luxury wine villa interior"
                  className="w-full max-h-[585px] object-cover object-[center_65%]"
                />
              </motion.div>
            </div>

            {/* BOTTOM TEXT */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={`experience-bottom-text-${i18n.language}`}
                  className="font-sans mt-8 space-y-5  text-[14.3px] leading-[20px] sm:text-[18px] sm:leading-[26px] md:text-[21px] md:leading-[31px] text-[#2C3654] px-4 max-w-[402px] sm:max-w-[500px] md:max-w-[580px] mx-auto"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}>
                  <p>
                    <Trans i18nKey="experience.paragraph2" components={{ strong: <strong /> }} />
                  </p>

                  <p>
                    <Trans i18nKey="experience.paragraph3" components={{ strong: <strong /> }} />
                  </p>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
