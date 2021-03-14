import React from 'react';
import { useHistory } from 'react-router-dom';

import SignFormBlock from './SignFormBlock.js';
import signApi from '../utils/signApi.js';

function Register() {

  const history = useHistory();

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
    signApi.signup(password, email);
    history.push('/signin');
  }

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
