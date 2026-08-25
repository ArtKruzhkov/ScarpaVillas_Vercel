import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

export function ScarpaWineryCTA() {
  const { t } = useTranslation();

  return (
    <section className="bg-[#2C3654]">
      <div className="mx-auto flex max-w-8xl items-center justify-center overflow-hidden px-5 py-10 md:px-8 md:py-12">
        <motion.div
          initial={{
            opacity: 0,
            y: 24,
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
          className="flex max-w-[920px] flex-col items-center text-center">
          <AnimatePresence mode="wait">
            <motion.h2
              key={t('scarpaWineryCTA.titleLine1')}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-[335px] font-serif text-[20px] leading-[1.1] text-white sm:max-w-none sm:text-[24px] md:text-[28px] lg:text-[32px] 2xl:text-[34px]">
              {t('scarpaWineryCTA.titleLine1')}
              <br />
              {t('scarpaWineryCTA.titleLine2')}
            </motion.h2>
          </AnimatePresence>

          <a
            href="https://www.scarpawine.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex h-[44px] w-full max-w-[320px] items-center justify-center bg-white px-8 font-sans text-[13px] font-semibold uppercase tracking-[0.18em] text-[#2C3654] transition-opacity duration-300 hover:opacity-80 md:h-[57px] md:max-w-[360px] lg:text-[16px]">
            <AnimatePresence mode="wait">
              <motion.span
                key={t('scarpaWineryCTA.button')}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-block">
                {t('scarpaWineryCTA.button')}
              </motion.span>
            </AnimatePresence>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
