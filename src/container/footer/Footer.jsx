import React from 'react';
import logo from '../../assets/logo.png';
import './footer.css';
import { Link } from 'react-router-dom';

const Footer = () => (
  <div className="immi__footer section__padding">
    <div className="immi__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>

    <div className="immi__footer-btn">
      <p><Link to={"/login"}>Get Connected with US</Link></p>
    </div>

    <div className="immi__footer-links">
      <div className="immi__footer-links_logo">
        <img src={logo} alt="immi_logo" />
      </div>
      <div className="immi__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="immi__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="immi__footer-links_div">
        <h4>Get in touch</h4>
        <p>Admin@ImmiConnect 08060 Zwickau</p>
        <p>017-46784780</p>
        <p>info@immi-connect.com</p>
      </div>
    </div>

    <div className="immi__footer-copyright">
      <p>@2023 IMMI CONNECT. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;