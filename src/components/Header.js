import { LOGO_URL } from '../utils/constant'
const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <img
          src={LOGO_URL}
          alt="logo"
        />
      </div>
      <div className="header-nav">
        <ul className="header-nav-items">
          <li className="header-nav-item">
            <a href="#home">Home</a>
          </li>
          <li className="header-nav-item">
            <a href="#about">About</a>
          </li>
          <li className="header-nav-item">
            <a href="#menu">Menu</a>
          </li>
          <li className="header-nav-item">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
