import React from 'react';
import Image from 'next/image';
import styles from './HowItWorks.module.css';

export const HowItWorks = () => {
  return (
    <section className={styles.section}>
      <div className={styles.arrowTop}>
        <Image 
          src="/rightcorner.svg"
          alt="" 
          className={styles.arrowImage}
          aria-hidden="true"
          width={100}
          height={100}
        />
      </div>
      
      <div className={styles.content}>
        <h2 className={styles.title}>
          <span className={styles.desktopTitle}>🛠 Hvordan fungerer <br></br> kurset?</span>
          <span className={styles.mobileTitle}>🛠 Hvordan fungerer kurset?</span>
        </h2>
        <p className={styles.text}>
          Psykt Vanlig er delt inn i fire nivåer – du kan bruke hele opplegget eller velge ut det som passer best for din gruppe.
        </p>
      </div>

      <div className={styles.arrowBottom}>
        <Image 
          src="/rightcorner.svg" 
          alt="" 
          className={styles.arrowImage}
          aria-hidden="true"
          width={100}
          height={100}
        />
      </div>
    </section>
  );
};

