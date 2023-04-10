import React, { useState } from 'react';
import styles from './Restore.module.css';
import { SubmitHandler, useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';
import { ICardDraws } from '../Card/Card';

type Inputs = {
  telephone: string;
  password: string;
};

export const Restore = ({ setCardDraws, setSavedPhoneNumber }: ICardDraws) => {
  const [passwordSent, setPasswordSent] = useState<boolean>(false);
  const [wrongPassword, setWrongPassword] = useState(false);

  const callToUser = () => {
    setPasswordSent(true);
  };

  const backToRegistration = () => {
    setCardDraws('register');
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ mode: 'onSubmit', reValidateMode: 'onSubmit' });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (data.telephone === '+7 111 111 11 11') {
      callToUser();
      const { password } = data;
      if (password !== '123456' && password !== '') {
        setWrongPassword(true);
      }
    }
    if (data.password === '123456') {
      setSavedPhoneNumber && setSavedPhoneNumber('+7 111 111 11 11');
      backToRegistration();
      setWrongPassword(false);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p className={styles.card__name}>Восстановление пароля</p>
      <div className={styles.register__telephone}>
        <label>
          Введите номер телефона
          <div className={styles.register__input}>
            <InputMask
              type='tel'
              mask='+7 999 999 99 99'
              maskPlaceholder={''}
              placeholder={'+7 999 999 99 99'}
              {...register('telephone', {
                required: true,
                validate: (value) => value === '+7 111 111 11 11' || 'Номер не зарегистрирован',
                minLength: {
                  value: 16,
                  message: 'Введите номер телефона',
                },
              })}
            />
          </div>
        </label>
        {errors.telephone && <p className={styles.error__input}>{errors.telephone?.message}</p>}
      </div>
      <div
        className={styles.register__password}
        style={passwordSent ? { opacity: '1' } : { opacity: '0', pointerEvents: 'none' }}>
        <label>
          Введите временый пароль
          <div className={styles.register__input}>
            <input type='password' {...register('password')} />
          </div>
        </label>
        {wrongPassword && <p className={styles.error__input}>неверный пароль</p>}
      </div>
      <p className={styles.register__restore} onClick={backToRegistration}>
        Вернуться к авторизации?
      </p>
      <div className={styles.login__button}>
        <input type='submit' value={!passwordSent ? 'ПОЗВОНИТЬ' : 'Восстановить пароль'} />
      </div>
    </form>
  );
};
