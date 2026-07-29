import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={`${styles.minimalFooter} revealOnScroll`}>
      <div className={styles.footerContainer}>
        {/* Brand Header */}
        <div className={styles.brandHeader}>
          <Image
            src="/logo.png"
            alt="SKUCHEEZ COUTURE"
            width={220}
            height={70}
            className={styles.brandLogoImage}
            priority
          />
          <span className={styles.brandSubtitle}>COUTURE ATELIER · WARRI</span>
        </div>

        {/* 3 Columns Grid */}
        <div className={styles.columnsGrid}>
          {/* Column 1: Explore */}
          <div className={styles.navColumn}>
            <span className={styles.columnHeader}>EXPLORE</span>
            <ul className={styles.linksList}>
              <li>
                <Link href="#collections" className={styles.footerLink}>
                  Collections
                </Link>
              </li>
              <li>
                <Link href="#story" className={styles.footerLink}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className={styles.footerLink}>
                  Services
                </Link>
              </li>
              <li>
                <Link href="#contact" className={styles.footerLink}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Studio */}
          <div className={styles.navColumn}>
            <span className={styles.columnHeader}>STUDIO</span>
            <div className={styles.infoBlock}>
              <p className={styles.infoText}>112 Okumagba Avenue, Warri, Delta State</p>
              <p className={styles.infoText}>By appointment only</p>
              <a href="tel:+2347013144975" className={styles.infoLink}>
                +234 701 314 4975
              </a>
              <a href="mailto:skucheezcouture@warri.com" className={styles.infoLink}>
                skucheezcouture@warri.com
              </a>
            </div>
          </div>

          {/* Column 3: Follow */}
          <div className={styles.navColumn}>
            <span className={styles.columnHeader}>FOLLOW</span>
            <ul className={styles.linksList}>
              <li>
                <a
                  href="https://instagram.com/skucheezcouture"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.footerLink}
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://vm.tiktok.com/ZS9rKXfGN7kTS-yqzSA/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.footerLink}
                >
                  TikTok
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/Skucheezfx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.footerLink}
                >
                  X (Twitter)
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/2347013144975?text=Greetings%20SKUCHEEZ%20COUTURE%2C%20I%20would%20like%20to%20inquire%20about%20commissioning%20a%20signature%20garment%20from%20the%20atelier."
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.footerLink}
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/skucheez"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.footerLink}
                >
                  Telegram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <span className={styles.copyright}>
            © 2026 SKUCHEEZ COUTURE. ALL GARMENTS ARE ONE OF ONE.
          </span>
          <span className={styles.craftedMark}>CRAFTED IN WARRI</span>
        </div>
      </div>
    </footer>
  );
}