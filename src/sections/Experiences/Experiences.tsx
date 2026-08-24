import React from 'react';
import { Container } from '../../components/layout/Container';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import 'swiper/css';
import './experiences.css';

type Experience = {
  category: string;
  title: string;
  description: string;
  image: string;
};

const baseUrl = process.env.PUBLIC_URL;

export function Experiences() {
  const experiences: Experience[] = [
    {
      category: 'Wine & Taste',
      title: 'wineryVisits',
      description: 'wineryVisitsDescription',
      image: `${baseUrl}/images/experiences/winery-visits.webp`,
    },
    {
      category: 'Wine & Taste',
      title: 'privateWineTastings',
      description: 'privateWineTastingsDescription',
      image: `${baseUrl}/images/experiences/wine-tastings.webp`,
    },
    {
      category: 'Wine & Taste',
      title: 'chefPrivateDining',
      description: 'chefPrivateDiningDescription',
      image: `${baseUrl}/images/experiences/private-dining.webp`,
    },
    {
      category: 'Wine & Taste',
      title: 'cookingClasses',
      description: 'cookingClassesDescription',
      image: `${baseUrl}/images/experiences/cooking-classes.webp`,
    },
    {
      category: 'Culture & Discovery',
      title: 'langheBaroloTours',
      description: 'langheBaroloToursDescription',
      image: `${baseUrl}/images/experiences/langhe-tours.webp`,
    },
    {
      category: 'Culture & Discovery',
      title: 'turinExperiences',
      description: 'turinExperiencesDescription',
      image: `${baseUrl}/images/experiences/turin-experiences.webp`,
    },
    {
      category: 'Nature & Movement',
      title: 'truffleHunting',
      description: 'truffleHuntingDescription',
      image: `${baseUrl}/images/experiences/truffle-hunting.webp`,
    },
    {
      category: 'Nature & Movement',
      title: 'vineyardPicnics',
      description: 'vineyardPicnicsDescription',
      image: `${baseUrl}/images/experiences/vineyard-picnics.webp`,
    },
    {
      category: 'Nature & Movement',
      title: 'hotAirBalloonFlights',
      description: 'hotAirBalloonFlightsDescription',
      image: `${baseUrl}/images/experiences/hot-air-balloon.webp`,
    },
    {
      category: 'Nature & Movement',
      title: 'vespaEBikeTours',
      description: 'vespaEBikeToursDescription',
      image: `${baseUrl}/images/experiences/vespa-ebike.webp`,
    },
  ];

  const wineAndTaste = experiences.filter((item) => item.category === 'Wine & Taste');
  const cultureAndDiscovery = experiences.filter((item) => item.category === 'Culture & Discovery');
  const natureAndMovement = experiences.filter((item) => item.category === 'Nature & Movement');

  const { t, i18n } = useTranslation();
  const langPrefix = i18n.language === 'en' ? '' : `/${i18n.language}`;

  const fadeUp: Variants = {
    hidden: {
      opacity: 0,
      y: 45,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: 'easeOut',
      },
    },
  };

  const cardsContainer: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.25,
      },
    },
  };

  const cardItem: Variants = {
    hidden: {
      opacity: 0,
      y: 55,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="experiences" className="scroll-mt-[86px] bg-white py-12 lg:py-16 xl:py-20">
      <Container className="px-4 sm:px-8">
        {/* HEADER */}
        <motion.div
          className="mx-auto text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}>
          <AnimatePresence mode="wait">
            <motion.h2
              key={`experiences-title-${i18n.language}`}
              className="font-serif uppercase tracking-[0.1em] text-[#2C3654] text-[24px] leading-[30px] sm:text-[38px] sm:leading-[46px] lg:text-[42px] lg:leading-[50px]"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}>
              {t('experiences.title')}
            </motion.h2>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.p
              key={`experiences-description-${i18n.language}`}
              className="tracking-[-0.03em] mx-auto mt-4 lg:mt-6 max-w-[1120px] font-serif text-[#2C3654] text-[22px] leading-[28px] md:text-[28px] md:leading-[36px] xl:text-[32px] xl:leading-[38px] max-w-[330px] sm:max-w-none sm:w-[550px] md:w-[705px] lg:w-[900px] xl:w-[1024px]"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}>
              {t('experiences.descriptionLine1')} {t('experiences.descriptionLine2')}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        {/* WINE & TASTE */}
        {/* HEADER */}
        <motion.div
          className="mt-8 lg:mt-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}>
          <AnimatePresence mode="wait">
            <motion.h3
              key={`wine-taste-${i18n.language}`}
              className="font-serif tracking-[0.05em] text-[#2C3654] text-[28px] leading-[40px] sm:text-[36px] sm:leading-[50px] lg:text-[38px] lg:leading-[60px] xl:text-[42px] xl:leading-[72px]"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}>
              {t('experiences.wineTaste')}
            </motion.h3>
          </AnimatePresence>

          <div className="h-[2px] w-full bg-[#2C3654]" />
        </motion.div>

        {/* CARDS */}
        {/* MOBILE SWIPER */}
        <motion.div
          className="mt-6 sm:hidden"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}>
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            spaceBetween={18}
            grabCursor
            speed={1600}
            loop
            autoplay={{
              delay: 5500,
              disableOnInteraction: false,
            }}
            className="w-full">
            {wineAndTaste.map((experience) => (
              <SwiperSlide key={experience.title}>
                <article>
                  <img
                    src={experience.image}
                    alt={t(`experienceCards.${experience.title}`)}
                    className="w-full h-[520px] object-cover"
                  />

                  <AnimatePresence mode="wait">
                    <motion.h4
                      key={`${experience.title}-${i18n.language}`}
                      className="card-title"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.25 }}>
                      {t(`experienceCards.${experience.title}`)}
                    </motion.h4>
                  </AnimatePresence>

                  <AnimatePresence mode="wait">
                    <motion.p
                      key={`${experience.description}-${i18n.language}`}
                      className="card-description"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.25 }}>
                      {t(`experienceCards.${experience.description}`)}
                    </motion.p>
                  </AnimatePresence>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* TABLET & DESKTOP GRID */}
        <motion.div
          className="mt-6 hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-10"
          variants={cardsContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}>
          {wineAndTaste.map((experience) => (
            <motion.article key={experience.title} variants={cardItem}>
              <div className="group cursor-pointer overflow-hidden">
                <img
                  src={experience.image}
                  alt={t(`experienceCards.${experience.title}`)}
                  className="w-full h-[480px] lg:h-[380px] xl:h-[480px] 2xl:h-[580px] object-cover transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                />
              </div>

              <AnimatePresence mode="wait">
                <motion.h4
                  key={`${experience.title}-${i18n.language}`}
                  className="card-title"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25 }}>
                  {t(`experienceCards.${experience.title}`)}
                </motion.h4>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.p
                  key={`${experience.description}-${i18n.language}`}
                  className="card-description"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25 }}>
                  {t(`experienceCards.${experience.description}`)}
                </motion.p>
              </AnimatePresence>
            </motion.article>
          ))}
        </motion.div>

        {/* CULTURE & DISCOVERY */}
        {/* HEADER */}
        <motion.div
          className="mt-8 lg:mt-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}>
          <AnimatePresence mode="wait">
            <motion.h3
              key={`wine-taste-${i18n.language}`}
              className="font-serif text-center tracking-[0.05em] text-[#2C3654] text-[28px] leading-[40px] sm:text-[36px] sm:leading-[50px] lg:text-[38px] lg:leading-[60px] xl:text-[42px] xl:leading-[72px]"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}>
              {t('experiences.cultureDiscovery')}
            </motion.h3>
          </AnimatePresence>
          <div className="h-[2px] w-full bg-[#2C3654]" />
        </motion.div>

        {/* CARDS */}
        {/* MOBILE SWIPER */}
        <motion.div
          className="mt-6 sm:hidden"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}>
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            spaceBetween={18}
            loop
            speed={1600}
            grabCursor
            autoplay={{
              delay: 5500,
              disableOnInteraction: false,
            }}
            className="w-full">
            {cultureAndDiscovery.map((experience) => (
              <SwiperSlide key={experience.title}>
                <article>
                  <img
                    src={experience.image}
                    alt={t(`experienceCards.${experience.title}`)}
                    className="w-full h-[520px] object-cover"
                  />

                  <AnimatePresence mode="wait">
                    <motion.h4
                      key={`${experience.title}-${i18n.language}`}
                      className="card-title"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.25 }}>
                      {t(`experienceCards.${experience.title}`)}
                    </motion.h4>
                  </AnimatePresence>

                  <AnimatePresence mode="wait">
                    <motion.p
                      key={`${experience.description}-${i18n.language}`}
                      className="card-description"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.25 }}>
                      {t(`experienceCards.${experience.description}`)}
                    </motion.p>
                  </AnimatePresence>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* TABLET & DESKTOP GRID */}
        <motion.div
          className="mt-6 hidden sm:grid sm:grid-cols-2 gap-10"
          variants={cardsContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}>
          {cultureAndDiscovery.map((experience) => (
            <motion.article key={experience.title} variants={cardItem}>
              <div className="group cursor-pointer overflow-hidden">
                <img
                  src={experience.image}
                  alt={t(`experienceCards.${experience.title}`)}
                  className="w-full h-[480px] lg:h-auto object-cover transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                />
              </div>

              <AnimatePresence mode="wait">
                <motion.h4
                  key={`${experience.title}-${i18n.language}`}
                  className="card-title"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25 }}>
                  {t(`experienceCards.${experience.title}`)}
                </motion.h4>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.p
                  key={`${experience.description}-${i18n.language}`}
                  className="card-description"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25 }}>
                  {t(`experienceCards.${experience.description}`)}
                </motion.p>
              </AnimatePresence>
            </motion.article>
          ))}
        </motion.div>

        {/* NATURE & MOVEMENT */}
        {/* HEADER */}
        <motion.div
          className="mt-8 lg:mt-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}>
          <div className="flex justify-end">
            <AnimatePresence mode="wait">
              <motion.h3
                key={`wine-taste-${i18n.language}`}
                className="font-serif tracking-[0.05em] text-[#2C3654] text-[28px] leading-[40px] sm:text-[36px] sm:leading-[50px] lg:text-[38px] lg:leading-[60px] xl:text-[42px] xl:leading-[72px]"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}>
                {t('experiences.natureMovement')}
              </motion.h3>
            </AnimatePresence>
          </div>

          <div className="h-[2px] w-full bg-[#2C3654]" />
        </motion.div>

        {/* CARDS */}
        {/* MOBILE SWIPER */}
        <motion.div
          className="mt-6 sm:hidden"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}>
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            spaceBetween={18}
            loop
            speed={1600}
            autoplay={{
              delay: 5500,
              disableOnInteraction: false,
            }}
            className="w-full">
            {natureAndMovement.map((experience) => (
              <SwiperSlide key={experience.title}>
                <article>
                  <img
                    src={experience.image}
                    alt={t(`experienceCards.${experience.title}`)}
                    className="w-full h-[520px] object-cover"
                  />

                  <AnimatePresence mode="wait">
                    <motion.h4
                      key={`${experience.title}-${i18n.language}`}
                      className="card-title"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.25 }}>
                      {t(`experienceCards.${experience.title}`)}
                    </motion.h4>
                  </AnimatePresence>

                  <AnimatePresence mode="wait">
                    <motion.p
                      key={`${experience.description}-${i18n.language}`}
                      className="card-description"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.25 }}>
                      {t(`experienceCards.${experience.description}`)}
                    </motion.p>
                  </AnimatePresence>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* TABLET & DESKTOP GRID */}
        <motion.div
          className="mt-6 hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-10"
          variants={cardsContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}>
          {natureAndMovement.map((experience) => (
            <motion.article key={experience.title} variants={cardItem}>
              <div className="group cursor-pointer overflow-hidden">
                <img
                  src={experience.image}
                  alt={t(`experienceCards.${experience.title}`)}
                  className="w-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                />
              </div>

              <AnimatePresence mode="wait">
                <motion.h4
                  key={`${experience.title}-${i18n.language}`}
                  className="card-title"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25 }}>
                  {t(`experienceCards.${experience.title}`)}
                </motion.h4>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.p
                  key={`${experience.description}-${i18n.language}`}
                  className="card-description"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25 }}>
                  {t(`experienceCards.${experience.description}`)}
                </motion.p>
              </AnimatePresence>
            </motion.article>
          ))}
        </motion.div>

        {/* DISCOVER BTN */}
        <motion.div
          className="mt-10 lg:mt-14 2xl:mt-16 flex justify-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}>
          <Link to={`${langPrefix}/experiences`} className="experiences-btn">
            <AnimatePresence mode="wait">
              <motion.span
                key={`discover-all-${i18n.language}`}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}>
                {t('experiences.discoverAll')}
              </motion.span>
            </AnimatePresence>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
