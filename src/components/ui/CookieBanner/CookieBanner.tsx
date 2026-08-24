// components/ui/CookieBanner/CookieBanner.tsx

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export function CookieBanner() {
  const { t, i18n } = useTranslation();

  const [isVisible, setIsVisible] = useState(true);

  const handleAccept = () => {
    setIsVisible(false);
  };

  const handleReject = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: 20,
          }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="fixed bottom-4 left-4 right-4 z-[9998] mx-auto md:max-w-[440px] lg:max-w-[480px] 2xl:max-w-[600px] bg-white px-5 py-5 text-[#2C3654] shadow-lg md:left-auto md:right-6 md:bottom-6 md:px-6 md:py-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={`cookie-banner-${i18n.language}`}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25 }}>
              <p className="font-sans text-[13px] leading-[20px] md:text-[14px] md:leading-[22px]">
                {t('cookieBanner.text')}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={handleReject}
              className="h-[42px] border border-[#2C3654] px-6 font-sans text-[12px] font-semibold uppercase tracking-[0.16em] transition-colors duration-300 hover:bg-[#2C3654] hover:text-white md:text-[13px]">
              {t('cookieBanner.reject')}
            </button>

            <button
              type="button"
              onClick={handleAccept}
              className="h-[42px] bg-[#2C3654] px-6 font-sans text-[12px] font-semibold uppercase tracking-[0.16em] text-white transition-colors duration-300 hover:bg-[#404B73] md:text-[13px]">
              {t('cookieBanner.accept')}
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
