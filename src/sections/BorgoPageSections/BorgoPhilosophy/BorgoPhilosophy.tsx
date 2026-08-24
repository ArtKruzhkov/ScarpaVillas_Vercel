import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

export function BorgoPhilosophy() {
  const { t } = useTranslation();
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-8xl lg:grid-cols-2 overflow-hidden">
        {/* IMAGE */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 1.08,
          }}
          whileInView={{
            opacity: 1,
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
          className="overflow-hidden order-2 lg:order-1">
          <img
            src={`${process.env.PUBLIC_URL}/images/BorgoPage/borgo_philosophy/philosophy.webp`}
            alt="The Borgo"
            className="max-h-[520px] md:max-h-[580px] lg:max-h-none h-full w-full object-cover"
          />
        </motion.div>

        {/* CONTENT */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
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
          }}
          className="order-1 lg:order-2 flex items-center justify-center px-8 py-10 lg:px-14 xl:px-20">
          <div className="flex w-full max-w-[700px] flex-col items-center text-center">
            {/* Top decoration */}
            <div className="flex w-full items-center gap-6">
              <div className="h-[2px] flex-1 bg-[#2C3654]" />

              <img
                src={`${process.env.PUBLIC_URL}/images/BorgoPage/borgo_philosophy/logo.svg`}
                alt="logo"
                aria-hidden="true"
                className="h-12 md:h-20 w-auto"
              />

              <div className="h-[2px] flex-1 bg-[#2C3654]" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={t('borgoPhilosophy.titleLine1')}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col items-center">
                <h2 className="mt-8 lg:mt-10 2xl:mt-16 max-w-[301px] md:max-w-[394px] lg:max-w-[493px] 2xl:max-w-[648px] font-serif text-[22px] md:text-[28px] lg:text-[36px] lg:leading-[42px] 2xl:text-[38px] 2xl:leading-[44px] leading-[1.15] text-[#2C3654]">
                  {t('borgoPhilosophy.titleLine1')}
                  <br />
                  {t('borgoPhilosophy.titleLine2')}
                  <br />
                  {t('borgoPhilosophy.titleLine3')}
                  <br />
                  {t('borgoPhilosophy.titleLine4')}
                </h2>

                <p className="mt-5 md:mt-8 lg:mt-10 max-w-[300px] md:max-w-[380px] lg:max-w-[520px] font-sans text-[13px] leading-[22px] md:text-[16px] md:leading-[26px] lg:text-[20px] lg:leading-[28px] text-[#2C3654]">
                  {t('borgoPhilosophy.subtitleLine1')}
                  <br />
                  {t('borgoPhilosophy.subtitleLine2')}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="mt-10 lg:mt-12 2xl:mt-20 h-[2px] w-full bg-[#2C3654]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
