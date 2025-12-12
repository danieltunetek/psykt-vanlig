'use client';

import React from 'react';
import styles from './WhyJoin.module.css';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export const WhyJoin = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLHeadingElement>();

  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h2 
          ref={ref}
          className={`${styles.title} ${isVisible ? styles.animate : ''}`}
        >
          🫂 Hvorfor bli med?
        </h2>
        <div className={styles.description}>
          <ul>
            <li>Du får et trygt sted der det er lov å snakke om ting som betyr noe for deg.</li>
            <li>Du lærer ting som gjør livet litt enklere og mer meningsfylt.</li>
            <li>Du møter andre som vil ha et åpent og inkluderende miljø.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

