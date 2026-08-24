import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import type { Villa } from '../../../data/villas';

type VillaHeroProps = {
  hero: Villa['hero'];
};

export function VillaHero({ hero }: VillaHeroProps) {
  const { t, i18n } = useTranslation();
  return (
    <section className="relative section-height overflow-hidden">
      {/* Background */}
      <img
        src={hero.image}
        alt={`Villa ${hero.title}`}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-between">
        {/* Center */}
        <div className="flex flex-1 items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-28 flex flex-col items-center text-center text-white sm:mt-24">
            <div className="mb-3 bg-white px-4 sm:px-6">
              <span className="font-sans text-[16px] font-semibold uppercase tracking-[0.15em] text-[#2C3654] sm:text-[18px]">
                Villa
              </span>
            </div>

            <h1 className="font-serif text-[38px] leading-[44px] uppercase tracking-[0.08em] sm:text-[46px] sm:leading-[50px] lg:text-[52px] lg:leading-[54px]">
              {t(hero.title)}
            </h1>
          </motion.div>
        </div>

        {/* Bottom */}
        <AnimatePresence mode="wait">
          <motion.p
            key={`${hero.subtitle.part1}-${i18n.language}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-[350px] pb-24 text-center font-serif text-[22px] leading-[28px] text-white sm:max-w-[510px] sm:pb-12 sm:text-[28px] sm:leading-[34px] lg:max-w-[660px] lg:text-[32px] lg:leading-[38px]">
            {t(hero.subtitle.part1)}
            <em>{t(hero.subtitle.italic)}</em>
            {t(hero.subtitle.part2)}
          </motion.p>
        </AnimatePresence>
      </div>
    </section>
  );
}
