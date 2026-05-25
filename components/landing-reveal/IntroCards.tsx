'use client';

import React from 'react';
import Image from 'next/image';

const introCardImages = [
  '/card-1.jpg',
  '/card-2.jpg',
  '/card-3.jpg',
  '/card-4.jpg',
  '/card-5.jpg',
  '/card-6.jpg',
];

interface IntroCardsProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
}

export default function IntroCards({ containerRef }: IntroCardsProps) {
  return (
    <div ref={containerRef} className="lr-intro-cards">
      {introCardImages.map((src, i) => (
        <div key={i} className="lr-card" style={{ position: 'relative' }}>
          <Image
            src={src}
            alt={`Intro Card ${i + 1}`}
            fill
            sizes="300px"
            className="object-cover"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}
