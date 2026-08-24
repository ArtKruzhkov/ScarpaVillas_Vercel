import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export function BorgoAbout() {
  const { t } = useTranslation();

  const cards = [
    {
      id: 'corporate',
      title: t('borgoAbout.cards.corporate'),
      image: `${process.env.PUBLIC_URL}/images/BorgoPage/borgo_about/corporate.webp`,
    },
    {
      id: 'weddings',
      title: t('borgoAbout.cards.weddings'),
      image: `${process.env.PUBLIC_URL}/images/BorgoPage/borgo_about/weddings.webp`,
    },
    {
      id: 'celebrations',
      title: t('borgoAbout.cards.celebrations'),
      image: `${process.env.PUBLIC_URL}/images/BorgoPage/borgo_about/celebrations.webp`,
    },
    {
      id: 'family',
      title: t('borgoAbout.cards.family'),
      image: `${process.env.PUBLIC_URL}/images/BorgoPage/borgo_about/family.webp`,
    },
  ];

  const includes = [
    {
      id: 'villas',
      icon: 'villa.svg',
      text: t('borgoAbout.includes.villas'),
    },
    {
      id: 'spaces',
      icon: 'spaces.svg',
      text: t('borgoAbout.includes.spaces'),
    },
    {
      id: 'pool',
      icon: 'pool.svg',
      text: t('borgoAbout.includes.pool'),
    },
    {
      id: 'garden',
      icon: 'garden.svg',
      text: t('borgoAbout.includes.garden'),
    },
    {
      id: 'kitchen',
      icon: 'kitchen.svg',
      text: t('borgoAbout.includes.kitchen'),
    },
  ];

  return (
    <section className="bg-white overflow-hidden">
      <div className="mx-auto max-w-8xl">
        <div className="grid lg:grid-cols-[1.45fr_1fr]">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="px-5 py-4 md:px-8 md:py-6 lg:py-10 xl:px-10 2xl:py-14">
            <AnimatePresence mode="wait">
              <motion.h2
                key={t('borgoAbout.idealFor')}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mb-6 md:mb-8 font-sans text-[14px] md:text-[15px] lg:text-[18px] 2xl:text-[20px] font-bold uppercase tracking-[0.22em] text-[#2C3654]">
                {t('borgoAbout.idealFor')}
              </motion.h2>
            </AnimatePresence>

            <div className="grid gap-5 sm:grid-cols-2">
              {cards.map((card, index) => (
                <motion.div
                  key={card.id}
                  initial={{
                    opacity: 0,
                    scale: 1.08,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 1.2,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  <AnimatePresence mode="wait">
                    <motion.span
                      key={card.title}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{
                        duration: 0.35,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="absolute bottom-5 left-5 right-5 font-serif text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[26px] leading-tight text-white">
                      {card.title}
                    </motion.span>
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="bg-[#2C3654] px-6 py-10 text-white md:px-10 md:py-14 xl:px-14 xl:py-16">
            <div className="flex flex-col h-full">
              <AnimatePresence mode="wait">
                <motion.h2
                  key={t('borgoAbout.includesTitle')}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{
                    duration: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="mb-6 md:mb-8 lg:mb-16 2xl:mb-28 font-sans text-[14px] md:text-[15px] lg:text-[18px] 2xl:text-[20px] font-bold uppercase tracking-[0.22em] text-[#C09A60]">
                  {t('borgoAbout.includesTitle')}
                </motion.h2>
              </AnimatePresence>

              <div className="flex h-full flex-col gap-6 lg:gap-0 justify-between pb-0 lg:pb-16 2xl:pb-24">
                {includes.map((item) => (
                  <div key={item.id} className="flex items-center gap-6">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/BorgoPage/borgo_about/${item.icon}`}
                      alt="icon"
                      aria-hidden="true"
                      className="mt-1 h-12 w-12 shrink-0"
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
