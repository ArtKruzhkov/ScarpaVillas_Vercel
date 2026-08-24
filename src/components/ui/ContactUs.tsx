import { useEffect, useRef, useState } from 'react';
import { ContactModal } from './ContactModal/ContactModal';

interface ContactUsProps {
  className?: string;
  phone: string;
}

export function ContactUs({ className = '', phone }: ContactUsProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const openModal = () => {
    setIsMenuOpen(false);
    setIsModalOpen(true);
  };

  return (
    <>
      <div ref={menuRef} className={className}>
        <div className="relative">
          <div
            className={`absolute bottom-[calc(100%+12px)] right-0 flex flex-col gap-3 transition-all duration-300 ${
              isMenuOpen
                ? 'pointer-events-auto translate-y-0 opacity-100'
                : 'pointer-events-none translate-y-2 opacity-0'
            }`}>
            {/* Email */}
            <a
              href="mailto:info@scarpa-villas.com"
              aria-label="Email"
              onClick={() => setIsMenuOpen(false)}>
              <img
                src={`${process.env.PUBLIC_URL}/images/contactBtn/mail.svg`}
                alt="Email"
                className="w-[40px] lg:w-[55px] rounded-[10px] transition-transform duration-300 hover:scale-105"
              />
            </a>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${phone}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              onClick={() => setIsMenuOpen(false)}>
              <img
                src={`${process.env.PUBLIC_URL}/images/contactBtn/whatsapp.svg`}
                alt="WhatsApp"
                className="w-[40px] lg:w-[55px] rounded-[10px] transition-transform duration-300 hover:scale-105"
              />
            </a>

            {/* Phone */}
            <a href={`tel:+${phone}`} aria-label="Call" onClick={() => setIsMenuOpen(false)}>
              <img
                src={`${process.env.PUBLIC_URL}/images/contactBtn/phone.svg`}
                alt="Phone"
                className="w-[40px] lg:w-[55px] rounded-[10px] transition-transform duration-300 hover:scale-105"
              />
            </a>

            {/* Form */}
            <button type="button" aria-label="Contact form" onClick={openModal}>
              <img
                src={`${process.env.PUBLIC_URL}/images/contactBtn/form.svg`}
                alt="Form"
                className="w-[40px] lg:w-[55px] rounded-[10px] transition-transform duration-300 hover:scale-105"
              />
            </button>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Contact"
            className="focus:outline-none">
            <img
              src={`${process.env.PUBLIC_URL}/images/contactBtn/contact.svg`}
              alt="Contact"
              className={`w-[40px] lg:w-[55px] rounded-[10px] transition-all duration-300 hover:scale-105 hover:opacity-100 ${
                isMenuOpen ? 'opacity-100' : 'opacity-50'
              }`}
            />
          </button>
        </div>
      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
