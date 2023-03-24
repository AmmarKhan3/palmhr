import React from "react";

import { data } from "src/Data/DataPricing/Section2";

import "./style.scss";

const Section2 = () => {
  return (
    <div className="pricing-2Green-Height">
      <div className="pricing-2Green">
        <p className="pricing-2title">{data?.title}</p>
        <p className="pricing-2descrypt">{data?.description}</p>
      </div>
    </div>
  );
};

export default Section2;
