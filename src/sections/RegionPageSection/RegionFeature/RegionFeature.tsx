import React, { useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation, Trans } from 'react-i18next';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import './regionFeature.css';

export type RegionFeatureSlide = {
  titleKey: string;
  subtitleKey: string;
  image: string;
};

export type RegionFeatureProps = {
  id: string;
  backgroundImage: string;
  titleKey: string;
  paragraphKeys: string[];
  slides: RegionFeatureSlide[];
  sliderBackground?: 'white' | 'blue';
};

export function RegionFeature({
  id,
  backgroundImage,
  titleKey,
  paragraphKeys,
  slides,
  sliderBackground = 'white',
}: RegionFeatureProps) {
  const { t, i18n } = useTranslation();

  const swiperRef = useRef<SwiperType | null>(null);

  const isBlue = sliderBackground === 'blue';

  return (
    <section id={id} className="overflow-hidden scroll-mt-[73px] lg:scroll-mt-[86px]">
      {/* TOP */}
      <div className="relative overflow-hidden">
        {/* BACKGROUND */}
        <motion.img
          src={backgroundImage}
          alt="background-image"
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ scale: 1.08 }}
          whileInView={{ scale: 1 }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 1.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        />

        {/* CARD */}
        <div className="relative z-10 flex items-end justify-center px-5 pt-10 lg:px-10 lg:py-0 lg:pt-14">
          <motion.div
            className="w-full text-center max-w-[760px] bg-white px-6 py-8 sm:px-10 sm:py-12 lg:py-14"
            initial={{
              opacity: 0,
              y: 30,
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
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}>
            {/* DECORATION */}
            <div className="mb-4 lg:mb-8 flex items-center justify-center gap-5">
              <div className="h-[2px] w-full bg-[#2C3654]" />

              <img
                src={`${process.env.PUBLIC_URL}/images/RegionPage/region_feature/logo.svg`}
                alt=""
                className="h-[54px] w-auto shrink-0 xl:h-[74px]"
              />

              <div className="h-[2px] w-full bg-[#2C3654]" />
            </div>

            {/* TITLE */}
            <AnimatePresence mode="wait">
              <motion.h2
                key={`${titleKey}-${i18n.language}`}
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -10,
                }}
                transition={{
                  duration: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="font-serif text-[22px] md:text-[32px] lg:text-[34px] 2xl:text-[38px] uppercase tracking-[0.1em] text-[#2C3654]">
                {t(titleKey)}
              </motion.h2>
            </AnimatePresence>

            {/* TEXT */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`feature-text-${i18n.language}`}
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -10,
                }}
                transition={{
                  duration: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mx-auto mt-4 lg:mt-8 max-w-[680px] space-y-3 lg:space-y-6 font-sans text-[13px] leading-[18px] md:text-[16px] md:leading-[22px] lg:text-[18px] lg:leading-[28px] text-[#2C3654]">
                {paragraphKeys.map((paragraphKey) => (
                  <p key={paragraphKey}>
                    <Trans
                      i18nKey={paragraphKey}
                      components={{
                        br: <br className="hidden md:block" />,
                      }}
                    />
                  </p>
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* SLIDER */}
      <div className={`overflow-hidden py-6 lg:py-12 ${isBlue ? 'bg-[#2C3654]' : 'bg-white'}`}>
        <motion.div
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
            delay: 0.2,
            ease: 'easeOut',
          }}>
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            centeredSlides={false}
            spaceBetween={20}
            loop
            speed={2000}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              1024: {
                slidesPerView: 'auto',
                centeredSlides: true,
                spaceBetween: 20,
              },
              1536: {
                slidesPerView: 'auto',
                centeredSlides: true,
                spaceBetween: 180,
              },
            }}
            grabCursor
            className="region-feature-swiper overflow-visible">
            {slides.map((slide, index) => (
              <SwiperSlide key={`${slide.titleKey}-${index}`}>
                <div
                  className="cursor-pointer text-center w-full"
                  onClick={() => {
                    swiperRef.current?.slideToLoop(index);
                  }}>
                  {/* IMAGE */}
                  <div className="overflow-hidden">
                    <img
                      src={slide.image}
                      alt={t(slide.titleKey)}
                      className="mx-auto h-[420px] w-full object-cover sm:h-[500px] lg:h-[560px]"
                    />
                  </div>

                  {/* TITLE */}
                  <AnimatePresence mode="wait">
                    <motion.h3
                      key={`${slide.titleKey}-${i18n.language}`}
                      initial={{
                        opacity: 0,
                        y: 6,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: -6,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                      className={`mt-2 font-serif tracking-[0.05em] text-[#2C3654] text-[22px] leading-[30px] sm:text-[30px] sm:leading-[40px] lg:text-[28px] lg:leading-[50px] xl:text-[32px] xl:leading-[50px] 2xl:text-[38px] ${
                        isBlue ? 'text-white' : 'text-[#2C3654]'
                      }`}>
                      {t(slide.titleKey)}
                    </motion.h3>
                  </AnimatePresence>

                  {/* SUBTITLE */}
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={`${slide.subtitleKey}-${i18n.language}`}
                      initial={{
                        opacity: 0,
                        y: 6,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: -6,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                      className={`mx-auto mt-1 lg:mt-2 px-4 xl:px-8 font-sans text-[14px] leading-[18px] sm:text-[16px] sm:leading-[28px] lg:text-[16px] lg:leading-[22px] xl:text-[18px] xl:leading-[26px] ${
                        isBlue ? 'text-white' : 'text-[#2C3654]'
                      }`}>
                      {t(slide.subtitleKey)}
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
