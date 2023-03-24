import React from "react";

import { data } from "src/Data/Section9";

import "./style.scss";

const Section3 = () => {
  return (
    <div className="feature4-9Green-Height">
      <div className="feature4-9Green">
        <p className="feature4-9title">{data?.title1}</p>
        <p className="feature4-9descrypt">{data?.description}</p>
      </div>
    </div>
  );
};

export default Section3;
