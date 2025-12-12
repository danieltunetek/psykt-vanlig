'use client';

import React from 'react';
import Image from 'next/image';
import styles from './Level0.module.css';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export const Level0 = () => {
  const { ref: headingRef, isVisible: headingVisible } = useScrollAnimation<HTMLHeadingElement>();
  const { ref: illustrationRef, isVisible: illustrationVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div className={styles.textBlock}>
          <h2 
            ref={headingRef}
            className={`${styles.title} ${headingVisible ? styles.animate : ''}`}
          >
            <span className={styles.desktopTitle}>Nivå 0: Skape et trygt rom</span>
            <span className={styles.mobileTitle}>
              Nivå 0: <br /> Skape et trygt rom
            </span>
          </h2>
          <div className={styles.description}>
            <p>På dette nivået lærer du:</p>
            <ul>
              <li>
                Start med bli-kjent-leker og energizers. Her bygger vi trygghet og fellesskap.
              </li>
            </ul>
          </div>
        </div>
        
        <div 
          ref={illustrationRef}
          className={`${styles.illustrationBlock} ${illustrationVisible ? styles.animate : ''}`}
        >
          <Image 
            src="/Illustrationblock.png" 
            alt="" 
            className={styles.illustrationImage}
            aria-hidden="true"
            width={600}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};

