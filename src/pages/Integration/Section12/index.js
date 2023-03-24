import React from "react";
import {data} from "src/Data/DataFeature5/Section12";

import "./style.scss";

const Section12 = () => {
  return (
    <div className="feature5-12heartbeat">
        <p className="feature5-12title-heartbeat" >{data?.title}</p>
        <p className="feature5-12descrypt-heartbeat" >{data?.description}</p>
    </div>
  );
};

export default Section12;
