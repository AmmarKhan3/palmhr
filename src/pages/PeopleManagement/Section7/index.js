import React from "react";
import { Col, Row } from "antd";

import { data } from "src/Data/DataFeature1/Section7";
import img from "src/images/feature1-third.svg";
import img_mbl from "src/images/feature1-third-mbl.svg";

import "./style.scss";
import { CheckCircleOutlined } from "@ant-design/icons";

const Section3 = () => {

  return (
    <div>
      <Row className=" ">
        <Col xxl={12} xl={12} lg={24} md={24} sm={24} xs={24} className="">
          <div className="feature1-mobile-show">
            <p className="feature1-title4">{data?.title1}</p>
            <p className="feature1-descrypt4">{data?.description}</p>
          </div>
          <img src={img} className="feature1-img-size4" />
          <img src={img_mbl} className="feature1-img-size4-mbl" />

        </Col>
        <Col xxl={12} xl={12} lg={24} md={24} sm={24} xs={24}>
          <div className="feature1-text-shape">
            <div className="feature1-mobile-hide">
              <p className="feature1-title4">{data?.title1}</p>
              <p className="feature1-descrypt4">{data?.description}</p>
            </div>
            <ul className="feature1-list-ul4">
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
      </Row>
    </div>
  );
};

export default Section3;
