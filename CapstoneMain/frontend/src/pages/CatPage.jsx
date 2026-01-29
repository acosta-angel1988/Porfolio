import React, { useState, useEffect } from "react";
import PetList from "../components/PetList";
import SearchForm from "../components/SearchFilterForm";

// State variables to hold all cats and search
const CatPage = () => {
  const [cats, setCats] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [breed, setBreed] = useState("");
  const [gender, setGender] = useState("");
  const [color, setColor] = useState("");
  const [location, setLocation] = useState("");

// Fetch cats from backend API
  useEffect(() => {
    const fetchCats = async () => {
      const res = await fetch("http://localhost:5000/api/cats");
      const data = await res.json();
      setCats(data);
    };
    fetchCats();
  }, []);
 // Filter cats based on search term
  const filteredCats = cats.filter((pet) => {
    const matchesName = pet.name?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBreed = breed ? pet.breed.toLowerCase().includes(breed.toLowerCase()) : true;
    const matchesGender = gender ? pet.sex.toLowerCase() === gender.toLowerCase() : true;
    const matchesColor = color ? pet.color.toLowerCase().includes(color.toLowerCase()) : true;
    const matchesLocation = location ? pet.location.toLowerCase().includes(location.toLowerCase()) : true;
    return matchesName && matchesBreed && matchesGender && matchesColor && matchesLocation;
  });

  return (
    <div className="cat-page">
      <h1>Find Your Cat</h1>
      {/* SearchForm component to control all search/filter inputs */}
      <SearchForm
        searchTerm={searchTerm} setSearchTerm={setSearchTerm}
        breed={breed} setBreed={setBreed}
        gender={gender} setGender={setGender}
        color={color} setColor={setColor}
        location={location} setLocation={setLocation}
      />
      {/* Display filtered list of cats */}
      <PetList pets={filteredCats} />
    </div>
  );
};

export default CatPage;