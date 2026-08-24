import { useTranslation, Trans } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const baseUrl = process.env.PUBLIC_URL;

export function StoryChapters() {
  const { t, i18n } = useTranslation();
  const langPrefix = i18n.language === 'it' ? '/it' : '';

  const storyCards = [
    {
      id: 'origins',
      title: t('storyChapters.origins.title'),
      description: t('storyChapters.origins.description'),
      button: t('storyChapters.origins.button'),
      image: `${baseUrl}/images/StoryPage/story_chapters/origins.webp`,
      href: '/story/origins',
    },
    {
      id: 'winery',
      title: t('storyChapters.winery.title'),
      description: t('storyChapters.winery.description'),
      button: t('storyChapters.winery.button'),
      image: `${baseUrl}/images/StoryPage/story_chapters/winery.webp`,
      href: '/story/scarpa-winery',
    },
    {
      id: 'people',
      title: t('storyChapters.people.title'),
      description: t('storyChapters.people.description'),
      button: t('storyChapters.people.button'),
      image: `${baseUrl}/images/StoryPage/story_chapters/people.webp`,
      href: '/story/people',
    },
    {
      id: 'press',
      title: t('storyChapters.press.title'),
      description: t('storyChapters.press.description'),
      button: t('storyChapters.press.button'),
      image: `${baseUrl}/images/StoryPage/story_chapters/press.webp`,
      href: '/story/press',
    },
  ];

  return (
    <section className="bg-[#FFFFFF] pt-10 lg:pt-20 pb-4">
      <div className="mx-auto max-w-8xl px-8">
        {/* Heading */}
        <motion.div
          className="mx-auto mb-10 lg:mb-20 md:max-w-[704px] lg:max-w-[580px] xl:max-w-[932px] text-center"
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.45,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={t('storyChapters.heading')}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}>
              <h2 className="font-serif text-[21px] leading-[25px] sm:text-[27px] sm:leading-[32px] md:text-[28px] md:leading-[32px] xl:text-[32px] xl:leading-[38px] text-[#2C3654]">
                <Trans
                  i18nKey="storyChapters.heading"
                  components={{
                    italic1: <span className="italic" />,
                    italic2: <span className="italic" />,
                  }}
                />
              </h2>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Cards */}
        <div className="flex flex-col">
          {storyCards.map((card, index) => {
            const textOrder = index % 2 === 0 ? 'lg:order-1' : 'lg:order-2';
            const imageOrder = index % 2 === 0 ? 'lg:order-2' : 'lg:order-1';

            return (
              <motion.article
                key={card.id}
                className="border-t-[2px] border-[#2C3654] py-6 font-sans"
                initial={{
                  opacity: 0,
                  y: 45,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  {/* TEXT */}
                  <div
                    className={`order-2 ${textOrder} mt-4 flex flex-col items-center text-center lg:mt-0 lg:w-[23%] xl:min-w-[422px] lg:items-start lg:text-left lg:mr-auto lg:ml-auto`}>
                    {/* TITLE */}
                    <AnimatePresence mode="wait">
                      <motion.h3
                        key={`${card.title}-${i18n.language}`}
                        className="uppercase font-semibold tracking-[0.18em] text-[#2C3654] text-[16px] md:text-[18px] xl:text-[20px]"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{
                          duration: 0.35,
                          ease: [0.22, 1, 0.36, 1],
                        }}>
                        {card.title}
                      </motion.h3>
                    </AnimatePresence>

                    {/* DESCRIPTION */}
                    <AnimatePresence mode="wait">
                      <motion.p
                        key={`${card.description}-${i18n.language}`}
                        className="mt-2 lg:mt-3 max-w-full text-[#2C3654] text-[16px] leading-[24px] lg:text-[18px] lg:leading-[28px]"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{
                          duration: 0.35,
                          ease: [0.22, 1, 0.36, 1],
                        }}>
                        {card.description}
                      </motion.p>
                    </AnimatePresence>

                    {/* BUTTON */}
                    <Link
                      to={`${langPrefix}${card.href}`}
                      className="mt-8 flex h-[44px] w-full max-w-[400px] items-center justify-center border border-[#2C3654] px-8 py-[0.7rem] md:h-[57px] md:py-4 text-[13px] md:text-[16px] xl:text-[18px] font-bold uppercase tracking-[0.18em] text-[#2C3654] transition-colors duration-300 hover:bg-[#2C3654] hover:text-white">
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={`${card.button}-${i18n.language}`}
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          transition={{
                            duration: 0.35,
                            ease: [0.22, 1, 0.36, 1],
                          }}>
                          {card.button}
                        </motion.span>
                      </AnimatePresence>
                    </Link>
                  </div>

                  {/* IMAGE */}
                  <div className={`order-1 ${imageOrder} w-full lg:w-[62%]`}>
                    <img
                      src={card.image}
                      alt={card.title}
                      className="h-[260px] w-full object-cover sm:h-[380px] lg:h-[425px] xl:h-[540px] 2xl:h-[620px]"
                    />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
