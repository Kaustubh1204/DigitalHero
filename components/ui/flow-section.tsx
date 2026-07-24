'use client';

import React from 'react';

function cx(...parts: Array<string | undefined | false | null>): string {
  return parts.filter(Boolean).join(' ');
}

export interface FlowSectionProps {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  'aria-label'?: string;
}

export const FlowSection: React.FC<FlowSectionProps> = ({
  id,
  className,
  style = {},
  children,
  'aria-label': ariaLabel,
}) => {
  const { backgroundColor, background, borderRadius, ...innerStyle } = style as React.CSSProperties & { background?: string };
  return (
    <section
      id={id}
      data-flow-section
      aria-label={ariaLabel}
      style={{ backgroundColor, background, borderRadius, minHeight: '100vh', minBlockSize: '100dvh' }}
      className={cx('relative w-full overflow-hidden', className)}
    >
      <div
        data-flow-inner
        className={cx(
          'flow-art-container relative flex w-full flex-col justify-between gap-6 px-[clamp(16px,4vw,60px)] pt-28 md:pt-[clamp(2rem,8vw,4vw)] pb-[4vw]',
          'will-change-transform',
        )}
        style={{ transformOrigin: 'bottom left', transform: 'translateZ(0)', minHeight: '100vh', minBlockSize: '100dvh', ...innerStyle }}
      >
        {children}
      </div>
    </section>
  );
};
