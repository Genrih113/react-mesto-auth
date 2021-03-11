function ImagePopup(props) {
  return (
    <div className={`popup popup_place-view ${props.isOpen && 'popup_opened'}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
        props.onClose()
      }}}>
      <figure className="popup__figure">
        <img className="popup__place-image" src={props.card.link} alt={props.card.name} />
        <figcaption className="popup__place-caption">{props.card.name}</figcaption>
        <button className="popup__close popup__close_place-view" type="button" aria-label="Закрыть"
          onClick={props.onClose}>
        </button>
      </figure>
    </div>
  );
}

export default ImagePopup;
