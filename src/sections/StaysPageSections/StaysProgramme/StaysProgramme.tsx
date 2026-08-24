import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Trans, useTranslation } from 'react-i18next';

export type StaysProgrammeDay = {
  dayKey: string;
  titleKey: string;
  descriptionKeys: string[];
};

export type StaysProgrammeProps = {
  id: string;
  titleKey: string;
  subtitleKey: string;
  descriptionKeys: string[];
  durationKey: string;
  image: string;
  imageAlt: string;
  imagePosition?: 'left' | 'right';
  background?: 'white' | 'beige';

  days: StaysProgrammeDay[];
};

export function StaysProgramme({
  id,
  titleKey,
  subtitleKey,
  descriptionKeys,
  durationKey,
  image,
  imageAlt,
  imagePosition = 'left',
  background = 'white',
  days,
}: StaysProgrammeProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const { t, i18n } = useTranslation();

  const isImageLeft = imagePosition === 'left';

  const backgroundClass = background === 'beige' ? 'bg-[#F0E7DA]' : 'bg-white';

  const contentBackgroundClass = background === 'beige' ? 'bg-white' : 'bg-[#F0E7DA]';

  const getGridCols = (daysCount: number) => {
    const columns = daysCount <= 6 ? daysCount : Math.ceil(daysCount / 2);

    const gridCols: Record<number, string> = {
      1: 'xl:grid-cols-1',
      2: 'xl:grid-cols-2',
      3: 'xl:grid-cols-3',
      4: 'xl:grid-cols-4',
      5: 'xl:grid-cols-5',
      6: 'xl:grid-cols-6',
    };

    return gridCols[columns] ?? 'xl:grid-cols-6';
  };

  const daysGridClass = getGridCols(days.length);

  return (
    <section id={id} className={`scroll-mt-[73px] lg:scroll-mt-[86px] ${backgroundClass}`}>
      <div className="mx-auto max-w-8xl px-4 py-8 sm:px-6 lg:px-8 lg:py-16">
        {/* TOP */}
        <div
          className={`grid overflow-hidden ${
            isImageLeft ? 'lg:grid-cols-[2fr_1fr]' : 'lg:grid-cols-[1fr_2fr]'
          }`}>
          {/* IMAGE */}
          <motion.div
            viewport={{ once: true, amount: 0.25 }}
            initial={{
              opacity: 0,
              x: isImageLeft ? -30 : 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={`overflow-hidden ${isImageLeft ? 'lg:order-1' : 'lg:order-2'}`}>
            <motion.img
              src={image}
              alt={imageAlt}
              className="h-[360px] w-full object-cover sm:h-[450px] lg:h-full lg:min-h-[520px]"
              initial={{
                scale: 1.08,
              }}
              whileInView={{
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 1.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          </motion.div>

          {/* CONTENT */}
          <motion.div
            viewport={{ once: true, amount: 0.25 }}
            initial={{
              opacity: 0,
              x: isImageLeft ? 30 : -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={`flex items-center px-4 py-6 sm:px-6 lg:px-8 2xl:pr-20 lg:py-14 ${contentBackgroundClass} ${
              isImageLeft ? 'lg:order-2' : 'lg:order-1'
            } `}>
            <div className="w-full">
              {/* TEXT CONTENT */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={i18n.language}
                  initial={{
                    opacity: 0,
                    y: 12,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -12,
                  }}
                  transition={{
                    duration: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  }}>
                  <h2 className="font-serif text-[24px] sm:text-[32px] 2xl:text-[38px] leading-[1.15] text-[#2C3654]">
                    {t(titleKey)}
                  </h2>

                  <p className="mt-4 lg:mt-8 font-sans text-[15px] sm:text-[16px] min-[1680px]:text-[18px] font-semibold italic leading-[1.4] text-[#2C3654]">
                    {t(subtitleKey)}
                  </p>

                  <div className="mt-4 lg:mt-8 space-y-4">
                    {descriptionKeys.map((key) => (
                      <p
                        key={key}
                        className="font-sans text-[15px] sm:text-[16px] min-[1680px]:text-[18px] leading-[1.4] text-[#2C3654]">
                        {t(key)}
                      </p>
                    ))}
                  </div>

                  <p className="mt-6 font-sans text-[15px] sm:text-[16px] min-[1680px]:text-[18px] font-bold text-[#2C3654]">
                    {t(durationKey)}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* BUTTON */}
              <button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                aria-expanded={isOpen}
                className="mt-8 lg:mt-16 h-[44px] md:h-[57px] overflow-hidden border-y-[2px] border-[#2C3654] px-4 font-sans text-[13px] md:text-[16px] min-[1680px]:text-[18px] font-semibold uppercase tracking-[0.2em] text-[#2C3654] transition-opacity duration-300 hover:opacity-60">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={`${i18n.language}-${isOpen}`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{
                      duration: 0.25,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="block">
                    {isOpen
                      ? t('staysProgramme.closeProgramme')
                      : t('staysProgramme.viewFullProgramme')}
                  </motion.span>
                </AnimatePresence>
              </button>
            </div>
          </motion.div>
        </div>

        {/* PROGRAMME */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{
                height: 0,
                opacity: 0,
              }}
              animate={{
                height: 'auto',
                opacity: 1,
              }}
              exit={{
                height: 0,
                opacity: 0,
              }}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="overflow-hidden">
              <div
                className={`grid gap-x-6 gap-y-6 lg:gap-y-8 pt-4 lg:pt-8 md:grid-cols-2 lg:grid-cols-3 ${daysGridClass}`}>
                {days.map((item, index) => (
                  <motion.article
                    key={`${item.dayKey}-${index}`}
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="border-l border-[#2C3654]">
                    {/* DAY */}
                    <div className="bg-[#2C3654] px-3 py-2">
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={`${i18n.language}-${item.dayKey}`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="block font-sans text-[15px] sm:text-[16px] min-[1680px]:text-[18px] font-semibold uppercase tracking-[0.12em] text-white">
                          {t(item.dayKey)}
                        </motion.span>
                      </AnimatePresence>
                    </div>

                    {/* TEXT */}
                    <div className="pt-4 pl-4">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={`${i18n.language}-${item.titleKey}`}
                          initial={{
                            opacity: 0,
                          }}
                          animate={{
                            opacity: 1,
                          }}
                          exit={{
                            opacity: 0,
                          }}
                          transition={{
                            duration: 0.25,
                            ease: [0.22, 1, 0.36, 1],
                          }}>
                          <h3 className="font-sans pr-4 text-[15px] sm:text-[16px] min-[1680px]:text-[18px] font-semibold uppercase leading-[1.25] tracking-[0.12em] text-[#2C3654]">
                            {t(item.titleKey)}
                          </h3>

                          <div className="mt-2 lg:mt-4 space-y-2 lg:space-y-4">
                            {item.descriptionKeys.map((translationKey) => (
                              <p
                                key={translationKey}
                                className="font-sans text-[15px] sm:text-[16px] min-[1680px]:text-[18px] leading-[1.4] text-[#2C3654]">
                                <Trans
                                  i18nKey={translationKey}
                                  components={{
                                    br: <br />,
                                  }}
                                />
                              </p>
                            ))}
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
