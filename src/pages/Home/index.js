import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import FlatList from 'flatlist-react';

import { getCareers } from '@Actions/requests/careers';
import { setHasNewPost } from '@Actions/dispatches/home';

import Post from '@Components/Post';
import HomeHeading from '@Components/HomeHeading';

import * as S from './styled';

const Home = () => {
  const { userName } = useSelector((state) => state.login);
  const [mount, setMount] = useState(false);

  const [postList, setPostList] = useState([]);
  const [nextData, setNextData] = useState('');
  const [isLoadingData, setIsLoadingData] = useState(false);

  const { hasNewPost } = useSelector((state) => state.home);
  const dispatch = useDispatch();

  const handleEndReached = () => {
    if (!isLoadingData) return;

    getCareers(nextData)
      .then((result) => {
        const { results, next } = result.data;
        setPostList([...postList, ...results]);
        setNextData(next || '');

        return result;
      })
      .catch((err) => err);
  };

  const handleEmpty = () => {
    const isListEmpty = !postList.length;
    if (isListEmpty && isLoadingData) {
      return <span>Loading list...</span>;
    }

    return <span>No posts have been found</span>;
  };

  useEffect(() => {
    setMount(true);
    setIsLoadingData(true);

    getCareers()
      .then((result) => {
        setPostList(result.data.results);
        setNextData(result.data.next);
        setIsLoadingData(false);
        return result;
      })
      .catch((err) => err);

    return () => {
      dispatch(setHasNewPost(false));
    };
  }, [hasNewPost, dispatch]);

  return (
    <S.HomeWrapper>
      <CSSTransition
        in={mount}
        classNames='transition'
        mountOnEnter
        timeout={12000}
      >
        <S.HomeFeed>
          <HomeHeading />

          <FlatList
            list={postList}
            renderItem={(post) => (
              <Post
                key={post.id}
                id={post.id}
                username={post.username}
                content={post.content}
                createdDate={new Date(post.created_datetime)}
                isEditable={post.username === userName}
                title={post.title}
              />
            )}
            renderWhenEmpty={() => handleEmpty()}
            loadMoreItems={() => handleEndReached()}
            hasMoreItems={!!nextData}
          />
        </S.HomeFeed>
      </CSSTransition>
    </S.HomeWrapper>
  );
};

export default Home;
