import { useHistory } from 'react-router-dom';

import './InfoTooltip.css';
import successImage from '../images/sign_success.svg';
import errorImage from '../images/sign_error.svg';

function InfoTooltip(props) {

  const history = useHistory();

  function onClose() {
    if (props.isRegistrationSuccessful) {
      history.push('/signin');
    }
    props.resetRegistrationStatus();
  }

  return (
    <div className="info-tooltip">
      <div className="info-tooltip__item">
        {
          props.isRegistrationSuccessful &&
          <img className="info-tooltip__image" src={successImage} alt="Регистрация пройдена">
          </img>
        }
        {
          props.isRegistrationFailed &&
          <img className="info-tooltip__image" src={errorImage} alt="Регистрация не пройдена">
          </img>
        }
        {
          props.isRegistrationSuccessful &&
          <p className="info-tooltip__message">
            Вы успешно зарегистрировались!
          </p>
        }
        {
          props.isRegistrationFailed &&
          <p className="info-tooltip__message">
            Что-то пошло не так! Попробуйте ещё раз.
          </p>
        }
        <button
          onClick = {onClose}
          className="popup__close" type="button"
          aria-label="Закрыть">
        </button>
      </div>
    </div>
  )
}

export default InfoTooltip;