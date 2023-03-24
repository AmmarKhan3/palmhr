import React from "react";
import { Col, Row } from "antd";
import useWindowDimensions from "src/pages/utiles.js";


import videoleft from "src/images/Slider1.svg";
import video from "src/images/video.mp4";
import thumb from "src/images/VideoThumbnail.svg";
import thumbMbl from "src/images/videothumbnail-mbl.svg";

import "./style.scss";

const Section4 = () => {
  const { width } = useWindowDimensions();
  
  return (
    <div className="home-za-1">
      <Row className="home-back-videosec">
        <Col
          xxl={12}
          xl={12}
          lg={12}
          md={24}
          sm={24}
          xs={24}
          className="home-video-sec-padding"
        >
          <p className="home-videosec-p">
            “palm.hr is the HR managers dream. From day 1, palm.hr has helped us
            implement legal requirements and set new standards for employee
            experience.”
          </p>
          <h2 className="home-videosec-h">Muhammad Al Biani</h2>
          <p className="home-videosec-p">Chief Executive Officer at ENDEAVOR</p>
          <img src={videoleft} alt="Muhammad Al Biani" />
        </Col>
        <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
          <video
            className="home-video"
            poster={width < 800 ? thumbMbl : thumb}
            controls
          >
            <source src={video} type="video/mp4" />
          </video>
        </Col>
      </Row>
    </div>
  );
};

export default Section4;
