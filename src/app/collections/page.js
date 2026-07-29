'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles } from 'lucide-react';
import BespokeModal from '@/components/UI/BespokeModal';
import styles from './page.module.css';

const collectionArchive = [
  {
    id: '01',
    title: 'WHITE MOSAIC CEREMONIAL AGBADA',
    materials: 'HAND-WOVEN BROCADE · GEOMETRIC THREAD',
    eventDetails: 'SIGNATURE GALA · WARRI, DELTA STATE · 2026',
    video: '/video/video.mp4',
    image: '/card-img/card5.webp',
    rotation: '-4.5deg',
    translateY: '2px',
  },
  {
    id: '02',
    title: 'ROYAL EMERALD AGBADA',
    materials: 'FRENCH LACE · GOLD THREADWORK',
    eventDetails: 'ENGAGEMENT · WARRI, DELTA STATE · 2026',
    image: '/card-img/card11.webp',
    rotation: '4deg',
    translateY: '-6px',
  },
  {
    id: '03',
    title: 'SLATE ARCHITECTURAL AGBADA',
    materials: 'EMBROIDERED WOOL · DAMASK',
    eventDetails: 'CORONATION · WARRI, DELTA STATE · 2026',
    image: '/card-img/card3.webp',
    rotation: '-3.5deg',
    translateY: '4px',
  },
  {
    id: '04',
    title: 'CHAMPAGNE HERITAGE AGBADA',
    materials: 'LUXURY SILK · DIAGONAL FLORAL CREST',
    eventDetails: 'ATELIER SPECIAL · WARRI, DELTA STATE · 2026',
    image: '/card-img/card8.webp',
    rotation: '5deg',
    translateY: '-8px',
  },
  {
    id: '05',
    title: 'OBSIDIAN BESPOKE KAFTAN',
    materials: 'FINE CASHMERE · TONE-ON-TONE',
    eventDetails: 'ROYAL WEDDING · WARRI, DELTA STATE · 2026',
    image: '/card-img/card1.webp',
    rotation: '-4deg',
    translateY: '3px',
  },
  {
    id: '06',
    title: 'MIDNIGHT MANDALA KAFTAN',
    materials: 'MIDNIGHT CASHMERE · STAR MANDALA',
    eventDetails: 'BESPOKE SUITE · WARRI, DELTA STATE · 2026',
    image: '/card-img/card10.webp',
    rotation: '3.8deg',
    translateY: '-5px',
  },
  {
    id: '07',
    title: 'SOVEREIGN CHEVRON AGBADA',
    materials: 'PURE WHITE COTTON · GOLD LATTICE',
    eventDetails: 'CEREMONIAL · WARRI, DELTA STATE · 2026',
    image: '/card-img/card4.webp',
    rotation: '-4.8deg',
    translateY: '6px',
  },
  {
    id: '08',
    title: 'TACTICAL SAFARI SENATOR',
    materials: 'PREMIUM COTTON · METALLIC HARNESS',
    eventDetails: 'ANNIVERSARY · WARRI, DELTA STATE · 2026',
    image: '/card-img/card9.webp',
    rotation: '4.2deg',
    translateY: '-7px',
  },
  {
    id: '09',
    title: 'IMPERIAL VELVET KAFTAN',
    materials: 'ROYAL VELVET · GOLD FILIGREE CREST',
    eventDetails: 'ANNIVERSARY · WARRI, DELTA STATE · 2026',
    image: '/card-img/card2.webp',
    rotation: '-3.8deg',
    translateY: '2px',
  },
  {
    id: '10',
    title: 'MONARCH GOLD BROCADE AGBADA',
    materials: 'HEAVY BROCADE · METALLIC GOLD WIRE',
    eventDetails: 'ROYAL BANQUET · WARRI, DELTA STATE · 2026',
    image: '/card-img/card7.webp',
    rotation: '4.5deg',
    translateY: '-6px',
  },
  {
    id: '11',
    title: 'HERITAGE AṢỌ-ÒKÈ ENSEMBLE',
    materials: 'HAND-LOOMED AṢỌ-ÒKÈ · SILK PIPING',
    eventDetails: 'CORONATION · WARRI, DELTA STATE · 2026',
    image: '/card-img/card6.webp',
    rotation: '-4deg',
    translateY: '4px',
  },
];

export default function CollectionsPage() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isNavHidden, setIsNavHidden] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const gridRef = useRef(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 60 && currentScrollY > lastScrollY) {
        setIsNavHidden(true);
      } else if (currentScrollY < lastScrollY || currentScrollY <= 60) {
        setIsNavHidden(false);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const container = gridRef.current;
    if (!container || typeof window === 'undefined') return;

    const cards = container.querySelectorAll(`.${styles.archiveCard}`);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.cardRevealed);
          } else {
            entry.target.classList.remove(styles.cardRevealed);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.archiveContainer}>
      {/* ---------------- HEADER NAVBAR ---------------- */}
      <header className={`${styles.navbar} ${isNavHidden ? styles.navHidden : ""}`}>
        <Link href="/" className={styles.logoBox}>
          <Image
            src="/logo.webp"
            alt="SKUCHEEZ COUTURE Logo"
            width={320}
            height={90}
            className={styles.logoImg}
            priority
          />
        </Link>

        <nav className={styles.desktopNav}>
          <ul className={styles.navMenu}>
            <li>
              <Link href="/collections" className={styles.navLink}>
                Collections
              </Link>
            </li>
            <li>
              <Link href="/#story" className={styles.navLink}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/#contact" className={styles.navLink}>
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/#services" className={styles.navLink}>
                Our Services
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className={styles.orderBtnWrapper}
            aria-label="Order Bespoke Consultation"
          >
            <span className={styles.orderBtnInner}>
              Order
            </span>
          </button>
        </div>
      </header>

      {/* ---------------- HERO HEADER SECTION ---------------- */}
      <section className={styles.archiveHero}>
        <Link href="/" className={styles.backBtn}>
          ← BACK
        </Link>

        <span className={styles.archiveTag}>THE ATELIER&apos;S ARCHIVE</span>

        <h1
          className={`font-milchella text-5xl md:text-7xl lg:text-8xl font-normal leading-[1] tracking-tight ${styles.archiveTitle}`}
        >
          Every piece, every cut.
        </h1>

        <p className={styles.archiveDescription}>
          A record of every Agbada cut at the atelier — from the ceremonial to the
          celebratory. Each piece is one of one.
        </p>
      </section>

      {/* ---------------- COLLECTION GRID ---------------- */}
      <section className={styles.gridSection}>
        <div ref={gridRef} className={styles.archiveGrid}>
          {collectionArchive.map((item, idx) => (
            <article
              key={item.id}
              className={`${styles.archiveCard} ${hoveredCard === item.id ? styles.archiveCardHovered : ''}`}
              style={{
                '--rotation': item.rotation,
                '--translate-y': item.translateY,
                transitionDelay: `${(idx % 3) * 0.12}s`,
                cursor: 'pointer',
              }}
              onMouseEnter={() => setHoveredCard(item.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => setModalOpen(true)}
            >
              <div className={styles.cardImageFrame}>
                <div className={styles.imageInnerWrapper}>
                  {item.video ? (
                    <video
                      src={item.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className={styles.cardVideo}
                    />
                  ) : (
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className={styles.cardImage}
                    />
                  )}
                </div>

                <div className={styles.imageBottomGradient} />

                <div className={styles.indexBadge}>
                  <div>N°</div>
                  <div>{item.id}</div>
                </div>
              </div>

              <div className={styles.cardMetaBox}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardMaterials}>{item.materials}</p>
                <p className={styles.cardEventDetails}>{item.eventDetails}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ---------------- BESPOKE ORDER MODAL ---------------- */}
      <BespokeModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
