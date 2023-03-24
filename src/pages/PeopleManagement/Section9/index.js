import React from "react";

import { data } from "src/Data/DataFeature1/Section9";

import "./style.scss";

const Section3 = () => {
  return (
    <div className="feature1-Green-Height-1">
      <div className="feature1-Green-1">
        <p className="feature1-title-1">{data?.title1}</p>
        <p className="feature1-descrypt-1">{data?.description}</p>
      </div>
    </div>
  );
};

export default Section3;
