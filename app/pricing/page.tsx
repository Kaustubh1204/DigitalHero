import React from "react";
import type { Metadata } from "next";
import TextBlockAnimation from "@/components/ui/text-block-animation";
import ParallaxHeading from "@/components/ui/parallax-heading";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing Packages | Digital Heroes",
  description: "Transparent, value-driven pricing structures for digital design, engineering, and growth support. Choose the plan that scales your brand.",
  alternates: {
    canonical: "/pricing",
  },
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
      "name": "Pricing",
      "item": "https://digitalheroesco.com/pricing"
    }
  ]
};

const tiers = [
  {
    name: "Startup MVP",
    price: "$4,500",
    description: "Perfect for validating ideas, launch readiness, and simple landing pages.",
    features: [
      "Custom UI/UX Wireframes",
      "Next.js Static Website (Up to 5 pages)",
      "Basic SEO Metadata Configuration",
      "Vercel Cloud Deployment",
      "Email Support",
    ],
    cta: "Launch Now",
    popular: false,
  },
  {
    name: "Growth Scale",
    price: "$9,500",
    description: "Ideal for growing startups needing custom applications, integrations, and ongoing traction.",
    features: [
      "Advanced UI/UX & Interactive Design",
      "Next.js App Router & Server Components",
      "Full API & Database Integrations",
      "Comprehensive Speed & Core Web Vitals Audit",
      "Advanced Schema & Rich Results SEO",
      "Slack Collaboration Support",
    ],
    cta: "Scale Now",
    popular: true,
  },
  {
    name: "Enterprise Custom",
    price: "Custom",
    description: "Built for massive scale, custom ERP integrations, microservices, and 24/7 priority support.",
    features: [
      "Bespoke System Architecture",
      "Multi-tenant SaaS & Node.js Backends",
      "Microservice Integrations & Automation",
      "Dedicated Infrastructure Tuning",
      "24/7 Priority SLA Agreement",
      "Ongoing Product Sprints",
    ],
    cta: "Contact Us",
    popular: false,
  },
];

export default function PricingPage() {
  return (
    <div className="bg-[var(--bg)] min-h-screen pt-32 pb-24 text-[var(--text)] transition-colors duration-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="px-6 max-w-7xl mx-auto text-center mb-20">
        <ParallaxHeading speed={30}>
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--text-muted)] mb-4 block">
            Pricing
          </span>
          <TextBlockAnimation duration={1.2} stagger={0.09}>
            <h1
              className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-light italic text-[var(--text)] leading-[0.95] max-w-5xl mx-auto mb-8"
              style={{ fontFamily: "'Instrument Serif', serif", letterSpacing: "-0.04em" }}
            >
              Simple, Value-Driven Plans
            </h1>
          </TextBlockAnimation>
          <p className="text-[var(--text-muted)] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Choose a structured plan matching your digital goals. No hidden fees. Transparent timelines.
          </p>
        </ParallaxHeading>
      </section>

      {/* Pricing Grid */}
      <section className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {tiers.map((tier, index) => (
          <div
            key={index}
            className={`flex flex-col justify-between p-8 rounded-3xl border transition-all duration-300 ${
              tier.popular
                ? "bg-[var(--text)] text-[var(--bg)] border-[var(--text)] shadow-xl scale-[1.03] md:translate-y-[-8px]"
                : "bg-[var(--text)]/5 text-[var(--text)] border-[var(--border-sub)]/30 hover:border-[var(--text-sec)]"
            }`}
          >
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold uppercase tracking-wider">{tier.name}</h2>
                {tier.popular && (
                  <span className="bg-[var(--bg)] text-[var(--text)] text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                    Popular
                  </span>
                )}
              </div>
              <div className="mb-6">
                <span className="text-5xl font-light italic tracking-tight" style={{ fontFamily: "'Instrument Serif', serif" }}>
                  {tier.price}
                </span>
                {tier.price !== "Custom" && <span className="text-xs opacity-60 ml-2">/ project start</span>}
              </div>
              <p className="text-sm opacity-80 mb-8 leading-relaxed">{tier.description}</p>
              
              <hr className={`border-t mb-8 ${tier.popular ? "border-[var(--bg)]/20" : "border-[var(--bg)]/20"}`} />
              
              <ul className="space-y-4 mb-12 text-sm">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <svg
                      className={`w-4 h-4 flex-shrink-0 ${tier.popular ? "text-[var(--bg)]" : "text-[var(--text)]"}`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                    </svg>
                    <span className="opacity-90">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="/contact"
              className={`w-full py-4 rounded-full uppercase text-xs font-bold tracking-widest text-center transition-all ${
                tier.popular
                  ? "bg-[var(--bg)] text-[var(--text)] hover:opacity-90"
                  : "bg-[var(--text)] text-[var(--bg)] hover:scale-[1.01]"
              }`}
            >
              {tier.cta}
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
}
