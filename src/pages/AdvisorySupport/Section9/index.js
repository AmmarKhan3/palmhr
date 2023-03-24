import React from "react";

import { data } from "src/Data/DataFeature6/Section9";

import "./style.scss";

const Section3 = () => {
  return (
    <div className="Green-Height">
      <div className="Green">
        <p className="title">{data?.title1}</p>
        <p className="descrypt">{data?.description}</p>
      </div>
    </div>
  );
};

export default Section3;
