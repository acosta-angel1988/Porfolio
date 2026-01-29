import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Section1 from "../components/Section1";
import Section3 from "../components/Section3";
import Footer from "../components/Footer";
import Slideshow from "../components/Slideshow2";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  // Temporary state to hold pets fetched
  const [pets, setPets] = useState([]);

  const handleSelect = async (type) => {
    try {
      const endpoint = type === "Dog" ? "dogs" : "cats";
      const res = await fetch(`http://localhost:5000/api/${endpoint}`);
      if (!res.ok) throw new Error("Failed to fetch pets");
      const data = await res.json();
      setPets(data); // store fetched pets if needed

      // ✅ Navigate same as Navbar
      if (type === "Dog") {
        navigate("/dogs");
      } else {
        navigate("/cats");
      }
    } catch (err) {
      console.error(err);
      alert("Error fetching pets from backend");
    }
    setOpen(false);
  };

  return (
    <div className="Sections">
      <Section1 />
      <div className="home-container">
        <h1>Welcome to My New Pet Adoption</h1>
        <p>Find your perfect dog or cat, or add a pet for adoption!</p>

        <div className="home-buttons">
          <button onClick={() => navigate("/add-pet")}>Add a Pet</button>

          <div className="dropdown" onMouseLeave={() => setOpen(false)}>
            <button className="dropbtn" onClick={() => setOpen(!open)}>
              Find a Pet ▼
            </button>
            {open && (
              <div className="dropdown-content">
                <button onClick={() => handleSelect("Dog")}>Dog</button>
                <button onClick={() => handleSelect("Cat")}>Cat</button>
              </div>
            )}
          </div>
        </div>
      </div>
      <Section3 />
      <Slideshow />
      <Footer />
    </div>
  );
};

export default Home;