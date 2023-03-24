import React from "react";

import { data } from "src/Data/DataFeature9/Section3";

import "./style.scss";

const Section3 = () => {
  return (
    <div className="faq-Green-HeightFirst">
      <div className="faq-Green">
        <p className="faq-titleFirst">{data?.title1}</p>
        <p className="faq-descryptfirst">{data?.description}</p>
      </div>
    </div>
  );
};

export default Section3;
