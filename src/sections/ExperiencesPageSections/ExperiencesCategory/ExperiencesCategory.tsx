import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

type ExperienceCard = {
  translationKey: string;
  image: string;
};

type ExperiencesCategoryProps = {
  id: string;
  translationKey: string;
  cards: ExperienceCard[];
  variant?: 'gold' | 'blue';
};

export function ExperiencesCategory({
  id,
  translationKey,
  cards,
  variant = 'gold',
}: ExperiencesCategoryProps) {
  const baseUrl = process.env.PUBLIC_URL;
  const { t, i18n } = useTranslation();

  const titleBackground = variant === 'blue' ? 'bg-[#2C3654]' : 'bg-[#C09A60]';

  const title = t(`${translationKey}.title`);
  const subtitle = t(`${translationKey}.subtitle`);

  return (
    <section
      id={id}
      className="scroll-mt-[73px] lg:scroll-mt-[86px] bg-white px-4 pt-8 md:px-6 lg:py-8 2xl:p-8">
      <div className="mx-auto max-w-[1920px]">
        {/* Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${i18n.language}-${translationKey}`}
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
              <h2 className="font-serif text-[24px] uppercase tracking-[0.08em] text-[#2C3654] md:text-[32px] lg:text-[36px] 2xl:text-[38px]">
                {title}
              </h2>

              <p className="mt-2 font-serif text-[15px] leading-[18px] md:text-[18px] md:leading-[24px] text-[#2C3654] lg:mt-3 lg:text-[18px] lg:leading-[22px] 2xl:text-[20px] 2xl:leading-[24px]">
                {subtitle}
              </p>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Cards */}
        <div
          className={`mt-6 lg:mt-8 grid gap-4 2xl:gap-8 md:mt-10 md:grid-cols-2 lg:mt-10 ${
            cards.length === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-4'
          }`}>
          {cards.map((card, index) => {
            const cardTitle = t(`${translationKey}.cards.${card.translationKey}.title`);

            const cardDescription = t(`${translationKey}.cards.${card.translationKey}.description`);

            return (
              <motion.article
                key={card.translationKey}
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
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col overflow-hidden">
                {/* Card title */}
                <div
                  className={`flex min-h-[36px] items-center justify-center px-3 py-2 ${titleBackground}`}>
                  <AnimatePresence mode="wait">
                    <motion.h3
                      key={`${i18n.language}-${card.translationKey}-title`}
                      initial={{
                        opacity: 0,
                        y: 8,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: -8,
                      }}
                      transition={{
                        duration: 0.35,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="text-center font-sans text-[13px] font-semibold uppercase tracking-[0.22em] text-white lg:text-[14px] min-[1860px]:text-[18px]">
                      {cardTitle}
                    </motion.h3>
                  </AnimatePresence>
                </div>

                {/* Image */}
                <div className="relative min-h-[390px] flex-1 overflow-hidden md:min-h-[440px] lg:min-h-[480px] 2xl:min-h-[560px]">
                  <motion.img
                    src={`${baseUrl}${card.image}`}
                    alt={cardTitle}
                    className="absolute inset-0 h-full w-full object-cover"
                    initial={{
                      scale: 1.08,
                    }}
                    whileInView={{
                      scale: 1,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.2,
                    }}
                    transition={{
                      duration: 1.8,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />

                  {/* Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />

                  {/* Description */}
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={`${i18n.language}-${card.translationKey}-description`}
                      initial={{
                        opacity: 0,
                        y: 8,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: -8,
                      }}
                      transition={{
                        duration: 0.35,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="absolute bottom-5 left-5 right-5 text-center font-sans text-[15px] leading-[18px] text-white md:text-[13px] md:leading-[18px] lg:bottom-6 lg:left-6 lg:right-6 lg:text-[14px] lg:leading-[18px] min-[1860px]:text-[18px] min-[1860px]:leading-[24px]">
                      {cardDescription}
                    </motion.p>
                  </AnimatePresence>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
