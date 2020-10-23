import styled, { css } from 'styled-components';
import { rem } from 'polished';

import Button from '@Components/Button';

export const Overlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;

  /** */
  ${({ theme }) => css`
  ${theme.flexCentered}
    background-color: ${theme.colors.overlay};
    z-index: ${theme.zIndexes.overlay};
  `}
`;

export const PopupWrapper = styled.div`
  width: ${rem(500)};
  padding: ${rem(28)} ${rem(25)} ${rem(23)} ${rem(31)};
  border: ${rem(1)} solid #ccc;

  /** */
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    z-index: ${theme.zIndexes.popup};
  `}
`;

export const WelcomeMessage = styled.h2`
  font-weight: 700;
  font-size: ${rem(22)};
  margin-bottom: ${rem(30)};
  display: block;
  width: 100%;
`;

export const Label = styled.label`
  font-size: ${rem(16)};
  width: 100%;
`;

export const Input = styled.input`
  margin-top: ${rem(13)};
  margin-bottom: ${rem(20)};
  border: ${rem(1)} solid #777;
  padding: ${rem(6)} ${rem(11)};
  border-radius: ${rem(4)};
  width: 100%;
`;

export const LoginForm = styled.form`
  ${({ theme }) => theme.flexJustify}
  flex-flow: column;
  align-items: flex-end;
  width: 100%;
`;

export const Submit = styled(Button)`
  width: ${rem(111)};
  transition: background-color 200ms ease-in-out;

  &[disabled] {
    background-color: grey;
  }
`;
