import React from 'react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import './hero.css';

type VideoType = 'mobile' | 'laptop' | 'desktop';

const getVideoType = (): VideoType => {
  if (window.innerWidth < 1024) return 'mobile';
  if (window.innerWidth < 1536) return 'laptop';
  return 'desktop';
};

const videoSources: Record<VideoType, string> = {
  mobile: `${process.env.PUBLIC_URL}/images/hero/hero_vid_mob.mp4`,
  laptop: `${process.env.PUBLIC_URL}/images/hero/hero_vid_laptop.mp4`,
  desktop: `${process.env.PUBLIC_URL}/images/hero/hero_vid_desk.mp4`,
};

const videoPosters: Record<VideoType, string> = {
  mobile: `${process.env.PUBLIC_URL}/images/hero/hero-poster_mob.webp`,
  laptop: `${process.env.PUBLIC_URL}/images/hero/hero-poster_laptop.webp`,
  desktop: `${process.env.PUBLIC_URL}/images/hero/hero-poster_desk.webp`,
};

export function Hero() {
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
      id="top"
      className="relative flex section-height items-end justify-center overflow-hidden">
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
      <div className="relative z-10 flex w-full justify-center px-6 pb-[6.5rem] sm:pb-[4.1rem]">
        <div className="flex max-w-[900px] flex-col items-center text-center">
          {/* ICON */}
          <img
            src={`${process.env.PUBLIC_URL}/images/hero/logo_hero.svg`}
            alt="Scarpa Villas"
            className="hero-logo"
          />

          {/* HERO TEXT */}
          <div className="mt-5 sm:mt-6 max-w-[900px]">
            <AnimatePresence mode="wait">
              <motion.h1
                key={t('hero.titlePart1')}
                className="hero-title"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}>
                {t('hero.titlePart1')}
                <span className="italic"> {t('hero.titleItalic')}</span>,
                <span className="mt-2 block">{t('hero.titlePart2')}</span>
              </motion.h1>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
