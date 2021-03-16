import React from 'react';
//import { useHistory } from 'react-router-dom';

import SignFormBlock from './SignFormBlock.js';
import signApi from '../utils/signApi.js';
import InfoTooltip from './InfoTooltip.js';

function Register(props) {

  //const history = useHistory();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isRegistrationSuccessful, setIsRegistrationSuccessful] = React.useState(false);
  const [isRegistrationFailed, setIsRegistrationFailed] = React.useState(false);
  const [isTriedToRegister, setIsTriedToRegister] = React.useState(false);

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  function switchIsRegistrationSuccessfulOnTrue() {
    setIsRegistrationSuccessful(true);
  }

  function switchIsRegistrationFailedOnTrue() {
    setIsRegistrationFailed(true);
  }

  function switchIsTriedToRegister() {
    setIsTriedToRegister(true);
  }

  function resetRegistrationStatus() {
    setIsRegistrationSuccessful(false);
    setIsRegistrationFailed(false);
    setIsTriedToRegister(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    signApi.signup(password, email)
      .then((res) => {
        switchIsRegistrationSuccessfulOnTrue();
        switchIsTriedToRegister();
      })
      //history.push('/signin');
      .catch((err) => {
        switchIsRegistrationFailedOnTrue();
        switchIsTriedToRegister();
      })
  }

  React.useEffect(() => {
    props.chooseHeaderLink('Войти');
  });


  return (
    <>
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

      {
        isTriedToRegister &&
        <InfoTooltip
          isRegistrationFailed = {isRegistrationFailed}
          isRegistrationSuccessful = {isRegistrationSuccessful}
          resetRegistrationStatus = {resetRegistrationStatus}
        />
      }
    </>
  )
}

export default Register;
