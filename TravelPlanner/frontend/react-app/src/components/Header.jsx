import React from "react";
import './Header.css';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="header">
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/flight">Flight</Link></li>
                <li><Link to="/hotel">Hotel</Link></li>
                <li><Link to="/car">Car</Link></li>
                <li><Link to="/vacations">Vacations</Link></li>
                <li><Link to="/cruises">Cruises</Link></li>
            </ul>
        </div>


    </nav>
  );
};

export default Header;