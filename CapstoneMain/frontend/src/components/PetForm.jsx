import React, { useState } from "react";
import "./PetForm.css";

// State for the pet being added via the form
const PetForm = ({ onPetAdded }) => {
  const [pet, setPet] = useState({
    type: "Dog",
    name: "",
    breed: "",
    sex: "Male",
    size: "Small",
    color: "",
    location: "",
    phone: "",
    email: "",
    image: ""
  });
  // Holds the list of pets currently being previewed
  const [previewPets, setPreviewPets] = useState([]);
  // Update state whenever form inputs change
  const handleChange = (e) => {
    setPet({ ...pet, [e.target.name]: e.target.value });
  };

  const isFormValid =
    pet.breed && pet.sex && pet.size && pet.color && pet.location && pet.phone && pet.email;

  // Add pet to preview list
  const handlePreview = (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    setPreviewPets([...previewPets, { ...pet, id: Date.now() }]);
    setPet({
      type: "Dog",
      name: "",
      breed: "",
      sex: "Male",
      size: "Small",
      color: "",
      location: "",
      phone: "",
      email: "",
      image: ""
    });
  };

  // Remove pet from preview list
  const handleDelete = (id) => {
    setPreviewPets(previewPets.filter((p) => p.id !== id));
  };

  // Save pet to MongoDB
  const handleAddToDB = async (petToAdd) => {
    const endpoint = petToAdd.type === "Dog" ? "dogs" : "cats";
    try {
      const res = await fetch(`http://localhost:5000/api/${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(petToAdd)
      });

      if (!res.ok) throw new Error("Failed to add pet to DB");
      const data = await res.json();
      onPetAdded(data);

      // Remove from preview after adding
      setPreviewPets(previewPets.filter((p) => p.id !== petToAdd.id));
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="pet-form-container">
      <h2>Add a Pet</h2>
      <form onSubmit={handlePreview}>
        <select name="type" value={pet.type} onChange={handleChange}>
          <option>Dog</option>
          <option>Cat</option>
        </select>
        <input name="name" placeholder="Name (optional)" value={pet.name} onChange={handleChange} />
        <input name="breed" placeholder="Breed" value={pet.breed} onChange={handleChange} required />
        <select name="sex" value={pet.sex} onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>
        <select name="size" value={pet.size} onChange={handleChange} required>
          <option>Small</option>
          <option>Medium</option>
          <option>Large</option>
        </select>
        <input name="color" placeholder="Color" value={pet.color} onChange={handleChange} required />
        <input name="location" placeholder="Location" value={pet.location} onChange={handleChange} required />
        <input name="phone" placeholder="Phone" value={pet.phone} onChange={handleChange} required />
        <input name="email" placeholder="Email" value={pet.email} onChange={handleChange} required />
        <input name="image" placeholder="Image URL (optional)" value={pet.image} onChange={handleChange} />
        <div className="Submitbtn">
          <button type="submit" disabled={!isFormValid}>Preview Pet</button>
        </div>
      </form>

      {previewPets.length > 0 && <h3>Preview Pets</h3>}
      <div className="preview-list">
        {previewPets.map((p) => (
          <div key={p.id} className="preview-card">
            {p.image && <img src={p.image} alt={p.name || p.breed} />}
            <p>Type: {p.type}</p>
            <p>Name: {p.name}</p>
            <p>Breed: {p.breed}</p>
            <p>Sex: {p.sex}</p>
            <p>Size: {p.size}</p>
            <p>Color: {p.color}</p>
            <p>Location: {p.location}</p>
            <p>Phone: {p.phone}</p>
            <p>Email: {p.email}</p>
            <div className="preview-buttons">
              <button onClick={() => handleAddToDB(p)}>Add Pet</button>
              <button onClick={() => handleDelete(p.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetForm;