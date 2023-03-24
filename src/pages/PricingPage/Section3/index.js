import React from "react";

import img from "src/images/brandGuidelineMediaKit.svg";
import ComaprePlane1 from "src/images/ComparePlan1.svg"
import ComaprePlane2 from "src/images/ComparePlan2.svg"
import ComaprePlane3 from "src/images/ComparePlan3.svg"
import ComaprePlane4 from "src/images/ComparePlan4.svg"
import ComaprePlane5 from "src/images/ComparePlan5.svg"

import ComapreMbl1 from "src/images/CompareMbl1.svg"
import ComapreMbl2 from "src/images/CompareMbl2.svg"
import ComapreMbl3 from "src/images/CompareMbl3.svg"
import ComapreMbl4 from "src/images/CompareMbl4.svg"
import ComapreMbl5 from "src/images/CompareMbl5.svg"



import img_mbl from "src/images/brandGuidelineMediaKit.svg";

import "./style.scss";

const Section3 = () => {
  return (
    <div className="pricing-3Main">
    <div className="pricing-3Outer">
      <div className="pricing-3image-section5">
        <p className="pricing-3heading">Compare plans.</p>
        <img src={ComaprePlane1} className="pricing-3sec5img-size" />
        <img src={ComaprePlane2} className="pricing-3sec5img-size" />
        <img src={ComaprePlane3} className="pricing-3sec5img-size" />
        <img src={ComaprePlane4} className="pricing-3sec5img-size" />
        <img src={ComaprePlane5} className="pricing-3sec5img-size" />

        <img src={ComapreMbl1} className="pricing-3sec5img-size-mbl" />
        <img src={ComapreMbl2} className="pricing-3sec5img-size-mbl" />
        <img src={ComapreMbl3} className="pricing-3sec5img-size-mbl" />
        <img src={ComapreMbl4} className="pricing-3sec5img-size-mbl" />
        <img src={ComapreMbl4} className="pricing-3sec5img-size-mbl" />

      </div>
    </div>
    </div>
  );
};

export default Section3;
