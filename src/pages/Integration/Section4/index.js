import React from "react";
import img from "src/images/feature5-zero.svg";
import img_mbl from "src/images/feature5-zero-mbl.svg";

import "./style.scss";

const Section4 = () => {
  return (
    <div className="feature5-4image-section4">
      <img src={img} className="feature5-4sec4img-size" alt="Mudad"/>
      <img src={img_mbl} className="feature5-4sec4img-size-mbl" alt="Mudad" />

    </div>
  );
};

export default Section4;
