import React from 'react';
import formValidator from '../utils/formValidator.js';

function PopupWithForm(props) {

  //при открытии попапа выбирается его форма, активируется валидация,
  //включается первичный дизейбл кнопки отправки
  React.useEffect(() => {
    if (props.isOpen) {
      formValidator.selectForm(`.popup__container_${props.name}`);
      formValidator.validateForm();
      formValidator.clearPopupFromErrors();
    }
  }, [props.isOpen, props.name])

  return(
    <div className={`popup ${props.isOpen && 'popup_opened'} popup_${props.name}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
        props.onClose();
      }}}>
      <form onSubmit={(e) => props.onSubmit(e)}
        className={`popup__container popup__container_${props.name}`} name={`${props.name}PopupForm`} noValidate>
        <h2 className="popup__title">{props.title}</h2>
        <fieldset className="popup__content">

          {props.children}

          <button className="popup__submit" type="submit">{props.buttonText}</button>
        </fieldset>
        <button
          onClick={() => {
            props.onClose();
          }}
          className={`popup__close popup__close_${props.name}`} type="button" aria-label="Закрыть">
        </button>
      </form>
    </div>
  );
}

export default PopupWithForm;
