import React from 'react';

import SignFormBlock from './SignFormBlock.js';

function Register(props) {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.signUp(password, email);
  }

  React.useEffect(() => {
    props.chooseHeaderLink('Войти');
  }, []);


  return (
    <SignFormBlock
      formName = "registrationForm"
      formTitle = "Регистрация"
      isSignUp = {true}
      buttonText = "Зарегистрироваться"
      handleChangeEmail = {handleChangeEmail}
      handleChangePassword = {handleChangePassword}
      handleSubmit = {handleSubmit}
      email = {email}
      password = {password}
    />
  )
}

export default Register;
