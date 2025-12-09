import React from 'react';
import Image from 'next/image';
import styles from './Level1.module.css';

export const Level1 = () => {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div className={styles.textBlock}>
          <h2 className={styles.title}>
            <span className={styles.desktopTitle}>Nivå 1: leve med seg selv</span>
            <span className={styles.mobileTitle}>
              Nivå 1: <br /> leve med seg selv
            </span>
          </h2>
          <div className={styles.description}>
            <p>På dette nivået lærer du:</p>
            <ul>
              <li>Hva følelserer og hva de forteller oss</li>
              <li>Hvordan du kan bli mentalt sterk ved å møte dine egne følelser med forståelse og vennlighet.</li>
              <li>Å bli tryggerepå deg selv og kroppen din.</li>
              <li>Hvorfor det er viktig å gjøre feil –og hvordan du lærer av det.</li>
            </ul>
          </div>
        </div>
        
        <div className={styles.illustrationBlock}>
          <Image 
            src="/illustrationblock2.png" 
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

