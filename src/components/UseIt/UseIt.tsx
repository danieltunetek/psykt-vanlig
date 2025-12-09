'use client';

import React, { useState } from 'react';
import { Textfield, Button } from 'rk-designsystem';
import styles from './UseIt.module.css';
import Image from 'next/image';

export const UseIt = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(JSON.stringify({ email }));
  };

  return (
    <section className={styles.section}>
      <div className={styles.arrowTop}>
        <Image
          src="/rightcorner.svg"
          alt=""
          className={styles.arrowImage}
          width={68}
          height={68}
          aria-hidden="true"
        />
      </div>

      <div className={styles.content}>
        <h2 className={styles.title}>✉️ Vil du ta det i bruk?</h2>
        <p className={styles.text}>
          Ta kontakt med Røde Kors for opplæring og tilgang til materiell.
          <br />
          Du kan også bruke deler av opplegget i skolen, på fritidsklubber eller i andre ungdomsaktiviteter.
        </p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <Textfield
            type="email"
            placeholder="Din e-post"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            className={styles.textfield}
          />
          <Button type="submit" variant="primary" className={styles.button}>
            Send
          </Button>
        </form>
      </div>
    </section>
  );
};

