import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import PopupWithForm from './PopupWithForm';
import PopupWithImage from './PopupWithImage';
import Footer from './Footer.js';
import api from '../utils/Api.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function App() {

  // set states for Profile/Current User
  const [currentUser, setCurrentUser] = React.useState({});

  // Call server for Profile/User Content
  React.useEffect(() => {
    api.getUserInfo().then((res) => {
      setCurrentUser(res);
    })
    .catch(err => console.log(err));
  }, []);
  
  // set state for Cards
  const [cards, setCards] = React.useState([]);
  
  React.useEffect(() => {
    // Call server to get initial cards
    api.getCardList().then(res => {
      setCards(res.map((card) =>({
        link: card.link,
        title: card.name,
        likes: card.likes,
        _id: card._id,
        owner: card.owner
      })))
    })
    .catch(err => console.log(err));
  }, []);

  //control likes and unlikes
  function handleCardLikeStatus(card) {
    // Check one more time if this card was already liked
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    let res;

    if (isLiked === false) {
      res = api.cardLikeAdd(card._id)
      } else {
      res = api.cardLikeRemove(card._id)
    }
    res.then((newCard) => {
      // Create a new array based on the existing one and putting a new card into it
      const newCards = cards.map((c) => c._id === card._id ? newCard : c)
      // Update the state
      setCards(newCards);
    })
    .catch(err => console.log(err));
  }

  // set states for Popups
  const [isEditAvatarOpen, setIsEditAvatarOpen] = React.useState(false);
  const [isEditProfileOpen, setIsEditProfileOpen] = React.useState(false);
  const [isAddCardOpen, setIsAddCardOpen] = React.useState(false);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);

  // handler functions for Popups
  function handleEditAvatarClick(evt) {
    setIsEditAvatarOpen(true);
  }
  function handleEditProfileClick(evt) {
    setIsEditProfileOpen(true);
  }
  function handleAddCardClick(evt) {
    setIsAddCardOpen(true);
  }
  function handleDeleteCardClick(evt) {
    setIsDeletePopupOpen(true);
  }

  function handleClosePopups(evt) {
    if(evt.target !== evt.currentTarget) return
      setIsEditAvatarOpen(false);
      setIsEditProfileOpen(false);
      setIsAddCardOpen(false);
      setIsDeletePopupOpen(false);
      setIsImagePopupOpen(false);
  }
// set image popup state
const [selectedLink, setSelectedLink] = React.useState('');
const [selectedTitle, setSelectedTitle] = React.useState('');

// handler function for image popup
function handleCardClick(link, title) {
  setSelectedLink(link);
  setSelectedTitle(title);
  setIsImagePopupOpen(true);
}

// app JSX
  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="page">
      <Header />
      <Main 
// Prop values passed to Main.js
        handleEditAvatarClick={handleEditAvatarClick}
        handleEditProfileClick={handleEditProfileClick}
        handleAddCardClick={handleAddCardClick}
        handleDeleteCardClick={handleDeleteCardClick}
        handleCardClick={(link, title)=>{handleCardClick(link, title)}}
        cards={cards}
        handleCardLikeStatus={(card) => handleCardLikeStatus(card)}
      />


  {/* Avatar Popup JSX */}
  <PopupWithForm name="edit-avatar" title="Change Profile Picture" buttonText="Save" isOpen={isEditAvatarOpen} onClose={handleClosePopups}>
        <input id="avatar-URL" type="url" value="" placeholder="enter avatar link here" className="popup__input popup__input_avatar-URL" name="avatarURL" required minLength="2" />
        <span id="avatar-URL-error" className="popup__error popup__error_visible"></span>
      </PopupWithForm>

  {/* Profile Popup JSX */}
      <PopupWithForm name="edit-profile" title="Edit Profile" buttonText="Save" isOpen={isEditProfileOpen} onClose={handleClosePopups}>
        <input id="profile-name" type="text" value="" placeholder="Name" className="popup__input popup__input_name" name="name" required minLength="2" maxLength="40" />
        <span id="profile-name-error" className="popup__error popup__error_visible"></span>
        <input id="profile-occupation" type="text" value="" placeholder="Occupation" className="popup__input popup__input_occupation" name="occupation" required minLength="2" maxLength="200" />
        <span id="profile-occupation-error" className="popup__error popup__error_visible"></span>
      </PopupWithForm>

  {/* AddCard Popup JSX */}
      <PopupWithForm name="add-card" title="New Place" buttonText="Create" isOpen={isAddCardOpen} onClose={handleClosePopups}>
        <input id="card-title" type="text" value="" placeholder="title" className="popup__input popup__input_title" name="name" required minLength="1" maxLength="30" />
        <span id="card-title-error" className="popup__error popup__error_visible"></span>
        <input id="card-url" type="url" value="" placeholder="image link" className="popup__input popup__input_image-link" name="link" required />
        <span id="card-url-error" className="popup__error popup__error_visible"></span>
      </PopupWithForm>

  {/* Delete Popup JSX */}
      <PopupWithForm name="delete" title="Are you sure?" buttonText="Yes" isOpen={isDeletePopupOpen} onClose={handleClosePopups}/>

{/* Image Popup JSX */}
      <PopupWithImage link={selectedLink} title={selectedTitle} isOpen={isImagePopupOpen} onClose={handleClosePopups}/>

      <Footer />
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;