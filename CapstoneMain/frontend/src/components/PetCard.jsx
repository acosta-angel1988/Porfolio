import React from "react";
import './PetCard.css';

const PetCard = ({ pet }) => {
  return (
    <div className="pet-card">
      <img src={pet.image || "https://via.placeholder.com/150"} alt={pet.name} className="pet-image" />
      <h3>{pet.name}</h3>
      <p>Type: {pet.type}</p>
      <p>Breed: {pet.breed}</p>
      <p>Sex: {pet.sex}</p>
      <p>Size: {pet.size}</p>
      <p>Color: {pet.color}</p>
      <p>Location: {pet.location}</p>
      <p>Phone: {pet.phone}</p>
      <p>Email: {pet.email}</p>
    </div>
  );
};

export default PetCard;