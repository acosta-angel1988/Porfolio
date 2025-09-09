import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./PetAdvice.css";
import NewsList from "../NewsList";

const PetAdvice = () => {
  return (
    
      <div className="petadvice">
        <NewsList/>
        
      </div>
  )
};

export default PetAdvice;

