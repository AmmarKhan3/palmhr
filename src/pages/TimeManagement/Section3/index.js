import React from "react";

import { data } from "src/Data/DataFeature2/Section3";

import "./style.scss";

const Section3 = () => {
  return (
    <div className="feature2-Green-HeightFirst">
      <div className="feature2-Green">
        <p className="feature2-titleFirst">{data?.title1}</p>
        <p className="feature2-descryptfirst">{data?.description}</p>
      </div>
    </div>
  );
};

export default Section3;
