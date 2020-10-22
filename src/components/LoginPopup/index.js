import React, { memo } from 'react';
// import PropTypes from 'prop-types';

import Button from '../Button';

// import * as S from './styled';

const LoginPopup = () => {
  const handleClick = () => {

  };

  return (
    <div>
      <Button
        title='Enter'
        onClick={() => handleClick()}
      />
    </div>
  );
};

export default memo(LoginPopup);
