import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './storyVillasCTA.css';

const baseUrl = process.env.PUBLIC_URL;

export function StoryVillasCTA() {
  const { t, i18n } = useTranslation();

  const langPrefix = i18n.language === 'it' ? '/it' : '';

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-8xl">
        <div className="relative overflow-hidden">
          {/* Background image */}
          <motion.img
            src={`${baseUrl}/images/StoryPage/story_cta/storyCTA.webp`}
            alt="Scarpa Villas"
            className="storyVillasCTA_image-height w-full object-cover"
            initial={{
              opacity: 0,
              scale: 1.08,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 1.6,
              ease: [0.22, 1, 0.36, 1],
            }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent lg:hidden" />

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute inset-0 flex flex-col items-center justify-end px-4 md:px-6 pb-10 text-center sm:pb-14 lg:pb-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={t('storyVillasCTA.text')}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col items-center">
                <p className="max-w-[343px] sm:max-w-[440px] md:max-w-[560px] lg:max-w-[620px] font-sans text-[11px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-semibold uppercase leading-[1.5] tracking-[0.06em] md:tracking-[0.2em] text-white">
                  {t('storyVillasCTA.text')}
                </p>

                <Link
                  to={`${langPrefix}/villas`}
                  className="mt-6 flex h-[44px] min-w-[220px] items-center justify-center bg-white px-12 font-sans text-[13px] font-bold uppercase tracking-[0.2em] text-[#2C3654] transition-all duration-300 hover:bg-[#2C3654] hover:text-white md:h-[57px] md:min-w-[440px] md:text-[18px] lg:min-w-[510px]">
                  {t('storyVillasCTA.button')}
                </Link>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
