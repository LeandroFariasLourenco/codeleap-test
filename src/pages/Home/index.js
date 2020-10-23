import React from 'react';

import PostForm from '@Components/PostForm';

import * as S from './styled';

const Home = () => (
  <S.HomeWrapper>
    <S.HomeFeed>
      <S.HeadingBlock>
        <S.Title>CodeLeap Network</S.Title>
      </S.HeadingBlock>

      <PostForm title="What's on your mind?" />
    </S.HomeFeed>
  </S.HomeWrapper>
);

export default Home;
