import React from 'react';
import Image from 'next/image';
import styles from './Level3.module.css';

export const Level3 = () => {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div className={styles.textBlock}>
          <h2 className={styles.title}>
            <span className={styles.desktopTitle}>Nivå 3: leve i samfunnet</span>
            <span className={styles.mobileTitle}>
              Nivå 3: <br /> leve i samfunnet
            </span>
          </h2>
          <div className={styles.description}>
            <p>På dette nivået lærer du:</p>
            <ul>
              <li>Hva stereotypier og fordommer er</li>
              <li>Hvorfor vi alle trenger å høre til, og hvordan du kan bidra til at andre føler seg inkludert</li>
              <li>Hvordan gruppepressfunker –og hvordan du kan stå imot.</li>
              <li>Hvordan sosiale medier påvirker deg, og hvordan du kan bruke dem på en sunn måte.</li>
            </ul>
          </div>
        </div>
        
        <div className={styles.illustrationBlock}>
          <Image 
            src="/illustrationblock4.png" 
            alt="" 
            className={styles.illustrationImage}
            aria-hidden="true"
            width={600}
            height={400}
          />
        </div>
      </div>
      
      <div className={styles.arrowBottom}>
        <Image 
          src="/rightcorner.svg" 
          alt="" 
          className={styles.arrowImage}
          aria-hidden="true"
          width={68}
          height={68}
        />
      </div>
    </section>
  );
};

