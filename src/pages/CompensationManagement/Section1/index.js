import React from "react";
import { Col, Row } from "antd";
import { Button } from "antd";
import { data } from "src/Data/DataFeature3/Section1";
import herosecMbl from "src/images/feature3-Headerimage-mbl.svg";
import herosec from "src/images/feature3-Headerimage.svg";
import icons from "src/images/feature3-icon-hero.svg";

import "./style.scss";

const Section1 = () => {

  return (
    <div className="feature3-heroSection">
      <Row className="feature3-background-hero">
        <Col xxl={9} xl={11} lg={24} md={24} sm={24} xs={24}>
          <div className="feature3-position-hero">
            <div className="feature3-leftmargin-hero">
              <div className="feature3-main-title">
                <img src={icons} alt="CM icon" />
                <p style={{margin:"0px"}}>{data?.title1}</p>
              </div>
              <p className="feature3-first-line">{data?.description}</p>
              <h2 className="feature3-title-hero">{data?.description2}</h2>

              <p className="feature3-second-line">{data?.description3}</p>
              <Button className="feature3-hero-firstbtn">{data?.btn}</Button>
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
          className="feature3-heroSection-img"
        >
          <img src={herosec} className="feature3-desktop-img" alt="Comapnsation solution"/>
          <img src={herosecMbl} className="feature3-mobile-img"  alt="Comapnsation solution"/>

          <Button className="feature3-hero-firstbtn1">{data?.btn}</Button>

        </Col>
      </Row>
    </div>
  );
};
export default Section1;
