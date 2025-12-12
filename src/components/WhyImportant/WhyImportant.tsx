'use client';

import React from 'react';
import styles from './WhyImportant.module.css';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export const WhyImportant = () => {
  const { ref: headingRef, isVisible: headingVisible } = useScrollAnimation<HTMLHeadingElement>();

  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h2 
          ref={headingRef}
          className={`${styles.title} ${headingVisible ? styles.animate : ''}`}
        >
          👆Hvorfor er dette viktig?
        </h2>
        <p className={styles.text}>
          Mange unge kjenner på stress, press og vanskelige følelser. Når vi snakker om det, blir det mindre skummelt og lettere å håndtere. Åpenhet gir trygghet – og kan være starten på å føle seg bedre.
        </p>
      </div>
    </section>
  );
};

