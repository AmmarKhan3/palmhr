import React from "react";
import { Col, Row } from "antd";
import { Button } from "antd";
import { data } from "src/Data/DataFeature2/Section1";
import herosecMbl from "src/images/feature2-Headerimage-mbl.svg";
import herosec from "src/images/feature2-Headerimage.svg";
import icons from "src/images/feature2-icon-hero.svg";

import "./style.scss";

const Section1 = () => {

  return (
    <div className="feature2heroSection">
      <Row className="feature2background-hero">
        <Col xxl={9} xl={11} lg={24} md={24} sm={24} xs={24}>
          <div className="feature2position-hero">
            <div className="feature2leftmargin-hero">
              <div className="feature2main-title">
                <img src={icons} />
                <p style={{margin:"0px"}}>{data?.title1}</p>
              </div>
              <p className="feature2first-line">{data?.description}</p>
              <h2 className="feature2title-hero">{data?.description2}</h2>

              <p className="feature2second-line">{data?.description3}</p>
              <Button className="feature2hero-firstbtn">{data?.btn}</Button>
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
          className="feature2heroSection-img"
        >
          <img src={herosec} className="feature2desktop-img"/>
          <img src={herosecMbl} className="feature2mobile-img" />

          <Button className="feature2hero-firstbtn1">{data?.btn}</Button>

        </Col>
      </Row>
    </div>
  );
};
export default Section1;
