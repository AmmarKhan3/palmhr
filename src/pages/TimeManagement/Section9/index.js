import React from "react";

import { data } from "src/Data/DataFeature2/Section9";

import "./style.scss";

const Section3 = () => {
  return (
    <div className="feature2-Green-Height1">
      <div className="feature2-Green1">
        <p className="feature2-title1">{data?.title1}</p>
        <p className="feature2-descrypt1">{data?.description}</p>
      </div>
    </div>
  );
};

export default Section3;
