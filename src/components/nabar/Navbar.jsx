import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo2.png';

const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#home">About IC</a></p>
    <p><a href="#home">Explore</a></p>
    <p><a href="#home">Library</a></p>
  </>
)
function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="immi__navbar">
      <div className="immi__navbar-links">
        <div className="immi__navbar-links_logo">
          <img src={logo} alt='Logo' />
        </div>
        <div className="immi__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="immi__navbar-sign">
          <p>Sign In</p>
          <button type="button">Sign Up</button>
      </div>
      <div className="immi__navbar-menu">
        {toggleMenu 
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className="immi__navbar-menu_container scale-up-center">
            <div className="immi__navbar-menu_container-links">
              <Menu />
              <div className="immi__navbar-menu_container-links-sign">
              <p>Sign In</p>
              <button type="button">Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </div>
      
    </div>
  )
}

export default Navbar