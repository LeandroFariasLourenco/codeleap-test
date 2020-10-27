import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { postCareer } from '@Actions/requests/careers';
import { setHasNewPost } from '@Actions/dispatches/home';

import PostForm from '@Components/PostForm';

import * as S from './styled';

const HomeHeading = () => {
  const dispatch = useDispatch();
  const { userName } = useSelector((state) => state.login);

  const handleSubmit = async ({ postTitle, postContent }) => (
    /* eslint-disable no-alert */
    postCareer({
      username: userName,
      title: postTitle,
      content: postContent,
    }).then((response) => {
      window.alert('The post was sucessfully created!');
      dispatch(setHasNewPost(true));
      return response;
    }).catch((err) => {
      window.alert('An error has ocurred... :( \n Please try again later');
      return err;
    })
  );

  return (
    <>
      <S.HeadingBlock>
        <S.Title>CodeLeap Network</S.Title>
      </S.HeadingBlock>

      <PostForm
        title="What's on your mind?"
        formHandler={handleSubmit}
        buttonTitle='Create'
      />
    </>
  );
};

export default HomeHeading;
