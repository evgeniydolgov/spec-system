import React, { useState } from 'react';
import styles from './RegisterPage.module.css';
import { Registration } from '../../components/Registration';
import { Card } from '../../components/Card';

export const RegisterPage = () => {
  const [cardDraws, setCardDraws] = useState('register');

  return (
    <div className={styles.register_page}>
      <div className={cardDraws === 'register' ? styles.card : `${styles.card} ${styles.active}`}>
        <div className={cardDraws === 'register' ? styles.card__register : styles.card__restore}>
          <Card cardDraws={cardDraws} setCardDraws={setCardDraws} />
        </div>
      </div>
    </div>
  );
};
