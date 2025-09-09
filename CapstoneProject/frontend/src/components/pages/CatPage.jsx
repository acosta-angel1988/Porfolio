import React, { useState } from "react";
import SearchForm from "./SearchFilterForm";  // same filter form as DogPage
import PetList from "../PetList";
import "./CatPage.css";

const petData = [
  {
    id: 2,
    name: "Mittens",
    type: "Cat",
    breed: "Tabby",
    sex: "Female",
    size: "Small",
    color: "Brown",
    location: "San Francisco",
    image: "https://placekitten.com/400/400"
  },
  {
    id: 4,
    name: "Luna",
    type: "Cat",
    breed: "Siamese",
    sex: "Female",
    size: "Small",
    color: "Cream",
    location: "New York",
    image: "https://placekitten.com/401/401"
  },
  {
    id: 5,
    name: "Shadow",
    type: "Cat",
    breed: "Black Shorthair",
    sex: "Male",
    size: "Medium",
    color: "Black",
    location: "Los Angeles",
    image: "https://placekitten.com/402/402"
  },
];

const CatPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [breed, setBreed] = useState("");
  const [gender, setGender] = useState("");
  const [color, setColor] = useState("");
  const [location, setLocation] = useState("");

  const filteredCats = petData.filter((pet) => {
    const matchesName = pet.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBreed = breed ? pet.breed.toLowerCase().includes(breed.toLowerCase()) : true;
    const matchesGender = gender ? pet.sex.toLowerCase() === gender.toLowerCase() : true;
    const matchesColor = color ? pet.color.toLowerCase().includes(color.toLowerCase()) : true;
    const matchesLocation = location ? pet.location.toLowerCase().includes(location.toLowerCase()) : true;

    return matchesName && matchesBreed && matchesGender && matchesColor && matchesLocation;
  });

  return (
    <div className="cat-page">
      <h1>Find Your Cat</h1>
      <SearchForm
        searchTerm={searchTerm} setSearchTerm={setSearchTerm}
        breed={breed} setBreed={setBreed}
        gender={gender} setGender={setGender}
        color={color} setColor={setColor}
        location={location} setLocation={setLocation}
      />
      <PetList pets={filteredCats} />
    </div>
  );
};

export default CatPage;