import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export function PressIntro() {
  const baseUrl = process.env.PUBLIC_URL;

  const { t } = useTranslation();

  return (
    <section className="bg-white pt-8 lg:p-6 overflow-hidden">
      <div className="mx-auto grid max-w-8xl lg:grid-cols-3 gap-4 lg:gap-6 2xl:gap-10">
        {/* LEFT IMAGE */}
        <motion.div
          viewport={{ once: true, amount: 0.25 }}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="overflow-hidden order-2 lg:order-1 p-4 lg:p-0">
          <motion.picture
            initial={{ scale: 1.08 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 1.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="block h-full w-full">
            <source
              media="(max-width: 1023px)"
              srcSet={`${baseUrl}/images/PressPage/press_intro/left_mob.webp`}
            />

            <motion.img
              src={`${baseUrl}/images/PressPage/press_intro/left.webp`}
              alt="Wine glass"
              className="h-full w-full object-cover max-h-[380px] md:max-h-[620px] lg:max-h-full min-[1440px]:min-h-[440px]"
            />
          </motion.picture>
        </motion.div>

        {/* CENTER */}
        <motion.div
          viewport={{ once: true, amount: 0.25 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex items-center justify-center px-4 lg:px-0 order-1 lg:order-2">
          <div className="relative flex flex-col items-center text-center w-full">
            {/* Logo + decorative lines */}
            <div className="mb-5 lg:mb-2 xl:mb-10 flex w-full items-center justify-center gap-4">
              <div className="h-[2px] flex-1 bg-[#2C3654]" />

              <img
                src={`${baseUrl}/images/PressPage/press_intro/logo.svg`}
                alt="Scarpa Villas"
                className="h-[54px] xl:h-[74px] w-auto shrink-0"
              />

              <div className="h-[2px] flex-1 bg-[#2C3654]" />
            </div>

            {/* Text */}
            <AnimatePresence mode="wait">
              <motion.p
                key={t('pressIntro.textLine2')}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="font-serif text-[18px] leading-[22px] md:text-[28px] md:leading-[34px] lg:text-[18px] lg:leading-[22px] min-[1440px]:text-[28px] min-[1440px]:leading-[34px] min-[1680px]:text-[32px] min-[1680px]:leading-[38px] text-[#2C3654]">
                {t('pressIntro.textLine1')}
                <br />
                <em>{t('pressIntro.textItalic')}</em> {t('pressIntro.textLine2')}
                <br />
                {t('pressIntro.textLine3')}
                <br />
                {t('pressIntro.textLine4')}
                <br />
                {t('pressIntro.textLine5')}
              </motion.p>
            </AnimatePresence>

            <div className="mt-8 lg:mt-4 xl:mt-14 h-[2px] w-full bg-[#2C3654]" />
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          viewport={{ once: true, amount: 0.25 }}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="overflow-hidden hidden lg:block order-3 min-[1440px]:min-h-[440px]">
          <motion.img
            src={`${baseUrl}/images/PressPage/press_intro/right.webp`}
            alt="Scarpa Villas"
            className="h-full w-full object-cover"
            initial={{ scale: 1.08 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 1.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
