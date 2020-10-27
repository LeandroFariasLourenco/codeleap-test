import styled, { css } from 'styled-components';
import { rem } from 'polished';

export const HeadingBlock = styled.div`
  padding: ${rem(27)} ${rem(36)};
  font-size: ${rem(22)};
  width: 100%;
  margin-bottom: ${rem(44)};

  /** */
  ${({ theme }) => css`
    background-color: ${theme.colors.black};
    color: ${theme.colors.white};
  `}
`;

export const Title = styled.h1``;
