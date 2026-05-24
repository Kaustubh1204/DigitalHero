import HeroSection from "@/components/HeroSection/HeroSection";
import Card from "@/components/Card/Card";
import { Component as ParallaxScrollSection } from "@/components/ui/parallax-scroll-feature-section";
import { FeaturedSpotlight } from "@/components/ui/feature-spotlight";
import LandingReveal from "@/components/landing-reveal/LandingReveal";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer/Footer";
import TextBlockAnimation from "@/components/ui/text-block-animation";
import ParallaxHeading from "@/components/ui/parallax-heading";
import FlowArt, { FlowSection } from "@/components/ui/story-scroll";
import SEOKeywordsMarquee from "@/components/ui/seo-keywords-marquee";
import "@/components/landing-reveal/LandingReveal.css";



export default function Home() {
  return (
    <main className="relative">
      <HeroSection />

      <section id="services" className="py-24 px-6 flex flex-col items-center text-center">
        <ParallaxHeading speed={35}>
          <p className="text-sm uppercase tracking-widest text-[var(--text)] font-medium mb-6">
            What we do
          </p>
          <TextBlockAnimation duration={1.5} stagger={0.1}>
            <h2 
              className="text-5xl md:text-7xl lg:text-8xl font-light italic text-[var(--text)] leading-[0.95] max-w-5xl mx-auto"
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
          <div className="flex justify-center gap-16 mt-10">
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
      <section className="py-24 px-6 flex flex-col items-center text-center">
        <ParallaxHeading speed={30}>
          <p className="text-sm uppercase tracking-widest text-[var(--text)] font-medium mb-6">
            Our Process
          </p>
          <TextBlockAnimation duration={1.2} stagger={0.09}>
            <h2
              className="text-5xl md:text-7xl lg:text-8xl font-light italic text-[var(--text)] leading-[0.95] max-w-4xl mx-auto"
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
          <div style={{ display: "flex", flexDirection: "column", flex: 1, borderTop: "1px solid var(--border-sub)", width: "100%", position: "relative" }}>
            <span style={{ position: "absolute", right: 0, top: "50%", transform: "translateY(-50%)", fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(1.8rem, 2.5vw, 3.2rem)", letterSpacing: "-0.03em", lineHeight: 1, color: "var(--text-muted)", textAlign: "right" }}>Strategy &amp; Research</span>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", flex: 1, paddingTop: "2rem", paddingBottom: "10vh" }}>
              <div style={{ maxWidth: "800px", alignSelf: "flex-start" }}>
                <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(3.5rem, 8vw, 6.8rem)", fontWeight: 300, fontStyle: "italic", color: "var(--text)", lineHeight: 1.05, letterSpacing: "-0.04em", marginBottom: "1.5rem" }}>
                  We listen before we create
                </h3>
                <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: "clamp(1.25rem, 2.4vw, 1.55rem)", color: "var(--text-muted)", lineHeight: 1.65, maxWidth: "700px" }}>
                  Deep discovery sessions, competitor audits, and market analysis — we map out your terrain before a single pixel is placed. Strategy isn't a phase, it's the foundation.
                </p>
              </div>
            </div>
          </div>
        </FlowSection>

        {/* Step 2 — Design */}
        <FlowSection id="process-design" aria-label="Step 2: Design" style={{ backgroundColor: "var(--bg)", borderRadius: "24px" }}>
          <div style={{ display: "flex", flexDirection: "column", flex: 1, borderTop: "1px solid var(--border-sub)", width: "100%", position: "relative" }}>
            <span style={{ position: "absolute", right: 0, top: "50%", transform: "translateY(-50%)", fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(1.8rem, 2.5vw, 3.2rem)", letterSpacing: "-0.03em", lineHeight: 1, color: "var(--text-muted)", textAlign: "right" }}>UI / UX</span>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", flex: 1, paddingTop: "2rem", paddingBottom: "10vh" }}>
              <div style={{ maxWidth: "800px", alignSelf: "flex-start" }}>
                <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(3.5rem, 8vw, 6.8rem)", fontWeight: 300, fontStyle: "italic", color: "var(--text)", lineHeight: 1.05, letterSpacing: "-0.04em", marginBottom: "1.5rem" }}>
                  Beauty with a purpose
                </h3>
                <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: "clamp(1.25rem, 2.4vw, 1.55rem)", color: "var(--text-muted)", lineHeight: 1.65, maxWidth: "700px" }}>
                  Wireframes evolve into pixel-perfect interfaces. Every component, every spacing decision, every animation serves conversion — aesthetics that mean business.
                </p>
              </div>
            </div>
          </div>
        </FlowSection>

        {/* Step 3 — Build */}
        <FlowSection id="process-build" aria-label="Step 3: Build" style={{ backgroundColor: "var(--bg)", borderRadius: "24px" }}>
          <div style={{ display: "flex", flexDirection: "column", flex: 1, borderTop: "1px solid var(--border-sub)", width: "100%", position: "relative" }}>
            <span style={{ position: "absolute", right: 0, top: "50%", transform: "translateY(-50%)", fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(1.8rem, 2.5vw, 3.2rem)", letterSpacing: "-0.03em", lineHeight: 1, color: "var(--text-muted)", textAlign: "right" }}>Engineering</span>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", flex: 1, paddingTop: "2rem", paddingBottom: "10vh" }}>
              <div style={{ maxWidth: "800px", alignSelf: "flex-start" }}>
                <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(3.5rem, 8vw, 6.8rem)", fontWeight: 300, fontStyle: "italic", color: "var(--text)", lineHeight: 1.05, letterSpacing: "-0.04em", marginBottom: "1.5rem" }}>
                  Code that scales without limits
                </h3>
                <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: "clamp(1.25rem, 2.4vw, 1.55rem)", color: "var(--text-muted)", lineHeight: 1.65, maxWidth: "700px" }}>
                  Clean, performant, production-ready code. From Next.js frontends to Node.js APIs and cloud infrastructure — built to handle 10 users or 10 million.
                </p>
              </div>
            </div>
          </div>
        </FlowSection>

        {/* Step 4 — Launch */}
        <FlowSection id="process-launch" aria-label="Step 4: Launch" style={{ backgroundColor: "var(--bg)", borderRadius: "24px" }}>
          <div style={{ display: "flex", flexDirection: "column", flex: 1, borderTop: "1px solid var(--border-sub)", width: "100%", position: "relative" }}>
            <span style={{ position: "absolute", right: 0, top: "50%", transform: "translateY(-50%)", fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(1.8rem, 2.5vw, 3.2rem)", letterSpacing: "-0.03em", lineHeight: 1, color: "var(--text-muted)", textAlign: "right" }}>Deployment &amp; Growth</span>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", flex: 1, paddingTop: "2rem", paddingBottom: "10vh" }}>
              <div style={{ maxWidth: "800px", alignSelf: "flex-start" }}>
                <h3 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(3.5rem, 8vw, 6.8rem)", fontWeight: 300, fontStyle: "italic", color: "var(--text)", lineHeight: 1.05, letterSpacing: "-0.04em", marginBottom: "1.5rem" }}>
                  Ship fast. Grow fearlessly.
                </h3>
                <p style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: "clamp(1.25rem, 2.4vw, 1.55rem)", color: "var(--text-muted)", lineHeight: 1.65, maxWidth: "700px" }}>
                  Continuous deployment, performance monitoring, SEO tuning, and iteration sprints. We stay partners long after the site goes live — your growth is our metric.
                </p>
                <a
                  href="/contact"
                  style={{ display: "inline-block", marginTop: "2.5rem", fontFamily: "'Inter Tight', sans-serif", fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text)", border: "1px solid var(--border-sub)", padding: "14px 32px", borderRadius: "100px", textDecoration: "none", transition: "border-color 0.2s ease", pointerEvents: "all" }}
                >
                  Start your project →
                </a>
              </div>
            </div>
          </div>
        </FlowSection>
      </FlowArt>

      <section className="py-24 px-6 flex flex-col items-center text-center">
        <ParallaxHeading speed={30}>
          <p className="text-sm uppercase tracking-widest text-[var(--text)] font-medium mb-6">
            Case Study
          </p>
          <TextBlockAnimation duration={1.2} stagger={0.09}>
            <h2 
              className="text-5xl md:text-7xl lg:text-8xl font-light italic text-[var(--text)] leading-[0.95] max-w-4xl mx-auto"
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

      <section className="py-24 px-6 flex flex-col items-center text-center">
        <ParallaxHeading speed={30}>
          <p className="text-sm uppercase tracking-widest text-[var(--text)] font-medium mb-6">
            Testimonials
          </p>
          <TextBlockAnimation duration={1.2} stagger={0.08}>
            <h2 
              className="text-5xl md:text-7xl lg:text-8xl font-light italic text-[var(--text)] leading-[0.95] max-w-4xl mx-auto"
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

      <section className="py-24 px-6 flex flex-col items-center text-center">
        <ParallaxHeading speed={30}>
          <p className="text-sm uppercase tracking-widest text-[var(--text)] font-medium mb-6">
            Pricing
          </p>
          <TextBlockAnimation duration={1.2} stagger={0.08}>
            <h2 
              className="text-5xl md:text-7xl lg:text-8xl font-light italic text-[var(--text)] leading-[0.95] max-w-3xl mx-auto"
              style={{ fontFamily: "'Instrument Serif', serif", letterSpacing: "-0.04em" }}
            >
              Pick the plan that fits your start-up
            </h2>
          </TextBlockAnimation>
        </ParallaxHeading>
      </section>

      <LandingReveal />

      <section className="py-24 px-6 flex flex-col items-center text-center">
        <ParallaxHeading speed={25}>
          <p className="text-sm uppercase tracking-widest text-[var(--text)] font-medium mb-6">
            FAQ
          </p>
          <TextBlockAnimation duration={1.2} stagger={0.08}>
            <h2 
              className="text-5xl md:text-7xl lg:text-8xl font-light italic text-[var(--text)] leading-[0.95] max-w-2xl mx-auto"
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
      <Footer />
    </main>
  );
}
