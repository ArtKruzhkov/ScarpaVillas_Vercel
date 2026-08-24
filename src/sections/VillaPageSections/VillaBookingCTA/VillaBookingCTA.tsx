import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import type { Villa } from '../../../data/villas';

type VillaBookingCTAProps = {
  bookingCTA: Villa['bookingCTA'];
};

export function VillaBookingCTA({ bookingCTA }: VillaBookingCTAProps) {
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
        className="mx-auto flex max-w-[354px] flex-col items-center text-center sm:max-w-[434px] md:max-w-[500px] lg:max-w-[910px]">
        <AnimatePresence mode="wait">
          <motion.p
            key={`${bookingCTA.title.bold}-${i18n.language}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="font-serif text-[20px] leading-[1.1] sm:text-[24px] md:text-[28px] lg:text-[32px] 2xl:text-[34px]">
            <strong className="font-semibold">{t(bookingCTA.title.bold)}</strong>{' '}
            <em className="font-normal">{t(bookingCTA.title.italic)}</em>
            <br className="hidden lg:block" />
            {t(bookingCTA.title.text)}
          </motion.p>
        </AnimatePresence>

        <a
          href="https://www.simplebooking.it/ibe2/hotel/9131"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex h-[44px] min-w-[280px] items-center justify-center bg-white px-8 font-sans text-[13px] font-semibold uppercase tracking-[0.18em] text-[#2C3654] transition-colors duration-300 hover:bg-white/80 md:mt-8 md:h-[57px] lg:min-w-[400px] lg:text-[16px]">
          <AnimatePresence mode="wait">
            <motion.span
              key={`${bookingCTA.button}-${i18n.language}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}>
              {t(bookingCTA.button)}
            </motion.span>
          </AnimatePresence>
        </a>
      </motion.div>
    </section>
  );
}
