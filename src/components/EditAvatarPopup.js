import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

export default function EditAvatarPopup(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [profileAvatar, setProfileAvatar] = React.useState('');
  const avatarInput = React.useRef(profileAvatar);

  function handleAvatarChange() {
    setProfileAvatar(avatarInput.current.value)
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.handleUpdateAvatar({
      avatar: profileAvatar
    });
  } 

  return (
    <PopupWithForm name="edit-avatar" title="Change Profile Picture" buttonText="Save" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit} >
      <input ref={avatarInput} onChange={handleAvatarChange} id="avatar-URL" type="url" value="" placeholder="enter avatar link here" className="popup__input popup__input_avatar-URL" name="avatarURL" required minLength="2" />
      <span id="avatar-URL-error" className="popup__error popup__error_visible"></span>
    </PopupWithForm>
  )
}