"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, Phone, Camera } from "lucide-react";
import styles from "./Hero.module.css";

const GOLDEN_DOT = (
  <circle className={styles.goldDot} cx="175" cy="38" r="3" fill="#F5D061" />
);
const GOLDEN_HALO = (
  <circle
    className={styles.goldHalo}
    cx="175"
    cy="38"
    r="7"
    fill="#E5C158"
    fillOpacity="0.4"
  />
);

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredCardId, setHoveredCardId] = useState(null);

  return (
    <div className={styles.pageContainer}>
      <section className={styles.heroContainer}>
        <div className={styles.bgVignette} />

        <div className={styles.mannequinWrapper}>
          <Image
            src="/card-img/card5.webp"
            alt="White Bespoke Nigerian Agbada on Mannequin"
            width={700}
            height={850}
            priority
            className={styles.mannequinImg}
          />
        </div>

        <div className={styles.calloutContainer}>
          <span className={styles.calloutText}>Crafted in Warri.</span>
          <svg
            className={styles.calloutSvgMobile}
            width="200"
            height="50"
            viewBox="0 0 200 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 0 1.5 L 140 1.5 L 175 38"
              stroke="rgba(255, 255, 255, 0.85)"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {GOLDEN_HALO}
            {GOLDEN_DOT}
          </svg>
        </div>

        <div className={styles.rightContent}>
          <span className={styles.categoryTag}>SKUCHEEZ COUTURE · WARRI DELTA STATE</span>
          <h2 className={styles.mainHeading}>
            Royalty,
            <span className={styles.italicSpan}>in every stitch.</span>
          </h2>
          <p className={styles.description}>
            Hand-tailored Agbada for grooms, chiefs, and gentlemen of culture — from
            owambe to the throne.
          </p>
          <a href="#collections" className={styles.exploreBtn}>
            Explore Collection
          </a>
        </div>

        <a href="#story" className={styles.scrollIndicator}>
          <span className={styles.scrollArrow}>↓</span>
          <span>SCROLL</span>
        </a>
      </section>
    </div>
  );
}