import React from 'react';

function Card(props) {

function handleCardClick() {
  props.handleCardClick(props.card);
}

  return (
    <template className="card__template">
      <li className="card__item">
        <button className="button button__remove" onClick={props.handleDeleteCardClick}></button>
        <div className="card__image" onClick={handleCardClick} style={{backgroundImage: `url(${props.card.link})`}}>
        </div>
        <div className="card__base">
          <h3 className="card__title">{props.card.name}</h3>
          <div className="card__likes">  
            <button className="button button__like"></button>
            <p className="card__like-count">{props.card.likes.length}</p>
          </div>
        </div>
      </li>
    </template>
  );
}

export default Card;