import { Row, Col } from "antd";
import React from "react";
import "./style.scss";
import Frame from "src/images/TenFrame.svg";
import Framembl from "src/images/TenFrame.svg";

import circle from "src/images/circle.svg";
import circleimg from "src/images/ketchen.svg";
import { CheckCircleOutlined } from "@ant-design/icons";

function Section10() {
  return (
    <Row className="section-ten">
      <Col
        xs={24}
        sm={24}
        md={24}
        lg={24}
        xl={24}
        xxl={24}
        align="middle"
        className="top-heading"
      >
        <div className="top-head-inner">
          <img src={circle} alt="circle" className="circle-img" />
          <div className="circle-data">
            <img src={circleimg} alt="circle" className="circle-img-inner" />
            <p className="circle-data-tag">CONCIERGE</p>
          </div>
          <p className="circle-data-title">At Your Service!</p>
        </div>
      </Col>
      <Col
        xs={24}
        sm={24}
        md={24}
        lg={12}
        xl={12}
        xxl={12}
        className="ten-left"
      >
        <div className="para-one">
          <p className="para-one-tag-one">Need Something More than Software?</p>
          <p className="para-one-tag-two">
            With Our Concierge Service, You Can Delegate HR Operations Tasks and
            Free Your Time to Grow Your Business
          </p>
        </div>
        <div className="para-two">
          <p>
            Expanding your business footprint? Need specialized software
            features tailored to your needs? Tired of all the heavy lifting
            involved in top talent acquisition or retention, labor law
            compliance, research, and planning for new initiatives or equipment
            procurement projects? Let our concierge team take the weight off
            your shoulders and handle specific tasks for you.
          </p>
        </div>
        <div className="ten-resposive-one" align="middle">
          <img src={Frame} alt="Frame" className="ten-img" />
        </div>
        <div className="para-three-list">
          <p>
            <CheckCircleOutlined
              style={{ color: "white", paddingRight: "2%" }}
            />
            On-demand features
          </p>
          <p>
            <CheckCircleOutlined
              style={{ color: "white", paddingRight: "2%" }}
            />
            Day-to-day administrative support
          </p>
          <p>
            <CheckCircleOutlined
              style={{ color: "white", paddingRight: "2%" }}
            />
            On-site assistance
          </p>
          <p>
            <CheckCircleOutlined
              style={{ color: "white", paddingRight: "2%" }}
            />
            Business registration
          </p>
          <p>
            <CheckCircleOutlined
              style={{ color: "white", paddingRight: "2%" }}
            />
            Local business knowledge
          </p>
        </div>
      </Col>
      <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12} align="middle">
        <div className="ten-resposive-two">
          <img src={Framembl} alt="Frame" className="ten-img" />
        </div>
      </Col>
      <Col
        xs={24}
        sm={24}
        md={24}
        lg={24}
        xl={24}
        xxl={24}
        align="middle"
        className="ten-bottom"
      >
        <button className="ten-bottom-btn">Get a Free Consultaion</button>
      </Col>
    </Row>
  );
}

export default Section10;
