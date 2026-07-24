import React from 'react';

const keywords = [
  'Custom Software Development India',
  'Best CRM ERP Developers for US UK Clients',
  'Secure Web Development Digital Heroes',
  'Flutter App Development Australia',
  'Custom Business Software Solutions',
  'Node.js Development Agency',
  'React Web App Development',
  'ERP CRM Software Company India',
  'High Security Web Development Services',
  'Scalable SaaS Development Agency',
  'Full Stack Development Company India',
  'Custom Mobile App Development Flutter',
  'Secure Client-Based Hosting Solutions',
  'Rapid Software Delivery Agency',
  'Interactive Live Software Demo Services',
];

// Duplicate for seamless loop
const track = [...keywords, ...keywords];

export default function SEOKeywordsMarquee() {
  return (
    <section
      style={{
        width: '100%',
        overflow: 'hidden',
        paddingTop: '3.5rem',
        paddingBottom: '3.5rem',
        borderTop: '1px solid var(--border-sub)',
        position: 'relative',
      }}
    >
      {/* Fade edges */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 2,
          background:
            'linear-gradient(to right, var(--bg) 0%, transparent 8%, transparent 92%, var(--bg) 100%)',
        }}
      />

      {/* Label */}
      <p
        style={{
          fontFamily: "'Inter Tight', sans-serif",
          fontSize: 'clamp(0.65rem, 1vw, 0.75rem)',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: 'var(--text-muted)',
          textAlign: 'center',
          marginBottom: '1.75rem',
          position: 'relative',
          zIndex: 3,
        }}
      >
        Keywords &amp; expertise areas
      </p>

      {/* Marquee track */}
      <div className="seo-marquee-viewport">
        <div className="seo-marquee-track">
          {track.map((kw, i) => (
            <span key={i} className="seo-pill">
              {kw}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        .seo-marquee-viewport {
          width: 100%;
          overflow: hidden;
          position: relative;
          z-index: 1;
        }

        .seo-marquee-track {
          display: flex;
          flex-wrap: nowrap;
          gap: 0.75rem;
          width: max-content;
          animation: seo-scroll 40s linear infinite;
          will-change: transform;
        }

        .seo-marquee-viewport:hover .seo-marquee-track {
          animation-play-state: paused;
        }

        @keyframes seo-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .seo-pill {
          display: inline-flex;
          align-items: center;
          white-space: nowrap;
          padding: 0.55rem 1.15rem;
          border-radius: 100px;
          border: 0.5px solid var(--border-sub);
          background: transparent;
          font-family: 'Inter Tight', sans-serif;
          font-size: clamp(0.72rem, 1.1vw, 0.82rem);
          font-weight: 400;
          letter-spacing: 0.04em;
          color: var(--text-muted);
          cursor: default;
          transition:
            border-color 0.25s ease,
            color 0.25s ease,
            box-shadow 0.25s ease,
            background 0.25s ease;
          user-select: none;
        }

        .seo-pill:hover {
          border-color: var(--text-sec);
          color: var(--text);
          background: color-mix(in srgb, var(--text) 4%, transparent);
          box-shadow: 0 0 0 1px color-mix(in srgb, var(--text) 10%, transparent),
                      0 0 16px color-mix(in srgb, var(--text) 6%, transparent);
        }

        @media (prefers-reduced-motion: reduce) {
          .seo-marquee-track {
            animation: none;
            flex-wrap: wrap;
            width: 100%;
            padding: 0 1.5rem;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
