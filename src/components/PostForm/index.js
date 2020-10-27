import React, { memo } from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

import * as S from './styled';

const PostForm = ({
  title,
  formHandler,
  buttonTitle,
  formTitle,
  formContent,
}) => {
  const {
    errors,
    watch,
    handleSubmit,
    register,
  } = useForm({
    defaultValues: {
      postTitle: formTitle,
      postContent: formContent,
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
        title={buttonTitle}
        text={buttonTitle}
      />
    </S.FormWrapper>
  );
};

PostForm.defaultProps = {
  buttonTitle: 'Create',
  formContent: '',
  formTitle: '',
};

PostForm.propTypes = {
  formTitle: PropTypes.string,
  formContent: PropTypes.string,
  title: PropTypes.string.isRequired,
  formHandler: PropTypes.func.isRequired,
  buttonTitle: PropTypes.string,
};

export default memo(PostForm);
