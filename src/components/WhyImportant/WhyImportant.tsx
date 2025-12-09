import React from 'react';
import styles from './WhyImportant.module.css';

export const WhyImportant = () => {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h2 className={styles.title}>👆Hvorfor er dette viktig?</h2>
        <p className={styles.text}>
          Mange unge kjenner på stress, press og vanskelige følelser. Når vi snakker om det, blir det mindre skummelt og lettere å håndtere. Åpenhet gir trygghet – og kan være starten på å føle seg bedre.
        </p>
      </div>
    </section>
  );
};

