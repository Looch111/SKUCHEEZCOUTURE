'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from './Services.module.css';

const orderingServices = [
  {
    num: '# 01',
    title: 'Bespoke',
    timeline: '8 WEEKS · 3 FITTINGS',
    description:
      'A one-of-one garment, drawn from your measurements. Fabric, embroidery, silhouette — every decision is yours.',
    image: '/card-img/suit2.webp',
  },
  {
    num: '# 02',
    title: 'Made-to-Measure',
    timeline: '3 WEEKS · 1 FITTING',
    description:
      'Choose from existing patterns, adjusted to your body. Refined silhouettes ready in less than a month.',
    image: '/card-img/card11.webp',
  },
  {
    num: '# 03',
    title: 'Ceremonial Suite',
    timeline: '6 WEEKS · 2 FITTINGS',
    description:
      'Exclusive bespoke ensemble crafted for grooms and milestone celebrations. Custom iconography, signature embroidery, and dedicated fitting sessions.',
    image: '/card-img/card7.webp',
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const gridRef = useRef(null);
  const animFrameRef = useRef(null);

  const updateCardTransforms = () => {
    if (!gridRef.current) return;
    const container = gridRef.current;
    if (typeof window === 'undefined' || window.innerWidth > 768) {
      const cards = container.children;
      for (let idx = 0; idx < cards.length; idx++) {
        cards[idx].style.transform = '';
        cards[idx].style.opacity = '';
      }
      return;
    }

    const containerCenter = container.scrollLeft + container.clientWidth / 2;
    const cards = container.children;

    let closestIndex = 0;
    let minDistance = Infinity;

    for (let idx = 0; idx < cards.length; idx++) {
      const card = cards[idx];
      const cardCenter = card.offsetLeft + card.clientWidth / 2;
      const dist = Math.abs(containerCenter - cardCenter);

      if (dist < minDistance) {
        minDistance = dist;
        closestIndex = idx;
      }

      const maxDist = card.clientWidth * 1.0;
      const normDist = Math.min(1, dist / maxDist);

      const scale = 1.03 - normDist * 0.10;
      const opacity = 1 - normDist * 0.22;

      card.style.transform = `scale(${scale.toFixed(3)}) translateZ(0)`;
      card.style.opacity = opacity.toFixed(3);
    }

    setActiveIndex((prev) => (prev !== closestIndex ? closestIndex : prev));
  };

  const handleScroll = () => {
    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    animFrameRef.current = requestAnimationFrame(updateCardTransforms);
  };

  useEffect(() => {
    updateCardTransforms();
    window.addEventListener('resize', updateCardTransforms);
    return () => {
      window.removeEventListener('resize', updateCardTransforms);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  const scrollToCard = (index) => {
    if (!gridRef.current) return;
    const container = gridRef.current;
    const cards = container.children;
    const targetCard = cards[index];

    if (!targetCard) return;

    const containerWidth = container.clientWidth;
    const cardWidth = targetCard.clientWidth;
    const targetLeft = targetCard.offsetLeft - (containerWidth - cardWidth) / 2;

    container.scrollTo({
      left: Math.max(0, targetLeft),
      behavior: 'smooth',
    });
    setActiveIndex(index);
  };

  return (
    <section id="services" className={`${styles.servicesSection} revealOnScroll`}>
      <div className={`${styles.servicesHeader} revealOnScroll`}>
        <span className={styles.servicesSubtag}>SERVICES &amp; PROCESS</span>
        <h2 className={`font-milchella ${styles.servicesTitle}`}>
          Three ways to order.
        </h2>
      </div>

      <div className={styles.carouselWrapper}>
        {/* Navigation Arrows for Mobile & Tablet */}
        <button
          type="button"
          className={`${styles.navArrow} ${styles.navArrowPrev} ${
            activeIndex === 0 ? styles.navArrowDisabled : ''
          }`}
          onClick={() => scrollToCard(Math.max(0, activeIndex - 1))}
          aria-label="Previous Service"
        >
          ‹
        </button>

        <div
          ref={gridRef}
          className={styles.servicesGrid}
          onScroll={handleScroll}
        >
          {orderingServices.map((item, idx) => {
            const isActive = idx === activeIndex;
            return (
              <article
                key={idx}
                data-index={idx}
                className={`${styles.serviceCard} ${
                  isActive ? styles.serviceCardActive : ''
                }`}
                onClick={() => scrollToCard(idx)}
              >
                <div className={styles.cardImageFrame}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className={styles.cardImage}
                  />
                  <div className={styles.imageOverlayGradient} />

                  <div className={styles.indexBadge}>{item.num}</div>

                  <div className={styles.cardImageContent}>
                    <h3 className={`font-milchella ${styles.cardTitle}`}>
                      {item.title}
                    </h3>
                    <span className={styles.cardTimeline}>{item.timeline}</span>
                  </div>
                </div>

                <div className={styles.cardMetaBox}>
                  <p className={styles.cardDescription}>{item.description}</p>
                </div>
              </article>
            );
          })}
        </div>

        <button
          type="button"
          className={`${styles.navArrow} ${styles.navArrowNext} ${
            activeIndex === orderingServices.length - 1 ? styles.navArrowDisabled : ''
          }`}
          onClick={() => scrollToCard(Math.min(orderingServices.length - 1, activeIndex + 1))}
          aria-label="Next Service"
        >
          ›
        </button>
      </div>

      {/* Mobile Carousel Indicators */}
      <div className={styles.carouselDots}>
        {orderingServices.map((_, idx) => (
          <button
            key={idx}
            type="button"
            className={`${styles.dot} ${
              idx === activeIndex ? styles.dotActive : ''
            }`}
            onClick={() => scrollToCard(idx)}
            aria-label={`Go to service card ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}