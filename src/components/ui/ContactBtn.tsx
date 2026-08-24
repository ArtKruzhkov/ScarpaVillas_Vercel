interface ContactButtonProps {
  className?: string;
  onClick: () => void;
}

export function ContactButton({ className = '', onClick }: ContactButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        z-[999]
        lg:min-w-[440px]
        bg-white
        px-10
        py-4
        font-sans
        text-[16px]
        font-semibold
        uppercase
        tracking-[0.2em]
        text-[#2C3654]
        transition-colors
        duration-300
        hover:bg-[#F3F1EB]
        ${className}
      `}>
      Contact Us
    </button>
  );
}
