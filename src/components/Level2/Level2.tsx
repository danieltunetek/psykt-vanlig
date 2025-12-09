import React from 'react';
import Image from 'next/image';
import styles from './Level2.module.css';

export const Level2 = () => {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div className={styles.illustrationBlock}>
          <Image 
            src="/illustrationblock3.png" 
            alt="" 
            className={styles.illustrationImage}
            aria-hidden="true"
            width={600}
            height={400}
          />
        </div>
        
        <div className={styles.textBlock}>
          <h2 className={styles.title}>
            <span className={styles.desktopTitle}>Nivå 2: leve med andre</span>
            <span className={styles.mobileTitle}>
              Nivå 2: <br /> leve med andre
            </span>
          </h2>
          <div className={styles.description}>
            <p>På dette nivået lærer du:</p>
            <ul>
              <li>Å fortelle andre hva du følerog trenger,så andre skjønner deg.</li>
              <li>Å lyttepå en måte som viser at du bryr deg.</li>
              <li>Å bli tryggerepå deg selv og kroppen din.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

