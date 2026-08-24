import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

export function BorgoEstate() {
  const { t } = useTranslation();
  return (
    <section className="bg-white lg:py-0">
      <div className="mx-auto grid max-w-8xl overflow-hidden lg:grid-cols-[1.45fr_1fr]">
        {/* LEFT */}
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
          className="relative overflow-hidden">
          <img
            src={`${process.env.PUBLIC_URL}/images/BorgoPage/borgo_estate/estate_left.webp`}
            alt="Four Villas"
            className="h-[430px] w-full object-cover md:h-[560px] lg:h-full"
          />

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
              amount: 0.4,
            }}
            transition={{
              duration: 0.9,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute inset-0 flex justify-center px-6 pt-12 xl:pt-16 2xl:pt-20 text-center">
            <AnimatePresence mode="wait">
              <motion.h2
                key={t('borgoEstate2.titleLine1')}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="font-serif tracking-[0.03em] uppercase text-[#2C3654] text-[20px] leading-[1.15] md:text-[28px] xl:text-[34px] xl:leading-[38px] 2xl:text-[42px] 2xl:leading-[46px]">
                {t('borgoEstate2.titleLine1')}
                <br />
                {t('borgoEstate2.titleLine2')}
              </motion.h2>
            </AnimatePresence>
          </motion.div>
        </motion.div>

        {/* RIGHT */}
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
          className="relative overflow-hidden border-[20px] xl:border-[25px] 2xl:border-[35px] border-white">
          <img
            src={`${process.env.PUBLIC_URL}/images/BorgoPage/borgo_estate/estate_right.webp`}
            alt="Private Estate"
            className="h-[400px] md:h-[520px] lg:h-full w-full object-cover sm:object-[center_70%] lg:object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />

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
              amount: 0.4,
            }}
            transition={{
              duration: 0.9,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute inset-x-0 bottom-6 md:bottom-8 lg:bottom-5 xl:bottom-10 flex flex-col items-center px-4 xl:px-5 2xl:px-8">
            <AnimatePresence mode="wait">
              <motion.p
                key={t('borgoEstate2.text')}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-white sm:max-w-[450px] md:max-w-[690px] lg:max-w-[590px] text-center font-serif text-[14px] sm:text-[16px] md:text-[17px] lg:text-[16px] xl:text-[18px] 2xl:text-[22px] leading-[1.15] xl:leading-[22px] 2xl:leading-[26px]">
                {t('borgoEstate2.text')}
              </motion.p>
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
