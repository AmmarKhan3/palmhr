import { Row, Col } from "antd";
import React from "react";
import sevenimg from "src/images/s_seven.svg";
import sevenimgMbl from "src/images/s_seven-mbl.svg";

import Time from "src/images/Team-mbl.svg";
import { CheckCircleOutlined } from "@ant-design/icons";
import "./style.scss";

function Section14() {
  return (
    <Row className="section-seven">
      <Col xs={24} sm={24} md={24} lg={16} xl={14} xxl={14} align="middle">
        <div className="responsive-one">
          <img src={sevenimg} alt="No Image" className="seven-left-img" />
        </div>
      </Col>
      <Col
        xs={24}
        sm={24}
        md={24}
        lg={8}
        xl={10}
        xxl={10}
        align="middle"
        style={{ paddingTop: "10%" }}
      >
        <div className="seven-right">
          <div className="seven-right-tag">
            <div className="seven-right-tag-one">
              <img src={Time} alt="no image" className="seven-icon" />
              <p className="seven-right-title">TIME MANAGEMENT</p>
            </div>
            <div className="seven-div">
              <p className="seven-right-head-one">Intelligent</p>
              <p className="seven-right-head-one">
                Time Tracking<span className="dot-color">.</span>
              </p>
            </div>
          </div>
          <div className="responsive-two">
            <img src={sevenimgMbl} alt="No Image" className="seven-left-img" />
          </div>

          <div className="seven-container">
            <ul className="seven-list">
              <li>
                <CheckCircleOutlined
                  style={{ color: "#219387", paddingRight: "10px" }}
                />{" "}
                Mobile Check-in & Check-out
              </li>
              <li>
                <CheckCircleOutlined
                  style={{ color: "#529571", paddingRight: "10px" }}
                />{" "}
                Time Off / Absence & Leaves
              </li>
              <li>
                <CheckCircleOutlined
                  style={{ color: "#81965c", paddingRight: "10px" }}
                />{" "}
                Time Tracking & Insights
              </li>
              <li>
                <CheckCircleOutlined
                  style={{ color: "#b39845", paddingRight: "10px" }}
                />{" "}
                Work Scheduling & Shift Planning
              </li>
              <li>
                <CheckCircleOutlined
                  style={{ color: "#e29a30", paddingRight: "10px" }}
                />{" "}
                Remote Work Management
              </li>
            </ul>
          </div>

          <button className="seven-right-tag-btn">Learn More</button>
        </div>
      </Col>
    </Row>
  );
}

export default Section14;
