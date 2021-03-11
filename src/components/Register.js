import SignFormBlock from './SignFormBlock.js';

function Register() {

  return (
    <SignFormBlock
      formName = "registrationForm"
      formTitle = "Регистрация"
      isSignUp = {true}
      buttonText = "Зарегистрироваться"
    />
  )
}

export default Register;
