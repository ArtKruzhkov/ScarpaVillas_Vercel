import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './planstay.css';

export function PlanStay() {
  const { t, i18n } = useTranslation();

  return (
    <section id="plan" className="relative section-height w-full overflow-hidden">
      {/* IMAGE */}
      <motion.img
        src={`${process.env.PUBLIC_URL}/images/plan/plan-stay.webp`}
        alt="Scarpa Villas at night"
        className="absolute inset-0 h-full w-full object-cover object-[center_5%]"
        initial={{
          scale: 1.08,
          opacity: 0,
        }}
        whileInView={{
          scale: 1,
          opacity: 1,
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{
          duration: 1.4,
          ease: 'easeOut',
        }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/80" />

      {/* CONTENT */}
      <motion.div
        className="relative z-10 flex h-full flex-col items-center justify-center lg:justify-end px-4 sm:px-6 pb-10 md:pb-14 lg:pb-[9.5rem] text-center text-white"
        initial={{
          opacity: 0,
          y: 50,
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
          duration: 1,
          delay: 0.45,
          ease: 'easeOut',
        }}>
        <AnimatePresence mode="wait">
          <motion.h2
            key={`plan-title-${i18n.language}`}
            className="font-serif uppercase tracking-[0.08em] text-[28px] leading-[36px] sm:text-[38px] sm:leading-[46px] lg:text-[48px] lg:leading-[56px] xl:text-[52px] xl:leading-[68px]"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}>
            {t('planStay.title')}
          </motion.h2>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.p
            key={`plan-text-${i18n.language}`}
            className="mt-4 lg:mt-6 tracking-[-0.03em] max-w-[920px] font-serif text-[17.5px] leading-[25px] sm:text-[24px] sm:leading-[34px] lg:text-[32px] lg:leading-[44px] xl:text-[34px] xl:leading-[46px]"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}>
            {t('planStay.text1')} <span className="italic">{t('planStay.text2')}</span>
            <br />
            {t('planStay.text3')}
          </motion.p>
        </AnimatePresence>

        <a
          href={'https://www.simplebooking.it/ibe2/hotel/9131'}
          target="_blank"
          rel="noopener noreferrer"
          className="plan-stay-btn">
          <AnimatePresence mode="wait">
            <motion.span
              key={`plan-btn-${i18n.language}`}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25 }}>
              {t('planStay.button')}
            </motion.span>
          </AnimatePresence>
        </a>
      </motion.div>
    </section>
  );
}
