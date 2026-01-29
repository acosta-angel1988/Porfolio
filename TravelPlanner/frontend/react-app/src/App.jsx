import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import Car from "./components/pages/Car";
import Cruises from "./components/pages/Cruises";
import Flight from "./components/pages/Flight";
import Hotel from "./components/pages/Hotel";
import Vacations from "./components/pages/Vacations";

function App() {
  return (
    <Router>
      {/* ✅ Header must be inside Router */}
      <Header />  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/car" element={<Car />} />
        <Route path="/cruises" element={<Cruises />} />
        <Route path="/flight" element={<Flight />} />
        <Route path="/hotel" element={<Hotel />} />
        <Route path="/vacations" element={<Vacations />} />
      </Routes>
    </Router>
  );
}

export default App;