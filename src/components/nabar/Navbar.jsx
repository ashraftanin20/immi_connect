import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo2.png';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../features/actions/LogoutAction';
import { FaCaretDown } from 'react-icons/fa';

const Menu = () => (
  <>
    <p><a href="/">Home</a></p>
    <p><a href="/#about">About IC</a></p>
    <p><a href="/#features">Explore</a></p>
    <p><a href="/posts">Posts</a></p>
  </>
)
function Navbar() {
  const navigate = useNavigate();
  const [toggleMenu, setToggleMenu] = useState(false);
  const {userInfo} = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const signoutHandler = (e) => {
    e.preventDefault();
    dispatch(logoutUser(userInfo));
  }
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
      {userInfo ? (
        <div className="immi__navbar-dropdown">
          <p><Link to="#">Hi, {userInfo.user.name} {' '}<FaCaretDown /></Link></p>
          <div className="immi__navbar-dropdown__content scale-up-center">
              <p><Link to='/user/profile' >My Profile</Link></p>
              <p><Link to='/user/post'>My Posts</Link></p>
              <p><Link to='/user/message'>Messages</Link></p>
              <br />
              <hr />
              <p><Link onClick={signoutHandler} >Sign Out</Link></p>
            </div>
          
        </div>
      ) : (
        <div className="immi__navbar-sign">
          <p><Link to="/login">Sing In</Link></p>
          <button type="button" onClick={() => navigate('/register')}>Sign Up</button>
      </div>
      )}
      <div className="immi__navbar-menu">
        {toggleMenu 
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className="immi__navbar-menu_container scale-up-center">
            <div className="immi__navbar-menu_container-links">
              <Menu />
              {userInfo ? (
                  <div className="immi__navbar-menu_container-links-sign">
                  <p>Hi, {userInfo.user.name}</p>
                  <button type="button" onClick={signoutHandler}>Sign Out</button>
                  </div>
              ) : (
                <div className="immi__navbar-menu_container-links-sign">
                <p><Link to="/login">Sing In</Link></p>
                <button type="button" onClick={() => navigate('/register')}>Sign Up</button>
                </div>
              )}
              
            </div>
          </div>
        )}
      </div>
      
    </div>
  )
}

export default Navbar