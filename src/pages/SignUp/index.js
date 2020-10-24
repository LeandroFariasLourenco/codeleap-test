import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';

import LoginPopup from '@Components/LoginPopup';

// import { getCareers } from '@Actions/requests/careers';

import * as S from './styled';

const SignUp = () => (
  <S.SignUpWrapper>
    {/* {console.log(getCareers())} */}
    <LoginPopup />
  </S.SignUpWrapper>
);
export default SignUp;
