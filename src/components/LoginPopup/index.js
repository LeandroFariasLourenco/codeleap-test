import React, { memo, useEffect } from 'react';
import { useForm } from 'react-hook-form';
// import PropTypes from 'prop-types';

import * as S from './styled';

const LoginPopup = () => {
  const {
    handleSubmit,
    register,
    watch,
    errors,
    onSubmit,
  } = useForm({
    defaultValues: {
      userName: '',
    },
  });

  return (
    <S.Overlay>
      <S.PopupWrapper>
        <S.WelcomeMessage>
          Welcome to CodeLeap network!
        </S.WelcomeMessage>

        <S.LoginForm
          onSubmit={handleSubmit(onSubmit)}
        >
          <S.Label
            htmlFor='userName'
          >
            Please enter your username
          </S.Label>
          <S.Input
            name='userName'
            placeholder='John Doe'
            ref={register({
              required: true,
            })}
          />

          <S.Submit
            disabled={errors.userName || !watch('userName')}
            title='Enter'
          />
        </S.LoginForm>
      </S.PopupWrapper>
    </S.Overlay>
  );
};

export default memo(LoginPopup);
