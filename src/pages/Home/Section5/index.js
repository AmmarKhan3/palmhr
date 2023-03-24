import React from "react";
import useWindowDimensions from "src/pages/utiles.js";


import mudad from "src/images/Mudad.svg";
import muqeem from "src/images/Muqeem.svg";
import gosi from "src/images/MiddleGosi.svg";
import mudadMbl from "src/images/Mudad-mbl.svg";
import muqeemMbl from "src/images/muqeem-mbl.svg";
import gosiMbl from "src/images/gosi-mbl.svg";

import "./style.scss";

function Section5() {
  const { width } = useWindowDimensions();

  return (
    <div className="main-head">
      <p className="title">BUILT-IN INTEGRATIONS</p>
      <p className="sm-heading">
        Seamless Local Integrations that Protect your Business from Penalties
        and Streamline Your HR Administration.
      </p>
      <p className="heading">Integrated with Mudad, GOSI and Muqeem.</p>
      <p className="descrip">
        Integrations that Protect your Business from Penalties and Streamline
        Your HR Administration.
      </p>
      <div className="main-box">
        <div className="box">
          <img src={width < 800 ? muqeemMbl : muqeem} alt="BUILT-IN INTEGRATIONS"  />
          <p>KSA Integrations (Muqeem)</p>
        </div>
        <div className="box">
          <img src={width < 800 ? mudadMbl : mudad} alt="BUILT-IN INTEGRATIONS"  />
          <p>KSA WPS Compliance (Mudad)</p>
        </div>
        <div className="box">
          <img src={width < 800 ? gosiMbl : gosi} alt="BUILT-IN INTEGRATIONS"  />
          <p>KSA Integrations (GOSI)</p>
        </div>
      </div>
      <button className="box-btn">Learn More</button>
    </div>
  );
}

export default Section5;
