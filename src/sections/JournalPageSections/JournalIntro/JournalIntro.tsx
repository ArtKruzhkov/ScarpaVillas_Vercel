import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export function JournalIntro() {
  const { t, i18n } = useTranslation();

  return (
    <section className="bg-[#2C3654] px-4 py-10 text-white md:py-12 lg:py-16">
      <motion.div
        viewport={{ once: true, amount: 0.35 }}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mx-auto flex max-w-[360px] flex-col items-center text-center sm:max-w-none">
        <AnimatePresence mode="wait">
          <motion.p
            key={i18n.language}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="font-serif text-[20px] leading-[1.2] sm:text-[24px] md:text-[28px] 2xl:text-[32px]">
            {t('journalIntro.textLine1')}
            <br className="hidden sm:block" />
            {t('journalIntro.textLine2')}
          </motion.p>
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
