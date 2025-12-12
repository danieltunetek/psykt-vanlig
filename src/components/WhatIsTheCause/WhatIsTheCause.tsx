'use client';

import React from 'react';
import styles from './WhatIsTheCause.module.css';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export const WhatIsTheCause = () => {
  const { ref: headingRef, isVisible: headingVisible } = useScrollAnimation<HTMLHeadingElement>();

  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h2 
          ref={headingRef}
          className={`${styles.title} ${headingVisible ? styles.animate : ''}`}
        >
          🤔 Hva er Psykt vanlig?
        </h2>
        <p className={styles.text}>
          Psykt vanlig er et workshopopplegg for ungdom 13- 25 år hvor vi gjør øvelser, snakker sammen og beveger oss og lærer mer om blant annet følelser, hvordan styrke selvfølelsen, identitet, hvordan løse konflikter med andre, sosiale medier og inkludering.
        </p>
      </div>
    </section>
  );
};

