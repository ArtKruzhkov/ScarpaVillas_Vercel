import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import './navbar.css';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState(i18n.language.toUpperCase());

  const handleSelect = (lang: string) => {
    const langLower = lang.toLowerCase();

    setLanguage(lang);
    i18n.changeLanguage(langLower);
    setIsOpen(false);

    const currentPath = location.pathname;

    let newPath = currentPath;

    if (langLower === 'it') {
      if (!currentPath.startsWith('/it')) {
        newPath = `/it${currentPath === '/' ? '' : currentPath}`;
      }
    }

    if (langLower === 'en') {
      newPath = currentPath.replace(/^\/it/, '') || '/';
    }

    navigate(newPath + location.search + location.hash);
  };

  return (
    <>
      {/* Desktop */}
      <div className="relative hidden lg:block">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="language-switcher text-[#2C3654] flex items-center gap-1">
          {language}
          <span>▼</span>
        </button>

        {isOpen && (
          <div className="absolute left-[-5px] top-full z-[200] mt-2 min-w-[70px] bg-white shadow-lg">
            <button
              onClick={() => handleSelect('EN')}
              className="language-switcher text-[#2C3654] block w-full px-4 py-2 text-left hover:bg-gray-100">
              EN
            </button>

            <button
              onClick={() => handleSelect('IT')}
              className="language-switcher text-[#2C3654] block w-full px-4 py-2 text-left hover:bg-gray-100">
              IT
            </button>
          </div>
        )}
      </div>

      {/* Mobile */}
      <div className="flex items-center gap-4 lg:hidden">
        <button
          onClick={() => handleSelect('EN')}
          className={`language-switcher transition-colors ${
            language === 'EN' ? 'font-bold text-[#2C3654]' : 'text-[#939498]'
          }`}>
          EN
        </button>

        <button
          onClick={() => handleSelect('IT')}
          className={`language-switcher transition-colors ${
            language === 'IT' ? 'font-bold text-[#2C3654]' : 'text-[#939498]'
          }`}>
          IT
        </button>
      </div>
    </>
  );
};
