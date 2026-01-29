import React, { useEffect, useState } from "react";

const TestFetch = () => {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/dogs")
      .then((res) => res.json())
      .then((data) => setDogs(data))
      .catch((err) => console.error("Error fetching dogs:", err));
  }, []);

  return (
    <div>
      <h2>Dog Data Test</h2>
      <pre>{JSON.stringify(dogs, null, 2)}</pre>
    </div>
  );
};

export default TestFetch;