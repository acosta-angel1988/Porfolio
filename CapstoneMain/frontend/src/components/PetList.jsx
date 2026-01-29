import React from "react";
import PetCard from "./PetCard";
import './PetList.css';

const PetList = ({ pets }) => {
  if (!pets.length) return <p className="no-pets">No pets found.</p>;
  return (
    <div className="pet-list">
      {pets.map((pet, index) => <PetCard key={index} pet={pet} />)}
    </div>
  );
};

export default PetList;