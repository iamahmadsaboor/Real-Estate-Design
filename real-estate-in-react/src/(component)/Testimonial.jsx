import React from "react";
import elipse50 from "../Assets/Ellipse 50.png";
import elipse51 from "../Assets/Ellipse 51.png";
import elipse52 from "../Assets/Ellipse 52.png";
import elipse53 from "../Assets/Ellipse 53.png";
import elipse54 from "../Assets/Ellipse 54.png";
import elipse55 from "../Assets/Ellipse 55.png";
import elipse57 from "../Assets/Ellipse 57.png";
import elipse58 from "../Assets/Ellipse 58.png";
import stars from "../Assets/stars.png";
const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2 className="testimonialh">TESTIMONIALS</h2>
      <img className="testimg1" src={elipse51} alt="" />
      <img src={elipse54} alt="" className="testimg5" />
      <p className="testimonialp">
        Our Clients send us a bunch of smiles with our services, and we love
        them
      </p>
      <img src={elipse57} alt="" className="testimg6" />
      <img className="testimg2" src="/Assets/sideimg2.png" alt="" />
      <div className="testimonialimg">
        <img src={elipse50} alt="" />
      </div>
      <img src={elipse58} alt="" className="testimg7" />
      <img src={elipse53} alt="" className="testimg3" />
      <img src={elipse52} alt="" className="testimg4" />
      <img src={elipse55} alt="" className="testimg8" />
      <p className="testimonialbottompara">
        We are very pleased with the way Besnik handled our purchase of a lake
        home. He was prompt, friendly, and very knowledgeable. He followed up on
        any and all concerns.
      </p>
      <h5 style={{ textAlign: "center" }}>Becky Nelson</h5>
      <div className="testbottom">
        <img src={stars} alt="" />
      </div>
    </div>
  );
};

export default Testimonial;
