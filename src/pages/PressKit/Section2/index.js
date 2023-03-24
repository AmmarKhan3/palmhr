import React from "react";

import { data } from "src/Data/DataMediaKit/Section2";

import "./style.scss";

const Section2 = () => {
  return (
    <div className="mediaKit-3Green-Height">
      <div className="mediaKit-3Green">
        <p className="mediaKit-3title">{data?.title}</p>
        <p className="mediaKit-3descrypt">{data?.description}</p>
      </div>
    </div>
  );
};

export default Section2;
