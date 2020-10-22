import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import PopupWithForm from './PopupWithForm.js';
import Footer from './Footer.js';

function App(props) {

  const [isEditAvatarOpen, setIsEditAvatarOpen] = React.useState(false);
  const [isEditProfileOpen, setIsEditProfileOpen] = React.useState(false);
  const [isAddCardOpen, setIsAddCardOpen] = React.useState(false);

  function handleEditAvatarClick(evt) {
    setIsEditAvatarOpen(true);
  }

  function handleEditProfileClick(evt) {
    setIsEditProfileOpen(true);
  }
  
  function handleAddCardClick(evt) {
    setIsAddCardOpen(true);
  }

  function closePopups(evt) {
    if(evt.target === evt.currentTarget)
      setIsEditAvatarOpen(false);
      setIsEditProfileOpen(false);
      setIsAddCardOpen(false);
  }

  return (
    <div className="root">
      <Header />
      <Main 
      {handleEditAvatarClick}
      {handleEditProfileClick}
      {handleAddCardClick}
      {closePopups}
      />
      <Footer />
    </div>
  );
}

export default App;
