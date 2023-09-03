import React from "react";
import Logo from "../Assets/Logo.png";
import Landing from "./Landing";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <a className="navbar-brand">
          <img src={Logo} alt="Logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 navvyitems">
            <li className="nav-item">
              <a className="nav-link" href="./Landing.jsx">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./Landing.jsx">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./Landing.jsx">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./Landing.jsx">
                Contact
              </a>
            </li>
          </ul>
          <span className="navbar-text">
            <button type="button" className="btn btn-outline-primary">
              Sign In
            </button>
            <button type="button" className="btn btn-primary navvybtn">
              SignUp
            </button>
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
