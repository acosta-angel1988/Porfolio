import React from "react";
import NewsCard from "./NewsCard";
import "./NewsList.css";

const newsData = [
  {
    title: "Preparing Your Home for a New Pet",
    description: "The Humane Society shares tips on how to make your home safe and welcoming for your new furry friend.",
    link: "https://www.humanesociety.org/resources/preparing-your-home-new-pet",
    image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d"
  },
  {
    title: "Pet Adoption Tips",
    description: "ASPCA offers a complete guide to help you prepare for pet adoption and what to expect.",
    link: "https://www.aspca.org/adopt/adoption-tips",
    image: "https://images.unsplash.com/photo-1558788353-f76d92427f16"
  },
  {
    title: "First 30 Days with Your New Dog",
    description: "Petfinder provides an essential guide for making the transition smooth for your new dog.",
    link: "https://www.petfinder.com/dogs/bringing-a-dog-home/tips-for-first-30-days-dog/",
    image: "https://images.unsplash.com/photo-1558788353-6c73fda47f6f"
  },
  {
    title: "How to Choose the Right Cat",
    description: "Consider your lifestyle and personality to find the cat that’s the perfect match for you.",
    link: "https://www.petfinder.com/cats/bringing-a-cat-home/how-to-choose-the-right-cat/",
    image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131"
  }
];

const NewsList = () => {
     
  return (
    <div className="news-list">
      {newsData.map((news, index) => (
        <NewsCard
          key={index}
          title={news.title}
          description={news.description}
          link={news.link}
          image={news.image}
        />
        
      ))}

    </div>
  );
};

export default NewsList;