import React from "react";
import { Col, Row } from "antd";
import { Button } from "antd";
import { Link, navigate } from "gatsby";
import herosec from "src/images/ThankYouHero.svg";

import "./style.scss";

const Section1 = () => {
 const BooKDemo = ()=> {
  navigate("/BookADemo")
 }
  return (
    <div className="thankYou-1heroSection">
      <Row className="thankYou-1background-hero">
        <Col>
          <img
            src={herosec}
            className="thankYou-1desktop-img"
            alt="Media Kit"
          />
        </Col>
        <Button className="thankYou-1hero-firstbtn" onClick={BooKDemo} >
          Book a demo | احجز موعد
        </Button>
        <Button className="thankYou-home-hero-secondbtn" onClick={()=> window.history.back()}>
          Go Back | العودة
        </Button>
      </Row>
    </div>
  );
};
export default Section1;
