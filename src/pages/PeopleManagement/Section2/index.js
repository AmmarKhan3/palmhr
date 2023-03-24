import React from "react";
import useWindowDimensions from "../utiles";
import { Col, Row } from "antd";

import { data } from "src/Data/DataFeature1/Section2";
import posterDesktop from "src/images/feature1-Video-sec.svg";
import postermbl from "src/images/feature1-Video-sec-mbl.svg";
import video from "src/images/feature1-video.mp4";

import "./style.scss";

const Section2 = () => {
  const { width } = useWindowDimensions();

  return (
    <div className="feature1-za-1">
      <Row className="feature1-back-videosec">
        <Col
          xxl={12}
          xl={12}
          lg={12}
          md={24}
          sm={24}
          xs={24}
          className="feature1-video-sec-padding"
        >
          <h2 className="feature1-videosec-h">{data?.title1}</h2>
          <p className="feature1-videosec-p">{data?.description}</p>
          <p className="feature1-videosec-p2">{data?.description2}</p>

        </Col>
        <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24} className="feature1-pad-left">
          <video
            className="feature1-video"
            poster={width < 993 ? postermbl : posterDesktop}
            
          >
            <source src={video} type="feature1-video/mp4" />
          </video>
        </Col>
      </Row>
    </div>
  );
};

export default Section2;
