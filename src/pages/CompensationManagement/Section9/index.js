import React from "react";

import { data } from "src/Data/DataFeature3/Section9";

import "./style.scss";

const Section3 = () => {
  return (
    <div className="feature3-Green-Height1">
      <div className="feature3-Green1">
        <p className="feature3-title1999">{data?.title1}</p>
        <p className="feature3-descrypt1999">{data?.description}</p>
      </div>
    </div>
  );
};

export default Section3;
