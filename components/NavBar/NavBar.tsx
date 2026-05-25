"use client";
import React, { useState, useEffect } from "react";
import styles from "./NavBar.module.css";
import ThemeToggle from "../ThemeToggle";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const NavBar: React.FC = () => {
  const pathname = usePathname();
  const isContactPage = pathname === "/contact";
  
  const isHomePage = pathname === "/";
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100 && !isMobileMenuOpen) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isMobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const isHeroMode = isHomePage && !isScrolled;

  return (
    <nav 
      className={`
        ${styles.nav} 
        ${!isVisible && !isMobileMenuOpen ? styles.navHidden : ""} 
        ${isScrolled || isMobileMenuOpen ? styles.navScrolled : ""}
        ${isHeroMode ? styles.navHero : ""}
        anim-fade-in d-100
      `} 
      role="navigation" 
      aria-label="Main navigation"
    >
      <div className={styles.inner}>
        <div className={`${styles.pillContainer} ${isMobileMenuOpen ? styles.pillContainerOpen : ""}`}>
          
          {/* Desktop Links */}
          <ul className={styles.links} role="list">
            {!isContactPage && (
              <li>
                <a 
                  href="/" 
                  className={styles.link} 
                  id="nav-home"
                  onClick={(e) => {
                    if (window.location.pathname === '/') {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                >
                  Home
                </a>
              </li>
            )}
            <li><a href="/#work" className={styles.link} id="nav-work">Work</a></li>
            <li><a href="/#services" className={styles.link} id="nav-services">Services</a></li>
            <li>
              <a
                href={isContactPage ? "/" : "/contact"}
                className={`${styles.link} ${styles.linkContact}`}
                id={isContactPage ? "nav-home-btn" : "nav-contact"}
              >
                {isContactPage ? "Home" : "Contact"}
              </a>
            </li>
          </ul>

          <div className={styles.rightControls}>
            <div className={styles.themeToggleWrap}>
              <ThemeToggle isHero={isHeroMode} />
            </div>
            
            {/* Mobile Menu Toggle Button */}
            <button 
              className={styles.mobileMenuBtn} 
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`${styles.mobileMenuOverlay} ${isMobileMenuOpen ? styles.mobileMenuOverlayOpen : ""}`}>
        <ul className={styles.mobileLinks}>
          <li>
            <a href="/" className={styles.mobileLink} onClick={closeMobileMenu}>Home</a>
          </li>
          <li>
            <a href="/#work" className={styles.mobileLink} onClick={closeMobileMenu}>Work</a>
          </li>
          <li>
            <a href="/#services" className={styles.mobileLink} onClick={closeMobileMenu}>Services</a>
          </li>
          <li>
            <a href="/contact" className={styles.mobileLink} onClick={closeMobileMenu}>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
