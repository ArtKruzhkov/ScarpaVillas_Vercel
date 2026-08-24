import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const baseUrl = process.env.PUBLIC_URL;

export function DiscoverLinks() {
  const { t, i18n } = useTranslation();

  const langPrefix = i18n.language === 'it' ? '/it' : '';

  const cards = [
    {
      id: 'region',
      title: t('discoverLinks.region.title'),
      description: t('discoverLinks.region.description'),
      button: t('discoverLinks.region.button'),
      image: `${baseUrl}/images/DiscoverPage/discover_links/region.webp`,
      href: '/discover/region',
    },
    {
      id: 'experiences',
      title: t('discoverLinks.experiences.title'),
      description: t('discoverLinks.experiences.description'),
      button: t('discoverLinks.experiences.button'),
      image: `${baseUrl}/images/DiscoverPage/discover_links/experiences.webp`,
      href: '/experiences',
    },
    {
      id: 'journal',
      title: t('discoverLinks.journal.title'),
      description: t('discoverLinks.journal.description'),
      button: t('discoverLinks.journal.button'),
      image: `${baseUrl}/images/DiscoverPage/discover_links/journal.webp`,
      href: '/discover/journal',
    },
  ];

  return (
    <section className="bg-[#2C3654] px-4 py-4 md:px-6 md:py-6 lg:px-8 lg:py-8">
      <div className="mx-auto max-w-8xl">
        <div className="grid grid-cols-1 gap-4 md:gap-5 lg:grid-cols-3 lg:gap-8">
          {cards.map((card, index) => (
            <motion.article
              key={card.id}
              className="relative overflow-hidden"
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
                amount: 0.25,
              }}
              transition={{
                duration: 0.9,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}>
              {/* IMAGE */}
              <img
                src={card.image}
                alt={card.title}
                className="block h-auto max-h-[600px] w-full object-cover md:max-h-[680px] xl:max-h-[800px]"
              />

              {/* CONTENT */}
              <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col px-4 pb-6 text-white sm:px-5 sm:pb-7 2xl:pb-8">
                {/* TITLE */}
                <AnimatePresence mode="wait">
                  <motion.h3
                    key={card.title}
                    className="font-serif text-[28px] leading-none sm:text-[32px] 2xl:text-[38px]"
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
                    key={card.description}
                    className="mt-4 max-w-[502px] font-sans text-[15px] leading-[21px] md:text-[16px] md:leading-[22px] 2xl:text-[18px] 2xl:leading-[26px]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      duration: 0.25,
                    }}>
                    {card.description}
                  </motion.p>
                </AnimatePresence>

                {/* BUTTON */}
                <div className="mt-4 inline-block lg:mt-8">
                  <Link
                    to={`${langPrefix}${card.href}`}
                    className="flex h-[40px] w-fit items-center justify-center border-y border-white font-sans text-[13px] font-semibold uppercase tracking-[0.2em] transition-opacity duration-300 hover:opacity-60 md:h-[50px] 2xl:h-[52px] md:text-[16px] 2xl:text-[18px]">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={card.button}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{
                          duration: 0.25,
                          ease: [0.22, 1, 0.36, 1],
                        }}>
                        {card.button}
                      </motion.span>
                    </AnimatePresence>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
