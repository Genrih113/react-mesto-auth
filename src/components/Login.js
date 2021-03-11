import SignFormBlock from './SignFormBlock.js';

function Register() {

  return (
    <SignFormBlock
      formName = "loginForm"
      formTitle = "Вход"
      isSignUp = {false}
      buttonText = "Войти"
    />
  )
}

export default Register;