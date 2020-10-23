import React from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

import * as S from './styled';

const PostForm = ({
  title,
}) => {
  const {
    errors,
    watch,
    handleSubmit,
    register,
  } = useForm({
    defaultValues: {
      postTitle: '',
      postContent: '',
    },
  });

  const onSubmit = ({ postTitle, postContent }) => {

  };

  return (
    <S.FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <S.Title>{title}</S.Title>

      <S.PostLabel htmlFor='postTitle'>Title</S.PostLabel>
      <S.PostInput
        type='text'
        id='postTitle'
        name='postTitle'
        ref={register({
          required: true,
        })}
      />

      <S.PostLabel htmlFor='postContent'>Content</S.PostLabel>
      <S.PostInput
        id='postContent'
        name='postContent'
        type='textarea'
        ref={register({
          required: true,
        })}
      />

      <S.Submit
        title='Create'
      />
    </S.FormWrapper>
  );
};

PostForm.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PostForm;
