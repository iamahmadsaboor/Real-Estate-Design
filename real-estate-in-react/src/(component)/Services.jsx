import React from "react";
import cardImg1 from "../Assets/icon 01.png";
import cardImg2 from "../Assets/icon 02.png";
import cardImg3 from "../Assets/icon 03.png";
function Services() {
  return (
    <div className="container text-center">
      <h2>What Can We Help You Find?</h2>
      <div className="card-group three-all-select">
        <div className="card">
          <img
            src={cardImg1}
            className="card-img-top three-card-image"
            alt="..."
          />
          <div className="card-body three-card-text">
            <h5 className="card-title">Buy a Home</h5>
            <p className="card-text">
              With over 1 million+ homes for sale available on the website,
              Trulia can match you with a house.
            </p>
          </div>
        </div>
        <div className="card">
          <img
            src={cardImg2}
            className="card-img-top three-card-image"
            alt="..."
          />
          <div className="card-body three-card-text">
            <h5 className="card-title">Rent a Home</h5>
            <p className="card-text">
              With 35+ filters and custom keyword search, Trulia can help you
              find a home.
            </p>
          </div>
        </div>
        <div className="card">
          <img
            src={cardImg3}
            className="card-img-top three-card-image"
            alt="..."
          />
          <div className="card-body three-card-text">
            <h5 className="card-title">See Neighborhood</h5>
            <p className="card-text">
              With more neighborhood insights than any other real estate
              website.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
