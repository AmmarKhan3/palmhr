import React from "react";

import { data } from "src/Data/Section3";

import "./style.scss";

const Section3 = () => {
  return (
    <div className="Green-HeightFirst">
      <div className="Green">
        <p className="titleFirst">{data?.title1}</p>
        <p className="descryptfirst">{data?.description}</p>
      </div>
    </div>
  );
};

export default Section3;
