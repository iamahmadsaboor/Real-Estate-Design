import React from "react";
import Search from "../Assets/Search.png";
const Newsletter = () => {
  return (
    <div className="newsletter">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="newsh">
              <h1>Talk to a Redfin Agent</h1>
            </div>
            <div className="newsp">
              <p>
                Start your search with an expert local agent—there’s no pressure
                or obligation.
              </p>
            </div>
          </div>
          <div className="col-lg-2"></div>
          <div className="col-lg-5">
            <p style={{ color: "white" }}>Where are you searching for homes?</p>
            <form action="">
              <input className="newsplaceholder" type="search" placeholder="" />
              <img className="searchicon" src={Search} alt="" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
