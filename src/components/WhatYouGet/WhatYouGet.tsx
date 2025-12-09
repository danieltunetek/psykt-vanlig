import React from 'react';
import styles from './WhatYouGet.module.css';

export const WhatYouGet = () => {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h2 className={styles.title}>🌈 Hva kan du få ut av det?</h2>
        <div className={styles.textBlock}>
          <p>Etter å ha deltatt i PsyktVanlig-workshopen, vil du:</p>
          <div className={styles.bulletList}>
            <p>Ha konkrete verktøy for å håndtere stress og følelsesmessige utfordringer</p>
            <p>Kjenne deg tryggere i møte med egne og andres reaksjoner</p>
            <p>Forstå at psykisk helse er noe vi alle har og kan styrke</p>
            <p>Oppleve fellesskap og gjenkjennelse i møte med andre deltagere</p>
          </div>
          <p>&nbsp;</p>
          <p>Dette kurset er ikke terapi – men det kan være starten på en ny måte å møte deg selv og livet på.</p>
        </div>
      </div>
    </section>
  );
};

