import React from "react";

const SearchFilterForm = ({ searchTerm, setSearchTerm, breed, setBreed, gender, setGender, color, setColor, location, setLocation }) => (
  <form style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "20px" }}>
    <input placeholder="Name" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
    <input placeholder="Breed" value={breed} onChange={e => setBreed(e.target.value)} />
    <select value={gender} onChange={e => setGender(e.target.value)}>
      <option value="">Any Gender</option>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
    </select>
    <input placeholder="Color" value={color} onChange={e => setColor(e.target.value)} />
    <input placeholder="Location" value={location} onChange={e => setLocation(e.target.value)} />
  </form>
);

export default SearchFilterForm;