import React from 'react';
import PopupWithForm from './PopupWithForm.js';

function AddPlacePopup(props) {
  //стейты и хендлеры полей формы
  const [placeName, setPlaceName] = React.useState('');
  const [placeLink, setPlaceLink] = React.useState('');

  //для обнуления поля ввода при закрытии без отправки формы, во-имя корректной работы валидации
  React.useEffect(() => {
    if (props.isOpen) {
      setPlaceName('');
      setPlaceLink('');
    }}, [props.isOpen])

  function handlePlaceName(e) {
    setPlaceName(e.target.value);
  }

  function handlePlaceLink(e) {
    setPlaceLink(e.target.value);
  }

  //обработчик отправки формы
  function handleSubmit(e) {
    e.preventDefault();
    props.onAddPlace({
      name: placeName,
      link: placeLink
    });
  }


  return(
    <PopupWithForm
      name="place"
      title="Новое место"
      buttonText="Создать"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      >

      <input
        onChange={handlePlaceName}
        id="placeName" className="popup__input popup__name_place" name="popupInputPlace"
        type="text" minLength="2" maxLength="30" required placeholder="Название" value={placeName}
      />
      <span id="placeName-error" className="error"></span>
      <input
        onChange={handlePlaceLink}
        id="placeLink" className="popup__input popup__link_place" name="popupInputLink"
        type="url" required placeholder="Ссылка на картинку" value={placeLink}
      />
      <span id="placeLink-error" className="error"></span>

    </PopupWithForm>
  )
}

export default AddPlacePopup;
