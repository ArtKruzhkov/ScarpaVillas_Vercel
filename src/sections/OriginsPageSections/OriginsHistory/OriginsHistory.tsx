import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export function OriginsHistory() {
  const baseUrl = process.env.PUBLIC_URL;
  const { t } = useTranslation();

  return (
    <section className="overflow-hidden bg-[#2C3654]">
      <div className="mx-auto grid max-w-8xl lg:grid-cols-2">
        {/* LEFT IMAGE */}
        <motion.div
          className="relative min-h-[440px] sm:min-h-[640px] lg:min-h-[760px] 2xl:min-h-[820px] overflow-hidden"
          initial={{
            opacity: 0,
            x: -30,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}>
          <motion.img
            src={`${baseUrl}/images/OriginsPage/origins_history/origins_history_left.webp`}
            alt="Historic village in the Langhe"
            className="absolute inset-0 h-full w-full object-cover"
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

        {/* RIGHT CONTENT */}
        <motion.div
          className="flex bg-[#2C3654] px-6 sm:px-8 xl:px-10 py-8 sm:py-12 lg:py-24 text-white"
          initial={{
            opacity: 0,
            x: 30,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}>
          <div className="flex w-full flex-col justify-between gap-6 lg:gap-0">
            {/* TOP TEXT */}
            <AnimatePresence mode="wait">
              <motion.p
                key={t('originsHistory.topText')}
                className="font-serif text-[16px] leading-[20px] sm:text-[20px] sm:leading-[28px] lg:text-[20px] lg:leading-[26px] xl:text-[24px] xl:leading-[31px]"
                initial={{
                  opacity: 0,
                  y: 24,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -24,
                }}
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}>
                {t('originsHistory.topText')}
              </motion.p>
            </AnimatePresence>

            {/* IMAGE */}
            <motion.div
              className="overflow-hidden"
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
                amount: 0.25,
              }}
              transition={{
                duration: 0.9,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}>
              <motion.img
                src={`${baseUrl}/images/OriginsPage/origins_history/origins_history_right.webp`}
                alt="Historic vineyards of the Langhe"
                className="aspect-[2.3/1] min-h-[220px] w-full object-cover"
                initial={{
                  scale: 1.06,
                }}
                whileInView={{
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  duration: 1.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            </motion.div>

            {/* BOTTOM TEXT */}
            <AnimatePresence mode="wait">
              <motion.p
                key={t('originsHistory.bottomText')}
                className="max-w-[760px] font-sans text-[13px] leading-[18px] text-white sm:text-[15px] sm:leading-[23px] xl:text-[18px] xl:leading-[26px]"
                initial={{
                  opacity: 0,
                  y: 14,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -14,
                }}
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}>
                {t('originsHistory.bottomText')}
              </motion.p>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
