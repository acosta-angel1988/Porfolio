import React from "react";
import "./PetCard.css";

const PetCard = ({ pet }) => {
  return (
    <div className="pet-card">
      <img src={pet.image} alt={pet.name} className="pet-image" />
      <h3>{pet.name}</h3>
      <p>Type: {pet.type}</p>
      <p>Breed: {pet.breed}</p>
      <p>Sex: {pet.sex}</p>
      <p>Size: {pet.size}</p>
    </div>
  );
};

export default PetCard;
