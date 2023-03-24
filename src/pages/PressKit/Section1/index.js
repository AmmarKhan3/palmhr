import React from "react";
import { Col, Row } from "antd";
import { Button } from "antd";
import { data } from 'src/Data/DataMediaKit/Section1';
import herosec from "src/images/heroImagePressKi.svg";
import herosecMbl from "src/images/heroImagePressKi.svg";

import "./style.scss";

const Section1 = () => {
  return (
    <div className="mediaKit-1heroSection">
      <Row className="mediaKit-1background-hero">
        <Col xxl={9} xl={10} lg={10} md={24} sm={24} xs={24}>
          <div className="mediaKit-1position-hero">
            <div className="mediaKit-1leftmargin-hero">
              <p className="mediaKit-1title-hero">{data?.title}</p>
              <p className="mediaKit-1second-line">{data?.description}</p>
              <Button className="mediaKit-1hero-firstbtn">{data?.btn}</Button>
            </div>
          </div>
        </Col>
        <Col
          xxl={9}
          xl={14}
          lg={14}
          md={24}
          sm={24}
          xs={24}
          className="mediaKit-1heroSection-img"
        >
          <img src={herosec} className="mediaKit-1desktop-img" alt="Media Kit"/>
          <img src={herosecMbl} className="mediaKit-1mobile-img" alt="Media Kit Mobile" />
          <Button className="mediaKit-1hero-firstbtn1">{data?.btn}</Button>
        </Col>
      </Row>
    </div>
  );
};
export default Section1;
