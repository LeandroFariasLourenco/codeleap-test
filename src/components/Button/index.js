import React, { memo } from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const Button = ({
  title,
  text,
  children,
  ...props
}) => (
  <S.Wrapper
    title={title}
    {...props}
  >
    {text}
    {children}
  </S.Wrapper>
);

Button.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
};

Button.defaultProps = {
  children: <></>,
  text: '',
};

export default memo(Button);
