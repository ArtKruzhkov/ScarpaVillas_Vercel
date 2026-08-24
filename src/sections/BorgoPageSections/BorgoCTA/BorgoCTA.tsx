import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

export function BorgoCTA() {
  const { t } = useTranslation();
  return (
    <section className="bg-[#2C3654]">
      <div className="mx-auto overflow-hidden flex max-w-8xl items-center justify-center px-5 py-10 md:px-8 md:py-12 lg:py-16">
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
              key={t('borgoCTA.titleLine1')}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-serif max-w-[335px] sm:max-w-none text-[20px] leading-[1.1] text-white sm:text-[24px] md:text-[28px] lg:text-[32px] 2xl:text-[34px]">
              {t('borgoCTA.titleLine1')}
              <br />
              {t('borgoCTA.titleLine2')}
            </motion.h2>
          </AnimatePresence>

          <a
            href="https://www.simplebooking.it/ibe2/hotel/9131"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex h-[44px] md:h-[57px] w-full max-w-[320px] md:max-w-[360px] items-center justify-center bg-white px-8 font-sans font-semibold uppercase tracking-[0.18em] text-[#2C3654] text-[13px] lg:text-[16px] transition-opacity duration-300 hover:opacity-80">
            <AnimatePresence mode="wait">
              <motion.span
                key={t('borgoCTA.button')}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-block">
                {t('borgoCTA.button')}
              </motion.span>
            </AnimatePresence>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
