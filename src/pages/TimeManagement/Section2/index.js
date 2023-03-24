import React from "react";
import useWindowDimensions from "../utiles";
import { Col, Row } from "antd";

import { data } from "src/Data/DataFeature2/Section2";
import posterDesktop from "src/images/feature2-Video-sec.svg";
import postermbl from "src/images/feature2-Video-sec-mbl.svg";
import video from "src/images/feature2-video.mp4";

import "./style.scss";

const Section2 = () => {
  const { width } = useWindowDimensions();

  return (
    <div className="feature2-za-1">
      <Row className="feature2-back-videosec">
        <Col
          xxl={12}
          xl={12}
          lg={12}
          md={24}
          sm={24}
          xs={24}
          className="feature2-video-sec-padding"
        >
          <h2 className="feature2-videosec-h">{data?.title1}</h2>
          <h2 className="feature2-videosec-h2">{data?.title2}</h2>

          <p className="feature2-videosec-p">{data?.description}</p>
          <p className="feature2-videosec-p2">{data?.description2}</p>
        </Col>
        <Col
          xxl={12}
          xl={12}
          lg={12}
          md={24}
          sm={24}
          xs={24}
          className="feature2-pad-left"
        >
          <video
            className="feature2-video"
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
