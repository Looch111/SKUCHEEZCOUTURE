'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './ContactSection.module.css';

export default function ContactSection() {
  const [isMobileRevealed, setIsMobileRevealed] = useState(false);
  const imageFrameRef = useRef(null);

  useEffect(() => {
    let timer = null;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // When image scrolls into view on desktop or mobile, trigger reveal after 2 seconds
          timer = setTimeout(() => {
            setIsMobileRevealed(true);
          }, 2000);
        } else {
          // When image leaves view, clear timer and reset reveal
          if (timer) clearTimeout(timer);
          setIsMobileRevealed(false);
        }
      },
      { threshold: 0.5 }
    );

    const currentRef = imageFrameRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (timer) clearTimeout(timer);
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section id="contact" className={`${styles.contactSection} revealOnScroll`}>
      {/* Top Center Order Pill */}
      <div className={`${styles.topPillWrapper} revealOnScroll`}>
        <a href="#contact" className={styles.orderBtnWrapper}>
          <span className={styles.orderBtnInner}>Place Your Order</span>
        </a>
      </div>

      <div className={styles.contactGrid}>
        {/* Left Column: Details */}
        <div className={`${styles.leftCol} revealOnScroll`}>
          <div className={styles.sectionMeta}>
            <span className={styles.subtag}>CONTACT</span>
            <h2 className={`font-milchella ${styles.mainTitle}`}>
              Place your order.
            </h2>
            <p className={styles.descriptionText}>
              Reach the atelier directly. We respond within twenty-four hours, every day. Bring your event date, your fabric preferences, and the silhouette you have in mind.
            </p>

            <div className={styles.actionRow}>
              <a
                href="https://wa.me/2347013144975?text=Greetings%20SKUCHEEZ%20COUTURE%2C%20I%20would%20like%20to%20inquire%20about%20commissioning%20a%20signature%20garment%20from%20the%20atelier."
                target="_blank"
                rel="noopener noreferrer"
                className={styles.orderBtnWrapper}
              >
                <span className={styles.orderBtnInner}>Chat on WhatsApp</span>
              </a>
              <a href="mailto:skucheezcouture@warri.com" className={styles.emailLink}>
                skucheezcouture@warri.com
              </a>
            </div>
          </div>

          <div className={styles.studioMeta}>
            <span className={styles.subtag}>STUDIO</span>
            <Image
              src="/logo.png"
              alt="SKUCHEEZ COUTURE"
              width={180}
              height={45}
              className={styles.studioLogoImage}
            />
            <p className={styles.studioDetails}>
              112 Okumagba Avenue, Warri, Delta State<br />
              By appointment only
            </p>
            <a href="tel:+2347013144975" className={styles.phoneLink}>
              +234 701 314 4975
            </a>
          </div>
        </div>

        {/* Right Column: Mannequin / Founder Image with Social Blur Overlay */}
        <div className={styles.rightCol}>
          <div
            ref={imageFrameRef}
            className={`${styles.imageFrame} ${isMobileRevealed ? styles.mobileRevealed : ''}`}
            onClick={() => setIsMobileRevealed((prev) => !prev)}
          >
            <Image
              src="/card-img/owner.webp"
              alt="SKUCHEEZ COUTURE Founder"
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              className={styles.contactImage}
              priority
            />
            {/* Hover Blur & Social Overlay */}
            <div className={styles.socialOverlay}>
              <div className={styles.socialIconsGrid}>
                <a
                  href="https://x.com/Skucheezfx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIconBtn}
                  aria-label="X (Twitter)"
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="https://vm.tiktok.com/ZS9rKXfGN7kTS-yqzSA/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIconBtn}
                  aria-label="TikTok"
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-5.2-1.74 2.89 2.89 0 0 1 2.31-1.39v-3.5a6.37 6.37 0 0 0-3.41.97A6.34 6.34 0 0 0 3.12 14.5a6.34 6.34 0 0 0 5.48 6.37 6.3 6.3 0 0 0 6.77-6.26V9.05a8.28 8.28 0 0 0 4.22 1.14v-3.5a4.84 4.84 0 0 1-3-.04z" />
                  </svg>
                </a>
                <a
                  href="https://t.me/skucheez"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIconBtn}
                  aria-label="Telegram"
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.69-.52.36-1 .54-1.43.53-.47-.01-1.37-.26-2.04-.48-.82-.27-1.47-.42-1.42-.88.03-.24.36-.49.99-.75 3.89-1.69 6.48-2.81 7.78-3.35 3.7-1.54 4.47-1.81 4.97-1.82.11 0 .36.03.52.16.14.11.18.26.2.37.01.08.02.26.01.41z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com/skucheezcouture"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIconBtn}
                  aria-label="Instagram"
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://wa.me/2347013144975?text=Greetings%20SKUCHEEZ%20COUTURE%2C%20I%20would%20like%20to%20inquire%20about%20commissioning%20a%20signature%20garment%20from%20the%20atelier."
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIconBtn}
                  aria-label="WhatsApp"
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
