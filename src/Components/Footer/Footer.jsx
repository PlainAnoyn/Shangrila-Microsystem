import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook,faSquareXTwitter,faLinkedin} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer>
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
      <ul className="social_icon">
        <li><a href="#"><FontAwesomeIcon icon={faFacebook} size='2x'/></a></li>
        <li><a href="#"><FontAwesomeIcon icon={faSquareXTwitter} size='2x' /></a></li>
        <li><a href="#"><FontAwesomeIcon icon={faLinkedin} size='2x' /></a></li>
      </ul>
      <ul className="menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <p>
© Copyright 2024 - Shangrila Microsystem. All Rights Reserved.
</p>
    </footer>
  );
};

export default Footer;
