import React from 'react';

import CurrentUserContext from '../contexts/CurrentUserContext.js';


function Card(props) {

  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = props.card.owner._id === currentUser._id;

  const isLiked = props.card.likes.some(like => like._id === currentUser._id);

  return (
    <li className="place">
      <div className="place__img-container">
        <img
          className="place__img"
          src={props.card.link}
          alt={props.card.name}
          onClick={() => props.onCardClick(props.card)}
        />
      </div>
      <div className="place__description">
        <h2 className="place__title">{props.card.name}</h2>
        <div className="place__like-container">
          <button
            className={`place__like-button ${isLiked && 'place__like-button_liked'}`}
            type="button"
            onClick={() => props.onCardLike(props.card)}>
          </button>
          <p className="place__like-counter">{props.card.likes.length}</p>
        </div>
      </div>
      <button
        className={`place__delete-button ${!isOwn && 'place__delete-button_invisible'}`}
        type="button"
        onClick={() => props.onCardDelete(props.card)}>
      </button>
    </li>
  );
}

export default Card;
