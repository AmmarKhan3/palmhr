import React from "react";
import useWindowDimensions from "src/pages/utiles.js";

import { Col, Row } from "antd";

import { data } from "src/Data/DataFeature3/Section2";
import posterDesktop from "src/images/feature3-Video-sec.svg";
import postermbl from "src/images/feature3-Video-sec-mbl.svg";
import video from "src/images/feature3-video.mp4";

import "./style.scss";

const Section2 = () => {
  const { width } = useWindowDimensions();

  return (
    <div className="feature3-za-1">
      <Row className="feature3-back-videosec">
        <Col
          xxl={12}
          xl={12}
          lg={12}
          md={24}
          sm={24}
          xs={24}
          className="feature3-video-sec-padding"
        >
          <h2 className="feature3-videosec-h">{data?.title1}</h2>
          <h2 className="feature3-videosec-h2">{data?.title2}</h2>

          <p className="feature3-videosec-p">{data?.description}</p>
          <p className="feature3-videosec-p2">{data?.description2}</p>

        </Col>
        <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24} className="feature3-pad-left">
          <video
            className="feature3-video"
            poster={width < 993 ? postermbl : posterDesktop}
            
          >
            <source src={video} type="video/mp4" />
          </video>
        </Col>
      </Row>
    </div>
  );
};

export default Section2;
