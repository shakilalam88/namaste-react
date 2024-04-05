import { LOGO_URL } from '../utils/constant'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../utils/useOnlineStatus'
import UserContext from '../utils/UserContext'

const Header = () => {
  const [btnName, setBtnName] = useState('Login')

  const online = useOnlineStatus()

  const { loggedInUser } = useContext(UserContext)

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
          <li className="header-nav-item">{loggedInUser}</li>
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

export default Header
