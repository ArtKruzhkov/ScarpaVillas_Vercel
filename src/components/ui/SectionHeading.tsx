import React from 'react';

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  const alignClasses = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={['max-w-2xl', alignClasses].join(' ')}>
      {eyebrow ? (
        <p className="text-xs font-medium tracking-caps uppercase text-ink-700/80">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight tracking-tight text-ink-900 sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-ink-700">
          {description}
        </p>
      ) : null}
    </div>
  );
}

