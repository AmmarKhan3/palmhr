import React from "react";
import { Col, Row } from "antd";
import { Button } from "antd";
import Demoform from "../demoForm";
import { navigate } from "gatsby";

import "./style.scss";

const Section1 = () => {
  const handleClick = ()=> {
    navigate("/BookingThankyou")
  }
  return (
    <div className="bookADemo-1heroSection">
      <Row className="bookADemo-1background-hero">
        <Col span={9} className="bookDemo-left-col">
          <p className="bookADemo-test" onClick={handleClick} >Book a Demo</p>
          <Button
            className="bookADemo-home-hero-secondbtn"
            onClick={() => window.history.back()}
          >
            Go Back | العودة
          </Button>
        </Col>
        <Col span={10}>
          <Demoform />
        </Col>
      </Row>
    </div>
  );
};
export default Section1;
