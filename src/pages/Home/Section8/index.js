import React from "react";
import "./style.scss";
import { Col, Row } from "antd";
import img from "src/images/s_eight.svg";
import imgmbl from "src/images/s_eight-mbl.svg";

import teamicon from "src/images/Team-mbl.svg";
import { CheckCircleOutlined } from "@ant-design/icons";

function Section8() {
  return (
    <div>
      <Row>
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={8}
          xl={10}
          xxl={10}
          className="eight-left-tag"
          align="middle"
        >
          <div className="eight-left-head-one-tag">
            <img src={teamicon} alt="Team icon" className="eight-icon" />
            <p className="eight-left-head-one">COMPENSATION MANAGEMENT</p>
          </div>
          <div className="eight-left-head-two-tag">
            <p className="eight-left-head-two">
              Salaries on Time, <br />
              Error Free<span className="title-tag-dot">.</span>
            </p>
          </div>
          <div className="eight-respons-img">
            <img src={img} alt="Not found" className="eight-right-tag-img" />
          </div>
          <div className="eight-container">
            <ul className="eight-list">
              <li>
                <CheckCircleOutlined
                  style={{ color: "#219387", paddingRight: "10px" }}
                />{" "}
                Multi-Country Payroll
              </li>
              <li>
                <CheckCircleOutlined
                  style={{ color: "#529571", paddingRight: "10px" }}
                />{" "}
                WPS Payroll Automation
              </li>
              <li>
                <CheckCircleOutlined
                  style={{ color: "#81965c", paddingRight: "10px" }}
                />{" "}
                Payroll Insights & Reports
              </li>
              <li>
                <CheckCircleOutlined
                  style={{ color: "#b39845", paddingRight: "10px" }}
                />{" "}
                Expenses Management
              </li>
              <li>
                <CheckCircleOutlined
                  style={{ color: "#e29a30", paddingRight: "10px" }}
                />{" "}
                Loan Management{" "}
              </li>
            </ul>
          </div>

          <div className="section-eight-btn">
            <button className="eight-left-tag-btn">Learn More</button>
          </div>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={16}
          xl={14}
          xxl={14}
          align="middle"
          style={{ marginTop: "-50px" }}
        >
          <div className="eight-respons2-img">
            <img src={imgmbl} alt="Not found" className="eight-right-tag-img" />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Section8;
