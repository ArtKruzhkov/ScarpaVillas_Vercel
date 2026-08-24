import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const baseUrl = process.env.PUBLIC_URL;

export function DiscoverExplore() {
  const { t, i18n } = useTranslation();
  const langPrefix = i18n.language === 'it' ? '/it' : '';

  const discoverCards = [
    {
      id: 'wine',
      title: t('discoverExplore.wine.title'),
      description: t('discoverExplore.wine.description'),
      button: t('discoverExplore.wine.button'),
      image: `${baseUrl}/images/DiscoverPage/discover_explore/wine.webp`,
      // href: '/experiences#wine-taste',
      href: '/discover/region#wine',
    },
    {
      id: 'food',
      title: t('discoverExplore.food.title'),
      description: t('discoverExplore.food.description'),
      button: t('discoverExplore.food.button'),
      image: `${baseUrl}/images/DiscoverPage/discover_explore/food.webp`,
      href: '/discover/region#food',
    },
    {
      id: 'nature',
      title: t('discoverExplore.nature.title'),
      description: t('discoverExplore.nature.description'),
      button: t('discoverExplore.nature.button'),
      image: `${baseUrl}/images/DiscoverPage/discover_explore/nature.webp`,
      href: '/discover/region#routes',
    },
    {
      id: 'culture',
      title: t('discoverExplore.culture.title'),
      description: t('discoverExplore.culture.description'),
      button: t('discoverExplore.culture.button'),
      image: `${baseUrl}/images/DiscoverPage/discover_explore/culture.webp`,
      href: '/discover/region#villages',
    },
  ];

  return (
    <section className="bg-[#FFFFFF] pb-4">
      {/* Heading */}
      <div className="bg-[#2C3654] px-6 py-10 lg:py-14">
        <motion.div
          className="mx-auto text-center text-white"
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
              key={`${t('discoverExplore.heading')}-${i18n.language}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}>
              <h2 className="font-serif tracking-[0.08em] max-w-[280px] sm:max-w-none mx-auto text-[22px] leading-[26px] md:text-[32px] md:leading-[36px] xl:text-[38px] xl:leading-[42px] uppercase">
                {t('discoverExplore.heading')}
              </h2>

              <p className="mt-3 lg:mt-6 font-sans text-[13px] leading-[16px] md:text-[14px] md:leading-[20px] lg:text-[18px] lg:leading-[26px]">
                {t('discoverExplore.subtitle')}
              </p>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Cards */}
      <div className="mx-auto max-w-8xl px-4 lg:px-8 pt-10">
        <div className="flex flex-col">
          {discoverCards.map((card, index) => {
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
                    className={`order-2 ${textOrder} mt-4 flex flex-col items-center text-center lg:mt-0 lg:w-[23%] xl:min-w-[440px] lg:items-start lg:text-left lg:mr-auto lg:ml-auto`}>
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
                        className="mt-2 lg:mt-3 max-w-full text-[#2C3654] text-[16px] leading-[24px] lg:text-[18px] lg:leading-[26px] xl:max-w-[406px]"
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
