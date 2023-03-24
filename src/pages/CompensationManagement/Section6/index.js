import React from "react";
import { Col, Row } from "antd";

import { data } from "src/Data/DataFeature3/Section6";
import img from "src/images/feature3-two.svg";
import img_mbl from "src/images/feature3-two-mbl.svg";

import "./style.scss";
import { CheckCircleOutlined } from "@ant-design/icons";

const Section6 = () => {

  return (
    <div>
      <Row className=" ">
        <Col xxl={12} xl={12} lg={24} md={24} sm={24} xs={24}>
          <div className="feature3-text-shape">
            <div className="feature3-mbl2">
              <p className="feature3-title2">{data?.title1}</p>
              <p className="feature3-title22">{data?.title2}</p>
              <p className="feature3-descrypt2">{data?.description}</p>
            </div>
            <ul className="feature3-list-ul2">
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
        <Col xxl={12} xl={12} lg={24} md={24} sm={24} xs={24} className="">
          <img src={img} className="feature3-img-size2" alt="Organization Charts" />
          <img src={img_mbl} className="feature3-img-size2-mbl" alt="Organization Charts" />

          <ul className="feature3-list-ul2-mbl">
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
        </Col>
      </Row>
    </div>
  );
};

export default Section6;
