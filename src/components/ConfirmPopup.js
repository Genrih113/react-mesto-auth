import PopupWithForm from './PopupWithForm.js';

function ConfirmPopup(props) {

  function handleSubmit(e) {
    e.preventDefault();
    props.onConfirm();
  }

  return (
    <PopupWithForm
      name="confirm"
      title="Вы уверены?"
      buttonText="Да"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    />
  )
}

export default ConfirmPopup;
