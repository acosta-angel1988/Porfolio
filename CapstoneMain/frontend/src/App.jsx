import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import DogPage from "./pages/DogPage";
import CatPage from "./pages/CatPage";
import PetForm from "./components/PetForm";
import TestFetch from "./components/TestFetch";
import PetAdvice from "./pages/PetAdvice";

function App() {
  return (
    <Router>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pet-advice" element={<PetAdvice />} />
        <Route path="/dogs" element={<DogPage />} />
        <Route path="/cats" element={<CatPage />} />
        <Route path="/add-pet" element={<PetForm />} />
        
      </Routes>
    </Router>
  );
}

export default App;