import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import { useRef } from 'react';
import { Autoplay } from 'swiper/modules';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import 'swiper/css';
import './discover.css';

export type LangheSlide = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
};

const baseUrl = process.env.PUBLIC_URL;

const langheSlides: LangheSlide[] = [
  {
    title: 'villageMuseum',
    subtitle: 'villageMuseumSubtitle',
    description: 'villageMuseumDescription',
    image: `${baseUrl}/images/discover/village-museum.webp`,
  },
  {
    title: 'laMorraBelvedere',
    subtitle: 'laMorraBelvedereSubtitle',
    description: 'laMorraBelvedereDescription',
    image: `${baseUrl}/images/discover/la-morra.webp`,
  },
  {
    title: 'albaTruffleCulture',
    subtitle: 'albaTruffleCultureSubtitle',
    description: 'albaTruffleCultureDescription',
    image: `${baseUrl}/images/discover/truffle.webp`,
  },

  {
    title: 'villageMuseum',
    subtitle: 'villageMuseumSubtitle',
    description: 'villageMuseumDescription',
    image: `${baseUrl}/images/discover/village-museum.webp`,
  },
  {
    title: 'laMorraBelvedere',
    subtitle: 'laMorraBelvedereSubtitle',
    description: 'laMorraBelvedereDescription',
    image: `${baseUrl}/images/discover/la-morra.webp`,
  },
  {
    title: 'albaTruffleCulture',
    subtitle: 'albaTruffleCultureSubtitle',
    description: 'albaTruffleCultureDescription',
    image: `${baseUrl}/images/discover/truffle.webp`,
  },
];

export function DiscoverLanghe() {
  const { t, i18n } = useTranslation();
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section id="discover" className="scroll-mt-[86px] overflow-hidden bg-white py-16 xl:py-20">
      <div className="mx-auto px-0">
        {/* HEADER */}
        <motion.div
          className="mx-auto text-center px-2 sm:px-8 flex flex-col items-center"
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 1,
            ease: 'easeOut',
          }}>
          <AnimatePresence mode="wait">
            <motion.h2
              key={`discover-title-${i18n.language}`}
              className="font-serif px-2 sm:px-0 uppercase tracking-[0.1em] text-[#2C3654] text-[24px] leading-[30px] sm:text-[38px] sm:leading-[46px] lg:text-[42px] lg:leading-[50px]"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25 }}>
              {t('discover.title')}
            </motion.h2>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.p
              key={`discover-text-${i18n.language}`}
              className="discover-text"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25 }}>
              {t('discover.text1')}
              <br />
              {t('discover.text2')}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        {/* SLIDER */}
        <motion.div
          className="mt-[30px] sm:mt-[50px] lg:mt-[80px]"
          initial={{
            opacity: 0,
            scale: 1.04,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 1.2,
            delay: 0.45,
            ease: 'easeOut',
          }}>
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            centeredSlides={false}
            spaceBetween={20}
            loop
            speed={1800}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              1024: {
                slidesPerView: 2,
                centeredSlides: true,
                spaceBetween: 80,
              },
            }}
            grabCursor
            className="discover-swiper overflow-visible">
            {langheSlides.map((slide, index) => (
              <SwiperSlide key={`${slide.title}-${index}`}>
                <div
                  className="text-center cursor-pointer w-full"
                  onClick={() => {
                    swiperRef.current?.slideToLoop(index);
                  }}>
                  <img
                    src={slide.image}
                    alt={t(`langheSlides.${slide.title}`)}
                    className="mx-auto w-full h-[520px] object-cover lg:h-[560px]"
                  />

                  <AnimatePresence mode="wait">
                    <motion.h3
                      key={`${slide.title}-${i18n.language}`}
                      className="mt-2 font-serif tracking-[0.05em] text-[#2C3654] text-[22px] leading-[30px] sm:text-[30px] sm:leading-[40px] lg:text-[28px] lg:leading-[50px] xl:text-[32px] xl:leading-[50px] 2xl:text-[38px] 2xl:leading-[60px]"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.25 }}>
                      {t(`langheSlides.${slide.title}`)}
                    </motion.h3>
                  </AnimatePresence>

                  <AnimatePresence mode="wait">
                    <motion.p
                      key={`${slide.subtitle}-${i18n.language}`}
                      className="px-4 md:px-0 mt-1 font-sans font-semibold uppercase tracking-[0.1em] text-[#C09A60] text-[10.5px] leading-[22px] sm:text-[13px] sm:leading-[18px] xl:text-[18px] xl:leading-[28px]"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.25 }}>
                      {t(`langheSlides.${slide.subtitle}`)}
                    </motion.p>
                  </AnimatePresence>

                  <AnimatePresence mode="wait">
                    <motion.p
                      key={`${slide.description}-${i18n.language}`}
                      className="px-2 mx-auto mt-1 lg:mt-2 font-sans text-[#2C3654] text-[14px] leading-[18px] sm:text-[16px] sm:leading-[22px] xl:text-[18px] xl:leading-[26px]"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.25 }}>
                      {t(`langheSlides.${slide.description}`)}
                    </motion.p>
                  </AnimatePresence>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
