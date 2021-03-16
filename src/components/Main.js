import React from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext.js';
import Card from './Card.js';

function Main(props) {

  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    props.chooseHeaderLink('Выйти');
  }, []);

  return (

    <main className="main">

      <section className="profile">
        <div className="person">
          <div className="person__avatar-container">
            <div className="person__avatar-img-container">
            <img className="person__avatar" src={currentUser.avatar} alt="Аватар"/>
            </div>
            <div onClick={props.onEditAvatar} className="person__avatar-button"></div>
          </div>
          <div className="person__edit">
            <div className="person__description">
              <h1 className="person__name">{currentUser.name}</h1>
              <p className="person__passion">{currentUser.about}</p>
            </div>
            <button onClick={props.onEditProfile}
              className="person__edit-button" type="button" aria-label="Редактировать">
            </button>
          </div>
        </div>
        <button onClick={props.onAddPlace} className="add-button" type="button" aria-label="Добавить"></button>
      </section>

      <section>
          <ul className="places">
            {props.cards.map((card, i) =>
            (<Card key={card._id} card={card}
              onCardClick={props.onCardClick}
              onCardLike={props.onCardLike}
              onCardDelete={props.onCardDelete} />))}
          </ul>
      </section>

    </main>

  );
}

export default Main;
