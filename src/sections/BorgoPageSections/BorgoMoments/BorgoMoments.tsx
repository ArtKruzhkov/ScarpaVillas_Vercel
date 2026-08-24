import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

export function BorgoMoments() {
  const { t } = useTranslation();
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <motion.img
        src={`${process.env.PUBLIC_URL}/images/BorgoPage/borgo_moments/borgo_moments.webp`}
        alt="Life at The Borgo"
        className="h-[600px] lg:h-full max-h-[864px] w-full object-cover object-[85%_center] lg:object-center"
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
          duration: 1.8,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={t('borgoMoments.title')}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mx-auto flex h-full max-w-[1060px] flex-col items-center text-center">
            <h2 className="mt-8 lg:mt-12 2xl:mt-16 max-w-[327px] sm:max-w-[520px] lg:max-w-[860px] font-serif text-[18px] leading-[24px] sm:text-[28px] sm:leading-[34px] lg:text-[38px] lg:leading-[42px] 2xl:text-[42px] 2xl:leading-[46px] uppercase tracking-[0.06em] text-white">
              {t('borgoMoments.title')}
            </h2>

            <div className="mt-auto mb-8 lg:mb-12 2xl:mb-16 max-w-[1020px] space-y-5 font-serif text-[14px] leading-[18px] sm:text-[16px] sm:leading-[20px] md:text-[17px] sm:leading-[21px] lg:text-[22px] lg:leading-[32px] text-white">
              <p>
                {t('borgoMoments.text1Line1')}
                <br className="hidden lg:block" />
                {t('borgoMoments.text1Line2')}
              </p>

              <p>
                {t('borgoMoments.text2Line1')}
                <br className="hidden lg:block" />
                {t('borgoMoments.text2Line2')}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
