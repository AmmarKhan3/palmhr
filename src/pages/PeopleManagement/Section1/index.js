import React from "react";
import { Col, Row } from "antd";
import { Button } from "antd";
import { data } from "src/Data/DataFeature1/Section1";
import herosecMbl from "src/images/feature1-Headerimage-mbl.svg";
import herosec from "src/images/feature1-Headerimage.svg";
import icons from "src/images/feature1-TeamIcon.svg";

import "./style.scss";

const Section1 = () => {

  return (
    <div className="feature1-heroSection">
      <Row className="feature1-background-hero">
        <Col xxl={9} xl={11} lg={24} md={24} sm={24} xs={24}>
          <div className="feature1-position-hero">
            <div className="feature1-leftmargin-hero">
              <div className="feature1-main-title">
                <img src={icons} alt="people managment" />
                <p style={{margin:"0px"}}>{data?.title1}</p>
              </div>
              <p className="feature1-first-line">{data?.description}</p>
              <h2 className="feature1-title-hero">Say hello to effortless People Management with palm<span style={{color:'#1A938A'}}>.</span>hr</h2>

              <p className="feature1-second-line">{data?.description3}</p>
              <Button className="feature1-hero-firstbtn">{data?.btn}</Button>
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
          className="feature1-heroSection-img"
        >
          <img src={herosec} className="feature1-desktop-img"/>
          <img src={herosecMbl} className="feature1-mobile-img" />

          <Button className="feature1-hero-firstbtn1">{data?.btn}</Button>

        </Col>
      </Row>
    </div>
  );
};
export default Section1;
