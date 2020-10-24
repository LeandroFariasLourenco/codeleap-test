import React from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

import * as S from './styled';

const PostForm = ({
  title,
  formHandler,
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

  return (
    <S.FormWrapper onSubmit={handleSubmit(formHandler)}>
      <S.Title>{title}</S.Title>

      <S.PostLabel htmlFor='postTitle'>Title</S.PostLabel>
      <S.PostInput
        type='text'
        id='postTitle'
        name='postTitle'
        placeholder='Hello world'
        ref={register({
          required: true,
        })}
      />

      <S.PostLabel htmlFor='postContent'>Content</S.PostLabel>
      <S.PostContent
        id='postContent'
        name='postContent'
        type='textarea'
        placeholder='Content here'
        ref={register({
          required: true,
        })}
      />

      <S.Submit
        disabled={
          errors.postTitle
          || errors.postContent
          || !watch('postContent')
          || !watch('postTitle')
        }
        title='Create'
        text='Create'
      />
    </S.FormWrapper>
  );
};

PostForm.propTypes = {
  title: PropTypes.string.isRequired,
  formHandler: PropTypes.func.isRequired,
};

export default PostForm;
