import React from 'react';
import styles from './RegisterPage.module.css';
import { Registration } from '../../components/Registration';

export const RegisterPage = () => {
  return (
    <div className={styles.register_page}>
      <Registration />
    </div>
  );
};
