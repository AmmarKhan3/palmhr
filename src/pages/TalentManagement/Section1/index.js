import React from "react";
import { Col, Row } from "antd";
import { Button } from "antd";
import { data } from "src/Data/Section1";
import herosecMbl from "src/images/feature4-Headerimage-mbl.svg";
import herosec from "src/images/feature4-Headerimage.svg";
import icons from "src/images/feature4-icon-hero.svg";

import "./style.scss";

const Section1 = () => {

  return (
    <div className="heroSection">
      <Row className="background-hero">
        <Col xxl={9} xl={12} lg={24} md={24} sm={24} xs={24}>
          <div className="position-hero">
            <div className="leftmargin-hero">
              <div className="main-title">
                <img src={icons} />
                <p style={{margin:"0px"}}>{data?.title1}</p>
              </div>
              <p className="first-line">{data?.description}</p>
              <h2 className="title-hero">{data?.description2}</h2>

              <p className="second-line">{data?.description3}</p>
              <Button className="hero-firstbtn">{data?.btn}</Button>
            </div>
          </div>
        </Col>
        <Col
          xxl={9}
          xl={12}
          lg={24}
          md={24}
          sm={24}
          xs={24}
          className="heroSection-img"
        >
          <img src={herosec} className="desktop-img"/>
          <img src={herosecMbl} className="mobile-img" />

          <Button className="hero-firstbtn1">{data?.btn}</Button>

        </Col>
      </Row>
    </div>
  );
};
export default Section1;
