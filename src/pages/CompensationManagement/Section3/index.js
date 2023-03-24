import React from "react";

import { data } from "src/Data/DataFeature3/Section3";

import "./style.scss";

const Section3 = () => {
  return (
    <div className="feature3-Green-HeightFirst">
      <div className="feature3-Green">
        <p className="feature3-titleFirst">{data?.title1}</p>
        <p className="feature3-descryptfirst">{data?.description}</p>
      </div>
    </div>
  );
};

export default Section3;
