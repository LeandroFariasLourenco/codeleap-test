import React, { memo, useState, useEffect } from 'react';
import Popup from 'reactjs-popup';
import PropTypes from 'prop-types';

import PostForm from '@Components/PostForm';

import './style.scss';

const EditPopup = ({
  isOpen,
  handlePopupClose,
  postId,
}) => {
  const [popupOpen, setPopupOpen] = useState(isOpen);
  // const handleSubmit = ({ postTitle, postContent }) => {
  const handleSubmit = () => {

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
      {postId}
    </Popup>
  );
};

EditPopup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handlePopupClose: PropTypes.func.isRequired,
  postId: PropTypes.number.isRequired,
};

export default memo(EditPopup);
