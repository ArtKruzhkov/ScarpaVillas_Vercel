import React from 'react';
import { Container } from '../../components/layout/Container';
import { LinkButton } from '../../components/ui/LinkButton';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css';

type NavItem = { id: string; label: string; href: string; isRoute?: boolean; routeId?: string };

export function Navbar() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState<string | null>(null);
  const location = useLocation();
  const langPrefix = i18n.language === 'en' ? '' : `/${i18n.language}`;

  const [mobileVillasOpen, setMobileVillasOpen] = React.useState(false);
  const [mobileExperiencesOpen, setMobileExperiencesOpen] = React.useState(false);
  const [mobileStoryOpen, setMobileStoryOpen] = React.useState(false);
  const [mobileDiscoverOpen, setMobileDiscoverOpen] = React.useState(false);

  type DesktopDropdown = 'villas' | 'story' | 'experiences' | 'discover' | null;

  const [openDropdown, setOpenDropdown] = React.useState<DesktopDropdown>(null);

  const closeTimeout = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleDropdownOpen = (dropdown: Exclude<DesktopDropdown, null>) => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }

    setOpenDropdown(dropdown);
  };

  const handleDropdownClose = () => {
    closeTimeout.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 400);
  };

  const homeUrl = i18n.language === 'en' ? '/' : `/${i18n.language}`;

  const storyUrl = i18n.language === 'en' ? '/story' : `/${i18n.language}/story`;
  const villasUrl = i18n.language === 'en' ? '/villas' : `/${i18n.language}/villas`;
  const discoverUrl = i18n.language === 'en' ? '/discover' : `/${i18n.language}/discover`;
  const experiencesUrl = i18n.language === 'en' ? '/experiences' : `/${i18n.language}/experiences`;
  const borgoUrl = i18n.language === 'en' ? '/borgo' : `/${i18n.language}/borgo`;
  const staysUrl = i18n.language === 'en' ? '/stays' : `/${i18n.language}/stays`;

  const nav: NavItem[] = [
    { id: 'villas', label: t('nav.villas'), href: villasUrl, isRoute: true, routeId: 'villas' },
    { id: 'borgo', label: t('nav.borgo'), href: borgoUrl, isRoute: true, routeId: 'borgo' },
    {
      id: 'experiences',
      label: t('nav.experiences'),
      href: experiencesUrl,
      isRoute: true,
      routeId: 'experiences',
    },
    { id: 'story', label: t('nav.story'), href: storyUrl, isRoute: true, routeId: 'story' },
    { id: 'stays', label: t('nav.stays'), href: staysUrl, isRoute: true, routeId: 'stays' },
    {
      id: 'discover',
      label: t('nav.discover'),
      href: discoverUrl,
      isRoute: true,
      routeId: 'discover',
    },
  ];

  const villasItem = nav.find((item) => item.id === 'villas');
  const experiencesItem = nav.find((item) => item.id === 'experiences');
  const storyItem = nav.find((item) => item.id === 'story');
  const discoverItem = nav.find((item) => item.id === 'discover');
  const borgoItem = nav.find((item) => item.id === 'borgo');
  const staysItem = nav.find((item) => item.id === 'stays');

  const isVillasActiveRoute =
    villasItem?.routeId && location.pathname.includes(`/${villasItem.routeId}`);

  const isExperiencesActiveRoute =
    experiencesItem?.routeId && location.pathname.includes(`/${experiencesItem.routeId}`);

  const isStoryActiveRoute =
    storyItem?.routeId && location.pathname.includes(`/${storyItem.routeId}`);

  const isDiscoverActiveRoute =
    discoverItem?.routeId && location.pathname.includes(`/${discoverItem.routeId}`);

  const isBorgoActiveRoute =
    borgoItem?.routeId && location.pathname.includes(`/${borgoItem.routeId}`);

  const isStaysActiveRoute =
    staysItem?.routeId && location.pathname.includes(`/${staysItem.routeId}`);

  const closeMobileDropdowns = () => {
    setMobileVillasOpen(false);
    setMobileExperiencesOpen(false);
    setMobileStoryOpen(false);
    setMobileDiscoverOpen(false);
  };

  const villas = [
    {
      id: 'tettineive',
      name: 'Tettineive',
      image: `${process.env.PUBLIC_URL}/images/nav/Tettineive.png`,
      href: '/villas/tettineive',
    },
    {
      id: 'bogliona',
      name: 'Bogliona',
      image: `${process.env.PUBLIC_URL}/images/nav/Bogliona.png`,
      href: '/villas/bogliona',
    },
    {
      id: 'bricchi',
      name: 'Bricchi',
      image: `${process.env.PUBLIC_URL}/images/nav/Bricchi.png`,
      href: '/villas/bricchi',
    },
    {
      id: 'tettimorra',
      name: 'Tettimorra',
      image: `${process.env.PUBLIC_URL}/images/nav/Tettimorra.png`,
      href: '/villas/tettimorra',
    },
  ];

  const storyLinks = [
    {
      id: 'origins',
      name: t('navDropdown.story.origins'),
      image: `${process.env.PUBLIC_URL}/images/nav/origins.png`,
      href: '/story/origins',
    },
    {
      id: 'scarpa-winery',
      name: t('navDropdown.story.scarpaWinery'),
      image: `${process.env.PUBLIC_URL}/images/nav/scarpawinery.png`,
      href: '/story/scarpa-winery',
    },
    {
      id: 'people',
      name: t('navDropdown.story.people'),
      image: `${process.env.PUBLIC_URL}/images/nav/people.png`,
      href: '/story/people',
    },
    {
      id: 'press',
      name: t('navDropdown.story.press'),
      image: `${process.env.PUBLIC_URL}/images/nav/press.png`,
      href: '/story/press',
    },
  ];

  const discoverLinks = [
    {
      id: 'region',
      name: t('navDropdown.discover.region'),
      image: `${process.env.PUBLIC_URL}/images/nav/theRegion.png`,
      href: '/discover/region',
    },
    {
      id: 'journal',
      name: t('navDropdown.discover.journal'),
      image: `${process.env.PUBLIC_URL}/images/nav/journal.png`,
      href: '/discover/journal',
    },
  ];

  const experiencesLinks = [
    {
      id: 'wine-taste',
      name: t('navDropdown.experiences.wineTaste'),
      nameMob: t('navDropdown.experiences.wine'),
      image: `${process.env.PUBLIC_URL}/images/nav/wineTaste.png`,
      href: `${experiencesUrl}#wine-taste`,
    },
    {
      id: 'culture-discovery',
      name: t('navDropdown.experiences.cultureDiscovery'),
      nameMob: t('navDropdown.experiences.culture'),
      image: `${process.env.PUBLIC_URL}/images/nav/cultureDiscovery.png`,
      href: `${experiencesUrl}#culture-discovery`,
    },
    {
      id: 'nature-movement',
      name: t('navDropdown.experiences.natureMovement'),
      nameMob: t('navDropdown.experiences.nature'),
      image: `${process.env.PUBLIC_URL}/images/nav/natureMovement.png`,
      href: `${experiencesUrl}#nature-movement`,
    },
  ];

  return (
    <header className="sticky top-0 z-[200] relative bg-white backdrop-blur">
      <Container className="py-4 2xl:max-w-[1920px] border-b border-[#2c3654]/70">
        {/* Desktop */}
        <div className="hidden items-center justify-between px-6 lg:grid lg:grid-cols-[1fr_auto_1fr]">
          {/* LEFT NAV */}
          <nav className="hidden items-center justify-between lg:flex" aria-label="Primary Left">
            {nav.slice(0, 4).map((item) => {
              const sectionId = item.href.replace('#', '');

              const label = (
                <AnimatePresence mode="wait">
                  <motion.span
                    key={item.label}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}>
                    {item.label}
                  </motion.span>
                </AnimatePresence>
              );

              /* VILLAS WITH DROPDOWN */
              if (item.id === 'villas') {
                const isActiveRoute =
                  item.routeId && location.pathname.includes(`/${item.routeId}`);

                const isVillasDropdownOpen = openDropdown === 'villas';

                return (
                  <div
                    key={item.id}
                    onMouseEnter={() => handleDropdownOpen('villas')}
                    onMouseLeave={handleDropdownClose}>
                    {/* MAIN VILLAS LINK */}
                    <Link
                      to={item.href}
                      onClick={() => setOpenDropdown(null)}
                      className={`nav-link flex items-center gap-2 ${
                        isActiveRoute || isVillasDropdownOpen ? 'active' : ''
                      }`}>
                      {label}

                      <svg
                        width="15"
                        height="9"
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`transition-transform duration-300 ${
                          isVillasDropdownOpen ? 'rotate-180' : 'rotate-0'
                        }`}>
                        <path
                          d="M1 1L5 5L9 1"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>

                    {/* VILLAS DROPDOWN */}
                    <div
                      onMouseEnter={() => handleDropdownOpen('villas')}
                      onMouseLeave={handleDropdownClose}
                      className={`absolute left-0 top-full w-full border-t border-[#2C3654]/10 bg-white shadow-[0_15px_30px_rgba(44,54,84,0.12)] transition-all duration-300 ${
                        isVillasDropdownOpen
                          ? 'visible translate-y-0 opacity-100 pointer-events-auto'
                          : 'invisible -translate-y-2 opacity-0 pointer-events-none'
                      }`}>
                      <div className="mx-auto max-w-[1920px] px-6 py-8">
                        <div className="mx-auto grid max-w-[1550px] grid-cols-4 gap-5">
                          {villas.map((villa) => {
                            const isActiveVilla =
                              location.pathname === villa.href ||
                              location.pathname.endsWith(villa.href);
                            return (
                              <Link
                                key={villa.id}
                                to={`${langPrefix}${villa.href}`}
                                onClick={() => setOpenDropdown(null)}
                                className={`group/villa relative block overflow-hidden border-[4px] transition-colors ${
                                  isActiveVilla ? 'border-[#C09A60]' : 'border-transparent'
                                }`}>
                                <div className="relative aspect-[1.6/1] overflow-hidden">
                                  <img
                                    src={villa.image}
                                    alt={villa.name}
                                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover/villa:scale-105"
                                  />

                                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />

                                  <span className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap font-serif text-[24px] text-white">
                                    {villa.name}
                                  </span>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              /* STORY WITH DROPDOWN */
              if (item.id === 'story') {
                const isActiveRoute =
                  item.routeId && location.pathname.includes(`/${item.routeId}`);

                const isStoryDropdownOpen = openDropdown === 'story';

                return (
                  <div
                    key={item.id}
                    onMouseEnter={() => handleDropdownOpen('story')}
                    onMouseLeave={handleDropdownClose}>
                    {/* MAIN STORY LINK */}
                    <Link
                      to={item.href}
                      onClick={() => setOpenDropdown(null)}
                      className={`nav-link flex items-center gap-2 ${
                        isActiveRoute || isStoryDropdownOpen ? 'active' : ''
                      }`}>
                      {label}

                      <svg
                        width="15"
                        height="9"
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`transition-transform duration-300 ${
                          isStoryDropdownOpen ? 'rotate-180' : 'rotate-0'
                        }`}>
                        <path
                          d="M1 1L5 5L9 1"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>

                    {/* STORY DROPDOWN */}
                    <div
                      onMouseEnter={() => handleDropdownOpen('story')}
                      onMouseLeave={handleDropdownClose}
                      className={`absolute left-0 top-full w-full border-t border-[#2C3654]/10 bg-white shadow-[0_15px_30px_rgba(44,54,84,0.12)] transition-all duration-300 ${
                        isStoryDropdownOpen
                          ? 'visible translate-y-0 opacity-100 pointer-events-auto'
                          : 'invisible -translate-y-2 opacity-0 pointer-events-none'
                      }`}>
                      <div className="mx-auto max-w-[1920px] px-6 py-8">
                        <div className="mx-auto grid max-w-[1550px] grid-cols-4 gap-5">
                          {storyLinks.map((storyLink) => {
                            const isActiveStory =
                              location.pathname === storyLink.href ||
                              location.pathname.endsWith(storyLink.href);
                            return (
                              <Link
                                key={storyLink.id}
                                to={`${langPrefix}${storyLink.href}`}
                                onClick={() => setOpenDropdown(null)}
                                className={`group/story relative block overflow-hidden border-[4px] transition-colors ${
                                  isActiveStory ? 'border-[#C09A60]' : 'border-transparent'
                                }`}>
                                <div className="relative aspect-[1.6/1] overflow-hidden">
                                  <img
                                    src={storyLink.image}
                                    alt={storyLink.name}
                                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover/story:scale-105"
                                  />

                                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />

                                  <span className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap font-serif text-[24px] text-white">
                                    {storyLink.name}
                                  </span>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              /* EXPERIENCES WITH DROPDOWN */
              if (item.id === 'experiences') {
                const isActiveRoute =
                  item.routeId && location.pathname.includes(`/${item.routeId}`);

                const isExperiencesDropdownOpen = openDropdown === 'experiences';

                return (
                  <div
                    key={item.id}
                    onMouseEnter={() => handleDropdownOpen('experiences')}
                    onMouseLeave={handleDropdownClose}>
                    {/* MAIN EXPERIENCES LINK */}
                    <Link
                      to={item.href}
                      onClick={() => setOpenDropdown(null)}
                      className={`nav-link flex items-center gap-2 ${
                        isActiveRoute || isExperiencesDropdownOpen ? 'active' : ''
                      }`}>
                      {label}

                      <svg
                        width="15"
                        height="9"
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`transition-transform duration-300 ${
                          isExperiencesDropdownOpen ? 'rotate-180' : 'rotate-0'
                        }`}>
                        <path
                          d="M1 1L5 5L9 1"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>

                    {/* EXPERIENCES DROPDOWN */}
                    <div
                      onMouseEnter={() => handleDropdownOpen('experiences')}
                      onMouseLeave={handleDropdownClose}
                      className={`absolute left-0 top-full w-full border-t border-[#2C3654]/10 bg-white shadow-[0_15px_30px_rgba(44,54,84,0.12)] transition-all duration-300 ${
                        isExperiencesDropdownOpen
                          ? 'visible translate-y-0 opacity-100 pointer-events-auto'
                          : 'invisible -translate-y-2 opacity-0 pointer-events-none'
                      }`}>
                      <div className="mx-auto max-w-[1920px] px-6 py-8">
                        <div className="mx-auto grid max-w-[1157.5px] grid-cols-3 gap-5">
                          {experiencesLinks.map((experience) => {
                            const isActiveExperience =
                              location.pathname.includes('/experiences') &&
                              location.hash === `#${experience.id}`;

                            return (
                              <Link
                                key={experience.id}
                                to={experience.href}
                                onClick={() => setOpenDropdown(null)}
                                className={`group/experience relative block overflow-hidden border-[4px] transition-colors ${
                                  isActiveExperience ? 'border-[#C09A60]' : 'border-transparent'
                                }`}>
                                <div className="relative aspect-[1.6/1] overflow-hidden">
                                  <img
                                    src={experience.image}
                                    alt={experience.name}
                                    className="h-full max-h-[232.81px] max-w-[372.5px] w-full object-cover transition-transform duration-700 ease-out group-hover/experience:scale-105"
                                  />

                                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />

                                  <span className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap font-serif text-[24px] text-white">
                                    {experience.name}
                                  </span>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              /* OTHER ROUTES */
              if (item.isRoute) {
                const isActiveRoute =
                  item.routeId && location.pathname.includes(`/${item.routeId}`);

                return (
                  <Link
                    key={item.id}
                    to={item.href}
                    className={`nav-link ${isActiveRoute ? 'active' : ''}`}>
                    {label}
                  </Link>
                );
              }

              /* ANCHOR LINKS */
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setActiveSection(sectionId)}
                  className={`nav-link ${activeSection === sectionId ? 'active' : ''}`}>
                  {label}
                </a>
              );
            })}
          </nav>

          {/* LOGO */}
          <div className="flex justify-center lg:px-8 xl:px-20">
            <Link
              to={homeUrl}
              className="flex flex-col items-center justify-center text-center leading-none">
              <img
                src={`${process.env.PUBLIC_URL}/images/nav/logo.png`}
                alt="Scarpa Villas"
                className="w-[120px] sm:w-[140px] shrink-0"
              />
            </Link>
          </div>

          {/* RIGHT NAV */}
          <div className="hidden items-center justify-between lg:flex">
            {nav.slice(4).map((item) => {
              const sectionId = item.href.replace('#', '');

              const label = (
                <AnimatePresence mode="wait">
                  <motion.span
                    key={item.label}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}>
                    {item.label}
                  </motion.span>
                </AnimatePresence>
              );

              /* DISCOVER WITH DROPDOWN */
              if (item.id === 'discover') {
                const isActiveRoute =
                  item.routeId && location.pathname.includes(`/${item.routeId}`);

                const isDiscoverDropdownOpen = openDropdown === 'discover';

                return (
                  <div
                    key={item.id}
                    onMouseEnter={() => handleDropdownOpen('discover')}
                    onMouseLeave={handleDropdownClose}>
                    {/* MAIN LINK */}
                    <Link
                      to={item.href}
                      onClick={() => setOpenDropdown(null)}
                      className={`nav-link flex items-center gap-2 ${
                        isActiveRoute || isDiscoverDropdownOpen ? 'active' : ''
                      }`}>
                      {label}

                      <svg
                        width="15"
                        height="9"
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`transition-transform duration-300 ${
                          isDiscoverDropdownOpen ? 'rotate-180' : ''
                        }`}>
                        <path
                          d="M1 1L5 5L9 1"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>

                    {/* DROPDOWN */}
                    <div
                      onMouseEnter={() => handleDropdownOpen('discover')}
                      onMouseLeave={handleDropdownClose}
                      className={`absolute left-0 top-full w-full border-t border-[#2C3654]/10 bg-white shadow-[0_15px_30px_rgba(44,54,84,0.12)] transition-all duration-300 ${
                        isDiscoverDropdownOpen
                          ? 'visible opacity-100 translate-y-0 pointer-events-auto'
                          : 'invisible opacity-0 -translate-y-2 pointer-events-none'
                      }`}>
                      <div className="mx-auto max-w-[1920px] px-6 py-8">
                        <div className="mx-auto grid max-w-[765px] grid-cols-2 gap-5">
                          {discoverLinks.map((link) => {
                            const isActiveDiscover =
                              location.pathname === `${langPrefix}${link.href}` ||
                              location.pathname.endsWith(link.href);

                            return (
                              <Link
                                key={link.id}
                                to={`${langPrefix}${link.href}`}
                                onClick={() => setOpenDropdown(null)}
                                className={`group/discover relative block overflow-hidden border-[4px] transition-colors ${
                                  isActiveDiscover ? 'border-[#C09A60]' : 'border-transparent'
                                }`}>
                                <div className="relative aspect-[1.6/1] overflow-hidden">
                                  <img
                                    src={link.image}
                                    alt={link.name}
                                    className="h-full w-full max-h-[232.81px] object-cover transition-transform duration-700 ease-out group-hover/discover:scale-105"
                                  />

                                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />

                                  <span className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap font-serif text-[24px] text-white">
                                    {link.name}
                                  </span>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              if (item.isRoute) {
                const isActiveRoute =
                  item.routeId && location.pathname.includes(`/${item.routeId}`);

                return (
                  <Link
                    key={item.id}
                    to={item.href}
                    className={`nav-link ${isActiveRoute ? 'active' : ''}`}>
                    {label}
                  </Link>
                );
              }

              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setActiveSection(sectionId)}
                  className={`nav-link ${activeSection === sectionId ? 'active' : ''}`}>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={item.label}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}>
                      {item.label}
                    </motion.span>
                  </AnimatePresence>
                </a>
              );
            })}

            <LinkButton
              href="https://www.simplebooking.it/ibe2/hotel/9131"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="nav"
              className="stay_header_link">
              <AnimatePresence mode="wait">
                <motion.span
                  key={t('nav.planStay')}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}>
                  {t('nav.planStay')}
                </motion.span>
              </AnimatePresence>
            </LinkButton>

            <LanguageSwitcher />
          </div>
        </div>

        {/* Mobile */}
        <div className="flex items-center justify-between lg:hidden">
          {/* Menu */}
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => {
              setOpen((v) => !v);
              closeMobileDropdowns();
            }}
            className="inline-flex h-10 w-10 items-center justify-center text-[#2c3654]">
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Logo */}
          <a href={homeUrl} className="absolute left-1/2 -translate-x-1/2">
            <img
              src={`${process.env.PUBLIC_URL}/images/nav/logo.png`}
              alt="Scarpa Villas"
              className="w-[120px]"
            />
          </a>

          {/* Plan Stay */}
          <LinkButton
            href="https://www.simplebooking.it/ibe2/hotel/9131"
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            size="sm"
            className="uppercase">
            <AnimatePresence mode="wait">
              <motion.span
                key={t('nav.planStay')}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}>
                {t('nav.planStayMob')}
              </motion.span>
            </AnimatePresence>
          </LinkButton>
        </div>

        {open && (
          <div className="absolute left-0 top-full z-50 w-full px-4 lg:hidden">
            <div className="relative bg-white p-8 pt-10 shadow-soft">
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => {
                  setOpen(false);
                  closeMobileDropdowns();
                }}
                className="absolute right-7 top-4 text-[#2c3654]/35 transition-opacity hover:opacity-60">
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>

              <nav className="flex flex-col" aria-label="Mobile">
                {/* VILLAS */}
                <div className="border-b border-[#2c3654]">
                  <div className="flex items-center">
                    <Link
                      to={villasUrl}
                      onClick={() => {
                        setOpen(false);
                        closeMobileDropdowns();
                      }}
                      className={`nav-link_mob flex-1 py-3 ${isVillasActiveRoute ? 'active' : ''}`}>
                      {t('nav.villas')}
                    </Link>

                    <button
                      type="button"
                      onClick={() => {
                        setMobileVillasOpen((prev) => !prev);
                        setMobileExperiencesOpen(false);
                        setMobileStoryOpen(false);
                        setMobileDiscoverOpen(false);
                      }}
                      className={`flex h-11 w-11 items-center justify-end ${
                        isVillasActiveRoute ? 'text-[#C09A60]' : 'text-[#2c3654]'
                      }`}>
                      <svg
                        width="16"
                        height="10"
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`transition-transform duration-300 ${
                          mobileVillasOpen ? 'rotate-180' : ''
                        }`}>
                        <path
                          d="M1 1L5 5L9 1"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      mobileVillasOpen ? 'max-h-[260px] opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                    <div className="flex gap-2 overflow-x-auto pb-3 pt-2 scrollbar-hide">
                      {villas.map((villa) => {
                        const isActiveVilla =
                          location.pathname === villa.href ||
                          location.pathname.endsWith(villa.href);

                        return (
                          <Link
                            key={villa.id}
                            to={`${langPrefix}${villa.href}`}
                            onClick={() => {
                              setOpen(false);
                              closeMobileDropdowns();
                            }}
                            className="w-[44%] shrink-0">
                            <div
                              className={`relative aspect-[1.55/1] overflow-hidden border-[3px] transition-colors ${
                                isActiveVilla ? 'border-[#C09A60]' : 'border-transparent'
                              }`}>
                              <img
                                src={villa.image}
                                alt={villa.name}
                                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                              />

                              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />

                              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 whitespace-nowrap font-serif text-[16px] md:text-[20px] text-white">
                                {villa.name}
                              </span>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* BORGO */}
                <Link
                  to={borgoUrl}
                  onClick={() => {
                    setOpen(false);
                    closeMobileDropdowns();
                  }}
                  className={`border-b border-[#2c3654] py-3 nav-link_mob ${isBorgoActiveRoute ? 'active' : ''}`}>
                  {t('nav.borgo')}
                </Link>

                {/* EXPERIENCES */}
                <div className="border-b border-[#2c3654]">
                  <div className="flex items-center">
                    <Link
                      to={experiencesUrl}
                      onClick={() => {
                        setOpen(false);
                        closeMobileDropdowns();
                      }}
                      className={`nav-link_mob flex-1 py-3 ${
                        isExperiencesActiveRoute ? 'active' : ''
                      }`}>
                      {t('nav.experiences')}
                    </Link>

                    <button
                      type="button"
                      aria-label="Toggle experiences menu"
                      aria-expanded={mobileExperiencesOpen}
                      onClick={() => {
                        setMobileExperiencesOpen((prev) => !prev);
                        setMobileVillasOpen(false);
                        setMobileStoryOpen(false);
                        setMobileDiscoverOpen(false);
                      }}
                      className={`flex h-11 w-11 items-center justify-end ${
                        isExperiencesActiveRoute ? 'text-[#C09A60]' : 'text-[#2c3654]'
                      }`}>
                      <svg
                        width="16"
                        height="10"
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`transition-transform duration-300 ${
                          mobileExperiencesOpen ? 'rotate-180' : ''
                        }`}>
                        <path
                          d="M1 1L5 5L9 1"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      mobileExperiencesOpen ? 'max-h-[260px] opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                    <div className="flex gap-2 overflow-x-auto pb-3 pt-2 scrollbar-hide">
                      {experiencesLinks.map((experience) => {
                        const isActiveExperience =
                          location.pathname.includes('/experiences') &&
                          location.hash === `#${experience.id}`;

                        return (
                          <Link
                            key={experience.id}
                            to={experience.href}
                            onClick={() => {
                              setOpen(false);
                              closeMobileDropdowns();
                            }}
                            className="w-[44%] shrink-0">
                            <div
                              className={`relative aspect-[1.55/1] overflow-hidden border-[3px] transition-colors ${
                                isActiveExperience ? 'border-[#C09A60]' : 'border-transparent'
                              }`}>
                              <img
                                src={experience.image}
                                alt={experience.name}
                                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                              />

                              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

                              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 whitespace-nowrap font-serif text-[16px] text-white md:text-[20px]">
                                {experience.nameMob}
                              </span>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* STORY */}
                <div className="border-b border-[#2c3654]">
                  <div className="flex items-center">
                    <Link
                      to={storyUrl}
                      onClick={() => {
                        setOpen(false);
                        closeMobileDropdowns();
                      }}
                      className={`nav-link_mob flex-1 py-3 ${isStoryActiveRoute ? 'active' : ''}`}>
                      {t('nav.story')}
                    </Link>

                    <button
                      type="button"
                      aria-label="Toggle story menu"
                      aria-expanded={mobileStoryOpen}
                      onClick={() => {
                        setMobileStoryOpen((prev) => !prev);
                        setMobileVillasOpen(false);
                        setMobileExperiencesOpen(false);
                        setMobileDiscoverOpen(false);
                      }}
                      className={`flex h-11 w-11 items-center justify-end ${
                        isStoryActiveRoute ? 'text-[#C09A60]' : 'text-[#2c3654]'
                      }`}>
                      <svg
                        width="16"
                        height="10"
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`transition-transform duration-300 ${
                          mobileStoryOpen ? 'rotate-180' : ''
                        }`}>
                        <path
                          d="M1 1L5 5L9 1"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      mobileStoryOpen ? 'max-h-[260px] opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                    <div className="flex gap-2 overflow-x-auto pb-3 pt-2 scrollbar-hide">
                      {storyLinks.map((storyLink) => {
                        const isActiveStory =
                          location.pathname === storyLink.href ||
                          location.pathname.endsWith(storyLink.href);

                        return (
                          <Link
                            key={storyLink.id}
                            to={`${langPrefix}${storyLink.href}`}
                            onClick={() => {
                              setOpen(false);
                              closeMobileDropdowns();
                            }}
                            className="w-[44%] shrink-0">
                            <div
                              className={`relative aspect-[1.55/1] overflow-hidden border-[3px] transition-colors ${
                                isActiveStory ? 'border-[#C09A60]' : 'border-transparent'
                              }`}>
                              <img
                                src={storyLink.image}
                                alt={storyLink.name}
                                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                              />

                              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />

                              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 whitespace-nowrap font-serif text-[16px] md:text-[20px] text-white">
                                {storyLink.name}
                              </span>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* STAYS */}
                <Link
                  to={staysUrl}
                  onClick={() => {
                    setOpen(false);
                    closeMobileDropdowns();
                  }}
                  className={`border-b border-[#2c3654] py-3 nav-link_mob ${
                    isStaysActiveRoute ? 'active' : ''
                  }`}>
                  {t('nav.stays')}
                </Link>

                {/* DISCOVER */}
                <div>
                  <div className="flex items-center">
                    <Link
                      to={discoverUrl}
                      onClick={() => {
                        setOpen(false);
                        closeMobileDropdowns();
                      }}
                      className={`nav-link_mob flex-1 py-3 ${
                        isDiscoverActiveRoute ? 'active' : ''
                      }`}>
                      {t('nav.discover')}
                    </Link>

                    <button
                      type="button"
                      aria-label="Toggle discover menu"
                      aria-expanded={mobileDiscoverOpen}
                      onClick={() => {
                        setMobileDiscoverOpen((prev) => !prev);
                        setMobileVillasOpen(false);
                        setMobileExperiencesOpen(false);
                        setMobileStoryOpen(false);
                      }}
                      className={`flex h-11 w-11 items-center justify-end ${
                        isDiscoverActiveRoute ? 'text-[#C09A60]' : 'text-[#2c3654]'
                      }`}>
                      <svg
                        width="16"
                        height="10"
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`transition-transform duration-300 ${
                          mobileDiscoverOpen ? 'rotate-180' : ''
                        }`}>
                        <path
                          d="M1 1L5 5L9 1"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      mobileDiscoverOpen ? 'max-h-[260px] opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                    <div className="flex justify-center gap-2 overflow-x-auto pb-3 pt-2 scrollbar-hide">
                      {discoverLinks.map((discoverLink) => {
                        const isActiveDiscover =
                          location.pathname === discoverLink.href ||
                          location.pathname.endsWith(discoverLink.href);

                        return (
                          <Link
                            key={discoverLink.id}
                            to={`${langPrefix}${discoverLink.href}`}
                            onClick={() => {
                              setOpen(false);
                              closeMobileDropdowns();
                            }}
                            className={`w-[44%] shrink-0 border-[3px] transition-colors ${
                              isActiveDiscover ? 'border-[#C09A60]' : 'border-transparent'
                            }`}>
                            <div className="relative aspect-[1.55/1] overflow-hidden">
                              <img
                                src={discoverLink.image}
                                alt={discoverLink.name}
                                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                              />

                              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

                              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 whitespace-nowrap font-serif text-[16px] text-white md:text-[20px]">
                                {discoverLink.name}
                              </span>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex justify-between">
                  <LanguageSwitcher />

                  <div className="flex gap-4">
                    <a
                      href="https://www.instagram.com/scarpavillas/"
                      target="_blank"
                      rel="noopener noreferrer">
                      <img
                        src={`${process.env.PUBLIC_URL}/images/nav/insta_logo.svg`}
                        className="h-6 w-6"
                        alt="Instagram"
                      />
                    </a>

                    <a
                      href="https://www.facebook.com/ScarpaVillas"
                      target="_blank"
                      rel="noopener noreferrer">
                      <img
                        src={`${process.env.PUBLIC_URL}/images/nav/fb_logo.svg`}
                        className="h-5 w-5"
                        alt="Facebook"
                      />
                    </a>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
