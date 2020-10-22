import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';

function App(props) {

// set states for Popups
  const [isEditAvatarOpen, setIsEditAvatarOpen] = React.useState(false);
  const [isEditProfileOpen, setIsEditProfileOpen] = React.useState(false);
  const [isAddCardOpen, setIsAddCardOpen] = React.useState(false);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = React.useState(false);

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
    if(evt.target === evt.currentTarget)
      setIsEditAvatarOpen(false);
      setIsEditProfileOpen(false);
      setIsAddCardOpen(false);
      setIsDeletePopupOpen(false);
  }

  return (
    <div className="root">
      <Header />
      <Main 
// Prop values passed to Main.js
      handleEditAvatarClick={handleEditAvatarClick}
      isEditAvatarOpen={isEditAvatarOpen}
      handleEditProfileClick={handleEditProfileClick}
      isEditProfileOpen={isEditProfileOpen}
      handleAddCardClick={handleAddCardClick}
      isAddCardOpen={isAddCardOpen}
      handleDeleteCardClick={handleDeleteCardClick}
      isDeletePopupOpen={isDeletePopupOpen}
      onClose={handleClosePopups}
      />
      <Footer />
    </div>
  );
}

export default App;
