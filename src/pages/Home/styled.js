import styled, { css } from 'styled-components';
import { rem } from 'polished';

export const HomeWrapper = styled.section`
  min-height: 100vh;

  /** */
  ${({ theme }) => css`
    background-color: ${theme.colors.overlay};
    ${theme.flexCentered}
    flex-flow: column;
  `}
`;

export const HomeFeed = styled.div`
  width: ${rem(800)};
  padding-bottom: ${rem(20)};

  /** */
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    ${theme.flexCentered};
    flex-flow: column;

    ${theme.mq.lessThan('sm')`
      width: 100%;
    `}
  `}
`;
