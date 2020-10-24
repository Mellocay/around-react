import React from 'react';

function Card(props) {

  return (
    <li className="card__item">
      <button className="button button__remove" onClick={props.handleDeleteCardClick}></button>
      <div className="card__image" onClick={props.handleCardClick} style={{backgroundImage: `url(${props.src})`}}>
      </div>
      <div className="card__base">
        <h3 className="card__title">{props.title}</h3>
        <div className="card__likes">  
          <button className="button button__like"></button>
          <p className="card__like-count">{props.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;