import React from "react";

import { data } from "src/Data/DataFeature1/Section3";

import "./style.scss";

const Section3 = () => {
  return (
    <div className="feature1-Green-Height">
      <div className="feature1-Green">
        <p className="feature1-title">{data?.title1}</p>
        <p className="feature1-descrypt">{data?.description}</p>
      </div>
    </div>
  );
};

export default Section3;
