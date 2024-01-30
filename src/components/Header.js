import './Header.css';
import logo from './../assets/kestrix-logo.png';

function Header() {
  return (
    <header className="header">
      <img src={logo} className="header-logo" alt="Kestrix logo" />
    </header>
  );
}

export default Header;
