import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export function PeopleIntro() {
  const baseUrl = process.env.PUBLIC_URL;
  const { t } = useTranslation();

  return (
    <section className="bg-white overflow-hidden">
      <div className="mx-auto flex flex-col gap-2 lg:grid lg:max-w-8xl lg:gap-4 lg:grid-cols-[1fr_1fr_2fr]">
        {/* LEFT IMAGE */}
        <motion.div
          viewport={{ once: true, amount: 0.25 }}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="overflow-hidden order-3 lg:order-1">
          <motion.img
            src={`${baseUrl}/images/PeoplePage/people_intro/left.webp`}
            alt="photo of people working in the vineyard"
            className="h-[440px] lg:h-full w-full object-cover"
            initial={{ scale: 1.08 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 1.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        </motion.div>

        {/* TEXT */}
        <motion.div
          viewport={{ once: true, amount: 0.25 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex items-center justify-center bg-white px-8 lg:px-6 py-6 lg:py-12 order-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={t('peopleIntro.paragraph')}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}>
              <h2 className="font-sans max-w-[290px] 2xl:max-w-[360px] text-[15px] 2xl:text-[18px] font-semibold uppercase leading-[1.3] tracking-[0.22em] text-[#2C3654]">
                {t('peopleIntro.titleLine1')}
                <br />
                <span className="text-[#C09A60]">{t('peopleIntro.titleHighlight')}</span>
                <br />
                {t('peopleIntro.titleLine3')}
              </h2>

              <p className="mt-4 lg:mt-8 max-w-[310px] 2xl:max-w-[370px] font-serif text-[15px] leading-[20px] 2xl:text-[18px] 2xl:leading-[28px] text-[#2C3654]">
                {t('peopleIntro.paragraph')}
              </p>
            </motion.div>
          </AnimatePresence>
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
          className="overflow-hidden order-1 lg:order-3">
          <motion.img
            src={`${baseUrl}/images/PeoplePage/people_intro/right.webp`}
            alt="photo of people working with umbrella"
            className="h-[440px] lg:h-full w-full object-cover"
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
