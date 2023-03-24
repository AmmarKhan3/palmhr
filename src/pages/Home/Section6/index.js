import React from "react";
import "./style.scss";
import { Col, Row } from "antd";
import img from "src/images/s_six.svg";
import imgmbl from "src/images/s_six-mbl.svg";

import teamicon from "src/images/Team-mbl.svg";
import { CheckCircleOutlined } from "@ant-design/icons";

function Section6() {
  return (
    <div>
      <Row className="sectionsix-main">
        <Col sm={24} md={24} lg={24} xl={24} xxl={24} align="middle">
          <div className="to-show">
            <p className="title-tag">
              Keep your team Organized and productive
              <br />
              with{" "}
              <span className="title-tag-bold" style={{ fontWeight: "700" }}>
                palm<span className="title-tag-dot">.</span>hr
              </span>
              <span className="title-tag-size"> CORE</span>
            </p>
          </div>
          <div className="to-hide">
            <p className="title-tag">
              Keep your team
              <br />
              Organized and productive <br />
              <span className="title-tag-bold" style={{ fontWeight: "700" }}>
                with palm<span className="title-tag-dot">.</span>hr
              </span>
              <span className="title-tag-size"> CORE</span>
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={8}
          xl={10}
          xxl={10}
          className="left-tag"
          align="middle"
        >
          <div className="left-head-one-tag">
            <img src={teamicon} alt="Team icon" className="teamicon" />
            <p className="left-head-one">PEOPLE MANAGEMENT</p>
          </div>
          <div className="left-head-two-tag">
            <p className="left-head-two">Streamline</p>
            <p className="left-head-two">
              HR Administration<span className="title-tag-dot">.</span>
            </p>
          </div>
          <div className="respons-img">
            <img src={imgmbl} alt="Not found" className="right-tag-img" />
          </div>
          <div className="six-container">
            <ul className="six-list">
              <li>
                <CheckCircleOutlined
                  style={{ color: "#219387", paddingRight: "10px" }}
                />{" "}
                Ess profiles & Data
              </li>
              <li>
                <CheckCircleOutlined
                  style={{ color: "#529571", paddingRight: "10px" }}
                />{" "}
                Document Management
              </li>
              <li>
                <CheckCircleOutlined
                  style={{ color: "#81965c", paddingRight: "10px" }}
                />{" "}
                Organization Charts
              </li>
              <li>
                <CheckCircleOutlined
                  style={{ color: "#b39845", paddingRight: "10px" }}
                />{" "}
                Team Insights & Reports
              </li>
              <li>
                <CheckCircleOutlined
                  style={{ color: "#e29a30", paddingRight: "10px" }}
                />{" "}
                Asset Management
              </li>
            </ul>
          </div>

          <div className="section-six-btn">
            <button className="left-tag-btn">Learn More</button>
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
          <div className="respons2-img">
            <img src={img} alt="Not found" className="right-tag-img" />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Section6;
