import React from 'react';
import PopupWithForm from './PopupWithForm';

function PopupWithImage() {
  return (
    <section className="popup popup_type_image">
        <div className="popup__container popup__container_type_image">
          <button className="button button__close"></button>
          <figure className="popup__figure">
            <img className="popup__image" alt="" />
            <figcaption className="popup__caption"></figcaption>
          </figure>
        </div>
      </section>
  );
}

export default PopupWithImage;