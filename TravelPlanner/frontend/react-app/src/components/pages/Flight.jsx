import React from "react";
import './Flight.css';

const Flight = () => {
  return (
    <div className="flight-container">
      <div>
        <h1>Flight Page</h1>
        <p>Book your next flight with ease.</p>
        <div className="search-box">

          <div className="departure-location">
            <p>Depart*</p>
            <input type="text" id="departLocation"></input>
          </div>

          <div className="Arrive-location">
            <p>Arrive*</p>
            <input type="text" id="ArriveLocation"></input>
          </div>

          <div className="depart-date">
            <p>Depart date*</p>
            <input type="date" id="departDate" name="departDate"></input>
          </div>

          <div className="return-date">
            <p>ReturnDate*</p>
            <input type="date" id="returnDate" name="returnDate"></input>
          </div>
          <div className="numberOfPassengers">

          </div>

        </div>
      </div>
    </div>
  );
};

export default Flight;