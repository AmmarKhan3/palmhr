import React from "react";
import { Col, Row } from "antd";
import { Button } from "antd";
import { data } from "src/Data/DataMediaKit/Section3";
import herosecMbl from "src/images/logoTypeMediaKit.svg";
import herosec from "src/images/logoTypeMediaKit.svg";

import "./style.scss";

const Section3 = () => {
  return (
    <div className="mediaKit-3heroSection">
      <Row className="mediaKit-3background-hero">
        <Col xxl={10} xl={10} lg={10} md={24} sm={24} xs={24}>
          <div className="mediaKit-3position-hero">
            <div className="mediaKit-3leftmargin-hero">
              <p className="mediaKit-3title-hero">{data?.title}</p>
              <p className="mediaKit-3second-line">{data?.description}</p>
              <p className="mediaKit-3second-line">{data?.description1}</p>
              <Button className="mediaKit-3hero-firstbtn">{data?.btn}</Button>
            </div>
          </div>
        </Col>
        <Col
          xxl={14}
          xl={14}
          lg={14}
          md={24}
          sm={24}
          xs={24}
          className="mediaKit-3heroSection-img"
        >
          <img src={herosec} className="mediaKit-3desktop-img" alt="Media Kit"/>
          <img src={herosecMbl} className="mediaKit-3mobile-img" alt="Media Kit Mobile" />
          <Button className="mediaKit-3hero-firstbtn1">{data?.btn}</Button>
        </Col>
      </Row>
    </div>
  );
};
export default Section3;
