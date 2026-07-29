"use client";

import { useState } from "react";
import Image from "next/image";
import collectionItems from "@/data/collectionItems";
import styles from "./Collection.module.css";

export default function Collection() {
  const [hoveredCardId, setHoveredCardId] = useState(null);

  return (
    <section id="collections" className={styles.collectionSection}>
      <div className={styles.collectionHeader}>
        <span className={styles.collectionTag}>THE COLLECTION</span>
        <h2 className={styles.collectionTitle}>
          Pieces from the <span className={styles.collectionItalic}>atelier.</span>
        </h2>
      </div>

      <div className={styles.carouselContainer}>
        <div
          className={`${styles.carouselTrack} ${
            hoveredCardId ? styles.hasHoveredCard : ""
          }`}
        >
          {collectionItems.map((item) => {
            const isHovered = hoveredCardId === item.id;
            return (
              <div
                key={item.id}
                className={`${styles.collectionCard} ${
                  isHovered ? styles.cardHovered : ""
                }`}
                style={{
                  "--rotation": item.rotation,
                  "--translate-y": item.translateY,
                }}
                onMouseEnter={() => setHoveredCardId(item.id)}
                onMouseLeave={() => setHoveredCardId(null)}
              >
                <div className={styles.cardImageWrapper}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 220px, 300px"
                    className={styles.cardImage}
                  />
                </div>

                {isHovered && (
                  <div className={styles.detailPopoutPill}>
                    <div className={styles.detailRow}>
                      <span className={styles.detailDash}>—</span>
                      <h3 className={styles.detailTitle}>{item.title}</h3>
                    </div>
                    <div className={styles.detailRow}>
                      <span className={styles.detailDash}>—</span>
                      <span className={styles.detailSubtext}>
                        {item.materials}
                      </span>
                    </div>
                    <div className={styles.detailRow}>
                      <span className={styles.detailDash}>—</span>
                      <span className={styles.detailSubtext}>
                        {item.eventDetails}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}