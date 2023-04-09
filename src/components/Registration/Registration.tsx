import React, { useState } from 'react';
import styles from './Registration.module.css';
import logo from '../../assets/png/logo.png';
import { SubmitHandler, useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';
import hook from '../../assets/png/hook.png';

type Inputs = {
  telephone: string;
  password: string;
};

export const Registration = () => {
  const [registeredUser, setRegisteredUser] = useState<boolean>();
  const [errorMessage, setErrorMessage] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ mode: 'onSubmit' });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (data.telephone === '+7 111 111 11 11' && data.password === '123456') {
      setRegisteredUser(true);
      setErrorMessage(false);
    } else {
      setRegisteredUser(false);
      setErrorMessage(true);
    }
  };

  return (
    <main className={styles.register__page}>
      <div className={styles.hook_image}>
        <img src={hook} alt='hook image' />
      </div>
      <div className={styles.register__container}>
        <div className={styles.register__logo}>
          <img src={logo} alt='firm logotype' />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.register__telephone}>
            <label>
              Введите логин
              <div className={styles.register__input}>
                <InputMask
                  type='tel'
                  mask='+7 999 999 99 99'
                  maskPlaceholder={''}
                  placeholder={'+7 999 999 99 99'}
                  {...register('telephone', {
                    required: true,
                    minLength: {
                      value: 16,
                      message: 'Введите ваш логин',
                    },
                  })}
                />
              </div>
            </label>
            {errors.telephone && <p className={styles.error__input}>{errors.telephone?.message}</p>}
          </div>
          <div className={styles.register__password}>
            <label>
              Введите пароль
              <div className={styles.register__input}>
                <input
                  type='password'
                  {...register('password', {
                    required: true,
                    minLength: {
                      value: 6,
                      message: 'Введите ваш пароль',
                    },
                  })}
                />
              </div>
            </label>
            {errors.password && <p className={styles.error__input}>{errors.password?.message}</p>}
          </div>
          <p className={styles.register__restore}>Забыли пароль?</p>
          <div className={styles.login__button}>
            <input type='submit' value={'ВОЙТИ'} />
            {errorMessage && (
              <p className={styles.error__input + ' ' + styles.wrong__data}>Неверный логин или пароль</p>
            )}
          </div>
        </form>
      </div>
    </main>
  );
};
