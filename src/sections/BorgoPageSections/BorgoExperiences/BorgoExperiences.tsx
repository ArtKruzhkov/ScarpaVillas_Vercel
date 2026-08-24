import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

export function BorgoExperiences() {
  const { t, i18n } = useTranslation();

  const langPrefix = i18n.language === 'en' ? '' : `/${i18n.language}`;

  const experiences = [
    {
      id: 'chef',
      icon: 'chef.svg',
      text: t('borgoExperiences.items.chef'),
    },
    {
      id: 'wine',
      icon: 'wine.svg',
      text: t('borgoExperiences.items.wine'),
    },
    {
      id: 'truffle',
      icon: 'truffle.svg',
      text: t('borgoExperiences.items.truffle'),
    },
    {
      id: 'concierge',
      icon: 'concierge.svg',
      text: t('borgoExperiences.items.concierge'),
    },
  ];

  return (
    <section>
      <div className="mx-auto max-w-8xl overflow-hidden">
        <div className="grid lg:grid-cols-2">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col bg-[#2C3654] px-6 py-10 md:px-12 md:py-14 xl:px-16 xl:py-20">
            <AnimatePresence mode="wait">
              <motion.h2
                key={t('borgoExperiences.title')}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="font-sans text-[14px] md:text-[15px] lg:text-[18px] 2xl:text-[20px] font-bold uppercase tracking-[0.2em] text-white">
                {t('borgoExperiences.titleLine1')}
                <br />
                {t('borgoExperiences.titleLine2')}
              </motion.h2>
            </AnimatePresence>

            <div className="mt-14 lg:mt-16 2xl:mt-28 mb-8 lg:mb-0 flex gap-6 lg:gap-0 h-full flex-col justify-between">
              {experiences.map((item) => (
                <div key={item.id} className="flex items-center gap-6">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/BorgoPage/borgo_experiences/${item.icon}`}
                    alt=""
                    aria-hidden="true"
                    className="h-12 w-12 shrink-0"
                  />

                  <AnimatePresence mode="wait">
                    <motion.p
                      key={item.text}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{
                        duration: 0.35,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="font-sans text-[13px] xl:text-[15px] 2xl:text-[20px] leading-[18px] xl:leading-[20px] 2xl:leading-[25px] text-white">
                      {item.text}
                    </motion.p>
                  </AnimatePresence>
                </div>
              ))}
            </div>

            <Link
              to={`${langPrefix}/experiences`}
              className="mt-6 lg:mt-16 2xl:mt-28 flex h-[44px] md:h-[57px] w-full max-w-[620px] items-center justify-center border-2 border-white bg-white py-3 md:py-[1.1rem] lg:py-4 font-sans text-[13px] lg:text-[16px] font-semibold uppercase tracking-[0.16em] text-[#2C3654] transition-opacity duration-300 hover:opacity-80">
              <AnimatePresence mode="wait">
                <motion.span
                  key={t('borgoExperiences.button')}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{
                    duration: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="inline-block">
                  {t('borgoExperiences.button')}
                </motion.span>
              </AnimatePresence>
            </Link>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 1.08 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 1.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="overflow-hidden">
            <img
              src={`${process.env.PUBLIC_URL}/images/BorgoPage/borgo_experiences/experience.webp`}
              alt="Experiences at The Borgo"
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
