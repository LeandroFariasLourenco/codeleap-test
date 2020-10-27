import React, { memo, useState, useEffect } from 'react';
import Popup from 'reactjs-popup';
import PropTypes from 'prop-types';

import PostForm from '@Components/PostForm';

import { patchCareer } from '@Actions/requests/careers';

import './style.scss';

const EditPopup = ({
  isOpen,
  handlePopupClose,
  postId,
}) => {
  const [popupOpen, setPopupOpen] = useState(isOpen);
  const handleSubmit = ({ postTitle, postContent }) => {
    /* eslint-disable no-alert */
    patchCareer(postId, {
      title: postTitle,
      content: postContent,
    })
      .then((response) => {
        alert('The post was successfully updated :)');
        window.location.reload();
        return response;
      })
      .catch((err) => err);
  };

  useEffect(() => {
    setPopupOpen(isOpen);
  }, [isOpen]);

  return (
    <Popup
      open={popupOpen}
      className='edit'
      onClose={() => handlePopupClose()}
    >
      <PostForm
        title='Edit item'
        formHandler={handleSubmit}
        buttonTitle='Save'
      />
    </Popup>
  );
};

EditPopup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handlePopupClose: PropTypes.func.isRequired,
  postId: PropTypes.number.isRequired,
};

export default memo(EditPopup);
