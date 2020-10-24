import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as EditIcon } from '@Icons/edit.svg';
import { ReactComponent as TrashIcon } from '@Icons/trash.svg';

import Button from '@Components/Button';
import EditPopup from '@Components/EditPopup';

// import { deleteCareer } from '@Actions/requests/careers';

import * as S from './styled';

const Post = ({
  id,
  username,
  createdDate,
  title,
  content,
  isEditable,
}) => {
  const [editOpen, setEditOpen] = useState(false);

  const handleEdit = () => {
    setEditOpen(true);
  };

  const handleDelete = () => {
    /* eslint-disable no-alert */
    // const confirmDeletion = window.confirm('Are you sure you want to delete this item');

    // if (!confirmDeletion) return;

    // deleteCareer(id).then(() => console.log('eae')).catch(console.log);
  };

  return (
    <S.PostWrapper>
      <S.PostHeader>
        <S.PostTitle>{title}</S.PostTitle>
        {isEditable && (
          <S.IconsWrapper>
            <Button
              title='Delete'
              onClick={() => handleDelete()}
            >
              <TrashIcon />
            </Button>

            <Button
              title='Editar'
              onClick={() => handleEdit()}
            >
              <EditIcon />
            </Button>
          </S.IconsWrapper>
        )}
      </S.PostHeader>

      <S.PostBody>
        <S.UserInfoWrapper>
          <S.UserName>
            @
            {username}
          </S.UserName>
          <S.CreatedTime>{createdDate}</S.CreatedTime>
        </S.UserInfoWrapper>

        <S.PostContent>
          {content}
        </S.PostContent>
      </S.PostBody>

      <EditPopup
        isOpen={editOpen}
        handlePopupClose={() => setEditOpen(false)}
        postId={id}
      />
    </S.PostWrapper>
  );
};

Post.defaultProps = {
  isEditable: false,
};

Post.propTypes = {
  id: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
  createdDate: PropTypes.instanceOf(Date).isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  isEditable: PropTypes.bool,
};

export default memo(Post);
