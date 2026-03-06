import React from "react";
import "./Header.css";
import logo from "../assets/Images/angelsoft_solutions_icon.png";
import Resume from "../assets/documents/Angel_Acosta_Resume.pdf";

const Header = () => {
  return (
  <header className="header">

  <div className="logo">
    <img src={logo} alt="Mypic" className="MyPicture" />
    <span className="logo-text">AngelSoft Solutions </span>
  </div>

  <nav className="nav">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/projects">Projects</a></li>
      <li><a href={Resume} target="_blank" rel="noopener noreferrer">Resume</a></li>
      <li><a href="/contact">Contact Us</a></li>
    </ul>
  </nav>
    </header>
  );
};

export default Header;