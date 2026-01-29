import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleSelect = (type) => {
    if (type === "Dog") navigate("/dogs");
    if (type === "Cat") navigate("/cats");
    setOpen(false); // close dropdown
  };

  return (
    <nav className="navbar">
      <div className="nav-left">My New Pet</div>

      <div className="nav-right">
        <div className="dropdown" onMouseLeave={() => setOpen(false)}>
          <button className="dropbtn" onClick={() => setOpen(!open)}>Find a Pet ▼</button>
          {open && (
            <div className="dropdown-content">
              <button onClick={() => handleSelect("Dog")}>Dog</button>
              <button onClick={() => handleSelect("Cat")}>Cat</button>
            </div>
          )}
        </div>

        <NavLink to="/add-pet">Add Pet</NavLink>
        <NavLink to="/pet-advice">Pet Advice</NavLink>
        <NavLink to="/" end>Home</NavLink>

      </div>
    </nav>
  );
};

export default Navbar;