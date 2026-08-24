import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { journalArticles } from '../../data/journalArticles';
import { smoothScrollToTop } from '../../utils/smoothScrollToTop/smoothScrollToTop';

export function JournalArticlePage() {
  const { articleId } = useParams<{ articleId: string }>();
  const { i18n } = useTranslation();

  const isItalian = i18n.language === 'it';
  const langPrefix = isItalian ? '/it' : '';

  const articleIndex = journalArticles.findIndex((article) => article.id === articleId);

  const article = articleIndex !== -1 ? journalArticles[articleIndex] : undefined;

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [articleId]);
  useEffect(() => {
    smoothScrollToTop();
  }, [articleId]);

  if (!article) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <h1 className="font-serif text-[32px] text-[#2C3654]">Article not found</h1>
      </main>
    );
  }

  const title = isItalian ? article.title_ital : article.title;
  const subtitle = isItalian ? article.subtitle_ital : article.subtitle;
  const month = isItalian ? article.date.month_ital : article.date.month;

  const nextArticles = [
    journalArticles[(articleIndex + 1) % journalArticles.length],
    journalArticles[(articleIndex + 2) % journalArticles.length],
  ];

  const articleTitleLine1 = isItalian ? article.articleTitleLine1_ital : article.articleTitleLine1;

  const articleTitleLine2 = isItalian ? article.articleTitleLine2_ital : article.articleTitleLine2;

  return (
    <main className="bg-white text-[#2C3654]">
      {/* HEADER */}
      <section className="px-4 py-8 lg:px-8 lg:py-12">
        <motion.div
          viewport={{ once: true, amount: 0.25 }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-[1300px] text-center">
          {/* DATE */}
          <div className="font-sans text-[10px] lg:text-[14px] uppercase tracking-[0.2em]">
            <AnimatePresence mode="wait">
              <motion.span
                key={`${article.id}-${i18n.language}-month`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{
                  duration: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-block">
                {month} {article.date.day}, {article.date.year}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* TITLE + SUBTITLE */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${article.id}-${i18n.language}-header`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}>
              <h1 className="mx-auto mt-5 max-w-[1300px] font-serif text-[22px] sm:text-[28px] md:text-[32px] 2xl:text-[38px] uppercase leading-[1.15] tracking-[0.1em]">
                {articleTitleLine1 && articleTitleLine2 ? (
                  <>
                    {articleTitleLine1}
                    <span className="sm:hidden"> </span>
                    <br className="hidden sm:block" />
                    {articleTitleLine2}
                  </>
                ) : (
                  title
                )}
              </h1>

              <p className="mx-auto mt-5 max-w-[1050px] font-serif text-[14px] leading-[1.4] md:text-[16px] lg:text-[18px]">
                {subtitle}
              </p>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </section>

      {/* HERO IMAGE */}
      <section className="px-4 lg:px-8">
        <motion.div
          viewport={{ once: true, amount: 0.2 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="overflow-hidden">
          <motion.img
            src={article.image_hero}
            alt={title}
            className="h-[320px] w-full object-cover sm:h-[440px] md:h-[560px] lg:h-[700px] 2xl:h-[800px]"
            initial={{ scale: 1.08 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 1.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        </motion.div>
      </section>

      {/* ARTICLE CONTENT */}
      <section className="px-4 py-8 lg:px-8 lg:py-12">
        <div className="mx-auto grid max-w-[1500px] gap-8 lg:gap-10 lg:grid-cols-[minmax(0,1fr)_340px]">
          {/* TEXT */}
          <motion.div
            viewport={{ once: true, amount: 0.1 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={`${article.id}-${i18n.language}-body`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="">
                {article.content.map((block, blockIndex) => {
                  const blockTitle = isItalian ? block.title_ital : block.title;

                  const paragraphs = isItalian ? block.paragraphs_ital : block.paragraphs;

                  return (
                    <div key={blockIndex} className={blockIndex === 0 ? '' : 'mt-6 md:mt-10'}>
                      {blockTitle && (
                        <h2 className="mb-4 lg:mb-5 font-sans text-[14px] md:text-[17px] lg:text-[18px] font-semibold uppercase tracking-[0.18em]">
                          {blockTitle}
                        </h2>
                      )}

                      <div className="space-y-4 lg:space-y-5">
                        {paragraphs.map((paragraph, paragraphIndex) => (
                          <p
                            key={paragraphIndex}
                            className="font-sans text-[14px] leading-[1.6] md:text-[15px] lg:text-[16px]">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* NEXT ARTICLES */}
          <aside className="border-l-2 border-[#2C3654] pl-2 lg:pl-4">
            <div className="space-y-6 lg:space-y-10">
              {nextArticles.map((nextArticle, index) => {
                const nextTitle = isItalian ? nextArticle.title_ital : nextArticle.title;

                const nextMonth = isItalian ? nextArticle.date.month_ital : nextArticle.date.month;

                const articleUrl = isItalian
                  ? `/it/discover/journal/${nextArticle.id}`
                  : `/discover/journal/${nextArticle.id}`;

                return (
                  <motion.div
                    key={nextArticle.id}
                    viewport={{ once: true, amount: 0.25 }}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}>
                    <Link to={articleUrl} className="group block">
                      <div className="bg-[#F0E7DA] py-1 text-center font-sans text-[12px] uppercase tracking-[0.12em]">
                        <AnimatePresence mode="wait">
                          <motion.span
                            key={`${nextArticle.id}-${i18n.language}-month`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}>
                            {nextMonth} {article.date.day}, {article.date.year}
                          </motion.span>
                        </AnimatePresence>
                      </div>

                      <div className="overflow-hidden">
                        <img
                          src={nextArticle.image}
                          alt={nextTitle}
                          className="aspect-[1.35/1] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>

                      <AnimatePresence mode="wait">
                        <motion.h3
                          key={`${nextArticle.id}-${i18n.language}-title`}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{
                            duration: 0.3,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="mt-2 lg:mt-3 font-serif text-[14px] leading-[1.35] md:text-[16px]">
                          {nextTitle}
                        </motion.h3>
                      </AnimatePresence>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </aside>
        </div>
      </section>

      {/* BACK TO JOURNAL */}
      <section className="px-4 lg:px-8">
        <motion.div
          className="flex justify-center"
          viewport={{ once: true, amount: 0.4 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}>
          <Link
            to={`${langPrefix}/discover/journal`}
            className="flex items-center justify-center h-[57px] xl:min-w-[330px] bg-[#2C3654] px-10 font-sans text-[18px] font-bold uppercase tracking-[0.18em] text-white transition-opacity duration-300 hover:opacity-80 disabled:opacity-80">
            Back to Journal
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
