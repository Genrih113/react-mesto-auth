import React, { useState } from 'react';
import { Route, Switch, useHistory, Redirect } from 'react-router-dom';

import './App.css';

import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import ImagePopup from './ImagePopup.js';
import api from '../utils/api.js';
import CurrentUserContext from '../contexts/CurrentUserContext.js';
import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import AddPlacePopup from './AddPlacePopup.js';
import ConfirmPopup from './ConfirmPopup.js';
import Register from './Register.js';
import Login from './Login.js';
import InfoTooltip from './InfoTooltip.js';
import ProtectedRoute from './ProtectedRoute.js';
import signApi from '../utils/signApi';


function App() {
  // стейты и хендлы состояний попапов
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = React.useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  };

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  };

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  };

  function handlePlaceImageClick() {
    setIsImagePopupOpen(true);
  }

  function handleOpenConfirmPopupClick() {
    setIsConfirmPopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
    setIsConfirmPopupOpen(false);
    setSelectedCard({});
  }


  //стейт, хендлы и эффект контекста-юзера
  const [currentUser, setCurrentUser] = React.useState({
    about: "",
    avatar: "",
    cohort: "",
    name: "",
    _id: "75afb32823f9c1dc44155bd8"
  });

  function handleUpdateUser(obj) {
    api.editUserInfo(obj)
    .then((result) => {
      setCurrentUser(result);
      closeAllPopups();
    })
    .catch(err => console.log(err))
    .finally(closeAllPopups())
  }

  function handleUpdateAvatar(url) {
    api.changeAvatar(url)
    .then((result) => {
      setCurrentUser(result);
    })
    .catch(err => console.log(err))
    .finally(closeAllPopups())
  }

  React.useEffect(() => {
    api.getUserInfo()
    .then((result) => {
      setCurrentUser(result);
    })
    .catch(err => console.log(err))
  }, []);


  //стейт выбранной карточки и хендлы открытия попапов просмотра фотографии и подтверждения удаления
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleCardClick(card) {
    setSelectedCard(card);
    handlePlaceImageClick();
  }

  function handleCardDeleteClick(card) {
    setSelectedCard(card);
    handleOpenConfirmPopupClick();
  }


  //стейт, эффект и хендлы работы с массивом карточек мест
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getInitialCards()
    .then((result) => {
      setCards(result);
    })
    .catch(err => console.log(err))
  }, []);

  function handleCardLike(card) {
    // Проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(like => like._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.likeToggleCard(isLiked, card._id)
    .then((newCard) => {
        // Формируем новый массив на основе имеющегося, подставляя в него новую карточку
      const newCards = cards.map((c) => c._id === card._id ? newCard : c);
      // Обновляем стейт
      setCards(newCards);
    })
    .catch(err => console.log(err))
  }

  //хендл удаления карточки запускается из попапа подтверждения
  function handleCardDelete(card) {
    api.deleteCard(card._id)
    .then((result) => {
      const newCards = cards.filter((c) => {return (c._id !== card._id)});
      setCards(newCards);
    })
    .catch(err => console.log(err))
    .finally(closeAllPopups())
  }

  function handleAddPlaceSubmit(newPlaceObj) {
    api.addNewCard(newPlaceObj)
    .then((result) => {
      setCards([result, ...cards]);
    })
    .catch(err => console.log(err))
    .finally(closeAllPopups())
  }

  // const localStrg = localStorage.getItem('token');
  // console.log(`localStrg is: ${localStrg}`);
  // console.log(`localStrg is: ${Boolean(localStrg) === true}`);


  // к 14му спринту

  console.log('new iteration');

  const [headerLink, setHeaderLink] = useState('');
  function chooseHeaderLink(string) {
    setHeaderLink(string);
  }

  const [loggedIn, setLoggedIn] = React.useState(false); //(Boolean(localStrg));
  function logIn() {
    setLoggedIn(true);
  }

  const [userId, setUserId] = React.useState('');
  function memorizeUserId(id) {
    setUserId(id);
  }

  const [userEmail, setUserEmail] = React.useState('');
  function memorizeUserEmail(email) {
    setUserEmail(email);
  }

  const history = useHistory();

  React.useEffect(() => {
    if (Boolean(localStorage.getItem('token'))) {
      console.log(`localStorage in effect ${localStorage.getItem('token')}`);
      signApi.checkToken(localStorage.getItem('token'))
      .then((result) => {

        console.log(result.data.email);

        memorizeUserEmail(result.data.email);
        memorizeUserId(result.data._id);
        if (result.data.email) {
          logIn();
          history.push('/');
        }
      })
      .catch(err => console.log(err))
    }
  }, [history]);


  return (
    <CurrentUserContext.Provider value = {currentUser}>
      <div className="body">
        <div className="page body__page">

          <Header />

          <Switch>

            <Route path="/signup" ><Register/></Route>

            <Route path="/signin" ><Login logIn = {logIn} /></Route>

            {console.log(`loggedIn before protected route is: ${loggedIn}`)}
            <ProtectedRoute path="/"
                component={Main}
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onEditAvatar={handleEditAvatarClick}
                onCardClick={handleCardClick}
                cards={cards}
                onCardLike={handleCardLike}
                //onCardDelete={handleCardDelete}
                onCardDelete={handleCardDeleteClick}
                loggedIn = {loggedIn}
            />

          </Switch>

              <EditProfilePopup
                isOpen={isEditProfilePopupOpen}
                onClose={closeAllPopups}
                onUpdateUser={handleUpdateUser}
              />

              <AddPlacePopup
                isOpen={isAddPlacePopupOpen}
                onClose={closeAllPopups}
                onAddPlace={handleAddPlaceSubmit}
              />

              <EditAvatarPopup
                isOpen={isEditAvatarPopupOpen}
                onClose={closeAllPopups}
                onUpdateAvatar={handleUpdateAvatar}
              />

              <ImagePopup
                isOpen={isImagePopupOpen}
                card={selectedCard}
                onClose={closeAllPopups}
              />

              <ConfirmPopup
                isOpen={isConfirmPopupOpen}
                onClose={closeAllPopups}
                onConfirm={() => handleCardDelete(selectedCard)}
              />

              <InfoTooltip />

          <Footer />

        </div>

      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
