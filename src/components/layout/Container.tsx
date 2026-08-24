import React from 'react';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={['mx-auto w-full max-w-8xl px-2', className].filter(Boolean).join(' ')}>
      {children}
    </div>
  );
}
