"use client";
import React, { useRef, useEffect } from "react";
import styles from "./HeroSection.module.css";
import NavBar from "../NavBar/NavBar";
import TechMarquee from "../TechMarquee/TechMarquee";
import Link from "next/link";

const HeroSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const minTime = 5;
    const maxTime = 210;

    const getRandomTime = () => Math.random() * (maxTime - minTime) + minTime;

    let segmentStartTime = getRandomTime();
    let isJumping = false;

    const performJump = () => {
      isJumping = true;
      const targetTime = getRandomTime();
      segmentStartTime = targetTime;
      video.currentTime = targetTime;
      
      video.play().catch(err => {
        console.log("Video playback was interrupted or blocked:", err);
      });
    };

    const handleTimeUpdate = () => {
      if (isJumping) return;

      const elapsed = video.currentTime - segmentStartTime;
      if (elapsed >= 5 || elapsed < -1) {
        performJump();
      }
    };

    const handleSeeked = () => {
      isJumping = false;
    };

    const handleMetadata = () => {
      performJump();
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("seeked", handleSeeked);

    if (video.readyState >= 1) {
      performJump();
    } else {
      video.addEventListener("loadedmetadata", handleMetadata);
    }

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("seeked", handleSeeked);
      video.removeEventListener("loadedmetadata", handleMetadata);
    };
  }, []);

  return (
    <section className={styles.section} id="hero" aria-label="Hero section">
      <NavBar />

      {/* Background video — fully covers the hero section */}
      <div className={styles.videoLayer} id="hero-video-layer" aria-hidden="true">
        <video
          ref={videoRef}
          src="/ANOMALY - CINEMATIC SKI COMMERCIAL   SONY FX3 JAPAN [4K].mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className={styles.video}
        />
        {/* Black-and-white overlay only — no blur, no gradient, no extra color filters, no opacity tint */}
        <div className={styles.bwOverlay} />
      </div>

      {/* CANVAS: content layered */}
      <div className={styles.canvas}>

        {/* Content overlay */}
        <div className={styles.contentLayer}>
          
          {/* LEFT: Brand */}
          <div className={`${styles.leftSide} anim-slide-up d-250`}>
            <h1 className={styles.brandGiant}>Usualdev</h1>
          </div>

          {/* RIGHT: Headline & CTA */}
          <div className={`${styles.rightSide} anim-slide-up d-420`}>
            <h2 className={styles.headline}>
              <span className={styles.hLine}>Scalable</span>
              <span className={`${styles.hLine} ${styles.hLineLight}`}>digital products</span>
              <span className={styles.hLine}>for bold</span>
              <span className={`${styles.hLine} ${styles.hLineLight}`}>brands.</span>
            </h2>
            
            <div className={styles.ctas}>
              <Link href="#work" className={styles.ctaPrimary}>View Work</Link>
              <Link href="/contact" className={styles.ctaGhost}>Start a Project →</Link>
            </div>
          </div>

        </div>
      </div>



      <div className="absolute bottom-0 left-0 w-full z-10">
        <TechMarquee />
      </div>
    </section>
  );
};

export default HeroSection;
