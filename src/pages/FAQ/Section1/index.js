import React from "react";
import { Col, Row } from "antd";
import { Button } from "antd";
import { data } from "src/Data/DataFeature9/Section1";
import herosecMbl from "src/images/faq-header-image.svg";
import herosec from "src/images/faq-header-image.svg";

import "./style.scss";

const Section1 = () => {
  return (
    <div className="faq-heroSection">
      <Row className="faq-background-hero">
        <Col xxl={9} xl={12} lg={24} md={24} sm={24} xs={24}>
          <div className="faq-position-hero">
            <div className="faq-leftmargin-hero">
              <h2 className="faq-title-hero">{data?.description2}</h2>

              <p className="faq-second-line">{data?.description3}</p>
              <Button className="faq-hero-firstbtn">{data?.btn}</Button>
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
          className="faq-heroSection-img"
        >
          <img src={herosec} className="faq-desktop-img" alt="Got questions" />
          <img src={herosecMbl} className="faq-mobile-img" alt="Got questions" />

          <Button className="faq-hero-firstbtn1">{data?.btn}</Button>
        </Col>
      </Row>
    </div>
  );
};
export default Section1;
