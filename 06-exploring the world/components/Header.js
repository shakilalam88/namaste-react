import { LOGO_URL } from '../utils/constant'
import { useState } from 'react'

const Header = () => {
  const [btnName, setBtnName] = useState('Login')

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
            <a href="about">About</a>
          </li>
          <li className="header-nav-item">
            <a href="#menu">Menu</a>
          </li>
          <li className="header-nav-item">
            <a href="contact">Contact</a>
          </li>
          <li className="header-nav-item">
            <a
              href="#login"
              onClick={() => {
                btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login')
              }}
            >
              {btnName}
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
