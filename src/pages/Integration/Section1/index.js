import React from "react";
import { Col, Row } from "antd";
import { Button } from "antd";
import { data } from "src/Data/DataFeature5/Section1";
import herosecMbl from "src/images/feature5-Headerimage-mbl.svg";
import herosec from "src/images/feature5-Headerimage.svg";

import "./style.scss";

const Section1 = () => {
  return (
    <div className="feature5-1heroSection">
      <Row className="feature5-1background-hero">
        <Col xxl={9} xl={11} lg={11} md={24} sm={24} xs={24}>
          <div className="feature5-1position-hero">
            <div className="feature5-1leftmargin-hero">
              <p className="feature5-1first-line">{data?.description}</p>

              <h2 className="feature5-1title-hero">{data?.description2}</h2>
              <h2 className="feature5-1title-hero22">{data?.description22}</h2>
              <h2 className="feature5-1title-hero23">{data?.description23}</h2>

              <p className="feature5-1second-line">{data?.description3}</p>
              <Button className="feature5-1hero-firstbtn">
                {data?.btn}
              </Button>
            </div>
          </div>
        </Col>
        <Col
          xxl={9}
          xl={11}
          lg={11}
          md={24}
          sm={24}
          xs={24}
          className="feature5-1heroSection-img"
        >
          <img src={herosec} className="feature5-1desktop-img" alt="HRMS FOR COMPANIES" />
          <img src={herosecMbl} className="feature5-1mobile-img" alt="HRMS FOR COMPANIES" />

          <Button className="feature5-1hero-firstbtn1">{data?.btn}</Button>
        </Col>
      </Row>
    </div>
  );
};
export default Section1;
