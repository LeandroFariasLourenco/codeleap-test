import styled, { css } from 'styled-components';
import { rem } from 'polished';

export const HomeWrapper = styled.section`
  height: 100vh;

  /** */
  ${({ theme }) => css`
    background-color: ${theme.colors.overlay};
    ${theme.flexCentered}
    flex-flow: column;
  `}
`;

export const HomeFeed = styled.div`
  width: ${rem(800)};

  /** */
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    ${theme.flexCentered};
    flex-flow: column;
  `}
`;

export const HeadingBlock = styled.div`
  padding: ${rem(27)} ${rem(37)};
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
