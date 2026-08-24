import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import 'swiper/css';
import './signaturesStays.css';

type Stay = {
  title: string;
  subtitle?: string;
  description: string;
  nights?: number;
  startMonth?: string;
  endMonth?: string;
  image: string;
  href: string;
};

const baseUrl = process.env.PUBLIC_URL;

const stays: Stay[] = [
  {
    title: 'signatureStays',
    description: 'signatureStaysDescription',
    image: `${baseUrl}/images/stays/signature-stays.webp`,
    href: '/stays',
  },
  {
    title: 'tasteOfLanghe',
    subtitle: 'tasteOfLangheSubtitle',
    description: 'tasteOfLangheDescription',
    nights: 5,
    startMonth: 'january',
    endMonth: 'may',
    image: `${baseUrl}/images/stays/taste-of-langhe.webp`,
    href: '/stays#taste-of-langhe',
  },
  {
    title: 'luxRetreat',
    subtitle: 'luxRetreatSubtitle',
    description: 'luxRetreatDescription',
    nights: 3,
    startMonth: 'january',
    endMonth: 'april',
    image: `${baseUrl}/images/stays/lux-retreat.webp`,
    href: '/stays#lux-retreat',
  },
  {
    title: 'autumnGems',
    subtitle: 'autumnGemsSubtitle',
    description: 'autumnGemsDescription',
    nights: 5,
    startMonth: 'october',
    endMonth: 'november',
    image: `${baseUrl}/images/stays/autumn-gems.webp`,
    href: '/stays#autumn-gems',
  },
  {
    title: 'piemonteEscape',
    subtitle: 'piemonteEscapeSubtitle',
    description: 'piemonteEscapeDescription',
    nights: 7,
    startMonth: 'january',
    endMonth: 'may',
    image: `${baseUrl}/images/stays/piemonte-escape.webp`,
    href: '/stays#piemonte-escape',
  },
];

const momentSlides = [
  `${baseUrl}/images/stays/moment-left.webp`,
  `${baseUrl}/images/stays/moment-right.webp`,
  `${baseUrl}/images/stays/moment-left2.webp`,
  `${baseUrl}/images/stays/moment-right2.webp`,
  `${baseUrl}/images/stays/moment-left3.webp`,
  `${baseUrl}/images/stays/moment-right3.webp`,
  `${baseUrl}/images/stays/moment-left4.webp`,
  `${baseUrl}/images/stays/moment-right4.webp`,
  `${baseUrl}/images/stays/moment-left5.webp`,
  `${baseUrl}/images/stays/moment-right5.webp`,
];

const cardsContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.15,
    },
  },
};

const cardItem: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
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

type StayCardProps = {
  stay: Stay;
  imageFirst?: boolean;
};

function StayCard({ stay, imageFirst = true }: StayCardProps) {
  const { t, i18n } = useTranslation();
  const langPrefix = i18n.language === 'en' ? '' : `/${i18n.language}`;

  return (
    <Link to={`${langPrefix}${stay.href}`} className="group block h-full">
      <article
        className={`bg-white h-full ${
          imageFirst
            ? 'border-b-[13px] border-[#C09A60]'
            : 'border-t-[13px] border-[#C09A60] flex flex-col justify-between'
        }`}>
        {imageFirst && (
          <div className="overflow-hidden">
            <img
              src={stay.image}
              alt={t(`stays.${stay.title}`)}
              className="w-full object-cover h-[380px] md:h-[480px] lg:h-auto lg:object-contain xl:h-[432px] xl:object-cover sm:object-[center_30%] lg:object-center transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
            />
          </div>
        )}

        <div className="p-4 sm:p-8 text-center">
          <AnimatePresence mode="wait">
            <motion.h3
              key={`${stay.title}-${i18n.language}`}
              className="font-serif tracking-[0.05em] text-[#2C3654] text-[24px] leading-[32px] lg:text-[30px] lg:leading-[40px] xl:text-[32px] xl:leading-[40px]"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25 }}>
              {t(`stays.${stay.title}`)}
            </motion.h3>
          </AnimatePresence>

          {stay.subtitle && (
            <AnimatePresence mode="wait">
              <motion.p
                key={`${stay.subtitle}-${i18n.language}`}
                className="mt-3 font-sans font-bold italic text-[15px] leading-[20px] lg:text-[16px] lg:leading-[26px] 2xl:text-[18px] 2xl:leading-[28px] text-[#2C3654]"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}>
                {t(`stays.${stay.subtitle}`)}
              </motion.p>
            </AnimatePresence>
          )}

          <AnimatePresence mode="wait">
            <motion.p
              key={`${stay.description}-${i18n.language}`}
              className="mt-4 xl:mt-4 font-sans text-[15px] leading-[20px] lg:text-[18px] lg:leading-[26px] text-[#2C3654]"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25 }}>
              {t(`stays.${stay.description}`)}
            </motion.p>
          </AnimatePresence>

          {stay.nights && (
            <AnimatePresence mode="wait">
              <motion.p
                key={`${stay.title}-dates-${i18n.language}`}
                className="mt-4 xl:mt-8 font-sans font-bold text-[15px] leading-[20px] lg:text-[16px] lg:leading-[26px] 2xl:text-[18px] 2xl:leading-[28px] text-[#2C3654]"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}>
                {stay.nights} {t('common.nights')} · {t(`common.${stay.startMonth}`)} –{' '}
                {t(`common.${stay.endMonth}`)}
              </motion.p>
            </AnimatePresence>
          )}
        </div>

        {!imageFirst && (
          <div className="w-full overflow-hidden">
            <img
              src={stays[1].image}
              alt={t(`stays.${stays[1].title}`)}
              className="w-full scale-[1.005] object-cover h-[380px] md:h-[480px] lg:h-auto lg:object-contain xl:h-[432px] xl:object-cover sm:object-[center_30%] lg:object-center transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
            />
          </div>
        )}
      </article>
    </Link>
  );
}

export function SignatureStays() {
  const { t, i18n } = useTranslation();
  const langPrefix = i18n.language === 'en' ? '' : `/${i18n.language}`;

  return (
    <section className="bg-[#2C3654] pb-8 lg:pb-16">
      <div className="mx-auto w-full max-w-8xl px-0">
        {/* TOP HERO */}
        <div className="relative section-height overflow-hidden">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            breakpoints={{
              1024: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={0}
            loop
            speed={1800}
            allowTouchMove
            grabCursor
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            className="h-full w-full">
            {momentSlides.map((image, index) => (
              <SwiperSlide key={`${image}-${index}`} className="bg-transparent">
                <img
                  src={image}
                  alt="moment at scarpa villas"
                  className="h-full w-full object-cover block"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* TITLE */}
          <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.h2
                key={`moments-title-${i18n.language}`}
                className="font-serif text-center text-[28px] leading-[33px] sm:text-[28px] sm:leading-[32px] md:text-[36px] md:leading-[42px] lg:text-[46px] lg:leading-[48px] xl:text-[54px] xl:leading-[60px] 2xl:text-[70px] 2xl:leading-[72px] uppercase tracking-[0.2em] text-white"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}>
                {/* {t('moments.title')} */}
                <span>{t('moments.title1')}</span>

                <span className="block sm:inline">{t('moments.title2')}</span>
              </motion.h2>
            </AnimatePresence>
          </div>
        </div>

        {/* STAYS GRID */}
        <div id="stays" className="bg-[#2C3654] w-full max-w-8xl px-4 lg:px-8 pt-8 lg:pt-16">
          {/* TOP ROW */}
          <motion.div
            className="hidden lg:grid lg:grid-cols-3 gap-5 xl:gap-7"
            variants={cardsContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}>
            <motion.div variants={cardItem}>
              <Link to={`${langPrefix}${stays[0].href}`} className="group block h-full">
                <article className="bg-white h-full border-b-[13px] border-[#C09A60]">
                  <div className="overflow-hidden">
                    <img
                      src={stays[0].image}
                      alt={stays[0].title}
                      className="w-full object-cover h-[380px] md:h-[480px] lg:h-auto lg:object-contain xl:h-[432px] xl:object-cover xl:object-[center_25%] transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                    />
                  </div>

                  <div className="p-4 sm:p-8 text-center">
                    <AnimatePresence mode="wait">
                      <motion.h3
                        key={`${stays[0].title}-${i18n.language}`}
                        className="font-serif tracking-[0.05em] text-[#2C3654] text-[24px] leading-[32px] lg:text-[30px] lg:leading-[40px] xl:text-[32px] xl:leading-[40px]"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.25 }}>
                        {t(`stays.${stays[0].title}`)}
                      </motion.h3>
                    </AnimatePresence>

                    <AnimatePresence mode="wait">
                      <motion.p
                        key={`signature1-${i18n.language}`}
                        className="mt-2 xl:mt-4 font-sans text-[15px] leading-[20px] lg:text-[18px] lg:leading-[26px] text-[#2C3654] xl:px-4"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.25 }}>
                        {t('stays.signatureStaysDescription1')}
                      </motion.p>
                    </AnimatePresence>

                    <AnimatePresence mode="wait">
                      <motion.p
                        key={`signature2-${i18n.language}`}
                        className="mt-4 xl:mt-8 font-sans font-medium text-[17px] lg:text-[18px] lg:leading-[26px] text-[#2C3654] lg:px-6"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.25 }}>
                        {t('stays.signatureStaysDescription2')}
                      </motion.p>
                    </AnimatePresence>
                  </div>
                </article>
              </Link>
            </motion.div>

            <motion.div variants={cardItem}>
              <StayCard stay={stays[1]} imageFirst={false} />
            </motion.div>

            <motion.div variants={cardItem}>
              <StayCard stay={stays[2]} imageFirst />
            </motion.div>
          </motion.div>

          {/* BOTTOM ROW */}
          <motion.div
            className="hidden lg:grid mt-5 xl:mt-8 lg:grid-cols-2 gap-5 xl:gap-7"
            variants={cardsContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}>
            {stays.slice(3, 5).map((stay) => (
              <motion.article key={stay.title} variants={cardItem}>
                <Link
                  to={`${langPrefix}${stay.href}`}
                  className="group block h-full border-b-[13px] border-[#C09A60] bg-white">
                  <div className="overflow-hidden">
                    <img
                      src={stay.image}
                      alt={t(`stays.${stay.title}`)}
                      className="w-full h-auto object-contain xl:h-[468px] xl:object-cover transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                    />
                  </div>

                  <div className="p-4 sm:p-8 text-center">
                    <AnimatePresence mode="wait">
                      <motion.h3
                        key={`${stay.title}-${i18n.language}`}
                        className="font-serif tracking-[0.05em] text-[#2C3654] text-[24px] leading-[32px] lg:text-[30px] lg:leading-[40px] xl:text-[32px] xl:leading-[40px]"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.25 }}>
                        {t(`stays.${stay.title}`)}
                      </motion.h3>
                    </AnimatePresence>

                    {stay.subtitle && (
                      <AnimatePresence mode="wait">
                        <motion.p
                          key={`${stay.subtitle}-${i18n.language}`}
                          className="mt-3 font-sans font-bold italic text-[15px] leading-[20px] lg:text-[16px] lg:leading-[26px] 2xl:text-[18px] 2xl:leading-[28px] text-[#2C3654]"
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          transition={{ duration: 0.25 }}>
                          {t(`stays.${stay.subtitle}`)}
                        </motion.p>
                      </AnimatePresence>
                    )}

                    <AnimatePresence mode="wait">
                      <motion.p
                        key={`${stay.description}-${i18n.language}`}
                        className="mt-4 xl:mt-4 font-sans text-[15px] leading-[20px] lg:text-[18px] lg:leading-[26px] text-[#2C3654]"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.25 }}>
                        {t(`stays.${stay.description}`)}
                      </motion.p>
                    </AnimatePresence>

                    {stay.nights && (
                      <AnimatePresence mode="wait">
                        <motion.p
                          key={`${stay.title}-dates-${i18n.language}`}
                          className="mt-4 xl:mt-8 font-sans font-bold text-[15px] leading-[20px] lg:text-[16px] lg:leading-[26px] 2xl:text-[18px] 2xl:leading-[28px] text-[#2C3654]"
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          transition={{ duration: 0.25 }}>
                          {stay.nights} {t('common.nights')} · {t(`common.${stay.startMonth}`)} –{' '}
                          {t(`common.${stay.endMonth}`)}
                        </motion.p>
                      </AnimatePresence>
                    )}
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>

          {/* MOBILE SWIPER */}
          <motion.div
            className="block lg:hidden"
            initial={{
              opacity: 0,
              y: 45,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.9,
              ease: 'easeOut',
            }}>
            <Swiper
              className="stays-swiper"
              modules={[Autoplay]}
              slidesPerView={1}
              spaceBetween={20}
              loop
              speed={1200}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}>
              {/* SIGNATURE STAYS */}
              <SwiperSlide>
                <Link to={`${langPrefix}${stays[0].href}`} className="block h-full">
                  <article className="bg-white border-b-[13px] border-[#C09A60] h-full">
                    <img
                      src={stays[0].image}
                      alt={t(`stays.${stays[0].title}`)}
                      className="w-full object-cover h-[380px] md:h-[480px]"
                    />

                    <div className="p-4 sm:p-8 text-center">
                      <AnimatePresence mode="wait">
                        <motion.h3
                          key={`mobile-signature-title-${i18n.language}`}
                          className="font-serif tracking-[0.05em] text-[#2C3654] text-[24px] leading-[32px]"
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          transition={{ duration: 0.25 }}>
                          {t(`stays.${stays[0].title}`)}
                        </motion.h3>
                      </AnimatePresence>

                      <AnimatePresence mode="wait">
                        <motion.p
                          key={`mobile-signature-desc1-${i18n.language}`}
                          className="mt-2 font-sans text-[15px] leading-[20px] text-[#2C3654]"
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          transition={{ duration: 0.25 }}>
                          {t('stays.signatureStaysDescription1')}
                        </motion.p>
                      </AnimatePresence>

                      <AnimatePresence mode="wait">
                        <motion.p
                          key={`mobile-signature-desc2-${i18n.language}`}
                          className="mt-4 font-sans font-medium text-[15px] leading-[20px] text-[#2C3654]"
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          transition={{ duration: 0.25 }}>
                          {t('stays.signatureStaysDescription2')}
                        </motion.p>
                      </AnimatePresence>
                    </div>
                  </article>
                </Link>
              </SwiperSlide>

              {/* OTHER STAYS */}
              {stays.slice(1).map((stay) => (
                <SwiperSlide key={stay.title}>
                  <StayCard stay={stay} imageFirst />
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
