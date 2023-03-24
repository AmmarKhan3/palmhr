import React from "react";
import { Col, Row } from "antd";
import { Button } from "antd";
import { data } from "src/Data/DataFeature6/Section1";
import herosecMbl from "src/images/feature6-Headerimage-mbl.svg";
import herosec from "src/images/feature6-Headerimage.svg";
import icons from "src/images/feature6-Frame.svg";

import "./style.scss";

const Section1 = () => {

  return (
    <div className="feature6-heroSection">
      <Row className="feature6-background-hero">
        <Col xxl={9} xl={11} lg={24} md={24} sm={24} xs={24}>
          <div className="feature6-position-hero">
            <div className="feature6-leftmargin-hero">
              <div className="feature6-main-title">
                <img src={icons} alt="Hero icon" />
                <p style={{margin:"0px"}}>{data?.title1}</p>
              </div>
              <p className="feature6-first-line">{data?.description}</p>
              <h2 className="feature6-title-hero">{data?.description2}</h2>

              <p className="feature6-second-line">{data?.description3}</p>
              <Button className="feature6-hero-firstbtn">{data?.btn}</Button>
            </div>
          </div>
        </Col>
        <Col
          xxl={9}
          xl={13}
          lg={24}
          md={24}
          sm={24}
          xs={24}
          className="feature6-heroSection-img"
        >
          <img src={herosec} className="feature6-desktop-img" alt="Hero Image"/>
          <img src={herosecMbl} className="feature6-mobile-img" alt="Hero Mobile Image"/>

          <Button className="feature6-hero-firstbtn1">{data?.btn}</Button>

        </Col>
      </Row>
    </div>
  );
};
export default Section1;
