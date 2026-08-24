import { SubmitEvent, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t, i18n } = useTranslation();

  const [email, setEmail] = useState('');
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [activePolicy, setActivePolicy] = useState<'cookie' | 'privacy' | null>(null);

  const policyPrefix = activePolicy === 'cookie' ? 'cookiePolicyContent' : 'privacyPolicyContent';

  // const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   if (!email.trim() || !privacyAccepted || isSubmitting) {
  //     return;
  //   }

  //   setIsSubmitting(true);

  //   try {
  //     const response = await fetch('https://api.brevo.com/v3/contacts', {
  //       method: 'POST',
  //       headers: {
  //         accept: 'application/json',
  //         'content-type': 'application/json',
  //         'api-key': process.env.REACT_APP_BREVO_API_KEY!,
  //       },
  //       body: JSON.stringify({
  //         email: email.trim(),
  //         attributes: {
  //           LANGUAGE: i18n.language.toUpperCase(),
  //         },
  //         listIds: [2],
  //         updateEnabled: true,
  //       }),
  //     });

  //     if (!response.ok) {
  //       const error = await response.json();
  //       throw new Error(error.message || 'Subscription failed');
  //     }

  //     setEmail('');
  //     setPrivacyAccepted(false);
  //     setIsSubmitted(true);

  //     setTimeout(() => {
  //       setIsSubmitted(false);
  //     }, 3000);

  //     console.log('Successfully subscribed to Brevo');
  //   } catch (error) {
  //     console.error('Brevo subscription error:', error);
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

  const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim() || !privacyAccepted || isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    setEmail('');
    setPrivacyAccepted(false);

    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <footer className="text-white max-w-8xl 2xl:max-w-[1920px] mx-auto">
      {/* Stay Connected */}
      <div>
        {/* Mobile + Tablet */}
        <div className="xl:hidden bg-white px-6 pt-10 pb-10">
          {/* Title */}
          <motion.div
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
              <motion.h3
                key={`footer-title-mobile-${i18n.language}`}
                className="font-serif text-center text-[23px] leading-[33px] md:text-[28px] md:leading-[38px] lg:text-[36px] lg:leading-[46px] text-[#2C3654]"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}>
                {t('footer.title')}
              </motion.h3>
            </AnimatePresence>
          </motion.div>

          {/* Description */}
          <motion.div
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
              <motion.p
                key={`footer-description-mobile-${i18n.language}`}
                className="mt-3 lg:mt-4 text-center font-sans text-[16px] md:text-[18px] lg:text-[20px] leading-[24px] text-[#2C3654]"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}>
                {t('footer.description')}
              </motion.p>
            </AnimatePresence>
          </motion.div>

          {/* Image */}
          <div className="mt-8 overflow-hidden">
            <motion.div
              initial={{
                scale: 1.08,
                opacity: 0,
              }}
              whileInView={{
                scale: 1,
                opacity: 1,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 1.4,
                ease: 'easeOut',
              }}>
              <img
                src={`${process.env.PUBLIC_URL}/images/footer/stay-connected.webp`}
                alt="Scarpa Villas"
                className="w-full object-cover min-h-[400px] max-h-[460px] md:max-h-[540px]"
              />
            </motion.div>
          </div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="mt-9"
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
            <div className="flex flex-col gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('footer.emailPlaceholder')}
                required
                className="h-[44px] md:h-[57px] text-[#2C3654] border-2 border-[#2C3654] text-[15px] md:text-[18px] font-sans bg-transparent px-6 text-center placeholder:text-[#A8ABB8]"
              />

              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="h-[44px] md:h-[57px] bg-[#2C3654] font-sans text-[13px] md:text-[18px] font-bold tracking-[0.18em] uppercase text-white">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={
                      isSubmitting ? 'sending' : isSubmitted ? 'sent' : `default-${i18n.language}`
                    }
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}>
                    {isSubmitting
                      ? t('footer.sending')
                      : isSubmitted
                        ? t('footer.sent')
                        : t('footer.stayInTouch')}
                  </motion.span>
                </AnimatePresence>
              </button>
            </div>

            <label className="mt-3 md:mt-5 flex items-center gap-3 font-sans text-[13px] md:text-[14px] lg:text-[16px] leading-[20px] text-[#2C3654]">
              <input
                type="checkbox"
                checked={privacyAccepted}
                onChange={(e) => setPrivacyAccepted(e.target.checked)}
                required
              />

              <AnimatePresence mode="wait">
                <motion.span
                  key={`footer-privacy-mobile-${i18n.language}`}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25 }}>
                  {t('footer.privacyAgree')}
                </motion.span>
              </AnimatePresence>
            </label>
          </motion.form>
        </div>

        {/* Desktop */}
        <div className="hidden xl:block bg-white px-6 py-16">
          <div className="flex items-center gap-8">
            {/* Image */}
            <div className="w-[45%] overflow-hidden">
              <motion.div
                initial={{
                  scale: 1.08,
                  opacity: 0,
                }}
                whileInView={{
                  scale: 1,
                  opacity: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  duration: 1.4,
                  ease: 'easeOut',
                }}>
                <img
                  src={`${process.env.PUBLIC_URL}/images/footer/stay-connected.webp`}
                  alt="Scarpa Villas"
                  className="w-full max-h-[460px] object-cover"
                />
              </motion.div>
            </div>

            {/* Content */}
            <div className="flex-1">
              {/* Title*/}
              <motion.div
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
                  <motion.h3
                    key={`footer-title-desktop-${i18n.language}`}
                    className="font-serif text-[38px] leading-[50px] text-[#2C3654] mt-[-0.5rem]"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}>
                    {t('footer.title')}
                  </motion.h3>
                </AnimatePresence>
              </motion.div>

              {/* Description */}
              <motion.div
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
                  <motion.p
                    key={`footer-description-desktop-${i18n.language}`}
                    className="mt-5 font-sans text-[18px] leading-[28px] text-[#2C3654]"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}>
                    {t('footer.description')}
                  </motion.p>
                </AnimatePresence>
              </motion.div>

              {/* Form */}
              <motion.form
                onSubmit={handleSubmit}
                className="mt-10"
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
                <div className="flex">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t('footer.emailPlaceholder')}
                    required
                    className="h-[57px] text-[#2C3654] placeholder:text-[#A8ABB8] font-sans text-[18px] flex-1 border-2 border-[#2C3654] px-6 text-center"
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    className="h-[57px] xl:min-w-[330px] bg-[#2C3654] px-10 font-sans text-[18px] font-bold uppercase tracking-[0.18em] text-white transition-opacity duration-300 hover:opacity-80 disabled:opacity-80">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={
                          isSubmitting
                            ? 'sending'
                            : isSubmitted
                              ? 'sent'
                              : `default-${i18n.language}`
                        }
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.2 }}>
                        {isSubmitting
                          ? t('footer.sending')
                          : isSubmitted
                            ? t('footer.sent')
                            : t('footer.stayInTouch')}
                      </motion.span>
                    </AnimatePresence>
                  </button>
                </div>

                <label className="mt-3 flex items-center font-sans gap-2 text-[15px] text-[#2C3654]">
                  <input
                    type="checkbox"
                    checked={privacyAccepted}
                    onChange={(e) => setPrivacyAccepted(e.target.checked)}
                    required
                  />
                  {t('footer.privacyAgree')}
                </label>
              </motion.form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#2C3654] text-white overflow-x-hidden">
        {/* TOP */}
        <div className="relative">
          <div className="mx-auto max-w-8xl px-6 py-10 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] items-start">
              {/* LEFT */}
              <motion.div
                className="flex flex-col items-center"
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
                <img
                  src={`${process.env.PUBLIC_URL}/images/footer/logo_footer.svg`}
                  alt="Scarpa Villas"
                  className="w-[152px] lg:w-[172px]"
                />

                <AnimatePresence mode="wait">
                  <motion.p
                    key={`footer-logo-text-${i18n.language}`}
                    className="mt-4 text-center font-serif text-[15px] sm:text-[17px] xl:text-[18px] xl:leading-[28px]"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25 }}>
                    {t('footer.logoText1')} <em>{t('footer.logoTextItalic')}</em>
                    <br />
                    {t('footer.logoText2')}
                  </motion.p>
                </AnimatePresence>
              </motion.div>

              {/* CENTER */}
              <div className="mr-0 lg:mr-[40%] text-center lg:text-left">
                <motion.div
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
                    <motion.h3
                      key={`footer-contact-${i18n.language}`}
                      className="font-serif mt-10 lg:mt-0 text-[30px] xl:text-[36px] leading-none"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.25 }}>
                      {t('footer.contact')}
                    </motion.h3>
                  </AnimatePresence>
                </motion.div>

                <motion.div
                  className="mt-3 xl:mt-4 max-w-[320px] text-[13px] xl:text-[15px] mx-auto lg:mx-0 lg:max-w-none space-y-0 font-sans text-center lg:text-left"
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
                    delay: 0.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}>
                  <div className="border-b-2 border-white/30 py-3">CASCINA MONVIGLIERO 28,</div>

                  <div className="border-b-2 border-white/30 py-3">12060 VERDUNO (CN) ITALY</div>

                  <a
                    href="tel:+393484765176"
                    className="block border-b-2 border-white/30 py-3 transition-opacity duration-300 hover:opacity-70">
                    +39 348 476 5176
                  </a>

                  <a
                    href="mailto:info@scarpa-villas.com"
                    className="block pt-3 transition-opacity duration-300 hover:opacity-70">
                    INFO@SCARPA-VILLAS.COM
                  </a>
                </motion.div>
              </div>
            </div>
          </div>

          {/* SOCIAL BAR */}
          <motion.div
            className="hidden lg:flex absolute right-0 top-[19%] bg-white w-[65px] h-[200px] flex-col justify-evenly items-center"
            initial={{
              opacity: 0,
              x: 20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}>
            <a
              href="https://www.instagram.com/scarpavillas/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity duration-300 hover:opacity-50">
              <svg
                width="38"
                height="38"
                viewBox="0 0 43 43"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11.6064 21.556C11.6416 24.2387 12.7206 26.7389 14.6528 28.614C16.585 30.4892 19.1378 31.4934 21.8176 31.4583C27.2969 31.3881 31.7608 26.8864 31.7608 21.4225C31.7467 18.7327 30.6748 16.1974 28.7426 14.3012C26.8315 12.4191 24.2999 11.3867 21.6131 11.3867H21.5496C18.8558 11.4218 16.3382 12.4963 14.4624 14.4206C12.5866 16.3379 11.5711 18.8732 11.6064 21.556ZM21.7612 13.3251C26.1686 13.3883 29.751 17.0121 29.751 21.4014C29.7157 25.868 26.0558 29.4778 21.5849 29.4778H21.5214C17.0505 29.4076 13.4681 25.7346 13.5315 21.2821C13.5668 19.126 14.4412 17.1104 15.9927 15.6075C17.5441 14.1046 19.6033 13.304 21.7612 13.3251Z"
                  fill="#2C3654"
                  stroke="#2C3654"
                  strokeWidth="2"
                />
                <path
                  d="M1 12.307V30.693C1.00705 36.9224 6.09856 41.993 12.3536 42H30.6464C36.9014 42 41.9929 36.9224 42 30.693V12.307C41.9859 6.08462 36.8944 1.01405 30.6464 1H12.3536C6.09856 1 1 6.0776 1 12.307ZM12.3536 2.98047H30.6464C35.8013 2.9875 40.0043 7.17318 40.0114 12.307V30.693C39.9972 35.8268 35.8013 40.0055 30.6464 40.0125H12.3536C7.19866 40.0125 2.9957 35.8268 2.98865 30.693V12.307C2.9957 7.17318 7.19866 2.9875 12.3536 2.98047Z"
                  fill="#2C3654"
                  stroke="#2C3654"
                  strokeWidth="2"
                />
                <path
                  d="M34.582 9.87625C34.582 8.99838 33.8698 8.28906 32.9883 8.28906C32.1068 8.28906 31.3945 8.99838 31.3945 9.87625C31.3945 10.7541 32.1068 11.4634 32.9883 11.4634C33.8698 11.4634 34.582 10.7541 34.582 9.87625Z"
                  fill="#2C3654"
                  stroke="#2C3654"
                  strokeWidth="2"
                />
              </svg>
            </a>

            <a
              href="https://www.facebook.com/ScarpaVillas"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity duration-300 hover:opacity-50">
              <svg
                width="16"
                height="38"
                viewBox="0 0 19 43"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6.23185 2.11186C7.82243 0.62481 10.084 0.0749771 12.2214 0H19V7.19156H14.6508C13.6753 7.14157 12.8054 7.79762 12.5818 8.74733V13.5584H19C18.8447 15.8764 18.5526 18.1882 18.2171 20.4813H12.5445V41H4.11315C4.06344 34.1271 4.11315 27.3167 4.11315 20.475H0V13.6021H4.11315C4.15042 11.3715 4.06965 9.12847 4.15042 6.8979C4.23741 5.09845 4.97678 3.39896 6.23185 2.11186Z"
                  fill="#2C3654"
                />
              </svg>
            </a>
          </motion.div>

          <motion.div
            className="flex lg:hidden justify-center gap-8 mb-10"
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
            <a
              href="https://www.instagram.com/scarpavillas/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity duration-300 hover:opacity-50">
              <svg
                width="38"
                height="38"
                viewBox="0 0 43 43"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11.6064 21.556C11.6416 24.2387 12.7206 26.7389 14.6528 28.614C16.585 30.4892 19.1378 31.4934 21.8176 31.4583C27.2969 31.3881 31.7608 26.8864 31.7608 21.4225C31.7467 18.7327 30.6748 16.1974 28.7426 14.3012C26.8315 12.4191 24.2999 11.3867 21.6131 11.3867H21.5496C18.8558 11.4218 16.3382 12.4963 14.4624 14.4206C12.5866 16.3379 11.5711 18.8732 11.6064 21.556ZM21.7612 13.3251C26.1686 13.3883 29.751 17.0121 29.751 21.4014C29.7157 25.868 26.0558 29.4778 21.5849 29.4778H21.5214C17.0505 29.4076 13.4681 25.7346 13.5315 21.2821C13.5668 19.126 14.4412 17.1104 15.9927 15.6075C17.5441 14.1046 19.6033 13.304 21.7612 13.3251Z"
                  fill="white"
                  stroke="white"
                  strokeWidth="2"
                />
                <path
                  d="M1 12.307V30.693C1.00705 36.9224 6.09856 41.993 12.3536 42H30.6464C36.9014 42 41.9929 36.9224 42 30.693V12.307C41.9859 6.08462 36.8944 1.01405 30.6464 1H12.3536C6.09856 1 1 6.0776 1 12.307ZM12.3536 2.98047H30.6464C35.8013 2.9875 40.0043 7.17318 40.0114 12.307V30.693C39.9972 35.8268 35.8013 40.0055 30.6464 40.0125H12.3536C7.19866 40.0125 2.9957 35.8268 2.98865 30.693V12.307C2.9957 7.17318 7.19866 2.9875 12.3536 2.98047Z"
                  fill="white"
                  stroke="white"
                  strokeWidth="2"
                />
                <path
                  d="M34.582 9.87625C34.582 8.99838 33.8698 8.28906 32.9883 8.28906C32.1068 8.28906 31.3945 8.99838 31.3945 9.87625C31.3945 10.7541 32.1068 11.4634 32.9883 11.4634C33.8698 11.4634 34.582 10.7541 34.582 9.87625Z"
                  fill="white"
                  stroke="white"
                  strokeWidth="2"
                />
              </svg>
            </a>

            <a
              href="https://www.facebook.com/ScarpaVillas"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity duration-300 hover:opacity-50">
              <svg
                width="16"
                height="38"
                viewBox="0 0 19 43"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6.23185 2.11186C7.82243 0.62481 10.084 0.0749771 12.2214 0H19V7.19156H14.6508C13.6753 7.14157 12.8054 7.79762 12.5818 8.74733V13.5584H19C18.8447 15.8764 18.5526 18.1882 18.2171 20.4813H12.5445V41H4.11315C4.06344 34.1271 4.11315 27.3167 4.11315 20.475H0V13.6021H4.11315C4.15042 11.3715 4.06965 9.12847 4.15042 6.8979C4.23741 5.09845 4.97678 3.39896 6.23185 2.11186Z"
                  fill="white"
                />
              </svg>
            </a>
          </motion.div>
        </div>

        {/* BOTTOM */}
        <div className="bg-[#E8E1D4]">
          <div className="mx-auto text-[13px] xl:text-[14px] font-sans max-w-8xl px-4 py-3 flex flex-col items-center gap-2 text-center lg:flex-row lg:justify-between">
            <p className="text-[#8B8E97]">Antica Casa Vinicola Scarpa - P.IVA 00070140058</p>

            <AnimatePresence mode="wait">
              <motion.div
                key={`footer-policies-${i18n.language}`}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}
                className="flex gap-2 text-[#8B8E97]">
                {/* <a href="/" className="transition-opacity duration-300 hover:opacity-60">
                  {t('footer.cookiePolicy')}
                </a>
                <span>|</span>
                <a href="/" className="transition-opacity duration-300 hover:opacity-60">
                  {t('footer.privacyPolicy')}
                </a> */}
                <button
                  type="button"
                  onClick={() => setActivePolicy('cookie')}
                  className="transition-opacity duration-300 hover:opacity-60">
                  {t('footer.cookiePolicy')}
                </button>

                <span>|</span>

                <button
                  type="button"
                  onClick={() => setActivePolicy('privacy')}
                  className="transition-opacity duration-300 hover:opacity-60">
                  {t('footer.privacyPolicy')}
                </button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* POLICY PANEL */}
      <AnimatePresence>
        {activePolicy && (
          <motion.div
            key="policy-panel"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="fixed inset-x-0 bottom-0 z-[100] section-height bg-white text-[#2C3654]">
            {/* Close */}
            <button
              type="button"
              onClick={() => setActivePolicy(null)}
              aria-label="Close"
              className="absolute right-6 top-6 z-20 transition-opacity duration-300 hover:opacity-50 lg:right-12 lg:top-10">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round">
                <path d="M6 6L18 18" />
                <path d="M18 6L6 18" />
              </svg>
            </button>

            {/* Scrollable content */}
            <div className="mx-auto h-full max-w-8xl overflow-y-auto px-4 py-8 lg:px-8 lg:py-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activePolicy}-${i18n.language}`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="">
                  {/* Title */}
                  <h2 className="pr-14 font-serif text-[30px] lg:text-[38px]">
                    {t(`${policyPrefix}.title`)}
                  </h2>

                  {/* Last updated */}
                  <p className="mt-2 font-sans text-[12px] text-[#8B8E97] lg:text-[14px]">
                    {t(`${policyPrefix}.lastUpdated`)}
                  </p>

                  {/* PRIVACY INTRO */}
                  {activePolicy === 'privacy' && (
                    <p className="mt-5 font-sans text-[14px] leading-[1.5] lg:text-[16px] 2xl:text-[18px]">
                      {t('privacyPolicyContent.intro')}
                    </p>
                  )}

                  {/* COOKIE POLICY */}
                  {activePolicy === 'cookie' && (
                    <div className="mt-6 space-y-6 font-sans text-[14px] leading-[1.5] lg:text-[16px] 2xl:text-[18px]">
                      <div>
                        <h3 className="font-semibold">
                          {t('cookiePolicyContent.cookiesWeUseTitle')}
                        </h3>
                        <p className="mt-2">{t('cookiePolicyContent.cookiesWeUseText')}</p>
                      </div>

                      <div>
                        <h3 className="font-semibold">{t('cookiePolicyContent.technicalTitle')}</h3>
                        <p className="mt-2">{t('cookiePolicyContent.technicalText')}</p>
                      </div>

                      <div>
                        <h3 className="font-semibold">
                          {t('cookiePolicyContent.thirdPartyTitle')}
                        </h3>
                        <p className="mt-2">{t('cookiePolicyContent.thirdPartyText')}</p>
                      </div>

                      <div>
                        <h3 className="font-semibold">{t('cookiePolicyContent.manageTitle')}</h3>
                        <p className="mt-2">{t('cookiePolicyContent.manageText')}</p>
                      </div>

                      <div>
                        <h3 className="font-semibold">{t('cookiePolicyContent.contactTitle')}</h3>
                        <p className="mt-2">
                          {t('cookiePolicyContent.contactText')}{' '}
                          <a
                            href={`mailto:${t('cookiePolicyContent.contactEmail')}`}
                            className="underline underline-offset-2 transition-opacity duration-300 hover:opacity-60">
                            {t('cookiePolicyContent.contactEmail')}
                          </a>
                          .
                        </p>
                      </div>
                    </div>
                  )}

                  {/* PRIVACY POLICY */}
                  {activePolicy === 'privacy' && (
                    <div className="mt-6 space-y-6 font-sans text-[14px] leading-[1.5] lg:text-[16px] 2xl:text-[18px]">
                      <div>
                        <h3 className="font-semibold">{t('privacyPolicyContent.dataTitle')}</h3>
                        <p className="mt-2">{t('privacyPolicyContent.dataText')}</p>
                      </div>

                      <div>
                        <h3 className="font-semibold">{t('privacyPolicyContent.purposeTitle')}</h3>
                        <p className="mt-2">{t('privacyPolicyContent.purposeText')}</p>
                      </div>

                      <div>
                        <h3 className="font-semibold">{t('privacyPolicyContent.formsTitle')}</h3>
                        <p className="mt-2">{t('privacyPolicyContent.formsText')}</p>
                      </div>

                      <div>
                        <h3 className="font-semibold">{t('privacyPolicyContent.servicesTitle')}</h3>
                        <p className="mt-2">{t('privacyPolicyContent.servicesText')}</p>
                      </div>

                      <div>
                        <h3 className="font-semibold">
                          {t('privacyPolicyContent.retentionTitle')}
                        </h3>
                        <p className="mt-2">{t('privacyPolicyContent.retentionText')}</p>
                      </div>

                      <div>
                        <h3 className="font-semibold">{t('privacyPolicyContent.rightsTitle')}</h3>
                        <p className="mt-2">{t('privacyPolicyContent.rightsText')}</p>
                      </div>

                      <div>
                        <h3 className="font-semibold">{t('privacyPolicyContent.securityTitle')}</h3>
                        <p className="mt-2">{t('privacyPolicyContent.securityText')}</p>
                      </div>

                      <div>
                        <h3 className="font-semibold">
                          {t('privacyPolicyContent.thirdPartyTitle')}
                        </h3>
                        <p className="mt-2">{t('privacyPolicyContent.thirdPartyText')}</p>
                      </div>

                      <div>
                        <h3 className="font-semibold">{t('privacyPolicyContent.changesTitle')}</h3>
                        <p className="mt-2">{t('privacyPolicyContent.changesText')}</p>
                      </div>

                      <div>
                        <h3 className="font-semibold">{t('privacyPolicyContent.contactTitle')}</h3>
                        <p className="mt-2">
                          {t('privacyPolicyContent.contactText')}{' '}
                          <a
                            href={`mailto:${t('privacyPolicyContent.contactEmail')}`}
                            className="underline underline-offset-2 transition-opacity duration-300 hover:opacity-60">
                            {t('privacyPolicyContent.contactEmail')}
                          </a>
                          .
                        </p>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
}
