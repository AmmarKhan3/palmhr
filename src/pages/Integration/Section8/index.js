import React from "react";

import img from "src/images/feature5-four.svg";
import img_mbl from "src/images/feature5-four-mbl.svg";

import "./style.scss";

const Section8 = () => {
  return (
    <div>
      <div className="feature5-8image-section5">
        <img src={img} className="feature5-8sec5img-size" alt="Muqeem" />
        <img src={img_mbl} className="feature5-8sec5img-size-mbl" alt="Muqeem" />
      </div>
    </div>
  );
};

export default Section8;
