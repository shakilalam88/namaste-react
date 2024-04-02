import { LOGO_URL } from '../utils/constant'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../utils/useOnlineStatus'

const Header = () => {
  const [btnName, setBtnName] = useState('Login')

  const online = useOnlineStatus()
  console.log('online', online)

  return (
    <div className="header">
      <div className="header-logo">
        <Link to="/">
          <img
            src={LOGO_URL}
            alt="logo"
          />
        </Link>
      </div>
      <div className="header-nav">
        <ul className="header-nav-items">
          <li className="header-nav-item">
            Online status : {online ? '🟢' : '🔴'}
          </li>
          <li className="header-nav-item">
            <Link to="about">About</Link>
          </li>
          <li className="header-nav-item">
            <Link to="grocery">Grocery</Link>
          </li>
          <li className="header-nav-item">
            <Link to="menu">Menu</Link>
          </li>
          <li className="header-nav-item">
            <Link to="contact">Contact</Link>
          </li>
          <li className="header-nav-item">
            <Link
              href="#login"
              onClick={() => {
                btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login')
              }}
            >
              {btnName}
            </Link>
          </li>
          {/* <li className="header-nav-item">
            <useOnlineStatus />
          </li> */}
        </ul>
      </div>
    </div>
  )
}

console.log('header', Header)

export default Header
