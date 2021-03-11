import './SignFormBlock.css';

function SignFormBlock(props) {

  return (
    <div className="sign-form-container">
      <form className="sign-form sign-form-container__item" name={`${props.formName}`}>
        <h2 className="sign-form__title">{props.formTitle}</h2>
        <input
          id="email" className="sign-form__input" name="Email"
          type="email" minLength="2" maxLength="40" required placeholder="email"
        />
        <input
          id="password" className="sign-form__input" name="password"
          type="password" minLength="2" maxLength="40" required placeholder="Пароль"
        />
        <button className="sign-form__submit" type="submit">{`${props.buttonText}`}</button>
        {props.isSignUp &&
        <div className="sign-form__login-prompt">
          <span>Уже зарегистрированы? </span>
          <a className="sign-form__link" href="#">Войти</a>
        </div>
        }
      </form>
    </div>
  )
}

export default SignFormBlock;
