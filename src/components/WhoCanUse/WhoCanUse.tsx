import React from 'react';
import styles from './WhoCanUse.module.css';

export const WhoCanUse = () => {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h2 className={styles.title}>👥 Hvem kan bruke det?</h2>
        <div className={styles.textBlock}>
          <ul>
            <li>Frivillige i Røde Kors</li>
            <li>Lærere og fagpersoner</li>
            <li>
              Ungdom som leder workshops for jevnaldrende
              <br />
              <br />
            </li>
          </ul>
          <p>Du må ha gjennomført opplæring i Psykt Vanlig for å bruke opplegget.</p>
        </div>
      </div>
    </section>
  );
};

