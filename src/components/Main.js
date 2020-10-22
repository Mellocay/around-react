import React, { useState } from 'react';
import PopupWithForm from './PopupWithForm';
import PopupWithImage from './PopupWithImage';
import api from '../utils/Api.js';

function Main(props) {

// set states for Profile Content
const [userAvatar, setUserAvatar] = React.useState();
const [userName, setUserName] = React.useState();
const [userDescription, setUserDescription] = React.useState();

// Call server for Profile Content
React.useEffect(() => {
  api.getUserInfo().then((res) => {
    setUserAvatar(res.avatar);
    setUserName(res.name);
    setUserDescription(res.about);
  })
  .catch(err => console.log(err));
});

// set state for Cards
const [cards, setCards] = React.useState([]);
// Call server to get initial cards
React.useEffect(() => {
  api.getCardList().then((res) => {
    setCards(res);
  })
  .catch(err => console.log(err));
});

// JSX for Main section
  return (
    <main className="main">
{/* Profile JSX */}
      <section className="profile">
        <div className="profile__image-section">
          <img src={userAvatar} className = "profile__image" alt={userName} />
          <button className="profile__image_edit-button" onClick={props.handleEditAvatarClick}></button>
        </div>
        <div className="profile__info">
          <h2 className="profile__name">{userName}</h2>
          <p className="profile__occupation">{userDescription}</p>
        </div>
        <button className="button button__edit" onClick={props.handleEditProfileClick} aria-label="Edit Profile"></button>
        <button className="button button__add" aria-label="Add Picture Card" onClick={props.handleAddCardClick}></button>
      </section>

{/* Card JSX */}
      <section className="card">
        <ul className="card__items">
        </ul>
      </section>

{/* Avatar Popup JSX */}
      <PopupWithForm name="edit-avatar" title="Change Profile Picture" buttonText="Save" isOpen={props.isEditAvatarOpen} onClose={props.onClose}></PopupWithForm>

{/* Profile Popup JSX */}
      <PopupWithForm name="edit-profile" title="Edit Profile" buttonText="Save" isOpen={props.isEditProfileOpen} onClose={props.onClose}></PopupWithForm>

{/* Card Popup JSX */}
      <PopupWithForm name="add-card" title="New Place" buttonText="Create" isOpen={props.isAddCardOpen} onClose={props.onClose}></PopupWithForm>

{/* Delete Popup JSX */}
      <PopupWithForm name="delete" title="Are you sure?" buttonText="Yes" isOpen={props.isDeletePopupOpen} onClose={props.onClose}/>

      {/* <section className="popup popup_type_edit-avatar">
        <div className="popup__container">
          <button className="button button__close"></button>
          <form className="popup__form popup__form_type_edit-avatar popup_size_large">
            <h2 className="popup__title">Change Profile Picture</h2>
            <input id="avatar-URL" type="url" value="" placeholder="enter avatar link here" className="popup__input popup__input_avatar-URL" name="avatarURL" required minlength="2" />
            <span id="avatar-URL-error" className="popup__error popup__error_visible"></span>
            <button type="submit" className="button button__submit button__submit_save button__submit_disabled" disabled>Save</button>
          </form>
        </div>
      </section>
      <section className="popup popup_type_edit-button">
        <div className="popup__container">
          <button type="close" className="button button__close"></button>
          <form className="popup__form popup__form_type_edit-button popup_size_large">
            <h2 className="popup__title">Edit profile</h2>
            <input id="profile-name" type="text" value="" placeholder="Name" className="popup__input popup__input_name" name="name" required minlength="2" maxlength="40" />
            <span id="profile-name-error" className="popup__error popup__error_visible"></span>
            <input id="profile-occupation" type="text" value="" placeholder="Occupation" className="popup__input popup__input_occupation" name="occupation" required minlength="2" maxlength="200" />
            <span id="profile-occupation-error" className="popup__error popup__error_visible"></span>
            <button type="submit" className="button button__submit button__submit_save button__submit_disabled" disabled>Save</button>
          </form>
        </div>
      </section>
      <section className="popup popup_type_add-button">
        <div className="popup__container popup__container_type_add-button">
          <button className="button button__close"></button>
          <form className="popup__form popup_size_large popup__form_type_add-button">
            <h2 className="popup__title popup__title_type_add-button">New Place</h2>
            <input id="card-title" type="text" value="" placeholder="title" className="popup__input popup__input_title" name="name" required minlength="1" maxlength="30" />
            <span id="card-title-error" className="popup__error popup__error_visible"></span>
            <input id="card-url" type="url" value="" placeholder="image link" className="popup__input popup__input_image-link" name="link" required />
            <span id="card-url-error" className="popup__error popup__error_visible"></span>
            <button type="submit" className="button button__submit button__submit_create button__submit_disabled" disabled>Create</button>
          </form>
        </div>
      </section>
      <section className="popup popup_type_delete">
        <div className="popup__container popup__container_type_delete">
          <button className="button button__close"></button>
          <form className="popup__form">
            <h2 className="popup__title popup__title_type_delete">Are you sure?</h2>
            <button type="submit" className="button button__submit button__submit_delete">Yes</button>
          </form>  
        </div>
      </section> */}
    
      <PopupWithImage />

      <template className="card__template">
        <li className="card__item">
          <button className="button button__remove" onClick={props.handleDeleteCardClick}></button>
          <div className="card__image">
          </div>
          <div className="card__base">
            <h3 className="card__title"></h3>
            <div className="card__likes">  
              <button className="button button__like"></button>
              <p className="card__like-count"></p>
            </div>
          </div>
        </li>
      </template>

    </main>
  );
}

export default Main;