import React from "react";

import { data } from "src/Data/DataPricing/Section4";

import "./style.scss";

const Section4 = () => {
  return (
    <div className="pricing-4Green-Height">
      <div className="pricing-4Green">
        <p className="pricing-4title">{data?.title}</p>
        <p className="pricing-4descrypt">{data?.description}</p>
      </div>
    </div>
  );
};

export default Section4;
