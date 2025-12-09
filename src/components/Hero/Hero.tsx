import React from 'react';
import styles from './Hero.module.css';
import Image from 'next/image';

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <Image 
          src="/a4156204afd2226d0ee3746b764aedd58e943e57.gif" 
          alt="" 
          className={styles.backgroundImage} 
          aria-hidden="true"
          fill
          style={{ objectFit: 'cover', objectPosition: '50% 50%' }}
          unoptimized
        />
      </div>
      
      <div className={styles.brainIllustration} aria-hidden="true">
        <Image src="/brain.svg" alt="" className={styles.brainImage} width={150} height={146} />
      </div>

      <div className={styles.content}>
        <h1 className={styles.title}>Psykt vanlig</h1>
        <p className={styles.subtitle}>
          Livet er som bølger – noen ganger chill, andre ganger skikkelig kaos.
        </p>
        
        <div className={styles.textBlock}>
          <p className={styles.desktopText}>
            Noen dager surfer du lett: alt funker, du føler deg trygg og har det bra.
          </p>
          <p className={styles.desktopText}>
            Andre dager kommer det en diger bølge – og du kan kjenne på stress, misforståelser og følelsen av å ikke passe inn.
          </p>
          <p className={styles.desktopText}>
            Sånn er livet. Det svinger for alle.
          </p>
          <p className={`${styles.lastParagraph} ${styles.desktopText}`}>
            <span className={styles.bold}>Psykt Vanlig</span> gir deg tips til å holde balansen, stå stødig når bølgene blir høye og surfe tryggere gjennom livet.
          </p>
          <p className={styles.mobileText}>
            Noen dager surfer du lett: alt funker, du føler deg trygg og har det bra. Andre dager kommer det en diger bølge – og du kan kjenne på stress, misforståelser og følelsen av å ikke passe inn. Sånn er livet. Det svinger for alle. Psykt Vanlig gir deg tips til å holde balansen, stå stødig når bølgene blir høye og surfe tryggere gjennom livet.
          </p>
        </div>
      </div>

      <div className={styles.surfIllustration} aria-hidden="true">
        <Image src="/surf.svg" alt="" className={styles.surfImage} width={191} height={127} />
      </div>

      <div className={styles.arrow} aria-hidden="true">
        <Image src="/arrow-down.svg" alt="Scroll down" width={57} height={57} />
      </div>
    </section>
  );
};

