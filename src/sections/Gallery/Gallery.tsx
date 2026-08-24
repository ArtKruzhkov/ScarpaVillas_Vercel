import { VillaGallery } from './VillaGallery';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './gallery.css';

type Villa = {
  name: string;
  href: string;
  className: string;
  lineHeight: string;
};

const villas: Villa[] = [
  {
    name: 'TETTIMORRA',
    href: '/villas/tettimorra',
    className: 'villa-tettimorra',
    lineHeight: 'h-[150px]',
  },
  {
    name: 'I BRICCHI',
    href: '/villas/bricchi',
    className: 'villa-bricchi',
    lineHeight: 'h-[140px]',
  },
  {
    name: 'LA BOGLIONA',
    href: '/villas/bogliona',
    className: 'villa-bogliona',
    lineHeight: 'h-[150px]',
  },
  {
    name: 'TETTINEIVE',
    href: '/villas/tettineive',
    className: 'villa-tettineive',
    lineHeight: 'h-[140px]',
  },
];

const villaMasks = {
  desktop: {
    TETTIMORRA: {
      topX: 540,
      topY: 380,

      leftX: 380,
      leftY: 710,

      rightX: 930,
      rightY: 610,

      curveY: 900,
    },

    BRICCHI: {
      topX: 820,
      topY: 265,

      leftX: 700,
      leftY: 520,

      rightX: 1020,
      rightY: 460,

      curveY: 680,
    },

    BOGLIONA: {
      topX: 1110,
      topY: 330,

      leftX: 880,
      leftY: 630,

      rightX: 1280,
      rightY: 530,

      curveY: 870,
    },

    TETTINEIVE: {
      topX: 1410,
      topY: 440,

      leftX: 1120,
      leftY: 760,

      rightX: 1625,
      rightY: 720,

      curveY: 920,
    },
  },

  laptop: {
    TETTIMORRA: {
      topX: 520,
      topY: 320,

      leftX: 360,
      leftY: 710,

      rightX: 900,
      rightY: 640,

      curveY: 880,
    },

    BRICCHI: {
      topX: 840,
      topY: 250,

      leftX: 690,
      leftY: 520,

      rightX: 1030,
      rightY: 460,

      curveY: 700,
    },

    BOGLIONA: {
      topX: 1145,
      topY: 320,

      leftX: 870,
      leftY: 610,

      rightX: 1310,
      rightY: 530,

      curveY: 870,
    },

    TETTINEIVE: {
      topX: 1425,
      topY: 410,

      leftX: 1130,
      leftY: 750,

      rightX: 1640,
      rightY: 680,

      curveY: 950,
    },
  },
};

export function Gallery() {
  const { t, i18n } = useTranslation();
  const [activeVilla, setActiveVilla] = useState<string | null>(null);
  const [isLaptop, setIsLaptop] = useState(false);
  const [shouldShowVillaMask, setShouldShowVillaMask] = useState(false);

  const langPrefix = i18n.language === 'en' ? '' : `/${i18n.language}`;

  // useEffect(() => {
  //   const update = () => {
  //     setIsLaptop(window.innerWidth <= 1442);
  //   };

  //   update();

  //   window.addEventListener('resize', update);

  //   return () => window.removeEventListener('resize', update);
  // }, []);

  useEffect(() => {
    const update = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      setIsLaptop(width <= 1442);

      const isDesktop1920 = width >= 1900 && width <= 1920 && height >= 900;

      const isLaptop1140 = width >= 1380 && width <= 1442 && height >= 700 && height <= 880;

      setShouldShowVillaMask(width >= 1024 && (isDesktop1920 || isLaptop1140));
    };

    update();

    window.addEventListener('resize', update);

    return () => window.removeEventListener('resize', update);
  }, []);

  const currentMasks = isLaptop ? villaMasks.laptop : villaMasks.desktop;

  const activeMask =
    activeVilla === 'TETTIMORRA'
      ? currentMasks.TETTIMORRA
      : activeVilla === 'I BRICCHI'
        ? currentMasks.BRICCHI
        : activeVilla === 'LA BOGLIONA'
          ? currentMasks.BOGLIONA
          : activeVilla === 'TETTINEIVE'
            ? currentMasks.TETTINEIVE
            : null;

  return (
    <section id="villas" className="scroll-mt-[86px] relative overflow-hidden bg-[#f5f3ee]">
      <div className="mx-auto w-full max-w-8xl px-0">
        <div className="relative section-height-gallery overflow-hidden">
          {/* IMAGE */}
          <motion.div
            className="absolute inset-0"
            initial={{
              scale: 1.08,
              opacity: 0,
            }}
            whileInView={{
              scale: 1,
              opacity: 1,
            }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}>
            <img
              src={`${process.env.PUBLIC_URL}/images/gallery/gallery-hero.webp`}
              alt="Scarpa Villas"
              className="h-full w-full object-cover"
            />
            <AnimatePresence>
              {activeVilla && shouldShowVillaMask && (
                <motion.svg
                  className="absolute inset-0 w-full h-full pointer-events-none z-10"
                  viewBox="0 0 1920 860"
                  preserveAspectRatio="none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}>
                  <defs>
                    <filter id="blurCircle">
                      <feGaussianBlur stdDeviation="18" />
                    </filter>
                    <mask id="villaMask">
                      <rect width="100%" height="100%" fill="white" />
                      {activeMask && (
                        <path
                          d={`
                            M ${activeMask.topX} ${activeMask.topY}
                            L ${activeMask.leftX} ${activeMask.leftY}
                            Q
                            ${(activeMask.leftX + activeMask.rightX) / 2}
                            ${activeMask.curveY}
                            ${activeMask.rightX}
                            ${activeMask.rightY}Z`}
                          fill="black"
                          filter="url(#blurCircle)"
                        />
                      )}
                    </mask>
                  </defs>

                  <rect width="100%" height="100%" fill="rgba(0,0,0,0.65)" mask="url(#villaMask)" />
                </motion.svg>
              )}
            </AnimatePresence>
          </motion.div>

          {/* TITLE */}
          <motion.div
            className="absolute left-1/2 top-8 sm:top-14 z-20 -translate-x-1/2 text-center w-full px-8 md:w-max md:px-0"
            initial={{
              opacity: 0,
              filter: 'blur(5px)',
            }}
            whileInView={{
              opacity: 1,
              filter: 'blur(0px)',
            }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}>
            <AnimatePresence mode="wait">
              {!activeVilla && (
                <motion.div
                  key={`gallery-title-wrapper-${i18n.language}`}
                  initial={{
                    opacity: 1,
                    y: 0,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -15,
                  }}
                  transition={{
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  }}>
                  <p className="font-serif font-medium text-[24px] sm:text-[30px] lg:text-[36px] leading-[28px] sm:leading-[1.1] tracking-[0.08em] text-[#2C3654] uppercase">
                    {t('gallery.title1')}
                  </p>

                  <h2 className="sm:mt-2 font-serif font-medium text-[24px] sm:text-[30px] lg:text-[36px] leading-[28px] sm:leading-[1.1] tracking-[0.08em] text-[#2C3654] uppercase">
                    {t('gallery.title2')}
                  </h2>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {villas.map((villa, index) => (
            <motion.div
              key={villa.name}
              className={`hidden lg:block absolute z-20 ${villa.className}`}
              initial={{
                opacity: 0,
                filter: 'blur(4px)',
              }}
              whileInView={{
                opacity: 1,
                filter: 'blur(0px)',
              }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.9,
                delay: 0.6 + index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}>
              <motion.div
                animate={{
                  opacity: activeVilla === null ? 1 : activeVilla === villa.name ? 1 : 0,
                  scale: activeVilla === null ? 1 : activeVilla === villa.name ? 1 : 0.9,
                }}
                transition={{
                  duration: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                }}>
                <div className="flex flex-col items-center">
                  <motion.div
                    style={{
                      transformOrigin: 'center center',
                      willChange: 'transform',
                      backfaceVisibility: 'hidden',
                    }}
                    animate={{
                      scale: activeVilla === villa.name ? 1.08 : 1,
                    }}
                    transition={{
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1],
                    }}>
                    <Link
                      to={`${langPrefix}${villa.href}`}
                      className="villa-label"
                      onMouseEnter={() => setActiveVilla(villa.name)}
                      onMouseLeave={() => setActiveVilla(null)}>
                      {villa.name}
                    </Link>
                  </motion.div>

                  <div className={`w-px bg-[#e7e2d7] ${villa.lineHeight}`} />

                  <div className="h-3 w-3 rounded-full bg-[#f4f1ea]" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
      <VillaGallery />
    </section>
  );
}
