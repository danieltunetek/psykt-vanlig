import React from 'react';
import styles from './IllustrationSection.module.css';
import Image from 'next/image';

export const IllustrationSection = () => {
  return (
    <section className={styles.section} aria-hidden="true">
      <div className={styles.content}>
        <Image 
          src="/illustrationsection.svg" 
          alt="" 
          className={styles.illustration}
          width={1280}
          height={591}
        />
      </div>
    </section>
  );
};
