import React, { useEffect, useState } from 'react';
import styles from './Registration.module.css';
import logo from '../../assets/png/logo.png';

export const Registration = () => {
  const [tel, setTel] = useState<string | undefined>();

  const setTelephoneNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTel(event.target.value.replace(/1-9/g, ''));
  };
  useEffect(() => {
    console.log(tel);
  }, [tel]);

  return (
    <div className={styles.reg_container}>
      <div>
        <img src={logo} alt='firm logotype' />
      </div>
      <form>
        <label>
          Введите логин
          <div>
            <input type='tel' onChange={(e) => setTelephoneNumber(e)} value={tel} />
          </div>
        </label>
        <label>
          Введите пароль
          <div>
            <input type='password' />
          </div>
        </label>
        <p>Забыли пароль?</p>
      </form>
    </div>
  );
};
