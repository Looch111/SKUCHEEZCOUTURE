"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Services from "@/components/Services/Services";
import ContactSection from "@/components/Contact/ContactSection";
import Footer from "@/components/Footer/Footer";
import BespokeModal from "@/components/UI/BespokeModal";
import styles from "./page.module.css";

function GoldParticles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize, { passive: true });

    const isMobile = width < 768;
    const particleCount = isMobile ? 30 : 60;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.8 + 0.8,
      color: `rgba(${215 + Math.floor(Math.random() * 40)}, ${175 + Math.floor(Math.random() * 45)}, 90, `,
      alpha: Math.random() * 0.45 + 0.2,
      speedY: -(Math.random() * 0.35 + 0.12),
      speedX: (Math.random() - 0.5) * 0.2,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: Math.random() * 0.02 + 0.008,
    }));

    let lastTime = performance.now();

    const render = (now) => {
      // Throttle render loop to ~60fps to conserve GPU & CPU energy
      if (now - lastTime < 15) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }
      lastTime = now;

      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particleCount; i++) {
        const p = particles[i];
        p.y += p.speedY;
        p.x += p.speedX + Math.sin(p.pulse) * 0.2;
        p.pulse += p.pulseSpeed;

        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        const currentAlpha = p.alpha + Math.sin(p.pulse) * 0.15;
        const finalAlpha = Math.max(0.1, Math.min(0.8, currentAlpha));

        ctx.beginPath();
        ctx.fillStyle = p.color + finalAlpha.toFixed(2) + ")";
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 1,
        transform: "translate3d(0, 0, 0)",
        willChange: "transform",
      }}
    />
  );
}

const collectionItems = [
  {
    id: 1,
    title: "ROYAL EMERALD AGBADA",
    materials: "FRENCH LACE · GOLD THREADWORK",
    eventDetails: "ENGAGEMENT · WARRI, DELTA STATE · 2026",
    image: "/card-img/card7.png",
    rotation: "-7deg",
    translateY: "3.71px",
  },
  {
    id: 2,
    title: "SLATE ARCHITECTURAL AGBADA",
    materials: "EMBROIDERED WOOL · DAMASK",
    eventDetails: "CORONATION · WARRI, DELTA STATE · 2026",
    image: "/card-img/card2.png",
    rotation: "7deg",
    translateY: "0.25px",
  },
  {
    id: 3,
    title: "OBSIDIAN BESPOKE KAFTAN",
    materials: "FINE CASHMERE · TONE-ON-TONE",
    eventDetails: "ROYAL WEDDING · WARRI, DELTA STATE · 2026",
    image: "/card-img/card11.png",
    rotation: "-7deg",
    translateY: "-0.77px",
  },
  {
    id: 4,
    title: "WHITE MOSAIC CEREMONIAL AGBADA",
    materials: "HAND-WOVEN BROCADE · GEOMETRIC THREAD",
    eventDetails: "SIGNATURE GALA · WARRI, DELTA STATE · 2026",
    image: "/card-img/card4.png",
    rotation: "7deg",
    translateY: "-5.35px",
  },
  {
    id: 5,
    title: "TACTICAL SAFARI SENATOR",
    materials: "PREMIUM COTTON · METALLIC HARNESS",
    eventDetails: "ANNIVERSARY · WARRI, DELTA STATE · 2026",
    image: "/card-img/card9.png",
    rotation: "-7deg",
    translateY: "-13.1px",
  },
  {
    id: 6,
    title: "CHAMPAGNE HERITAGE AGBADA",
    materials: "LUXURY SILK · DIAGONAL FLORAL CREST",
    eventDetails: "ATELIER SPECIAL · WARRI, DELTA STATE · 2026",
    image: "/card-img/card1.png",
    rotation: "7deg",
    translateY: "-20.28px",
  },
  {
    id: 7,
    title: "MIDNIGHT MANDALA KAFTAN",
    materials: "MIDNIGHT CASHMERE · STAR MANDALA",
    eventDetails: "BESPOKE SUITE · WARRI, DELTA STATE · 2026",
    image: "/card-img/card10.png",
    rotation: "-7deg",
    translateY: "-23.75px",
  },
  {
    id: 8,
    title: "SOVEREIGN CHEVRON AGBADA",
    materials: "PURE WHITE COTTON · GOLD LATTICE",
    eventDetails: "CEREMONIAL · WARRI, DELTA STATE · 2026",
    image: "/card-img/card5.png",
    rotation: "7deg",
    translateY: "-23.23px",
  },
];

function LoadingScreen({ onComplete }) {
  const [isOpeningPortal, setIsOpeningPortal] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsOpeningPortal(true), 1200);
          setTimeout(() => onComplete(), 3600);
          return 100;
        }
        return prev + Math.floor(Math.random() * 4 + 2);
      });
    }, 110);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className={styles.loaderContainer}>
      {/* Left Portal Door */}
      <div
        className={`${styles.portalDoor} ${styles.portalDoorLeft} ${isOpeningPortal ? styles.openLeft : ""
          }`}
      />
      {/* Right Portal Door */}
      <div
        className={`${styles.portalDoor} ${styles.portalDoorRight} ${isOpeningPortal ? styles.openRight : ""
          }`}
      />

      {/* Expanding Central Gold Shockwave Flare */}
      <div
        className={`${styles.portalRingFlare} ${isOpeningPortal ? styles.expandFlare : ""
          }`}
      />

      {/* Center Logo Content */}
      <div
        className={styles.loaderContent}
        style={{
          opacity: isOpeningPortal ? 0 : 1,
          transform: isOpeningPortal ? "scale(1.12)" : "scale(1)",
          transition: "opacity 0.5s ease, transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div className={styles.loaderLogoWrapper}>
          <Image
            src="/logo.png"
            alt="SKUCHEEZ COUTURE Logo"
            width={340}
            height={95}
            priority
            className={styles.loaderLogo}
          />
        </div>

        {/* Minimal Gold Progress Track */}
        <div className={styles.loaderProgressTrack}>
          <div
            className={styles.loaderProgressBar}
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
        <span className={styles.loaderPercent}>{Math.min(progress, 100)}%</span>
      </div>
    </div>
  );
}

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredCardId, setHoveredCardId] = useState(null);
  const [mobileSelectedCard, setMobileSelectedCard] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const storyVideoRef = useRef(null);

  // Play background story video ONLY after portal loader finishes opening
  useEffect(() => {
    if (!isLoading && storyVideoRef.current) {
      storyVideoRef.current.play().catch(() => {
        // Autoplay browser fallback
      });
    }
  }, [isLoading]);

  // Ensure page always starts at the top on refresh
  useEffect(() => {
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
      window.scrollTo(0, 0);
    }
  }, []);

  // Lock body scroll while portal loader or mobile modal is active
  useEffect(() => {
    if (isLoading || mobileSelectedCard) {
      document.body.style.overflow = "hidden";
      if (isLoading) window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading, mobileSelectedCard]);

  // Typewriter Effect for Hero Headline & Callout Pin
  const [typedPart1, setTypedPart1] = useState("");
  const [typedPart2, setTypedPart2] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [typedCallout, setTypedCallout] = useState("");
  const [isCalloutTypingComplete, setIsCalloutTypingComplete] = useState(false);

  useEffect(() => {
    if (isLoading) return;

    const text1 = "Royalty,";
    const text2 = "in every stitch.";
    const calloutFullText = "Crafted in Warri.";
    let idx1 = 0;

    const timeout = setTimeout(() => {
      const interval1 = setInterval(() => {
        if (idx1 <= text1.length) {
          setTypedPart1(text1.slice(0, idx1));
          idx1++;
        } else {
          clearInterval(interval1);
          let idx2 = 0;
          const interval2 = setInterval(() => {
            if (idx2 <= text2.length) {
              setTypedPart2(text2.slice(0, idx2));
              idx2++;
            } else {
              clearInterval(interval2);
              setIsTypingComplete(true);

              // Start typewriter for "Crafted in Warri." callout pin
              let idxCallout = 0;
              const intervalCallout = setInterval(() => {
                if (idxCallout <= calloutFullText.length) {
                  setTypedCallout(calloutFullText.slice(0, idxCallout));
                  idxCallout++;
                } else {
                  clearInterval(intervalCallout);
                  setIsCalloutTypingComplete(true);
                }
              }, 60);
            }
          }, 65);
        }
      }, 85);
    }, 400);

    return () => clearTimeout(timeout);
  }, [isLoading]);

  const [scrollY, setScrollY] = useState(0);
  const [isNavHidden, setIsNavHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const diff = currentScrollY - lastScrollY;

          if (Math.abs(diff) > 15 || currentScrollY <= 20) {
            if (diff > 0 && currentScrollY > 120) {
              setIsNavHidden((prev) => (!prev ? true : prev));
            } else if (diff < 0 || currentScrollY <= 80) {
              setIsNavHidden((prev) => (prev ? false : prev));
            }
            lastScrollY = currentScrollY;
          }

          if (currentScrollY < 800) {
            setScrollY(currentScrollY);
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll Reveal Intersection Observer (Smooth single-reveal to eliminate section flickering/shake)
  useEffect(() => {
    if (isLoading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("isRevealed");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -20px 0px",
      }
    );

    const revealElements = document.querySelectorAll(".revealOnScroll");
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [isLoading]);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <div className={`${styles.pageContainer} ${!isLoading ? styles.pageLoaded : ""}`}>
        {/* ---------------- SECTION 1: HERO SHOWCASE ---------------- */}
        <section className={styles.heroContainer}>
          {/* Background Vignette */}
          <div className={styles.bgVignette} />

          {/* Ambient Flying Gold Dust Particles */}
          <GoldParticles />

          {/* Header Navigation Bar */}
          <header
            className={`${styles.navbar} ${
              isNavHidden && !mobileMenuOpen ? styles.navbarHidden : ""
            }`}
          >
            <div className={styles.logoBox}>
              <Image
                src="/logo.png"
                alt="SKUCHEEZ COUTURE Logo"
                width={320}
                height={90}
                className={styles.logoImg}
                priority
              />
            </div>

            {/* Desktop Navigation Menu */}
            <nav className={styles.desktopNav}>
              <ul className={styles.navMenu}>
                <li>
                  <a href="#collections" className={styles.navLink}>
                    Collections
                  </a>
                </li>
                <li>
                  <a href="#story" className={styles.navLink}>
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#services" className={styles.navLink}>
                    Our Services
                  </a>
                </li>
                <li>
                  <a href="#contact" className={styles.navLink}>
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>

            <div className={styles.navActions}>
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className={styles.orderBtnWrapper}
                aria-label="Order Bespoke Consultation"
              >
                <span className={styles.orderBtnInner}>
                  Order Bespoke
                </span>
              </button>

              {/* Mobile Menu Toggle Button */}
              <button
                type="button"
                className={styles.mobileMenuBtn}
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <line x1="3" y1="3" x2="17" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="17" y1="3" x2="3" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                ) : (
                  <svg width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <line x1="0" y1="1" x2="22" y2="1" stroke="currentColor" strokeWidth="1.5" />
                    <line x1="0" y1="13" x2="14" y2="13" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                )}
              </button>
            </div>
          </header>

          {/* Mobile Navigation Drawer Overlay */}
          {mobileMenuOpen && (
            <div className={styles.mobileDrawer}>
              <ul className={styles.mobileNavMenu}>
                <li className={styles.mobileNavItem}>
                  <a
                    href="#collections"
                    className={styles.mobileNavLink}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Collections
                  </a>
                </li>
                <li className={styles.mobileNavItem}>
                  <a
                    href="#story"
                    className={styles.mobileNavLink}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About Us
                  </a>
                </li>
                <li className={styles.mobileNavItem}>
                  <a
                    href="#contact"
                    className={styles.mobileNavLink}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact Us
                  </a>
                </li>
                <li className={styles.mobileNavItem}>
                  <a
                    href="#services"
                    className={styles.mobileNavLink}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Our Services
                  </a>
                </li>
              </ul>

              <div className={styles.mobileDrawerFooter}>
                <button
                  type="button"
                  className={styles.mobileOrderBtnWrapper}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setModalOpen(true);
                  }}
                >
                  <span className={styles.mobileOrderBtn}>Order</span>
                </button>
              </div>
            </div>
          )}

          {/* Center Agbada Mannequin Showcase */}
          <div
            className={styles.mannequinWrapper}
            style={{
              transform: `translate3d(-50%, calc(-46% - ${scrollY * 0.2}px), 0)`,
              opacity: Math.max(0, 1 - scrollY / 550),
            }}
          >
            <video
              src="/man.mp4"
              autoPlay
              loop
              muted
              playsInline
              className={styles.mannequinVideo}
            />
          </div>

          {/* Pinned Chest Annotation: "Crafted in Warri." */}
          <div
            className={styles.calloutContainer}
            style={{
              transform: `translate3d(0, ${-scrollY * 0.35}px, 0)`,
              opacity: Math.max(0, 1 - scrollY / 400),
            }}
          >
            <div className={styles.calloutTextWrapper}>
              <p className={styles.calloutText}>
                {typedCallout}
                {typedCallout.length > 0 && !isCalloutTypingComplete && (
                  <span className={styles.typingCursor} />
                )}
              </p>
            </div>
            <svg
              width="400"
              height="55"
              viewBox="0 0 400 55"
              fill="none"
              className={styles.calloutSvgDesktop}
            >
              <path
                d="M 0 1.5 L 350 1.5 L 400 52"
                stroke="rgba(255, 255, 255, 0.75)"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.calloutPathDesktop}
              />
              <circle
                cx="400"
                cy="52"
                r="9"
                fill="rgba(245, 208, 97, 0.35)"
                className={styles.goldHaloDesktop}
              />
              <circle cx="400" cy="52" r="4.5" fill="#F5D061" className={styles.goldDotDesktop} />
            </svg>

            {/* Mobile SVG Path */}
            <svg
              className={styles.calloutSvgMobile}
              width="200"
              height="50"
              viewBox="0 0 200 50"
              fill="none"
            >
              <path
                d="M 0 1.5 L 140 1.5 L 175 38"
                stroke="rgba(255, 255, 255, 0.85)"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.calloutPathMobile}
              />
              <circle
                cx="175"
                cy="38"
                r="8"
                fill="rgba(245, 208, 97, 0.35)"
                className={styles.goldHaloMobile}
              />
              <circle cx="175" cy="38" r="4" fill="#F5D061" className={styles.goldDotMobile} />
            </svg>
          </div>

          {/* Hero Right Content Card */}
          <div
            className={styles.rightContent}
            style={{
              transform: `translate3d(0, ${-scrollY * 0.45}px, 0)`,
              opacity: Math.max(0, 1 - scrollY / 450),
            }}
          >
            <span className={styles.categoryTag}>SKUCHEEZ COUTURE · WARRI DELTA STATE</span>
            <h1 className={styles.mainHeading}>
              {typedPart1}
              <span className={styles.italicSpan}>
                {typedPart2}
                {typedPart1.length > 0 && !isTypingComplete && (
                  <span className={styles.typingCursor} />
                )}
              </span>
            </h1>
            <p className={styles.description}>
              Hand-tailored Agbada for grooms, chiefs, and gentlemen of culture — from
              owambe to the throne.
            </p>

            <a href="#collections" className={styles.explorePillContainer}>
              <span className={styles.orderPillBorder}>
                <span className={styles.orderPillBg}>Explore Collection</span>
              </span>
            </a>
          </div>

          {/* Bottom Scroll Indicator */}
          <a
            href="#story"
            className={`${styles.scrollIndicator} ${scrollY > 80 ? styles.scrollIndicatorHidden : ""
              }`}
          >
            <span className={styles.scrollArrow}>↓</span>
            <span>Scroll</span>
          </a>
        </section>

        {/* ---------------- SECTION 2: THE ATELIER STORY ---------------- */}
        <section id="story" className={`${styles.storyContainer} revealOnScroll`}>
          <span id="about" style={{ position: 'absolute', top: 0 }} />
          <div className={styles.storyInnerRelative}>
            <div className={styles.storyImageAspectBox}>
              <Image
                src="/about1.webp"
                alt="Inside the SKUCHEEZ COUTURE atelier — tailors at work"
                fill
                priority
                quality={95}
                className={styles.storyBgImgDesktop}
              />
              <div className={styles.storyVideoWrapper}>
                <video
                  ref={storyVideoRef}
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className={styles.storyBgVideoMobile}
                >
                  <source src="/vid.mp4" type="video/mp4" />
                </video>
                <div className={styles.storyVideoBlendOverlay} />
              </div>
              <div className={styles.storyOverlayGradient} />
            </div>

            <div className={`${styles.storyContentOverlay} revealOnScroll`}>
              <span className={styles.storyCategoryTag}>The Atelier Story</span>
              <h2 className={styles.storyHeading}>
                Where heritage meets <span className={styles.storyItalic}>couture.</span>
              </h2>
              <div className={styles.storyQuote}>
                “An agbada is not merely draped; it is a canvas of identity.”
              </div>
              <p className={styles.storyDescription}>
                Rooted in West African craftsmanship, every garment reflects timeless elegance and architectural precision. Our master artisans dedicate over eighty hours to each piece, transforming premium fabrics into wearable works of art through meticulous hand-finished detailing.
              </p>
            </div>
          </div>
        </section>

        {/* ---------------- SECTION 3: THE COLLECTION ---------------- */}
        <section id="collections" className={`${styles.collectionSection} revealOnScroll`} aria-label="Collections">
          <div className={`${styles.collectionHeader} revealOnScroll`}>
            <span className={styles.collectionTag}>The Collection</span>
            <h2 className={`font-milchella text-4xl md:text-6xl lg:text-7xl font-normal leading-[1] tracking-tight ${styles.collectionTitle}`}>
              Pieces from the <span className={styles.collectionItalic}>atelier.</span>
            </h2>
          </div>

          <div className={`${styles.carouselContainer} revealOnScroll`}>
            <div
              className={`${styles.carouselTrack} ${hoveredCardId !== null ? styles.hasHoveredCard : ""
                }`}
            >
              {[...collectionItems, ...collectionItems].map((item, index) => {
                const cardKey = `${item.id}-${index}`;
                const isHovered = hoveredCardId === cardKey;
                return (
                  <div
                    key={cardKey}
                    className={`${styles.collectionCard} ${isHovered ? styles.cardHovered : ""
                      }`}
                    style={{
                      zIndex: 1,
                      "--rotation": item.rotation,
                      "--translate-y": item.translateY,
                      "--float-delay": `${(index % 4) * 0.2}s`,
                    }}
                    onMouseEnter={() => setHoveredCardId(cardKey)}
                    onMouseLeave={() => setHoveredCardId(null)}
                    onClick={() => {
                      if (typeof window !== "undefined" && window.innerWidth <= 768) {
                        setMobileSelectedCard(item);
                      }
                    }}
                  >
                    <div className={styles.cardImageWrapper}>
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={300}
                        height={400}
                        className={styles.cardImage}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Centered Spotlight View when any card is hovered (Desktop) */}
            {hoveredCardId && (() => {
              const itemsList = [...collectionItems, ...collectionItems];
              const activeItem = itemsList.find((item, index) => `${item.id}-${index}` === hoveredCardId);
              if (!activeItem) return null;
              return (
                <div className={styles.centerSpotlightWrapper}>
                  <div className={styles.spotlightCard}>
                    <div className={styles.cardImageWrapper}>
                      <Image
                        key={activeItem.id}
                        src={activeItem.image}
                        alt={activeItem.title}
                        width={300}
                        height={400}
                        className={styles.spotlightImage}
                      />
                    </div>
                  </div>

                  <div key={activeItem.id} className={styles.detailPopoutPillSpotlight}>
                    <div className={styles.detailRow}>
                      <span className={styles.detailDash} />
                      <h3 className={styles.detailTitle}>{activeItem.title}</h3>
                    </div>
                    <div className={styles.detailRow}>
                      <span className={styles.detailDash} />
                      <span className={styles.detailSubtext}>
                        {activeItem.materials}
                      </span>
                    </div>
                    <div className={styles.detailRow}>
                      <span className={styles.detailDash} />
                      <span className={styles.detailSubtext}>
                        {activeItem.eventDetails}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>

          {/* Mobile Tap Modal View when any card is tapped */}
          {mobileSelectedCard && (
            <div
              className={styles.mobileModalBackdrop}
              onClick={() => setMobileSelectedCard(null)}
            >
              <div
                className={styles.mobileModalCardWrapper}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className={styles.mobileModalCloseBtn}
                  onClick={() => setMobileSelectedCard(null)}
                  aria-label="Close modal"
                >
                  ✕
                </button>

                <div className={styles.mobileModalCard}>
                  <div className={styles.mobileModalImageWrapper}>
                    <Image
                      src={mobileSelectedCard.image}
                      alt={mobileSelectedCard.title}
                      width={300}
                      height={400}
                      className={styles.mobileModalImage}
                    />
                  </div>
                </div>

                <div className={styles.mobileModalDetailPill}>
                  <div className={styles.detailRow}>
                    <span className={styles.detailDash} />
                    <h3 className={styles.detailTitle}>{mobileSelectedCard.title}</h3>
                  </div>
                  <div className={styles.detailRow}>
                    <span className={styles.detailDash} />
                    <span className={styles.detailSubtext}>
                      {mobileSelectedCard.materials}
                    </span>
                  </div>
                  <div className={styles.detailRow}>
                    <span className={styles.detailDash} />
                    <span className={styles.detailSubtext}>
                      {mobileSelectedCard.eventDetails}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className={`${styles.seeAllBtnWrapper} revealOnScroll`}>
            <a href="/collections" className={styles.orderPillContainer}>
              <span className={styles.orderPillBorder}>
                <span className={styles.orderPillBg}>See All Collections</span>
              </span>
            </a>
          </div>
        </section>

        {/* ---------------- SECTION 4: SERVICES & PROCESS ---------------- */}
        <div className="revealOnScroll">
          <Services />
        </div>

        {/* ---------------- SECTION 5: CONTACT & ORDER ---------------- */}
        <div className="revealOnScroll">
          <ContactSection />
        </div>

        {/* ---------------- FOOTER ---------------- */}
        <Footer />
      </div>

      {/* ---------------- BESPOKE ORDER MODAL ---------------- */}
      <BespokeModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
