import React from "react";
import { Col, Row } from "antd";

import { data } from "src/Data/DataFeature3/Section7";
import img from "src/images/feature3-third.svg";
import img_mbl from "src/images/feature3-third-mbl.svg";

import "./style.scss";
import { CheckCircleOutlined } from "@ant-design/icons";

const Section3 = () => {

  return (
    <div>
      <Row className=" ">
        <Col xxl={12} xl={12} lg={24} md={24} sm={24} xs={24} className="">
          <div className="feature3-mobile-show">
            <p className="feature3-title4">{data?.title1}</p>
            <p className="feature3-descrypt4">{data?.description}</p>
          </div>
          <img src={img} className="feature3-img-size4" alt="Team Insights and Reports" />
          <img src={img_mbl} className="feature3-img-size4-mbl" alt="Team Insights and Reports" />

        </Col>
        <Col xxl={12} xl={12} lg={24} md={24} sm={24} xs={24}>
          <div className="feature3-text-shape4">
            <div className="feature3-mobile-hide">
              <p className="feature3-title4">{data?.title1}</p>
              <p className="feature3-descrypt4">{data?.description}</p>
            </div>
            <ul className="feature3-list-ul4">
              {data?.lists.map((items) => {
                return (
                  <div className="feature3-bullets">
                    <div className="feature3-icon">
                      <CheckCircleOutlined className="feature3-tick" />
                    </div>
                    <div className="feature3-bullets-list">
                      <li className="feature3-lists">{items}</li>
                    </div>
                  </div>
                );
              })}
            </ul>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Section3;
