"use client";

import React from 'react';
import { Link } from 'rk-designsystem';
import { PrinterSmallIcon } from '@navikt/aksel-icons';
import styles from './Download.module.css';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export const Download = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: linksRef, isVisible: linksVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div 
          ref={headerRef}
          className={`${styles.header} ${headerVisible ? styles.animate : ''}`}
        >
          <h2 className={styles.title}>Last ned</h2>
          <p className={styles.subtitle}>last ned vårt materiale</p>
        </div>

        <div 
          ref={linksRef}
          className={`${styles.links} ${linksVisible ? styles.animate : ''}`}
        >
          <Link 
            className={styles.link}
            data-color="neutral"
          >
            <PrinterSmallIcon aria-hidden style={{ marginRight: 'var(--ds-spacing-1, 4px)' }} />
            Veilederen (.pdf)
          </Link>
          <Link 
            className={styles.link}
            data-color="neutral"
          >
            <PrinterSmallIcon aria-hidden style={{ marginRight: 'var(--ds-spacing-1, 4px)' }} />
            PowerPointen (.ppt)
          </Link>
        </div>
      </div>

      <div className={styles.arrowBottom}>
        <Image
          src="/rightcorner.svg"
          alt=""
          className={styles.arrowImage}
          width={46}
          height={46}
          aria-hidden="true"
        />
      </div>
    </section>
  );
};

