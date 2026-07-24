import HeroSection from "@/components/HeroSection/HeroSection";
import Card from "@/components/Card/Card";
import { Component as ParallaxScrollSection } from "@/components/ui/parallax-scroll-feature-section";
import { FeaturedSpotlight } from "@/components/ui/feature-spotlight";
import FAQSection from "@/components/FAQSection";
import TextBlockAnimation from "@/components/ui/text-block-animation";
import ParallaxHeading from "@/components/ui/parallax-heading";
import FlowArt, { FlowSection } from "@/components/ui/story-scroll";
import SEOKeywordsMarquee from "@/components/ui/seo-keywords-marquee";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Heroes — Premium Design & Development Studio",
  description: "Digital Heroes is a full-service digital product studio specialising in scalable web design, full-stack development, mobile applications, and growth strategy for bold brands.",
  alternates: {
    canonical: "/",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Digital Heroes",
  "url": "https://digitalheroesco.com",
  "logo": "https://digitalheroesco.com/logo.png",
  "description": "Digital Heroes is a full-service digital product studio specialising in scalable web design, full-stack development, mobile applications, and growth strategy.",
  "sameAs": [
    "https://digitalheroesco.com"
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What services does Digital Heroes offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Digital Heroes provides end-to-end digital services including UI/UX design, website and web application development, mobile app development, branding, and custom digital solutions. We help businesses turn ideas into scalable and impactful digital products."
      }
    },
    {
      "@type": "Question",
      "name": "How long does a typical project take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Project timelines depend on the scope and complexity of the work. Smaller projects may take a few weeks, while larger or more complex projects can take several months. A clear timeline is shared before the project begins."
      }
    },
    {
      "@type": "Question",
      "name": "How is pricing structured at Digital Heroes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our pricing is flexible and transparent, based on project requirements, features, and timelines. We provide custom quotes to ensure clients receive solutions that fit their needs and budget."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer ongoing support after project completion?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Digital Heroes offers ongoing support after project completion. This includes post-launch support, maintenance, updates, and technical assistance to ensure the product continues to perform smoothly."
      }
    },
    {
      "@type": "Question",
      "name": "How often will I receive updates on my project?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Clients receive regular updates throughout the project lifecycle. Updates are typically shared weekly or at key milestones through email, calls, or scheduled meetings to keep communication clear and transparent."
      }
    }
  ]
};



export default function Home() {
  return (
    <main className="relative">
      {/* Schema Script Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <HeroSection />

      <section id="services" className="py-16 sm:py-24 px-4 sm:px-6 flex flex-col items-center text-center">
        <ParallaxHeading speed={35}>
          <p className="text-sm uppercase tracking-widest text-[var(--text)] font-medium mb-6">
            What we do
          </p>
          <TextBlockAnimation duration={1.5} stagger={0.1}>
            <h2 
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light italic text-[var(--text)] leading-[0.95] max-w-5xl mx-auto"
              style={{ fontFamily: "'Instrument Serif', serif", letterSpacing: "-0.04em" }}
            >
              Crafting exceptional, insight-driven and technology-powered strategies to create measurable impact
            </h2>
          </TextBlockAnimation>
          <div className="flex justify-center gap-10 mt-10">
            {["Creativity", "Innovation", "Strategy"].map((tag) => (
              <span key={tag} className="text-sm uppercase tracking-widest text-[var(--text)]">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-10">
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold text-[var(--text)]">+55</span>
              <span className="text-sm text-[var(--text)] mt-2 uppercase tracking-widest">Total Projects Completed</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold text-[var(--text)]">+4</span>
              <span className="text-sm text-[var(--text)] mt-2 uppercase tracking-widest">Years of Experience</span>
            </div>
          </div>
          <p className="text-sm uppercase tracking-widest text-[var(--text)] mt-10">
            Where innovation meets aesthetics
          </p>
        </ParallaxHeading>
      </section>

      <div className="mx-auto max-w-7xl px-6">
        <ParallaxScrollSection />
      </div>

      {/* ── STORY SCROLL: How We Work ── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 flex flex-col items-center text-center">
        <ParallaxHeading speed={30}>
          <p className="text-sm uppercase tracking-widest text-[var(--text)] font-medium mb-6">
            Our Process
          </p>
          <TextBlockAnimation duration={1.2} stagger={0.09}>
            <h2
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light italic text-[var(--text)] leading-[0.95] max-w-4xl mx-auto"
              style={{ fontFamily: "'Instrument Serif', serif", letterSpacing: "-0.04em" }}
            >
              How we turn an idea into a product that sells
            </h2>
          </TextBlockAnimation>
        </ParallaxHeading>
      </section>

      <FlowArt aria-label="Our four-step process">
        {/* Step 1 — Discover */}
        <FlowSection id="process-discover" aria-label="Step 1: Discover" style={{ backgroundColor: "var(--bg)", borderRadius: "24px" }}>
          <div className="relative flex flex-col flex-1 w-full border-t border-[var(--border-sub)]">
            <span className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 text-[clamp(1.8rem,2.5vw,3.2rem)] font-light italic tracking-[-0.03em] leading-none text-[var(--text-muted)] text-right" style={{ fontFamily: "'Instrument Serif', serif" }}>Strategy &amp; Research</span>
            <span className="block md:hidden mt-4 text-2xl font-light italic text-[var(--text-muted)]" style={{ fontFamily: "'Instrument Serif', serif" }}>Strategy &amp; Research</span>
            <div className="flex flex-col justify-center flex-1 pt-4 md:pt-8 pb-[10vh]">
              <div className="max-w-[800px] self-start">
                <h3 className="text-[clamp(2.5rem,8vw,6.8rem)] font-light italic text-[var(--text)] leading-[1.05] tracking-[-0.04em] mb-4 md:mb-6" style={{ fontFamily: "'Instrument Serif', serif" }}>
                  We listen before we create
                </h3>
                <p className="text-[clamp(1.1rem,2.4vw,1.55rem)] text-[var(--text-muted)] leading-[1.65] max-w-[700px]" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                  Deep discovery sessions, competitor audits, and market analysis — we map out your terrain before a single pixel is placed. Strategy isn't a phase, it's the foundation.
                </p>
              </div>
            </div>
          </div>
        </FlowSection>

        {/* Step 2 — Design */}
        <FlowSection id="process-design" aria-label="Step 2: Design" style={{ backgroundColor: "var(--bg)", borderRadius: "24px" }}>
          <div className="relative flex flex-col flex-1 w-full border-t border-[var(--border-sub)]">
            <span className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 text-[clamp(1.8rem,2.5vw,3.2rem)] font-light italic tracking-[-0.03em] leading-none text-[var(--text-muted)] text-right" style={{ fontFamily: "'Instrument Serif', serif" }}>UI / UX</span>
            <span className="block md:hidden mt-4 text-2xl font-light italic text-[var(--text-muted)]" style={{ fontFamily: "'Instrument Serif', serif" }}>UI / UX</span>
            <div className="flex flex-col justify-center flex-1 pt-4 md:pt-8 pb-[10vh]">
              <div className="max-w-[800px] self-start">
                <h3 className="text-[clamp(2.5rem,8vw,6.8rem)] font-light italic text-[var(--text)] leading-[1.05] tracking-[-0.04em] mb-4 md:mb-6" style={{ fontFamily: "'Instrument Serif', serif" }}>
                  Beauty with a purpose
                </h3>
                <p className="text-[clamp(1.1rem,2.4vw,1.55rem)] text-[var(--text-muted)] leading-[1.65] max-w-[700px]" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                  Wireframes evolve into pixel-perfect interfaces. Every component, every spacing decision, every animation serves conversion — aesthetics that mean business.
                </p>
              </div>
            </div>
          </div>
        </FlowSection>

        {/* Step 3 — Build */}
        <FlowSection id="process-build" aria-label="Step 3: Build" style={{ backgroundColor: "var(--bg)", borderRadius: "24px" }}>
          <div className="relative flex flex-col flex-1 w-full border-t border-[var(--border-sub)]">
            <span className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 text-[clamp(1.8rem,2.5vw,3.2rem)] font-light italic tracking-[-0.03em] leading-none text-[var(--text-muted)] text-right" style={{ fontFamily: "'Instrument Serif', serif" }}>Engineering</span>
            <span className="block md:hidden mt-4 text-2xl font-light italic text-[var(--text-muted)]" style={{ fontFamily: "'Instrument Serif', serif" }}>Engineering</span>
            <div className="flex flex-col justify-center flex-1 pt-4 md:pt-8 pb-[10vh]">
              <div className="max-w-[800px] self-start">
                <h3 className="text-[clamp(2.5rem,8vw,6.8rem)] font-light italic text-[var(--text)] leading-[1.05] tracking-[-0.04em] mb-4 md:mb-6" style={{ fontFamily: "'Instrument Serif', serif" }}>
                  Code that scales without limits
                </h3>
                <p className="text-[clamp(1.1rem,2.4vw,1.55rem)] text-[var(--text-muted)] leading-[1.65] max-w-[700px]" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                  Clean, performant, production-ready code. From Next.js frontends to Node.js APIs and cloud infrastructure — built to handle 10 users or 10 million.
                </p>
              </div>
            </div>
          </div>
        </FlowSection>

        {/* Step 4 — Launch */}
        <FlowSection id="process-launch" aria-label="Step 4: Launch" style={{ backgroundColor: "var(--bg)", borderRadius: "24px" }}>
          <div className="relative flex flex-col flex-1 w-full border-t border-[var(--border-sub)]">
            <span className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 text-[clamp(1.8rem,2.5vw,3.2rem)] font-light italic tracking-[-0.03em] leading-none text-[var(--text-muted)] text-right" style={{ fontFamily: "'Instrument Serif', serif" }}>Deployment &amp; Growth</span>
            <span className="block md:hidden mt-4 text-2xl font-light italic text-[var(--text-muted)]" style={{ fontFamily: "'Instrument Serif', serif" }}>Deployment &amp; Growth</span>
            <div className="flex flex-col justify-center flex-1 pt-4 md:pt-8 pb-[10vh]">
              <div className="max-w-[800px] self-start">
                <h3 className="text-[clamp(2.5rem,8vw,6.8rem)] font-light italic text-[var(--text)] leading-[1.05] tracking-[-0.04em] mb-4 md:mb-6" style={{ fontFamily: "'Instrument Serif', serif" }}>
                  Ship fast. Grow fearlessly.
                </h3>
                <p className="text-[clamp(1.1rem,2.4vw,1.55rem)] text-[var(--text-muted)] leading-[1.65] max-w-[700px]" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                  Continuous deployment, performance monitoring, SEO tuning, and iteration sprints. We stay partners long after the site goes live — your growth is our metric.
                </p>
                <a
                  href="/contact"
                  className="inline-block mt-8 md:mt-10 text-xs md:text-sm font-medium tracking-widest uppercase text-[var(--text)] border border-[var(--border-sub)] py-3 px-6 md:py-4 md:px-8 rounded-full no-underline transition-colors hover:border-[var(--text)] pointer-events-auto"
                  style={{ fontFamily: "'Inter Tight', sans-serif" }}
                >
                  Start your project →
                </a>
              </div>
            </div>
          </div>
        </FlowSection>
      </FlowArt>

      <section className="py-16 sm:py-24 px-4 sm:px-6 flex flex-col items-center text-center">
        <ParallaxHeading speed={30}>
          <p className="text-sm uppercase tracking-widest text-[var(--text)] font-medium mb-6">
            Case Study
          </p>
          <TextBlockAnimation duration={1.2} stagger={0.09}>
            <h2 
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light italic text-[var(--text)] leading-[0.95] max-w-4xl mx-auto"
              style={{ fontFamily: "'Instrument Serif', serif", letterSpacing: "-0.04em" }}
            >
              How we transformed a small business's online presence
            </h2>
          </TextBlockAnimation>
        </ParallaxHeading>
      </section>

      <div className="mx-auto max-w-7xl px-6">
        <Card />
      </div>

      <section className="py-16 sm:py-24 px-4 sm:px-6 flex flex-col items-center text-center">
        <ParallaxHeading speed={30}>
          <p className="text-sm uppercase tracking-widest text-[var(--text)] font-medium mb-6">
            Testimonials
          </p>
          <TextBlockAnimation duration={1.2} stagger={0.08}>
            <h2 
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light italic text-[var(--text)] leading-[0.95] max-w-4xl mx-auto"
              style={{ fontFamily: "'Instrument Serif', serif", letterSpacing: "-0.04em" }}
            >
              What our satisfied customers are saying about us
            </h2>
          </TextBlockAnimation>
        </ParallaxHeading>
      </section>

      <div id="work">
        <FeaturedSpotlight />
      </div>

      <section className="py-16 sm:py-24 px-4 sm:px-6 flex flex-col items-center text-center">
        <ParallaxHeading speed={25}>
          <p className="text-sm uppercase tracking-widest text-[var(--text)] font-medium mb-6">
            FAQ
          </p>
          <TextBlockAnimation duration={1.2} stagger={0.08}>
            <h2 
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light italic text-[var(--text)] leading-[0.95] max-w-2xl mx-auto"
              style={{ fontFamily: "'Instrument Serif', serif", letterSpacing: "-0.04em" }}
            >
              Got questions? We've got answers
            </h2>
          </TextBlockAnimation>
          <p className="text-base text-[var(--text)] mt-6 max-w-sm mx-auto leading-relaxed">
            Can't find what you're looking for? Reach out — we'll get back to you.
          </p>
        </ParallaxHeading>
      </section>

      <FAQSection />
      <SEOKeywordsMarquee />
    </main>
  );
}
