import React from 'react';
import PopupWithForm from './PopupWithForm.js';
import CurrentUserContext from '../contexts/CurrentUserContext.js';


function EditProfilePopup(props) {
  //стейты и хендлеры полей формы
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  // Подписка на контекст юзера
  const currentUser = React.useContext(CurrentUserContext);

  // заносим данные контекста в поля формы
  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, props.isOpen]);  //пропс isOpen для более корректной работы валидации


  //обработчик отправки формы
  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      name: name,
      about: description
    });
  }

  return (
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      buttonText="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}>

      <input
        onChange={handleChangeName}
        value={name}
        id="personName" className="popup__input popup__name_profile" name="popupInputName"
        type="text" minLength="2" maxLength="40" required placeholder="Имя"
      />
      <span id="personName-error" className="error"></span>
      <input
        onChange={handleChangeDescription}
        value={description}
        id="personPassion" className="popup__input popup__passion_profile" name="popupInputPassion"
        type="text" minLength="2" maxLength="200" required placeholder="О себе"
      />
      <span id="personPassion-error" className="error"></span>

    </PopupWithForm>
  )
}

export default EditProfilePopup;
