import React from 'react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import './villasHero.css';

type VideoType = 'mobile' | 'laptop' | 'desktop';

const getVideoType = (): VideoType => {
  if (window.innerWidth < 1024) return 'mobile';
  if (window.innerWidth < 1536) return 'laptop';
  return 'desktop';
};

const videoSources: Record<VideoType, string> = {
  mobile: `${process.env.PUBLIC_URL}/images/VillasPage/villas_hero/villas_hero_vid_mob.mp4`,
  laptop: `${process.env.PUBLIC_URL}/images/VillasPage/villas_hero/villas_hero_vid_laptop.mp4`,
  desktop: `${process.env.PUBLIC_URL}/images/VillasPage/villas_hero/villas_hero_vid_desk.mp4`,
};

const videoPosters: Record<VideoType, string> = {
  mobile: `${process.env.PUBLIC_URL}/images/VillasPage/villas_hero/villas_hero-poster_mob.webp`,
  laptop: `${process.env.PUBLIC_URL}/images/VillasPage/villas_hero/villas_hero-poster_laptop.webp`,
  desktop: `${process.env.PUBLIC_URL}/images/VillasPage/villas_hero/villas_hero-poster_desk.webp`,
};

export function VillasHero() {
  const { t } = useTranslation();

  const [videoType, setVideoType] = useState<VideoType>(getVideoType);

  useEffect(() => {
    const handleResize = () => {
      setVideoType(getVideoType());
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section
      id="villas-top"
      className="relative flex section-height justify-center items-center overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <video
          key={videoType}
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={videoPosters[videoType]}>
          <source src={videoSources[videoType]} type="video/mp4" />
        </video>

        {/* OVERLAY */}
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex w-full justify-center px-6">
        <div className="flex flex-col items-center justify-end text-center">
          {/* HERO TEXT */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={t('villasHero.title')}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}>
                <h1 className="villas_hero-title">{t('villasHero.title')}</h1>

                <p className="mt-2 xl:mt-4 font-serif text-[22px] leading-[28px] sm:leading-normal sm:text-[28px] lg:text-[32px] text-white">
                  {t('villasHero.subtitle')}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
