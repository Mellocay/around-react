import React from 'react';
import api from '../utils/Api.js';
import Card from './Card.js';

function Main(props) {

// set states for Profile Content
const [userAvatar, setUserAvatar] = React.useState('');
const [userName, setUserName] = React.useState('');
const [userDescription, setUserDescription] = React.useState('');

// set state for Cards
const [cards, setCards] = React.useState([]);

// Call server for Profile Content
React.useEffect(() => {
  api.getUserInfo().then((res) => {
    setUserAvatar(res.avatar);
    setUserName(res.name);
    setUserDescription(res.about);
  })
  .catch(err => console.log(err));
  
  // Call server to get initial cards
  api.getCardList().then(res => {
    setCards(res.map((card) =>({
      link: card.link,
      title: card.name,
      likes: card.likes
    })))
  })
  .catch(err => console.log(err));
}, []);

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
          {cards.map((card, index, handleDeleteCardClick) => 
              <Card 
                key={index}
                src={card.link}
                title={card.title} 
                likes={card.likes}
                handleDeleteCardClick={props.handleDeleteCardClick}
                handleCardClick={() => props.handleCardClick(card.link, card.title)}
              />
          )}
        </ul>
      </section>
        
    </main>
  );
}

export default Main;