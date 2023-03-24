import React from "react";
import { Col, Row } from "antd";
import { Button } from "antd";
import herosec from "src/images/BookingThankYou.svg";

import "./style.scss";

const Section1 = () => {
  return (
    <div className="bookingThankYou-1heroSection">
      <Row className="bookingThankYou-1background-hero">
        <Col>
          <img
            src={herosec}
            className="bookingThankYou-1desktop-img"
            alt="Media Kit"
          />
        </Col>
        <Button
          className="bookingThankYou-home-hero-secondbtn"
          onClick={() => window.history.back()}
        >
          Go Back | العودة
        </Button>
      </Row>
    </div>
  );
};
export default Section1;
