import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { pressArticles } from '../../../data/pressArticles';

import 'swiper/css';
import 'swiper/css/pagination';
import './pressArticles.css';

export function PressArticles() {
  const { i18n } = useTranslation();

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
          {pressArticles.map((article, index) => {
            const title = i18n.language === 'it' ? article.title_ital : article.title;

            const date = i18n.language === 'it' ? article.date_ital : article.date;

            const text = i18n.language === 'it' ? article.text_ital : article.text;

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
                    <div className="aspect-[1.1] overflow-hidden">
                      <img src={article.image} alt={title} className="h-full w-full object-cover" />
                    </div>

                    <div className="py-6">
                      <div className="flex items-center justify-between">
                        <AnimatePresence mode="wait" initial={false}>
                          <motion.h3
                            key={
                              article.title === article.title_ital
                                ? `${article.id}-title`
                                : `${article.id}-title-${i18n.language}`
                            }
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{
                              duration: 0.35,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            className="font-sans text-[15px] font-semibold uppercase leading-[18px] tracking-[0.22em] lg:text-[16px] lg:leading-[24px] 2xl:text-[18px] 2xl:leading-[26px]">
                            {title}
                          </motion.h3>
                        </AnimatePresence>

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
                            {date}
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
                            {text}
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
