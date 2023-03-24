import React from "react";
import { Col, Row } from "antd";

import { data } from "src/Data/DataFeature1/Section6";
import img from "src/images/feature1-two.svg";
import img_mbl from "src/images/feature1-two-mbl.svg";

import "./style.scss";
import { CheckCircleOutlined } from "@ant-design/icons";

const Section6 = () => {

  return (
    <div>
      <Row className=" ">
        <Col xxl={12} xl={12} lg={24} md={24} sm={24} xs={24}>
          <div className="feature1-text-shape">
            <div className="feature1-mbl2">
              <p className="feature1-title2">{data?.title1}</p>
              <p className="feature1-descrypt2">{data?.description}</p>
            </div>
            <ul className="feature1-list-ul2">
              {data?.lists.map((items) => {
                return (
                  <div className="feature1-bullets">
                    <div className="feature1-icon">
                      <CheckCircleOutlined className="feature1-tick" />
                    </div>
                    <div className="feature1-bullets-list">
                      <li className="feature1-lists">{items}</li>
                    </div>
                  </div>
                );
              })}
            </ul>
          </div>
        </Col>
        <Col xxl={12} xl={12} lg={24} md={24} sm={24} xs={24} className="">
          <img src={img} className="feature1-img-size2" />
          <img src={img_mbl} className="feature1-img-size2-mbl" />

          <ul className="feature1-list-ul2-mbl">
              {data?.lists.map((items) => {
                return (
                  <div className="feature1-bullets">
                    <div className="feature1-icon">
                      <CheckCircleOutlined className="feature1-tick" />
                    </div>
                    <div className="feature1-bullets-list">
                      <li className="feature1-lists">{items}</li>
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
