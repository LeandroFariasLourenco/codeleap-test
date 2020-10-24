import styled, { css } from 'styled-components';
import { rem } from 'polished';

import Button from '@Components/Button';

const commonInput = css`
  width: 100%;
  padding: ${rem(6)} ${rem(10)};
  border: ${rem(1)} solid \#777;
  border-radius: ${rem(4)};
`;

export const FormWrapper = styled.form`
  width: ${rem(720)};
  border: ${rem(1)} solid #999;
  padding: ${rem(23)} ${rem(34)} ${rem(29)} ${rem(30)};
  margin-bottom: ${rem(35)};

  /** */
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    ${theme.flexJustify};
    align-items: flex-end;
    flex-flow: column;
  `}
`;

export const PostLabel = styled.label`
  font-size: ${rem(16)};
  margin-bottom: ${rem(7)};
  width: 100%;

  &:not(:first-of-type) {
    margin-top: ${rem(19)};
  }
`;

export const PostInput = styled.input`
  ${commonInput}
`;

export const PostContent = styled.textarea`
  ${commonInput}
  height: ${rem(75)};
`;

export const Submit = styled(Button)`
  margin-top: ${rem(35)};
`;

export const Title = styled.h2`
  margin-bottom: ${rem(34)};
  font-size: ${rem(22)};
  width: 100%;
  display: block;
`;
