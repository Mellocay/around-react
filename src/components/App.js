import React from 'react';
import headerLogo from './images/logo.svg';
import Header from './Header.js';

function App() {
  return (
    <div className="root">
      <Header />
      <section className="profile">
        <div className="profile__image-section">
          <img src = "./images/jc-pic.png" className = "profile__image" alt = "profile picture" />
          <button className="profile__image_edit-button"></button>
        </div>
        <div className="profile__info">
          <h2 className="profile__name"></h2>
          <p className="profile__occupation"></p>
        </div>
        <button className="button button__edit" aria-label="Edit Profile"></button>
        <button className="button button__add" aria-label="Add Picture Card"></button>
      </section>
      <main className="card">
        <ul className="card__items">
        </ul>
      </main>
      <section className="popup popup_type_edit-avatar">
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
      </section>
      <section className="popup popup_type_image">
        <div className="popup__container popup__container_type_image">
          <button className="button button__close"></button>
          <figure className="popup__figure">
            <img className="popup__image" alt="" />
            <figcaption className="popup__caption"></figcaption>
          </figure>
        </div>
      </section>
      <footer className="footer">
        <p className="footer__copyright">© 2020 Cayla Mello</p>
      </footer>
      <template className="card__template">
        <li className="card__item">
          <button className="button button__remove"></button>
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
    </div>
  );
}

export default App;
