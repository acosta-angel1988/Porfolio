import React from "react";
import "./SearchFilterForm.css";

const SearchFilterForm = ({
  searchTerm, setSearchTerm,
  breed, setBreed,
  gender, setGender,
  color, setColor,
  location, setLocation
}) => {
  return (
    <form className="search-filter-form">
      <input
        type="text"
        placeholder="Search by Name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="filter-input"
      />
      <input
        type="text"
        placeholder="Breed"
        value={breed}
        onChange={(e) => setBreed(e.target.value)}
        className="filter-input"
      />
      <select
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        className="filter-select"
      >
        <option value="">Any Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <input
        type="text"
        placeholder="Color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        className="filter-input"
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="filter-input"
      />
    </form>
  );
};

export default SearchFilterForm;