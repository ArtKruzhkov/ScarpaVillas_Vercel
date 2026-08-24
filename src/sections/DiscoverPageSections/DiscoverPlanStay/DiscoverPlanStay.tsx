import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const baseUrl = process.env.PUBLIC_URL;

export function DiscoverPlanStay() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden">
      {/* BACKGROUND */}
      <motion.img
        src={`${baseUrl}/images/DiscoverPage/discover_planStay/background.webp`}
        alt="The Langhe"
        className="block object-cover h-auto w-full min-h-[480px] md:min-h-[645px]"
        initial={{
          scale: 1.08,
        }}
        whileInView={{
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{
          duration: 1.8,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      {/* CONTENT */}
      <div className="absolute inset-0 z-10 flex items-end justify-center px-6 pb-12 2xl:pb-14">
        <motion.div
          className="flex max-w-[1100px] flex-col items-center text-center text-white"
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.35,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}>
          {/* TITLE */}
          <AnimatePresence mode="wait">
            <motion.h2
              key={t('discoverPlanStay.titleLine1')}
              className="font-serif uppercase text-[18px] leading-[22px] tracking-[0.1em] sm:text-[28px] sm:leading-[32px] md:text-[32px] md:leading-[36px] xl:text-[38px] xl:leading-[42px]"
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
              {t('discoverPlanStay.titleLine1')}
              <br />
              {t('discoverPlanStay.titleLine2')}
            </motion.h2>
          </AnimatePresence>

          {/* SUBTITLE */}
          <AnimatePresence mode="wait">
            <motion.p
              key={t('discoverPlanStay.subtitleLine1')}
              className="mt-3 md:mt-6 font-sans text-[13px] sm:text-[15px] lg:text-[18px] font-semibold uppercase leading-[16px] sm:leading-[21px] lg:leading-[26px] tracking-[0.1em] lg:tracking-[0.22em]"
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
              }}>
              {t('discoverPlanStay.subtitleLine1')}
              <br className="block md:hidden" />
              {t('discoverPlanStay.subtitleLine2')}
            </motion.p>
          </AnimatePresence>

          {/* BUTTON */}
          <motion.a
            href={`https://www.simplebooking.it/ibe2/hotel/9131`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 md:mt-12 2xl:mt-14 flex h-[44px] md:h-[57px] w-full items-center justify-center bg-white px-8 font-sans text-[13px] md:text-[18px] font-bold uppercase tracking-[0.22em] text-[#2C3654] transition-colors duration-300 hover:bg-[#2C3654] hover:text-white lg:w-[475px]"
            initial={{
              opacity: 0,
              y: 15,
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
              duration: 0.9,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}>
            <AnimatePresence mode="wait">
              <motion.span
                key={t('discoverPlanStay.button')}
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
                  ease: [0.22, 1, 0.36, 1],
                }}>
                {t('discoverPlanStay.button')}
              </motion.span>
            </AnimatePresence>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
