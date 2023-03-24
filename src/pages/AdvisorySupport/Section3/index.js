import React from "react";

import { data } from "src/Data/DataFeature6/Section3";

import "./style.scss";

const Section3 = () => {
  return (
    <div className="feature6-Green-HeightFirst">
      <div className="feature6-Green">
        <p className="feature6-titleFirst">{data?.title1}</p>
        <p className="feature6-descryptfirst">{data?.description}</p>
      </div>
    </div>
  );
};

export default Section3;
