import React, { memo, useEffect, useState } from 'react';
import Popup from 'reactjs-popup';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';

import { setLogin } from '@Redux/ducks/login';

import { PATHS } from '@Constants';

import * as S from './styled';

const LoginPopup = ({
  pageToRedirect,
}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [mount, setMount] = useState(false);

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

  useEffect(() => {
    setMount(true);
  }, []);

  const onSubmit = ({ userName }) => {
    dispatch(setLogin({
      isLogged: true,
      userName,
    }));
    sessionStorage.setItem('userLogged', true);
    sessionStorage.setItem('userName', userName);
    history.push(pageToRedirect);
  };

  return (
    <Popup
      open
      closeOnDocumentClick={false}
      closeOnEscape={false}
    >
      <CSSTransition
        in={mount}
        classNames='transition'
        mountOnEnter
        timeout={12000}
      >
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
              text='Enter'
            />
          </S.LoginForm>
        </S.PopupWrapper>
      </CSSTransition>
    </Popup>
  );
};

LoginPopup.defaultProps = {
  pageToRedirect: PATHS.HOME,
};

LoginPopup.propTypes = {
  pageToRedirect: PropTypes.string,
};

export default memo(LoginPopup);
