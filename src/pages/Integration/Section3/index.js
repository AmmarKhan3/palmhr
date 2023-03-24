import React from "react";

import { data } from "src/Data/DataFeature5/Section3";

import "./style.scss";

const Section3 = () => {
  return (
    <div className="feature5-3Green-HeightFirst">
      <div className="feature5-3Green">
        <p className="feature5-3titleFirst">{data?.title1}</p>
        <p className="feature5-3descryptfirst">{data?.description}</p>
      </div>
    </div>
  );
};

export default Section3;
