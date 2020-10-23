import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

import { setLogin } from '@Redux/ducks/login';

import { STORAGE_KEYS, PATHS } from '@Constants';

import * as S from './styled';

const LoginPopup = ({
  pageToRedirect,
}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const {
    register,
    watch,
    errors,
    handleSubmit,
  } = useForm({
    defaultValues: {
      userName: '',
    },
  });

  const onSubmit = ({ userName }) => {
    dispatch(setLogin(true));
    sessionStorage.setItem(STORAGE_KEYS.userSession, userName);
    history.push(pageToRedirect);
  };

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
            type='text'
            name='userName'
            id='userName'
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

LoginPopup.defaultProps = {
  pageToRedirect: PATHS.HOME,
};

LoginPopup.propTypes = {
  pageToRedirect: PropTypes.string,
};

export default memo(LoginPopup);
