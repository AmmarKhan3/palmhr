import React from "react";
import { Col, Row } from "antd";
import { Button } from "antd";
import useWindowDimensions from "src/pages/utiles.js";

import herosecMbl from "src/images/HeroSection-mbl.svg";
import herosec from "src/images/HeroSection.svg";

import herofirst from "src/images/FirstBullet.svg";
import herosecond from "src/images/SecondBullet.svg";
import herothird from "src/images/ThirdBullet.svg";
import heroleft from "src/images/heroleft.png";
import "./style.scss";

const Section2 = () => {
   const { width } = useWindowDimensions();


  return (
    <div className="home-heroSection">
      <div className="home-lefthero">
        <img src={heroleft} alt="Hero Section" />
      </div>
      <Row className="home-background-hero">
        <Col xxl={9} xl={12} lg={24} md={24} sm={24} xs={24} className="section2-left-col">
          <div className="home-position-hero">
            <div className="home-leftmargin-hero">
              <p className="home-first-line">
                HRMS for Companies of all Sizes in{" "}
                <span className="home-saudi"> Saudi Arabia</span>
              </p>
              <h2 className="home-title-hero">
                Lorem Ipsum Dolor Sit Amet<span className="home-dot-color">.</span>
              </h2>
              <p className="home-second-line">
                End-to-End Solution for Everything HR.
              </p>
              <div className="home-hero-btn">
                <Button className="home-hero-firstbtn">Book a Free Demo</Button>
                <Button className="home-hero-secondbtn">60-Seconds Preview</Button>
              </div>
            </div>

            <div className="home-hero-bullets">
              <ul>
                <li>
                  <img src={herothird} alt="Hero Section" />
                  <p>Fast Implementation</p>
                </li>
                <li>
                  <img src={herosecond} alt="Hero Section" />

                  <p>100% Secure</p>
                </li>
                <li>
                  <img src={herofirst} alt="Hero Section" />

                  <p>Customer Service Excellence</p>
                </li>
              </ul>
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
          className="home-heroSection-img"
        >
          <img src={width < 800 ? herosecMbl : herosec} alt="Hero Section" />

          <div className="home-hero-btn-sec">
            <Button className="home-hero-firstbtn">Book a Free Demo</Button>
            <Button className="home-hero-secondbtn">60-Seconds Preview</Button>
          </div>
          <div className="home-hero-bullets-sec">
            <ul>
              <li>
                <img src={herofirst} alt="Hero Section" />
                <p>Fast Implementation</p>
              </li>
              <li>
                <img src={herosecond} alt="Hero Section" />

                <p>100% Secure</p>
              </li>
              <li>
                <img src={herothird} alt="Hero Section" />

                <p>Customer Service Excellence</p>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default Section2;
