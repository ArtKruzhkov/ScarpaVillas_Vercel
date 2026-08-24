import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

export function VillasGrid() {
  const { t, i18n } = useTranslation();
  const langPrefix = i18n.language === 'it' ? '/it' : '';

  const villas = [
    {
      id: 'tettineive',
      title: t('villasGrid.tettineive.title'),
      text1: t('villasGrid.tettineive.text1'),
      text2: t('villasGrid.tettineive.text2'),
      image: `${process.env.PUBLIC_URL}/images/VillasPage/villas_villasGrid/tettineive.webp`,
      framed: true,
    },
    {
      id: 'bogliona',
      title: t('villasGrid.bogliona.title'),
      text1: t('villasGrid.bogliona.text1'),
      text2: t('villasGrid.bogliona.text2'),
      image: `${process.env.PUBLIC_URL}/images/VillasPage/villas_villasGrid/bogliona.webp`,
      framed: false,
    },
    {
      id: 'bricchi',
      title: t('villasGrid.bricchi.title'),
      text1: t('villasGrid.bricchi.text1'),
      text2: t('villasGrid.bricchi.text2'),
      image: `${process.env.PUBLIC_URL}/images/VillasPage/villas_villasGrid/bricchi.webp`,
      framed: false,
    },
    {
      id: 'tettimorra',
      title: t('villasGrid.tettimorra.title'),
      text1: t('villasGrid.tettimorra.text1'),
      text2: t('villasGrid.tettimorra.text2'),
      image: `${process.env.PUBLIC_URL}/images/VillasPage/villas_villasGrid/tettimorra.webp`,
      framed: true,
    },
  ];

  return (
    <section className="bg-[#2C3654]">
      <div className="mx-auto max-w-8xl 2xl:max-w-[1920px] px-4 py-4">
        <div className="grid grid-cols-1 gap-y-2 lg:grid-cols-2">
          {villas.map((villa, index) => (
            <motion.article
              key={villa.title}
              className="relative h-[430px] md:h-[520px] lg:h-[670px]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 1.2,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}>
              <div className="relative h-full p-4">
                <div className="relative h-full overflow-hidden">
                  <img src={villa.image} alt={villa.title} className="h-full w-full object-cover" />

                  <div className="absolute inset-x-0 bottom-0 z-10 px-4 pb-6 lg:p-7 text-white">
                    <AnimatePresence mode="wait">
                      <motion.h3
                        key={villa.title}
                        className="font-serif text-[28px] sm:text-[32px] 2xl:text-[38px] leading-none"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{
                          duration: 0.35,
                          ease: [0.22, 1, 0.36, 1],
                        }}>
                        {villa.title}
                      </motion.h3>
                    </AnimatePresence>

                    <AnimatePresence mode="wait">
                      <motion.p
                        key={`${villa.text1}-${villa.text2}`}
                        className="mt-2 sm:mt-3 max-w-[720px] xl:max-w-none font-sans text-[15px] leading-[21px] md:text-[16px] md:leading-[22px] 2xl:text-[18px] 2xl:leading-[26px]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}>
                        {villa.text1}
                        <br />
                        {villa.text2}
                      </motion.p>
                    </AnimatePresence>

                    <div className="mt-4 sm:mt-6 lg:mt-8 inline-block">
                      <Link
                        to={`${langPrefix}/villas/${villa.id}`}
                        className="flex items-center justify-center h-[40px] md:h-[50px] 2xl:h-[52px] border-y border-white font-sans text-[13px] md:text-[16px] 2xl:text-[18px] font-semibold uppercase tracking-[0.2em] transition-opacity duration-300 hover:opacity-60">
                        <AnimatePresence mode="wait">
                          <motion.span
                            key={t('villasGrid.discover')}
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -6 }}
                            transition={{
                              duration: 0.25,
                              ease: [0.22, 1, 0.36, 1],
                            }}>
                            {t('villasGrid.discover')}
                          </motion.span>
                        </AnimatePresence>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
