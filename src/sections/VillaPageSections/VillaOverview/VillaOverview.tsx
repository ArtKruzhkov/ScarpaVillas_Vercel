import { motion, AnimatePresence } from 'framer-motion';
import type { Villa } from '../../../data/villas';
import { useTranslation, Trans } from 'react-i18next';

type VillaOverviewProps = {
  overview: Villa['overview'];
};

export function VillaOverview({ overview }: VillaOverviewProps) {
  const { t, i18n } = useTranslation();
  return (
    <section className="bg-white py-8 lg:pb-8 lg:pt-16">
      <div className="mx-auto max-w-8xl px-4 lg:px-5">
        {/* TEXT */}
        <motion.div
          viewport={{ once: true, amount: 0.35 }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-[930px] text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={i18n.language}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}>
              <h2 className="mx-auto max-w-[370px] font-serif text-[19px] leading-[1.25] tracking-[-0.02rem] text-[#2C3654] sm:max-w-[610px] sm:text-[23px] md:max-w-[740px] md:text-[28px] xl:max-w-[807px] xl:text-[32px] xl:leading-[38px]">
                {t(overview.title)}
              </h2>

              <p className="mx-auto mt-4 max-w-[930px] font-sans text-[15px] leading-[1.4] text-[#2C3654] sm:mt-6 sm:text-[16px] lg:text-[18px] lg:leading-[1.7]">
                <Trans
                  i18nKey={overview.description}
                  components={{
                    strong: <strong className="font-semibold text-[#2C3654]" />,
                  }}
                />
              </p>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* IMAGES */}
        <motion.div
          viewport={{ once: true, amount: 0.2 }}
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-7 grid grid-cols-1 gap-5 lg:mt-14 lg:grid-cols-[1fr_2fr_1fr]">
          {/* Left */}
          <div className="h-[280px] max-h-[620px] overflow-hidden sm:h-[500px] lg:h-auto">
            <img
              src={overview.images.left}
              alt={`${overview.title} exterior`}
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Center */}
          <div className="h-[280px] max-h-[620px] overflow-hidden sm:h-[500px] lg:h-auto">
            <img
              src={overview.images.center}
              alt={`${overview.title} interior`}
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Right */}
          <div className="h-[280px] max-h-[620px] overflow-hidden sm:h-[500px] lg:h-auto">
            <img
              src={overview.images.right}
              alt={`${overview.title} view`}
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
