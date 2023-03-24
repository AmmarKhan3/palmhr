import { Row, Col } from "antd";
import React from "react";
import Time from "src/images/Team-mbl.svg";
import formimg from "src/images/expense.svg";

import { CheckCircleOutlined } from "@ant-design/icons";

import "./style.scss";

import Groupformtwo from "src/images/expense-mbl.svg";

function Section9() {
  return (
    <Row className="section-nine">
      <Col
        xs={24}
        sm={24}
        md={24}
        lg={16}
        xl={14}
        xxl={14}
        align="middle"
        className="section-nine-left"
      >
        <Row className="form-tag">
          <img src={formimg} alt="HRMS" />
        </Row>
        <Row className="nine-img"></Row>
      </Col>
      <Col
        xs={24}
        sm={24}
        md={24}
        lg={8}
        xl={10}
        xxl={10}
        align="middle"
        style={{ paddingTop: "4%", paddingBottom: "5%" }}
      >
        <div className="nine-right" align="middle">
          <div className="nine-right-tag">
            <div className="nine-right-tag-one">
            <img src={Time} alt="no image" className="nine-icon"/>
            <p className="nine-right-title">
               TALENT MANAGEMENT
            </p>
            </div>
            <div className="nine-div">
              <p className="nine-right-head-one">Create a Workplace</p>
              <p className="nine-right-head-one">
                You Can Call Home<span className="dot-color">.</span>
              </p>
            </div>
          </div>
          <div className="nine-responsive-two">
            <img src={Groupformtwo} alt="Form image" />
          </div>
          <div className="nine-container">
            <ul className="nine-list">
              <li>
                <CheckCircleOutlined
                  style={{ color: "#219387", paddingRight: "10px" }}
                />{" "}
                Onboarding / Offboarding
              </li>
              <li>
                <CheckCircleOutlined
                  style={{ color: "#529571", paddingRight: "10px" }}
                />{" "}
                ESS Online Requests
              </li>
              <li>
                <CheckCircleOutlined
                  style={{ color: "#81965c", paddingRight: "10px" }}
                />{" "}
                Internal Communications
              </li>
              <li>
                <CheckCircleOutlined
                  style={{ color: "#b39845", paddingRight: "10px" }}
                />{" "}
                Performance Management
              </li>
              <li>
                <CheckCircleOutlined
                  style={{ color: "#e29a30", paddingRight: "10px" }}
                />{" "}
                EOS & Benefits Management
              </li>
            </ul>
          </div>
          <div className="nine-right-btn">
            <button className="nine-right-tag-btn">Learn More</button>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default Section9;
