import styled, { css } from 'styled-components';
import { rem } from 'polished';

const commonText = css`
  color: \#777;
  font-size: ${rem(18)};
`;

export const PostWrapper = styled.div`
  width: 100%;
  padding: ${rem(27)} ${rem(36)};
`;

export const PostBody = styled.div`
  border: ${rem(1)} solid #999;
  padding-bottom: ${rem(37)};
`;

export const PostHeader = styled.div`
  display: flex;
  justify-content: space-around;
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
`;

export const PostContent = styled.div`
  padding: 0 ${rem(30)};
`;
