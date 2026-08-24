import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import './storyHero.css';

export function StoryHero() {
  const { t } = useTranslation();

  return (
    <section
      id="story-top"
      className="relative flex section-height items-center justify-center overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src={`${process.env.PUBLIC_URL}/images/StoryPage/story_hero/story_hero.webp`}
          alt="The Story"
          className="h-full w-full object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex w-full justify-center px-6">
        <div className="flex max-w-[900px] flex-col items-center text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={t('storyHero.title')}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}>
              <h1 className="story_hero-title">{t('storyHero.title')}</h1>

              <p className="mt-2 xl:mt-4 font-serif text-[22px] leading-[28px] sm:leading-normal sm:text-[28px] lg:text-[32px] text-white">
                {t('storyHero.subtitle')}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
