import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import NavBar from '@/components/NavBar/NavBar';
import Footer from '@/components/Footer/Footer';
import TechMarquee from '@/components/TechMarquee/TechMarquee';

export default function ComingSoonPage() {
  return (
    <main className="relative flex flex-col min-h-screen bg-[var(--bg)]">
      <NavBar />
      
      <div className="flex-1 flex flex-col items-center justify-center px-6 pt-32 pb-24 text-center">
        <span className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--text-muted)] mb-8 anim-slide-up d-100">
          Work in progress
        </span>
        
        <h1 
          className="text-6xl md:text-8xl lg:text-9xl font-light italic text-[var(--text)] mb-8 anim-slide-up d-250 leading-[0.9]"
          style={{ fontFamily: "'Instrument Serif', serif", letterSpacing: "-0.04em" }}
        >
          Coming Soon
        </h1>
        
        <p className="text-lg md:text-xl text-[var(--text-sec)] max-w-lg mb-12 anim-slide-up d-420">
          We are currently working hard to bring you an amazing experience. 
          Stay tuned for something extraordinary.
        </p>
        
        <div className="anim-slide-up d-600">
          <Link 
            href="/" 
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-[var(--border-sub)] text-[var(--text)] text-sm font-medium uppercase tracking-widest hover:bg-[var(--text)] hover:text-[var(--bg)] transition-all duration-300"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </div>
      
      <div className="w-full border-y border-[var(--border-sub)]/30">
        <TechMarquee />
      </div>
      
      <Footer />
    </main>
  );
}
