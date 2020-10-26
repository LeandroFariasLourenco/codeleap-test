import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import { postCareer, getCareers } from '@Actions/requests/careers';
import PostForm from '@Components/PostForm';
import Post from '@Components/Post';

import * as S from './styled';

const Home = () => {
  const { userName } = useSelector((state) => state.login);
  const [postList, setPostList] = useState([]);
  const [mount, setMount] = useState(false);
  const [hasNewPost, setHasNewPost] = useState(false);

  useEffect(() => {
    setMount(true);
    getCareers()
      .then((result) => {
        setPostList(result.data.results);
        return result;
      })
      .catch((err) => err);

    setHasNewPost(false);
  }, [hasNewPost]);

  const handleSubmit = async ({ postTitle, postContent }) => (
    /* eslint-disable no-alert */
    postCareer({
      username: userName,
      title: postTitle,
      content: postContent,
    }).then((response) => {
      window.alert('The post was sucessfully created!');
      setHasNewPost(true);
      return response;
    }).catch((err) => {
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
            buttonTitle='Create'
          />

          {postList.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              username={post.username}
              content={post.content}
              createdDate={new Date(post.created_datetime)}
              isEditable={post.username === userName}
              title={post.title}
            />
          ))}
        </S.HomeFeed>
      </CSSTransition>
    </S.HomeWrapper>
  );
};

export default Home;
