import React from "react";
import "./footer.css";
import github from "../assets/Images/github.png";
import linkedin from "../assets/Images/linkedin.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About */}
        <div>
          <h3>Angel Acosta</h3>
          <p>
            Software Developer specializing in full-stack web applications,
            React, Vue, and Node.js. Passionate about clean code, responsive
            design, and modern web technologies.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#about">About Me</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><img src={github} alt="github" className="link_Icon" /></li>
            <li><img src={linkedin} alt="linkedin" className="link_Icon" /></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3>Contact</h3>
          <ul>
            <li>Email: <a href="mailto:angel@example.com">acosta.angel1988@gmail.com</a></li>
            <li>Location: San Antonio, Texas</li>
          </ul>
        </div>

        
      </div>

      <div className="footer-bottom">
        &copy; 2026 Angel Acosta. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
