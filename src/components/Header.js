import { Link } from 'react-router-dom';
import mestoLogo from '../images/mesto_logo.svg';

function Header() {
  return (
    <header className="header">
      <div className="logo header__logo">
        <img className="logo__img" src={mestoLogo} alt="Проект Место"/>
      </div>
      <nav className="header__navigation-zone">
        <span className="header__user-email">email</span>
        <a className="header__handler" href="#">Войти</a>
        <a className="header__handler" href="#">Зарегистрироваться</a>
      </nav>
    </header>
  );
}

export default Header;
