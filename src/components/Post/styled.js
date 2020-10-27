import styled, { css } from 'styled-components';
import { rem } from 'polished';

import { Wrapper } from '@Components/Button/styled';

const commonText = css`
  color: \#777;
  font-size: ${rem(18)};
`;

export const PostWrapper = styled.div`
  width: 100%;
  padding: ${rem(27)} ${rem(36)};

  /** */
  ${({ theme }) => theme.mq.lessThan('sm')`
    padding: ${rem(10)} ${rem(10)};
  `}
`;

export const PostBody = styled.div`
  border: ${rem(1)} solid #999;
  padding-bottom: ${rem(37)};
`;

export const PostHeader = styled.div`
  display: flex;
  justify-content: space-around;

  /** */
  ${({ theme }) => theme.mq.lessThan('sm')`
    flex-flow: column;
  `}
`;

export const PostTitle = styled.h2`
  font-size: ${rem(22)};
  width: 100%;
  padding: ${rem(24)} ${rem(30)};

  /** */
  ${({ theme }) => css`
    color: ${theme.colors.white};
    background-color: ${theme.colors.black};
  `}
`;

export const UserInfoWrapper = styled.div`
  padding: 0 ${rem(30)} ${rem(27)};
  display: flex;
  justify-content: space-between;
  margin-top: ${rem(23)};
  margin-bottom: ${rem(18)};
`;

export const UserName = styled.h3`
  ${commonText}
`;

export const CreatedTime = styled.span`
  ${commonText}

  .is--zero {
    display: none;
  }
`;

export const IconsWrapper = styled.div`
  display: flex;

  /** */
  ${({ theme }) => theme.mq.lessThan('sm')`
    width: 100%;

    ${Wrapper} {
      flex: 1;
    }
  `}
`;

export const PostContent = styled.div`
  padding: 0 ${rem(30)};
`;
