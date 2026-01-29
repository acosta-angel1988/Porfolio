import React, { useState } from "react";
import SearchFilterForm from "../components/SearchFilterForm";
import PetList from "../components/PetList";
import './PetPage.css';

const PetPage = ({ title, petData }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [breed, setBreed] = useState("");
  const [gender, setGender] = useState("");
  const [color, setColor] = useState("");
  const [location, setLocation] = useState("");

  const filteredPets = petData.filter((pet) => {
    const petName = pet.name.toLowerCase();
    const petBreed = pet.breed.toLowerCase();
    const petSex = pet.sex.toLowerCase();
    const petColor = pet.color.toLowerCase();
    const petLocation = pet.location.toLowerCase();

    return petName.includes(searchTerm.toLowerCase()) &&
           (breed ? petBreed.includes(breed.toLowerCase()) : true) &&
           (gender ? petSex === gender.toLowerCase() : true) &&
           (color ? petColor.includes(color.toLowerCase()) : true) &&
           (location ? petLocation.includes(location.toLowerCase()) : true);
  });

  return (
    <div className="pet-page">
      <h1>{title}</h1>
      <SearchFilterForm
        searchTerm={searchTerm} setSearchTerm={setSearchTerm}
        breed={breed} setBreed={setBreed}
        gender={gender} setGender={setGender}
        color={color} setColor={setColor}
        location={location} setLocation={setLocation}
      />
      <PetList pets={filteredPets} />
    </div>
  );
};

export default PetPage;