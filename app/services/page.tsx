import React from "react";
import type { Metadata } from "next";
import TextBlockAnimation from "@/components/ui/text-block-animation";
import ParallaxHeading from "@/components/ui/parallax-heading";
import Link from "next/link";
import { Component as ParallaxScrollSection } from "@/components/ui/parallax-scroll-feature-section";

export const metadata: Metadata = {
  title: "Our Services | Digital Heroes",
  description: "Explore our premium design and engineering services. We build high-performance web applications, custom software solutions, and cutting-edge mobile apps.",
  alternates: {
    canonical: "/services",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Digital Product Design & Development",
  "provider": {
    "@type": "Organization",
    "name": "Digital Heroes",
    "url": "https://digitalheroesco.com"
  },
  "areaServed": "Global",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Digital Heroes Services Catalog",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Web Design & Development",
          "description": "High-performance websites built for speed, scalability, and conversions."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Mobile Application Development",
          "description": "Custom mobile apps built for performance and business growth."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI & Machine Learning Systems",
          "description": "Intelligent systems that turn data into actionable insights."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Custom Software & Enterprise Solutions",
          "description": "Tailored digital solutions to streamline and scale your operations."
        }
      }
    ]
  }
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://digitalheroesco.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://digitalheroesco.com/services"
    }
  ]
};

export default function ServicesPage() {
  return (
    <div className="bg-[var(--bg)] min-h-screen pt-32 pb-24 text-[var(--text)] transition-colors duration-300">
      {/* Schema Script Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="px-6 max-w-7xl mx-auto text-center mb-16">
        <ParallaxHeading speed={30}>
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--text-muted)] mb-4 block">
            Our Offerings
          </span>
          <TextBlockAnimation duration={1.2} stagger={0.09}>
            <h1
              className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-light italic text-[var(--text)] leading-[0.95] max-w-5xl mx-auto mb-8"
              style={{ fontFamily: "'Instrument Serif', serif", letterSpacing: "-0.04em" }}
            >
              Premium Design &amp; Technology Services
            </h1>
          </TextBlockAnimation>
          <p className="text-[var(--text-muted)] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            We partner with visionary brands to design, build, and scale exceptional digital experiences. 
            From Next.js platforms to enterprise cloud architecture.
          </p>
        </ParallaxHeading>
      </section>

      {/* Reuse the premium parallax scrolling feature section here */}
      <div className="mx-auto max-w-7xl px-6">
        <ParallaxScrollSection />
      </div>

      <section className="px-6 py-20 max-w-3xl mx-auto text-center border-t border-[var(--border-sub)]/30 mt-20">
        <h2 
          className="text-4xl sm:text-5xl font-light italic mb-6"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Have a unique challenge?
        </h2>
        <p className="text-[var(--text-muted)] mb-8">
          Let’s discuss your technical goals and formulate a custom architecture roadmap.
        </p>
        <Link 
          href="/contact" 
          className="inline-block bg-[var(--text)] text-[var(--bg)] px-10 py-4 rounded-full uppercase text-xs font-bold tracking-widest hover:scale-[1.02] active:scale-95 transition-all shadow-lg"
        >
          Start your project
        </Link>
      </section>
    </div>
  );
}
