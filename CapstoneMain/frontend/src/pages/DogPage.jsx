import React, { useState, useEffect } from "react";
import PetList from "../components/PetList";
import SearchForm from "../components/SearchFilterForm";

// Variables to hold all dogs search options
const DogPage = () => {
  const [dogs, setDogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [breed, setBreed] = useState("");
  const [gender, setGender] = useState("");
  const [color, setColor] = useState("");
  const [location, setLocation] = useState("");

//Fetch dogs from backend 
  useEffect(() => {
    const fetchDogs = async () => {
      const res = await fetch("http://localhost:5000/api/dogs");
      const data = await res.json();
      setDogs(data);
    };
    fetchDogs();
  }, []);
//Filter dogs on searchterm
  const filteredDogs = dogs.filter((pet) => {
    const matchesName = pet.name?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBreed = breed ? pet.breed.toLowerCase().includes(breed.toLowerCase()) : true;
    const matchesGender = gender ? pet.sex.toLowerCase() === gender.toLowerCase() : true;
    const matchesColor = color ? pet.color.toLowerCase().includes(color.toLowerCase()) : true;
    const matchesLocation = location ? pet.location.toLowerCase().includes(location.toLowerCase()) : true;
    return matchesName && matchesBreed && matchesGender && matchesColor && matchesLocation;
  });

  return (
    <div className="dog-page">
      <h1>Find Your Dog</h1>
      {/* SearchForm component to control all search/filter inputs */}
      <SearchForm
        searchTerm={searchTerm} setSearchTerm={setSearchTerm}
        breed={breed} setBreed={setBreed}
        gender={gender} setGender={setGender}
        color={color} setColor={setColor}
        location={location} setLocation={setLocation}
      />
      {/* Display filtered dogs*/}
      <PetList pets={filteredDogs} />
    </div>
  );
};

export default DogPage;