import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';

import LoginPopup from '../../components/LoginPopup';

import * as S from './styled';

const SignUp = () => (
  <S.SignUpWrapper>
    <LoginPopup />
  </S.SignUpWrapper>
);
export default SignUp;
