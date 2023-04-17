import React from 'react';
import people_icon from '../../assets/people-icon1.jpg';
import immi_header from '../../assets/immi_header.webp';
import './header.css';

function Header() {
  return (
    <div className="immi__header section__padding" id="home">
      <div className="immi__header-content">
        <h1 className="gradient__text">IMMI CONNECT Helps You Cope With Immigration Process</h1>
        <p>You can find volunters to help you finding home or help you with translation or mayby providing you basic guidance and advices.</p>
        <div className="immi__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>

        <div className="immi__header-content__people">
          <img src={people_icon} alt="people" />
          <p>900 people are registered with Immi Connnent.</p>
        </div>
      </div>
      <div className="immi__header-image">
          <img src={immi_header} alt="header" />
        </div>
    </div>
  )
}

export default Header