import React, { useState } from "react";
import SearchForm from "./SearchFilterForm";
import PetList from "../PetList";
import "./DogPage.css";

const petData = [
  {
    id: 1,
    name: "Buddy",
    type: "Dog",
    breed: "Golden Retriever",
    sex: "Male",
    size: "Large",
    color: "Golden",
    location: "New York",
    image: "https://placedog.net/400/400?id=1",
  },
  {
    id: 3,
    name: "Charlie",
    type: "Dog",
    breed: "Beagle",
    sex: "Male",
    size: "Medium",
    color: "Brown/White",
    location: "Chicago",
    image: "https://placedog.net/400/400?id=2",
  },
  {
    id: 6,
    name: "Bella",
    type: "Dog",
    breed: "Labrador",
    sex: "Female",
    size: "Large",
    color: "Black",
    location: "San Francisco",
    image: "https://placedog.net/400/400?id=3",
  },
];

const DogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [breed, setBreed] = useState("");
  const [gender, setGender] = useState("");
  const [color, setColor] = useState("");
  const [location, setLocation] = useState("");

  const filteredDogs = petData.filter((pet) => {
    const matchesName = pet.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBreed = breed ? pet.breed.toLowerCase().includes(breed.toLowerCase()) : true;
    const matchesGender = gender ? pet.sex.toLowerCase() === gender.toLowerCase() : true;
    const matchesColor = color ? pet.color.toLowerCase().includes(color.toLowerCase()) : true;
    const matchesLocation = location ? pet.location.toLowerCase().includes(location.toLowerCase()) : true;

    return matchesName && matchesBreed && matchesGender && matchesColor && matchesLocation;
  });

  return (
    <div className="dog-page">
      <h1>Find Your Dog</h1>
      <SearchForm
        searchTerm={searchTerm} setSearchTerm={setSearchTerm}
        breed={breed} setBreed={setBreed}
        gender={gender} setGender={setGender}
        color={color} setColor={setColor}
        location={location} setLocation={setLocation}
      />
      <PetList pets={filteredDogs} />
    </div>
  );
};

export default DogPage;