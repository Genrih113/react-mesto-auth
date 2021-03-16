import { Link } from 'react-router-dom';
import mestoLogo from '../images/mesto_logo.svg';

function Header(props) {
  return (
    <header className="header">
      <div className="logo header__logo">
        <img className="logo__img" src={mestoLogo} alt="Проект Место"/>
      </div>
      <nav className="header__navigation-zone">
        {props.loggedIn && <span className="header__user-email">{props.userEmail}</span>}
        {(props.headerLink === 'Войти') && <Link className="header__handler" to="/signin">Войти</Link>}
        {(props.headerLink === 'Зарегистрироваться') && <Link className="header__handler" to="/signup">Зарегистрироваться</Link>}
        {(props.headerLink === 'Выйти') &&
          <Link className="header__handler" to="/signin" onClick={() => (props.logOut())}>Выйти</Link>
        }

      </nav>
    </header>
  );
}

export default Header;
