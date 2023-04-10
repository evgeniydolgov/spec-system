import React, { useState } from 'react';
import styles from './Card.module.css';
import logo from '../../assets/png/logo.png';
import hook from '../../assets/png/hook.png';
import { Registration } from '../Registration';
import { Restore } from '../Restore';

export interface ICardDraws {
  setCardDraws: React.Dispatch<React.SetStateAction<string>>;
  cardDraws?: string;
  savedPhoneNumber?: string;
  setSavedPhoneNumber?: React.Dispatch<React.SetStateAction<string>>;
  rememberUser?: boolean;
  rigthPassword?: string;
  setRigthPassword?: React.Dispatch<React.SetStateAction<string>>;
}

export const Card = ({
  cardDraws,
  setCardDraws,
  rememberUser,
  savedPhoneNumber,
  setSavedPhoneNumber,
  rigthPassword,
}: ICardDraws) => {
  return (
    <main className={styles.register__page}>
      <div className={cardDraws === 'register' ? styles.hook__image : styles.hook__image_reverse}>
        <img src={hook} alt='hook' />
      </div>
      <div className={styles.register__container}>
        <div className={styles.register__logo}>
          <img src={logo} alt='firm logotype' />
          {cardDraws === 'register' && (
            <Registration {...{ rememberUser, setCardDraws, savedPhoneNumber, setSavedPhoneNumber, rigthPassword }} />
          )}
          {cardDraws === 'restore' && <Restore {...{ setCardDraws, setSavedPhoneNumber }} />}
        </div>
      </div>
    </main>
  );
};
