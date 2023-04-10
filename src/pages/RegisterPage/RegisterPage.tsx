import React, { useState } from 'react';
import styles from './RegisterPage.module.css';
import { Card } from '../../components/Card';

export const RegisterPage = () => {
  const [cardDraws, setCardDraws] = useState('register');
  const [rigthPassword, setRigthPassword] = useState('');
  const [savedPhoneNumber, setSavedPhoneNumber] = useState<string>('');

  const backToRegistration = () => {
    setCardDraws('register');
    setSavedPhoneNumber('+7 111 111 11 11');
    setRigthPassword('123456');
  };

  return (
    <div className={styles.register__page}>
      <div
        className={
          cardDraws !== 'entered' ? styles.register__window : `${styles.register__window} ${styles.window__up}`
        }>
        <div className={cardDraws !== 'restore' ? styles.card : `${styles.card} ${styles.active}`}>
          <div className={cardDraws !== 'restore' ? styles.card__register : styles.card__restore}>
            <Card
              {...{
                cardDraws,
                setCardDraws,
                rigthPassword,
                savedPhoneNumber,
                setSavedPhoneNumber,
              }}
            />
          </div>
        </div>
      </div>
      {cardDraws === 'entered' && (
        <div className={styles.welcome__page}>
          <p>Добро пожаловать на сайт, User1</p>
          <button onClick={backToRegistration}>Выйти</button>
        </div>
      )}
    </div>
  );
};
