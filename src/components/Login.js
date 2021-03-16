import React from 'react';

import SignFormBlock from './SignFormBlock.js';

function Login(props) {

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
    props.signIn(password, email)
  }

  React.useEffect(() => {
    props.chooseHeaderLink('Зарегистрироваться');
  }, []);

  return (
    <SignFormBlock
      formName = "loginForm"
      formTitle = "Вход"
      isSignUp = {false}
      buttonText = "Войти"
      handleChangeEmail = {handleChangeEmail}
      handleChangePassword = {handleChangePassword}
      handleSubmit = {handleSubmit}
      email = {email}
      password = {password}
    />
  )
}

export default Login;