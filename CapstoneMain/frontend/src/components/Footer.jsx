import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <ul>
          <li><a href="tel:4752284642">475-228-4642</a></li>
          <li><a href="#privacy">Privacy Policy</a></li>
          <li><a href="#ourstory">Our Story</a></li>
          <li><a href="#franchise">Franchise Opportunities</a></li>
        </ul>
      </div>
      <p>©2025 All Rights Reserved. | Powered by </p>
    </footer>
  );
};

export default Footer;