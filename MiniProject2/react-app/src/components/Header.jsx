import React from 'react';
import './Header.css';
import avatar from "../assets/Images/avatar.png";

const Header = ({ language, toggleLanguage, isDarkMode, toggleDarkMode }) => {
  return (
    <div className={`header ${isDarkMode ? 'dark' : ''}`}>
      
      {/* Avatar, Name, and Dark Mode Switch together */}
      <div className="logo-container">

        <span className="name">Angel A. Acosta</span>

        {/* Dark Mode Switch */}
        <label className="switch">
          <input
            className="switch__input"
            type="checkbox"
            role="switch"
            checked={isDarkMode}
            onChange={toggleDarkMode}
          />
          <span className="slider"></span>
        </label>
      </div>

      {/* Navigation Links */}
      <div className="header-right">
        <a className="active" href="#home">{language === 'en' ? 'Home' : 'Inicio'}</a>
        <a href="#about">{language === 'en' ? 'About' : 'Sobre mí'}</a>
        <a href="#projects">{language === 'en' ? 'Projects' : 'Proyectos'}</a>
        <a href="#resume">{language === 'en' ? 'Resume' : 'Currículum'}</a>
        <a href="#contactUs">{language === 'en' ? 'Contact' : 'Contacto'}</a>
        
        {/* Language Toggle */}
        <button onClick={toggleLanguage} className="lang-btn">
          {language === 'en' ? 'EN' : 'ES'}
        </button>
      </div>
    </div>
  );
};

export default Header;