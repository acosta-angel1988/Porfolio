import React from "react";
import Navbar from "../Navbar";
import Section1 from "../Section1";
import SearchForm from "./SearchForm";
import Section3 from "../Section3";
import Footer from "../Footer";
import Slideshow2 from "../Slideshow2";

const Home = () => {
  return (
    <div>
      <Section1 />
      <SearchForm />
      <Section3 />
      <Slideshow2/>
      <Footer />
    </div>
  );
};

export default Home;