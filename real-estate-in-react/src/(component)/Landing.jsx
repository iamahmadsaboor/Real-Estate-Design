import React from "react";
import homeSide from "../Assets/iamge.png";
import homeMini from "../Assets/Cart.png";
function Landing() {
  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-lg-0 col-md-1"></div>
        <div className="col-lg-5 col-md-8 col-sm-12">
          <h1 className="mainheading">Search for Homes in your Neighborhood</h1>
          <p>
            Online Estate Agency, the modern way to sell your own home. You can
            use griffin residential to market your property.
          </p>
          <div className="threecolumns">
            <div className="address">
              <h5>Address</h5>
              <p>587 Bridgeton Road</p>
            </div>
            <div className="city">
              <h5>City</h5>
              <p>El Paso, Texas</p>
            </div>
            <div className="addbtn">
              <button type="button" className="btn btn-primary btnsearch">
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-10">
          <img className="mainimg" src={homeSide} alt="" />
          <img src={homeMini} alt="" className="secmainimg" />
        </div>
      </div>
    </div>
  );
}

export default Landing;
