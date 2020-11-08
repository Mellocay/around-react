// import React from 'react';
// import PopupWithForm from './PopupWithForm';
// import { CurrentCardContext } from '../contexts/CurrentCardContext.js';

// function DeleteCardPopup(props) {
//   const currentCard = React.useContext(CurrentCardContext);
//   // const [profileName, setProfileName] = React.useState('');
//   // const [profileOccupation, setProfileOccupation] = React.useState('');

//   function handleSubmit(evt) {
//     evt.preventDefault();

//     props.handleUpdateProfile({
//       name: profileName, 
//       about: profileOccupation
//     });
//   }

//   return (
//     /* Profile Popup JSX */
//     <PopupWithForm name="edit-profile" title="Edit Profile" buttonText="Save" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
//       <input id="profile-name" type="text" placeholder="Name" defaultValue={currentUser.name} className="popup__input popup__input_name" name="name" required minLength="2" maxLength="40" onChange={handleProfileNameChange} />
     
//       <input id="profile-occupation" type="text" placeholder="Occupation" defaultValue={currentUser.about} className="popup__input popup__input_occupation" name="about" required minLength="2" maxLength="200" onChange={handleProfileOccupationChange}/>
     
//     </PopupWithForm>
//   )
// }

// export default EditProfilePopup;