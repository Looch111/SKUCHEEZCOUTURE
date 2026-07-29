"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Sparkles, MapPin, Phone, Mail } from "lucide-react";
import { NAV_ITEMS, SOCIAL_LINKS } from "@/lib/constants";
import BespokeModal from "@/components/UI/BespokeModal";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (currentScrollY > 60 && currentScrollY > lastScrollY) {
        setIsHidden(true);
      } else if (currentScrollY < lastScrollY || currentScrollY <= 60) {
        setIsHidden(false);
      }
      lastScrollY = currentScrollY;

      // Track active section for nav highlighting
      const sections = NAV_ITEMS.map((item) => item.href.replace("#", ""));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const element = document.getElementById(sectionId);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(`#${sectionId}`);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu or modal is open
  useEffect(() => {
    if (mobileMenuOpen || modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen, modalOpen]);

  const handleNavClick = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        setMobileMenuOpen(false);
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <>
      {/* Top Announcement / Ticker Bar */}
      <div className={`${styles.tickerBar} ${isScrolled || isHidden ? styles.tickerHidden : ""}`}>
        <div className={styles.tickerContent}>
          <span><MapPin size={11} className={styles.tickerIcon} /> WARRI DELTA STATE &amp; MAYFAIR LONDON SUITE</span>
          <span className={styles.tickerDot}>•</span>
          <span>PRIVATE BESPOKE FITTINGS BY APPOINTMENT ONLY</span>
          <span className={styles.tickerDot}>•</span>
          <span><Phone size={11} className={styles.tickerIcon} /> GLOBAL CONCIERGE: +234 701 314 4975</span>
        </div>
      </div>

      {/* Main Glassmorphic Sticky Header */}
      <header
        className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""} ${isHidden ? styles.navHidden : ""}`}
        role="banner"
      >
        <div className={styles.navbarInner}>
          <a
            href="#"
            onClick={(e) => handleNavClick(e, "#top")}
            className={styles.logoBox}
            aria-label="SKUCHEEZ COUTURE Home"
          >
            <Image
              src="/logo.png"
              alt="SKUCHEEZ COUTURE"
              width={160}
              height={45}
              className={styles.navLogoImage}
              priority
            />
          </a>

          <nav className={styles.desktopNav} aria-label="Main Navigation">
            <ul className={styles.navMenu}>
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href;
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`${styles.navLink} ${isActive ? styles.navLinkActive : ""}`}
                    >
                      {item.label}
                      {isActive && <span className={styles.activeDot} />}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className={styles.navActions}>
            <button
              onClick={() => setModalOpen(true)}
              className={styles.orderBtn}
              aria-label="Order Bespoke Consultation"
            >
              <Sparkles size={13} className={styles.btnIcon} />
              <span>Order Bespoke</span>
            </button>

            <button
              className={styles.mobileMenuBtn}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className={styles.mobileDrawer}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
        >
          <div className={styles.mobileDrawerHeader}>
            <div className={styles.mobileLogoBox}>
              <span className={styles.mobileLogoTitle}>SKUCHEEZ</span>
              <span className={styles.mobileLogoSub}>COUTURE ATELIER</span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className={styles.mobileCloseBtn}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <ul className={styles.mobileNavMenu}>
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={styles.mobileNavLink}
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  <span className={styles.mobileNavNum}>
                    0{NAV_ITEMS.indexOf(item) + 1}
                  </span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className={styles.mobileDrawerFooter}>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setModalOpen(true);
              }}
              className={styles.mobileOrderBtn}
            >
              <Sparkles size={16} />
              <span>Order Bespoke Consultation</span>
            </button>

            <div className={styles.mobileContactInfo}>
              <a href={SOCIAL_LINKS.phone} className={styles.mobileContactItem}>
                <Phone size={14} /> +234 701 314 4975
              </a>
              <a href={SOCIAL_LINKS.email} className={styles.mobileContactItem}>
                <Mail size={14} /> skucheezcouture@warri.com
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Bespoke Consultation Modal */}
      <BespokeModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
