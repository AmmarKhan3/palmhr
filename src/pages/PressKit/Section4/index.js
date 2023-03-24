import React from "react";

import img from "src/images/brandGuidelineMediaKit.svg";
import img_mbl from "src/images/brandGuidelineMediaKit.svg";

import "./style.scss";

const Section4 = () => {
  return (
    <div className="mediaKit-4Main">
    <div className="mediaKit-4Outer">
      <div className="mediaKit-4image-section5">
        <p className="mediaKit-4heading">Brand Guidelines.</p>
        <img src={img} className="mediaKit-4sec5img-size" />
        <img src={img_mbl} className="mediaKit-4sec5img-size-mbl" />
      </div>
    </div>
    </div>
  );
};

export default Section4;
