import React from 'react';
import styles from './Card.module.css';
import logo from '../../assets/png/logo.png';
import hook from '../../assets/png/hook.png';
import { Registration } from '../Registration';
import { Restore } from '../Restore';

export interface ICardDraws {
  setCardDraws: React.Dispatch<React.SetStateAction<string>>;
  cardDraws?: string;
}

export const Card = ({ cardDraws, setCardDraws }: ICardDraws) => {
  return (
    <main className={styles.register__page}>
      <div className={cardDraws === 'register' ? styles.hook__image : styles.hook__image_reverse}>
        <img src={hook} alt='hook' />
      </div>
      <div className={styles.register__container}>
        <div className={styles.register__logo}>
          <img src={logo} alt='firm logotype' />
          {cardDraws === 'register' && <Registration setCardDraws={setCardDraws} />}
          {cardDraws === 'restore' && <Restore />}
        </div>
      </div>
    </main>
  );
};
