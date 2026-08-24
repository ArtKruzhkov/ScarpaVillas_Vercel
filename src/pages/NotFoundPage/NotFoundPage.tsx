import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';

export function NotFoundPage() {
  const { t, i18n } = useTranslation();

  const langPrefix = i18n.language === 'it' ? '/it' : '';

  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6 text-[#2C3654]">
      <div className="text-center">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="font-serif text-[80px] leading-none md:text-[120px] lg:text-[160px]">
          404
        </motion.p>

        <AnimatePresence mode="wait">
          <motion.div
            key={`404-${i18n.language}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}>
            <h1 className="mt-5 font-serif text-[28px] md:text-[36px] lg:text-[42px]">
              {t('notFound.title')}
            </h1>

            <p className="mx-auto mt-4 max-w-[600px] font-sans text-[14px] leading-[22px] md:text-[16px] md:leading-[26px]">
              {t('notFound.text')}
            </p>

            <Link
              to={`${langPrefix}/`}
              className="mt-8 inline-flex min-w-[220px] justify-center bg-[#2C3654] px-8 py-4 font-sans text-[13px] font-semibold uppercase tracking-[0.18em] text-white transition-opacity duration-300 hover:opacity-80">
              {t('notFound.button')}
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}
