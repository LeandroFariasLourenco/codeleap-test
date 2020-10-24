import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import { postCareer } from '@Actions/requests/careers';
import PostForm from '@Components/PostForm';
import PostList from '@Components/PostList';

import * as S from './styled';

const Home = () => {
  const { userName } = useSelector((state) => state.login);
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  const handleSubmit = async ({ postTitle, postContent }) => (
    /* eslint-disable no-alert */
    postCareer({
      userName,
      title: postTitle,
      content: postContent,
    }).then((e) => {
      console.log(e);
      window.alert('The post was sucessfully created!');
      return e;
    }).catch((err) => {
      console.warn(err);
      window.alert('An error has ocurred... :( \n Please try again later');
      return err;
    })
  );

  return (
    <S.HomeWrapper>
      <CSSTransition
        in={mount}
        classNames='transition'
        mountOnEnter
        timeout={12000}
      >

        <S.HomeFeed>
          <S.HeadingBlock>
            <S.Title>CodeLeap Network</S.Title>
          </S.HeadingBlock>

          <PostForm
            title="What's on your mind?"
            formHandler={handleSubmit}
          />

          <PostList />
        </S.HomeFeed>
      </CSSTransition>
    </S.HomeWrapper>
  );
};

export default Home;
