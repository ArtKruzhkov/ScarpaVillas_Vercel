import { motion, AnimatePresence } from 'framer-motion';
import type { Villa } from '../../../data/villas';
import { Trans, useTranslation } from 'react-i18next';

type VillaAmenitiesProps = {
  amenities: Villa['amenities'];
};

const transComponents = {
  strong: <span className="text-[#C09A60]" />,
  br: <br className="hidden lg:block" />,
};

export function VillaAmenities({ amenities }: VillaAmenitiesProps) {
  const { t, i18n } = useTranslation();
  return (
    <section className="bg-white">
      {/* TOP */}
      <div className="overflow-hidden">
        <div className="grid bg-white lg:grid-cols-[57.3%_42.7%]">
          {/* LEFT SIDE */}
          <div className="grid">
            {/* VILLA INCLUDES */}
            <motion.div
              viewport={{ once: true, amount: 0.25 }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="bg-white px-5 py-9 sm:px-8 lg:px-5 lg:pt-10 lg:pb-9 2xl:px-9 2xl:pt-16 2xl:pb-14">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${amenities.top.includes.title}-${i18n.language}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{
                    duration: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  }}>
                  <h3 className="font-sans text-[14px] font-bold uppercase leading-[1.4] tracking-[0.22em] text-[#2C3654] lg:text-[15px] 2xl:text-[20px]">
                    {t(amenities.top.includes.title)}
                  </h3>
                </motion.div>
              </AnimatePresence>

              <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-4 lg:mt-9 lg:gap-x-3 2xl:mt-14 2xl:gap-x-6">
                {amenities.top.includes.items.map((item) => (
                  <div key={item.text} className="flex flex-col items-center text-center">
                    <div className="flex h-[55px] items-center justify-center lg:h-[58px] 2xl:h-[72px]">
                      <img
                        src={item.icon}
                        alt=""
                        aria-hidden="true"
                        className="h-full max-h-[48px] w-auto object-contain lg:max-h-[52px] 2xl:max-h-[64px]"
                      />
                    </div>

                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`${item.text}-${i18n.language}`}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{
                          duration: 0.35,
                          ease: [0.22, 1, 0.36, 1],
                        }}>
                        <p className="mt-5 max-w-[145px] font-sans text-[12px] leading-[1.45] text-[#2C3654] lg:text-[11px] xl:text-[12px] 2xl:max-w-[210px] 2xl:text-[16px]">
                          {t(item.text)}
                        </p>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* IMAGES */}
            <motion.div
              viewport={{ once: true, amount: 0.2 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="grid min-h-[210px] grid-cols-2">
              <div className="overflow-hidden">
                <img
                  src={amenities.top.images.left}
                  alt="Tettineive bedroom"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="overflow-hidden bg-[#C09A60] p-3 sm:p-4 lg:p-3 2xl:p-5">
                <img
                  src={amenities.top.images.right}
                  alt="Tettineive bathroom"
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* RIGHT — AMENITIES */}
          <motion.div
            viewport={{ once: true, amount: 0.2 }}
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex bg-[#2C3654] px-6 py-10 text-white sm:px-10 lg:px-10 lg:py-10 xl:px-14 2xl:px-[74px] 2xl:py-16">
            <div className="w-full flex flex-col">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${amenities.top.amenities.title}-${i18n.language}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{
                    duration: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  }}>
                  <h3 className="font-sans text-[14px] font-bold uppercase leading-[1.4] tracking-[0.22em] text-[#C09A60] lg:text-[15px] 2xl:text-[20px]">
                    {t(amenities.top.amenities.title)}
                  </h3>
                </motion.div>
              </AnimatePresence>

              <div className="mt-8 lg:mt-8 2xl:mt-12 flex flex-col h-full justify-between gap-6 md:gap-8 lg:gap-0">
                {amenities.top.amenities.items.map((item) => (
                  <div
                    key={item.text}
                    className="grid grid-cols-[42px_minmax(0,1fr)] items-center gap-5 lg:grid-cols-[36px_minmax(0,1fr)] xl:grid-cols-[42px_minmax(0,1fr)] 2xl:grid-cols-[52px_minmax(0,1fr)] 2xl:gap-7">
                    <div className="flex h-[38px] items-center justify-center lg:h-[34px] xl:h-[38px] 2xl:h-[48px]">
                      <img
                        src={item.icon}
                        alt="ameties-item-icon"
                        aria-hidden="true"
                        className="max-h-full w-auto object-contain"
                      />
                    </div>

                    <AnimatePresence mode="wait">
                      <motion.p
                        key={`${item.text}-${i18n.language}`}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{
                          duration: 0.35,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="font-sans text-[13px] xl:text-[15px] 2xl:text-[20px] leading-[1.45] text-white">
                        {t(item.text)}
                      </motion.p>
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* BOTTOM IMAGE */}
      <motion.div
        viewport={{ once: true, amount: 0.25 }}
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative">
        <img
          src={amenities.bottom.image}
          alt="outdoor-image"
          className="w-full object-cover max-h-[850px] min-h-[360px] md:min-h-[460px]"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent" />

        {/* Text */}
        <div className="absolute bottom-6 lg:bottom-10 2xl:bottom-12 left-1/2 w-full md:max-w-[768px] lg:max-w-[1020px] -translate-x-1/2 px-6 text-center text-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${amenities.bottom.title}-${i18n.language}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}>
              <h3 className="font-sans text-[13px] font-semibold uppercase tracking-[0.16em] leading-[1.3] md:text-[14px] lg:text-[18px] lg:leading-[1.5]">
                <Trans i18nKey={amenities.bottom.title} components={transComponents} />
              </h3>

              <p className="mt-3 hidden font-sans text-[16px] leading-[1.35] text-white md:block 2xl:mt-6 2xl:leading-[1.5]">
                <Trans i18nKey={amenities.bottom.description} components={transComponents} />
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}
