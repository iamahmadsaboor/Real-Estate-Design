import React from "react";
import firstImage from "../Assets/image 527.png";
import secondImage from "../Assets/image 528.png";
import thirdImage from "../Assets/image 529.png";
import fourthImage from "../Assets/image 530.png";
import fifthImage from "../Assets/image 531.png";
function Sponsors() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="fiveimgs">
            <img src={firstImage} alt="" className="frstinfive" />
            <img src={secondImage} alt="" className="scndinfive" />
            <img src={thirdImage} alt="" className="thrdinfive" />
            <img src={fourthImage} alt="" className="frthinfive" />
            <img src={fifthImage} alt="" className="fiveinfive" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
