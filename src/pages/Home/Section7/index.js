import React from "react";
import "./style.scss";
import HeartImage from "src/images/HeartLineSction.svg";
import heartline from "src/images/heartgifline.gif";
import simg from "src/images/heartsec-mbl.svg";
import { Button } from "antd";

const Section7 = () => {
  return (
    <div style={{marginTop: 32}}>
      <div className="heartBeat">
        <p className="heartBeat-title">
          The Digital Heartbeat of Your Organisation.
        </p>
        <p className="heartBeat-para">
          Enhance productivity by centralizing employee data management,
          automating payroll processing, monitoring performance, and more on one
          single platform – all while benefitting from palm.hr’s unmatched
          customer service.
        </p>
        <img src={simg} className="sm-hb" alt="Digital Heartbeat" />

        <img src={HeartImage} className="heartbeat-img" alt="Digital Heartbeat" />
        <div className="heartline-div">
          <img src={heartline} className="heartbeat-imgline" alt="Digital Heartbeat" />
        </div>
      </div>
      <Button className="heartBeat-btn">Watch palm.hr in Action</Button>
    </div>
  );
};

export default Section7;
