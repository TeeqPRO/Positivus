import React, { useState, useEffect } from 'react';
import { assets } from '../../assets/assets.js';
import ButtonVer2 from '../assets/button/ver2/buttonver2.jsx';
import './navbar.css';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY && window.scrollY > 100) {
      setShowNavbar(false); 
    } else {
      setShowNavbar(true);   
    }
    setLastScrollY(window.scrollY);
  };

  const handleMouseOverTop = (e) => {
    if (e.clientY <= 20) {
      setShowNavbar(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    window.addEventListener('mousemove', handleMouseOverTop);

    return () => {
      window.removeEventListener('scroll', controlNavbar);
      window.removeEventListener('mousemove', handleMouseOverTop);
    };
  }, [lastScrollY]);

  return (
    <div className={`Navbar ${showNavbar ? 'visible' : 'hidden'}`}>
      <div className="Navbar-desktop">
        <div className="Navbar-left">
          <img src={assets.LogoVar1} alt="Logo" />
        </div>
        <div className="Navbar-right">
          <div className="List">
            <ul>
              <li><a href="About.html">About us</a></li>
              <li><a href="Services.html">Services</a></li>
              <li><a href="UseCases.html">Use Cases</a></li>
              <li><a href="Pricing.html">Pricing</a></li>
              <li><a href="Blog.html">Blog</a></li>
            </ul>
          </div>
          <div className="Button">
            <ButtonVer2 content="Book a quote" width="231px" />
          </div>
        </div>
      </div>
      <div className="Navbar-mobile">
        <div className="Navbar-left">
          <img src={assets.LogoVar1} alt="Logo" />
        </div>
        <div className="Navbar-right">
          <button className="BurgerMenuIcon">
            <img src={assets.BurgerMenuIcon} alt="BurgerMenuIcon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
