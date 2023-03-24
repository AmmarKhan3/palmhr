import React from "react";
import { Col, Row } from "antd";
import { Button } from "antd";
import { data } from "src/Data/DataTermofService/Section1.js";

import "./style.scss";

const Section1 = () => {
  return (
    <div className="faq-heroSection">
      <Row className="faq-background-hero">
        <Col xxl={10} xl={12} lg={24} md={24} sm={24} xs={24}>
          <div className="faq-position-hero">
            <div className="faq-leftmargin-hero">
              <h2 className="faq-title-hero">{data?.description2}</h2>

              <p className="faq-second-line">{data?.description3}</p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default Section1;
