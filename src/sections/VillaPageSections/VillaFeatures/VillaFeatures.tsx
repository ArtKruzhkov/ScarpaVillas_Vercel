import { motion, AnimatePresence } from 'framer-motion';
import type { Villa } from '../../../data/villas';
import { Trans, useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

type VillaFeaturesProps = {
  features: Villa['features'];
};

export function VillaFeatures({ features }: VillaFeaturesProps) {
  const { t, i18n } = useTranslation();
  return (
    <section className="bg-white">
      {/* FEATURES */}
      <div className="bg-[#2C3654]">
        <div className="mx-auto max-w-8xl px-4 py-12 lg:px-5 lg:py-16">
          <motion.div
            viewport={{ once: true, amount: 0.35 }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
            {features.items.map((feature) => (
              <div key={feature.alt} className="flex flex-col items-center text-center">
                <img
                  src={feature.icon}
                  alt="feature-icon"
                  aria-hidden="true"
                  className="h-[48px] w-[48px] object-contain lg:h-[58px] lg:w-[58px]"
                />
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${feature.alt}-${i18n.language}`}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{
                      duration: 0.35,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="flex flex-col items-center text-center">
                    <p className="mt-5 font-sans text-[12px] font-semibold uppercase tracking-[0.16em] text-white sm:text-[13px] lg:text-[15px]">
                      {feature.text ? (
                        t(feature.text)
                      ) : (
                        <>
                          {feature.before && <>{t(feature.before)} </>}

                          {feature.accent && (
                            <span className="text-[#C09A60]">{t(feature.accent)}</span>
                          )}
                        </>
                      )}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* IMAGE + TEXT */}
      <div className="mx-auto max-w-8xl">
        {/* TEXT + LEFT IMAGE */}
        <div className="overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* LEFT IMAGE */}
            <motion.div
              viewport={{ once: true, amount: 0.25 }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="min-h-[280px] sm:h-[500px] overflow-hidden lg:min-h-[520px]">
              <img
                src={features.images.left}
                alt="Villa interior and outdoor living space"
                className="h-full w-full object-cover"
              />
            </motion.div>

            {/* TEXT */}
            <motion.div
              viewport={{ once: true, amount: 0.25 }}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex items-center px-6 py-6 lg:py-12 lg:pl-10 lg:pr-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={i18n.language}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{
                    duration: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  }}>
                  <div className="max-w-[800px] font-sans text-[15px] leading-[20px] text-[#2C3654] sm:text-[16px] sm:leading-[22px] lg:text-[18px] lg:leading-[25px] 2xl:text-[20px] 2xl:leading-[28px]">
                    <p>
                      <Trans
                        i18nKey={features.text.intro}
                        components={{
                          strong: <strong className="font-semibold" />,
                        }}
                      />
                    </p>

                    <p className="mt-5">
                      <Trans
                        i18nKey={features.text.paragraph1}
                        components={{
                          strong: <strong className="font-semibold" />,
                        }}
                      />
                    </p>

                    <p className="mt-5">
                      <Trans
                        i18nKey={features.text.paragraph2}
                        components={{
                          strong: <strong className="font-semibold" />,
                        }}
                      />
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>

        {/* LARGE IMAGE */}
        {/* <motion.div
          viewport={{ once: true, amount: 0.2 }}
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="p-0 lg:p-6">
          <div className="overflow-hidden">
            <img
              src={features.images.bottom}
              alt="Villa interior"
              className={`min-h-[360px] h-full w-full object-cover lg:max-h-[720px] ${
                features.images.bottomObjectPosition ?? ''
              } lg:object-center`}
            />
          </div>
        </motion.div> */}

        {/* LARGE IMAGE SLIDER */}
        <motion.div
          viewport={{ once: true, amount: 0.2 }}
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="p-0 lg:p-6">
          <div className="overflow-hidden">
            <Swiper
              modules={[Autoplay]}
              slidesPerView={1}
              loop
              grabCursor
              speed={2000}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}>
              {features.images.bottom.map((image, index) => (
                <SwiperSlide key={image}>
                  <img
                    src={image}
                    alt={`Villa interior ${index + 1}`}
                    className={`min-h-[280px] sm:h-[500px] lg:h-full w-full object-cover lg:max-h-[720px]`}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
