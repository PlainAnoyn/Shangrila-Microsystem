import React, { useState, useEffect } from 'react'
import './Navbar.css'
import icon from '../../assets/icon.png'
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={icon} alt="Shangrila" className="logo" />
        </a>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to='hero' className="nav-link" smooth={true} offset={0} duration={500}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to='about' className="nav-link" smooth={true} offset={-80} duration={500}>About us</Link>
            </li>
            <li className="nav-item">
              <Link to='recentwork' className="nav-link" smooth={true} offset={-60} duration={500}>Project</Link>
            </li>
            <li className="nav-item">
              <Link to='Services' className="nav-link" smooth={true} offset={-70} duration={500}>Services</Link>
            </li>
            <li className="nav-item">
              <Link to='contact' className="btn btn-primary" smooth={true} offset={-55} duration={500}>Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
