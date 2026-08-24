// import React from 'react';
// import { motion } from 'framer-motion';

// export function RegionExperience() {
//   const baseUrl = process.env.PUBLIC_URL;

//   return (
//     <section className="overflow-hidden">
//       {/* TOP */}
//       <div className="relative min-h-[600px] overflow-hidden lg:min-h-[660px]">
//         {/* BACKGROUND */}
//         <motion.img
//           src={`${baseUrl}/images/RegionPage/region_experience/background.png`}
//           alt="Langhe landscape"
//           className="absolute inset-0 h-full w-full object-cover"
//           initial={{ scale: 1.08 }}
//           whileInView={{ scale: 1 }}
//           viewport={{ once: true, amount: 0.25 }}
//           transition={{
//             duration: 1.8,
//             ease: [0.22, 1, 0.36, 1],
//           }}
//         />

//         {/* OVERLAY */}
//         <div className="absolute inset-0 bg-black/10" />

//         {/* CONTENT */}
//         <div className="relative z-10 flex min-h-[600px] flex-col items-center justify-between px-6 py-14 text-white sm:px-10 sm:py-16 lg:min-h-[660px] lg:px-16 lg:py-16">
//           {/* TITLE */}
//           <motion.h2
//             className="font-serif text-[#2C3654] text-center uppercase text-[18px] leading-[22px] tracking-[0.1em] sm:text-[28px] sm:leading-[32px] md:text-[32px] md:leading-[36px] xl:text-[38px] xl:leading-[42px]"
//             initial={{ opacity: 0, y: 25 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.4 }}
//             transition={{
//               duration: 0.9,
//               ease: [0.22, 1, 0.36, 1],
//             }}>
//             The Langhe is not organised around
//             <br className="hidden sm:block" />
//             landmarks, but around rhythm
//           </motion.h2>

//           {/* BOTTOM TEXT */}
//           <motion.div
//             className="max-w-[850px] space-y-5 text-center font-sans text-[13px] leading-[1.4] sm:text-[15px] lg:text-[18px]"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.4 }}
//             transition={{
//               duration: 0.9,
//               delay: 0.15,
//               ease: [0.22, 1, 0.36, 1],
//             }}>
//             <p className="max-w-[800px] mx-auto">
//               Distances are short, but the experience unfolds slowly — through winding roads,
//               changing light, and places that reveal themselves gradually.
//             </p>

//             <p>
//               To understand the Langhe is not to see everything, but to move through it in the right
//               way.
//             </p>
//           </motion.div>
//         </div>
//       </div>

//       {/* BOTTOM */}
//       <div className="bg-[#F0E7DA] py-8">
//         <div className="mx-auto grid max-w-8xl lg:grid-cols-2">
//           {/* LEFT */}
//           <motion.div
//             className="relative min-h-[500px] overflow-hidden sm:min-h-[620px] lg:min-h-[760px]"
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, amount: 0.25 }}
//             transition={{
//               duration: 0.9,
//               ease: [0.22, 1, 0.36, 1],
//             }}>
//             <motion.img
//               src={`${baseUrl}/images/RegionPage/region_experience/experience-region.png`}
//               alt="Langhe vineyards"
//               className="absolute inset-0 h-full w-full object-cover"
//               initial={{ scale: 1.08 }}
//               whileInView={{ scale: 1 }}
//               viewport={{ once: true, amount: 0.25 }}
//               transition={{
//                 duration: 1.8,
//                 ease: [0.22, 1, 0.36, 1],
//               }}
//             />

//             <div className="absolute inset-0 bg-black/10" />

//             <motion.h3
//               className="absolute inset-0 z-10 flex items-center justify-center px-6 text-center font-serif text-[32px] uppercase leading-[1.15] tracking-[0.06em] text-white sm:text-[38px] lg:text-[42px]"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.4 }}
//               transition={{
//                 duration: 0.9,
//                 delay: 0.15,
//                 ease: [0.22, 1, 0.36, 1],
//               }}>
//               How to experience
//               <br />
//               the region
//             </motion.h3>
//           </motion.div>

//           {/* RIGHT */}
//           <motion.div
//             className="flex flex-col justify-center px-6 py-14 sm:px-10 sm:py-16 lg:px-8 lg:py-12"
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, amount: 0.25 }}
//             transition={{
//               duration: 0.9,
//               ease: [0.22, 1, 0.36, 1],
//             }}>
//             {/* TITLE */}
//             <motion.h3
//               className="mb-8 text-center font-sans text-[18px] font-semibold uppercase leading-[1.4] tracking-[0.2em] text-[#2C3654] sm:text-[20px]"
//               initial={{ opacity: 0, y: 15 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.4 }}
//               transition={{
//                 duration: 0.8,
//                 delay: 0.1,
//                 ease: [0.22, 1, 0.36, 1],
//               }}>
//               There is no single
//               <br />
//               way to explore the Langhe
//             </motion.h3>

//             {/* IMAGE */}
//             <div className="overflow-hidden">
//               <motion.img
//                 src={`${baseUrl}/images/RegionPage/region_experience/wine.png`}
//                 alt="Wine experience in the Langhe"
//                 className="h-[280px] w-full object-cover sm:h-[340px] lg:h-[390px]"
//                 initial={{ scale: 1.08 }}
//                 whileInView={{ scale: 1 }}
//                 viewport={{ once: true, amount: 0.3 }}
//                 transition={{
//                   duration: 1.8,
//                   ease: [0.22, 1, 0.36, 1],
//                 }}
//               />
//             </div>

//             {/* TEXT */}
//             <motion.div
//               className="mx-auto text-[#2C3654] mt-8 max-w-[600px] space-y-6 text-center font-sans text-[13px] leading-[1.4] sm:text-[15px] lg:text-[18px]"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.4 }}
//               transition={{
//                 duration: 0.8,
//                 delay: 0.15,
//                 ease: [0.22, 1, 0.36, 1],
//               }}>
//               <p>
//                 Some follow the villages and their history, others the vineyards and their
//                 landscapes, others the traditions of food and local life.
//               </p>

//               <p>
//                 What defines the experience is not the destination,
//                 <br className="hidden sm:block" />
//                 but the way these elements come together.
//               </p>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export function RegionExperience() {
  const { t, i18n } = useTranslation();
  const baseUrl = process.env.PUBLIC_URL;

  return (
    <section className="overflow-hidden">
      {/* TOP */}
      <div className="relative min-h-[540px] overflow-hidden lg:min-h-[660px]">
        {/* BACKGROUND */}
        <motion.img
          src={`${baseUrl}/images/RegionPage/region_experience/background.png`}
          alt="Langhe landscape"
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ scale: 1.08 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 1.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        />

        {/* CONTENT */}
        <div className="relative z-10 flex min-h-[540px] flex-col items-center justify-between px-6 py-10 text-white sm:px-10 sm:py-14 lg:min-h-[660px] lg:px-16 lg:py-16">
          {/* TITLE */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}>
            <AnimatePresence mode="wait">
              <motion.h2
                key={`top-title-${i18n.language}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-center font-serif max-w-[330px] sm:max-w-none text-[18px] leading-[22px] tracking-[0.05em] lg:tracking-[0.1em] text-[#2C3654] uppercase sm:text-[24px] sm:leading-[28px] lg:text-[32px] lg:leading-[36px] xl:text-[38px] xl:leading-[42px]">
                {t('regionExperience.top.titleLine1')}
                <br className="hidden sm:block" />
                {t('regionExperience.top.titleLine2')}
              </motion.h2>
            </AnimatePresence>
          </motion.div>

          {/* BOTTOM TEXT */}
          <motion.div
            className="max-w-[850px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={`top-text-${i18n.language}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="space-y-4 lg:space-y-6 text-center font-sans text-[13px] leading-[1.4] sm:text-[15px] lg:text-[18px]">
                <p className="mx-auto max-w-[800px]">{t('regionExperience.top.paragraph1')}</p>

                <p>{t('regionExperience.top.paragraph2')}</p>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="bg-[#F0E7DA] pt-6 lg:py-8">
        <div className="mx-auto grid max-w-8xl lg:grid-cols-2">
          {/* LEFT */}
          <motion.div
            className="relative min-h-[440px] overflow-hidden sm:min-h-[620px] lg:min-h-[720px] 2xl:min-h-[760px]"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}>
            <motion.img
              src={`${baseUrl}/images/RegionPage/region_experience/experience-region.png`}
              alt="Langhe vineyards"
              className="absolute inset-0 h-full w-full object-cover"
              initial={{ scale: 1.08 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 1.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            />

            {/* LEFT TITLE */}
            <motion.div
              className="absolute inset-0 z-10 flex items-center justify-center px-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.9,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}>
              <AnimatePresence mode="wait">
                <motion.h3
                  key={`left-title-${i18n.language}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{
                    duration: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="text-center font-serif text-[24px] md:text-[32px] xl:text-[38px] leading-[1.15] tracking-[0.06em] text-white uppercase">
                  {t('regionExperience.bottom.leftTitleLine1')}
                  <br />
                  {t('regionExperience.bottom.leftTitleLine2')}
                </motion.h3>
              </AnimatePresence>
            </motion.div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            className="flex flex-col justify-center px-6 py-6 sm:px-10 sm:py-10 lg:px-8 lg:py-12"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}>
            {/* TITLE */}
            <motion.div
              className="mb-4 lg:mb-8"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}>
              <AnimatePresence mode="wait">
                <motion.h3
                  key={`right-title-${i18n.language}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{
                    duration: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="text-center font-sans text-[16px] md:text-[18px] 2xl:text-[20px] font-semibold leading-[1.4] tracking-[0.12em] md:tracking-[0.2em] text-[#2C3654] uppercase">
                  {t('regionExperience.bottom.rightTitleLine1')}
                  <br />
                  {t('regionExperience.bottom.rightTitleLine2')}
                </motion.h3>
              </AnimatePresence>
            </motion.div>

            {/* IMAGE */}
            <div className="overflow-hidden">
              <motion.img
                src={`${baseUrl}/images/RegionPage/region_experience/wine.png`}
                alt="Wine experience in the Langhe"
                className="h-[280px] w-full object-cover sm:h-[340px] lg:h-[360px] 2xl:h-[390px]"
                initial={{ scale: 1.08 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 1.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            </div>

            {/* TEXT */}
            <motion.div
              className="mx-auto mt-4 lg:mt-8 max-w-[600px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={`right-text-${i18n.language}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{
                    duration: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="space-y-3 lg:space-y-6 text-center font-sans text-[13px] leading-[1.4] text-[#2C3654] sm:text-[15px] lg:text-[18px]">
                  <p>{t('regionExperience.bottom.paragraph1')}</p>

                  <p>
                    {t('regionExperience.bottom.paragraph2Line1')}
                    <br className="hidden sm:block" />
                    {t('regionExperience.bottom.paragraph2Line2')}
                  </p>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
