import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { journalArticles } from '../../../data/journalArticles';

export function JournalArticles() {
  const { t, i18n } = useTranslation();

  const isItalian = i18n.language === 'it';

  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const visibleArticles = showAll ? journalArticles : journalArticles.slice(0, 4);

  const handleToggleArticles = () => {
    if (showAll) {
      setShowAll(false);

      sectionRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });

      return;
    }

    setShowAll(true);
  };

  return (
    <section
      ref={sectionRef}
      className="scroll-mt-[73px] bg-white px-4 py-8 lg:scroll-mt-[86px] lg:px-8 2xl:py-16">
      <div className="mx-auto">
        <div>
          {visibleArticles.map((article) => {
            const title = isItalian ? article.title_ital : article.title;

            const subtitle = isItalian ? article.subtitle_ital : article.subtitle;

            const month = isItalian ? article.date.month_ital : article.date.month;

            const articleUrl = isItalian
              ? `/it/discover/journal/${article.id}`
              : `/discover/journal/${article.id}`;

            return (
              <motion.article
                key={article.id}
                viewport={{ once: true, amount: 0.25 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="border-t border-[#2C3654] py-5 lg:py-0 lg:mb-8">
                <div className="grid gap-5 lg:grid-cols-[190px_600px_1fr] lg:gap-0">
                  {/* DATE */}
                  <div className="font-serif text-[15px] lg:text-[16px] 2xl:text-[18px] leading-[1.3] text-[#2C3654] lg:pb-0 lg:pt-4 2xl:pt-6">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={`${article.id}-${i18n.language}-date`}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{
                          duration: 0.3,
                          ease: [0.22, 1, 0.36, 1],
                        }}>
                        {month} {article.date.day}, {article.date.year}
                      </motion.span>
                    </AnimatePresence>
                  </div>

                  {/* IMAGE */}
                  <div className="overflow-hidden">
                    <motion.img
                      src={article.image}
                      alt={title}
                      className="h-full w-full object-cover"
                      initial={{ scale: 1.08 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, amount: 0.25 }}
                      transition={{
                        duration: 1.8,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="flex flex-col items-start justify-between lg:px-4 lg:pt-4 2xl:px-6 2xl:pt-6">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`${article.id}-${i18n.language}-content`}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{
                          duration: 0.35,
                          ease: [0.22, 1, 0.36, 1],
                        }}>
                        <h2 className="font-serif text-[18px] lg:text-[28px] 2xl:text-[32px] font-semibold leading-[1.2] text-[#2C3654]">
                          {title}
                        </h2>

                        <p className="mt-2 lg:mt-3 font-sans text-[13px] lg:text-[16px] 2xl:text-[18px] leading-[1.4] text-[#2C3654]">
                          {subtitle}
                        </p>
                      </motion.div>
                    </AnimatePresence>

                    <Link
                      to={articleUrl}
                      className="mt-6 mx-auto lg:mx-0 flex h-[40px] w-fit items-center justify-center border-y border-[#2C3654] font-sans text-[13px] font-semibold uppercase tracking-[0.2em] text-[#2C3654] transition-opacity duration-300 hover:opacity-60 md:h-[50px] md:text-[16px] 2xl:text-[18px] 2xl:h-[52px]">
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={`${i18n.language}-continue`}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{
                            duration: 0.3,
                            ease: [0.22, 1, 0.36, 1],
                          }}>
                          {t('journalArticles.continueReading')}
                        </motion.span>
                      </AnimatePresence>
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {journalArticles.length > 4 && (
          <motion.div
            viewport={{ once: true, amount: 0.5 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex justify-center pt-4 2xl:pt-8">
            <button
              type="button"
              onClick={handleToggleArticles}
              className="flex h-[40px] w-fit items-center justify-center border-y border-[#2C3654] font-sans text-[13px] font-semibold uppercase tracking-[0.2em] text-[#2C3654] transition-opacity duration-300 hover:opacity-60 md:h-[50px] 2xl:h-[52px] md:text-[16px] 2xl:text-[18px]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={`${showAll}-${i18n.language}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{
                    duration: 0.3,
                    ease: [0.22, 1, 0.36, 1],
                  }}>
                  {showAll ? t('journalArticles.closeAll') : t('journalArticles.viewAll')}
                </motion.span>
              </AnimatePresence>
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
