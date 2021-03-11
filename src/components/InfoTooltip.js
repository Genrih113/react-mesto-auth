import './InfoTooltip.css';
import successImage from '../images/sign_success.svg';
import errorImage from '../images/sign_error.svg';

function InfoTooltip() {

  return (
    <div className="info-tooltip">
      <div className="info-tooltip__item">
        <img className="info-tooltip__image" src={successImage}>
        </img>
        {false&&<img className="info-tooltip__image" src={errorImage}></img>}
        <p className="info-tooltip__message">
          Вы успешно зарегистрировались!
        </p>
        {false&&
        <p className="info-tooltip__message">
          Что-то пошло не так! Попробуйте ещё раз.
        </p>
        }
        <button className="popup__close" type="button"
          aria-label="Закрыть">
        </button>
      </div>
    </div>
  )
}

export default InfoTooltip;