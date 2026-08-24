import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import './pressArticles.css';

export function PressArticles() {
  const baseUrl = process.env.PUBLIC_URL;

  const { t, i18n } = useTranslation();

  const articles = [
    {
      id: 1,
      titleKey: 'pressArticles.articles.0.title',
      dateKey: 'pressArticles.articles.0.date',
      textKey: 'pressArticles.articles.0.text',
      image: `${baseUrl}/images/PressPage/press_articles/article1.webp`,
    },
    {
      id: 2,
      titleKey: 'pressArticles.articles.1.title',
      dateKey: 'pressArticles.articles.1.date',
      textKey: 'pressArticles.articles.1.text',
      image: `${baseUrl}/images/PressPage/press_articles/article2.webp`,
    },
    {
      id: 3,
      titleKey: 'pressArticles.articles.2.title',
      dateKey: 'pressArticles.articles.2.date',
      textKey: 'pressArticles.articles.2.text',
      image: `${baseUrl}/images/PressPage/press_articles/article3.webp`,
    },
    {
      id: 4,
      titleKey: 'pressArticles.articles.3.title',
      dateKey: 'pressArticles.articles.3.date',
      textKey: 'pressArticles.articles.3.text',
      image: `${baseUrl}/images/PressPage/press_articles/article4.webp`,
    },
    {
      id: 5,
      titleKey: 'pressArticles.articles.4.title',
      dateKey: 'pressArticles.articles.4.date',
      textKey: 'pressArticles.articles.4.text',
      image: `${baseUrl}/images/PressPage/press_articles/article5.webp`,
    },
    {
      id: 6,
      titleKey: 'pressArticles.articles.5.title',
      dateKey: 'pressArticles.articles.5.date',
      textKey: 'pressArticles.articles.5.text',
      image: `${baseUrl}/images/PressPage/press_articles/article6.webp`,
    },
  ];

  return (
    <section className="bg-[#2C3654] px-4 py-8 lg:px-6">
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.15,
        }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}>
        <Swiper
          modules={[Pagination]}
          slidesPerView={3}
          slidesPerGroup={1}
          spaceBetween={32}
          grabCursor
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1280: {
              slidesPerView: 3,
            },
          }}>
          {articles.map((article, index) => {
            return (
              <SwiperSlide key={article.id} className="h-auto">
                <motion.div
                  className="flex h-full bg-[#2C3654]"
                  initial={{
                    opacity: 0,
                    y: 24,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}>
                  <article className="flex h-full w-full flex-col bg-[#2C3654] text-white">
                    <div className="flex-1 overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.titleKey}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className="py-6">
                      <div className="flex items-center justify-between">
                        <h3 className="font-sans text-[15px] font-semibold uppercase leading-[18px] tracking-[0.22em] lg:text-[16px] lg:leading-[24px] 2xl:text-[18px] 2xl:leading-[26px]">
                          {t(article.titleKey)}
                        </h3>

                        <AnimatePresence mode="wait" initial={false}>
                          <motion.span
                            key={`${article.id}-date-${i18n.language}`}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{
                              duration: 0.35,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            className="flex min-w-[155px] justify-end font-sans text-[12px] uppercase tracking-[0.12em] text-white/60 2xl:min-w-[180px] 2xl:text-[14px]">
                            {t(article.dateKey)}
                          </motion.span>
                        </AnimatePresence>
                      </div>

                      <div className="mt-6 flex items-start gap-3">
                        <span className="font-serif text-[48px] leading-none text-white">“</span>

                        <AnimatePresence mode="wait" initial={false}>
                          <motion.p
                            key={`${article.id}-text-${i18n.language}`}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{
                              duration: 0.35,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            className="font-serif text-[15px] leading-[18px] lg:text-[16px] lg:leading-[24px] 2xl:text-[18px] 2xl:leading-[26px]">
                            {t(article.textKey)}
                          </motion.p>
                        </AnimatePresence>
                      </div>
                    </div>
                  </article>

                  <div className="absolute right-[-16px] top-0 hidden h-full w-[1px] bg-white xl:block" />
                </motion.div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </motion.div>
    </section>
  );
}
