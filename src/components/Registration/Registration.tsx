import React, { useState } from 'react';
import styles from './Registration.module.css';
import logo from '../../assets/png/logo.png';
import { SubmitHandler, useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';

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
    <div className={styles.reg_container}>
      <div>
        <img src={logo} alt='firm logotype' />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Введите логин
          <div>
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
        {errors.telephone && <p>{errors.telephone?.message}</p>}
        <label>
          Введите пароль
          <div>
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
        {errors.password && <p>{errors.password?.message}</p>}
        <p>Забыли пароль?</p>
        {errorMessage && <p>Неверный логин или пароль</p>}
        <input type='submit' value={'Войти'} />
      </form>
    </div>
  );
};
