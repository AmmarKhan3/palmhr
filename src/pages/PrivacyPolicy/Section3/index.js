import React from "react";

import { data } from "src/Data/DataFeature9/Section3";

import "./style.scss";

const Section3 = () => {
  return (
    <div className="PP-Green-HeightFirst">
      <div className="PP-Green">
        <p className="PP-titleFirst">{data?.title1}</p>
        <p className="PP-descryptfirst">{data?.description}</p>
      </div>
    </div>
  );
};

export default Section3;
