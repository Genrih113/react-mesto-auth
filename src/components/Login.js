import React from 'react';
import { useHistory } from 'react-router-dom';


import SignFormBlock from './SignFormBlock.js';
import signApi from '../utils/signApi.js';

function Register(props) {

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
    signApi.signin(password, email)
      .then((res) => {
        localStorage.setItem('token', JSON.stringify(res.token));//JSON.stringify(res.token));
        props.logIn();
        history.push('/');
      })
  }


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

export default Register;