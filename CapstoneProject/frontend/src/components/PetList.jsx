import React from "react";
import PetCard from "./PetCard";
import "./PetList.css";

const PetList = ({ pets }) => {
  if (!pets.length) return <p className="no-pets">No pets found matching your criteria.</p>;

  return (
    <div className="pet-list">
      {pets.map((pet) => (
        <PetCard key={pet.id} pet={pet} />
      ))}
    </div>
  );
};

export default PetList;