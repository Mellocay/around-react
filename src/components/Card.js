import React from 'react';

function Card(props) {

function handleCardClick() {
  props.onCardClick(props.card);
}

  return (
    <template className="card__template">
      <li className="card__item">
        <button className="button button__remove" onClick={props.isDeletePopupOpen}></button>
        <div className="card__image" onClick={handleCardClick} style={{backgroundImage: `url(${props.link})`}}>
        </div>
        <div className="card__base">
          <h3 className="card__title">{props.name}</h3>
          <div className="card__likes">  
            <button className="button button__like"></button>
            <p className="card__like-count"></p>
          </div>
        </div>
      </li>
    </template>
  );
}

export default Card;