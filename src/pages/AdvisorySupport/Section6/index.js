import React from "react";
import { Col, Row } from "antd";

import { data } from "src/Data/DataFeature6/Section6";
import img from "src/images/feature6-two.svg";
import img_mbl from "src/images/feature6-two-mbl.svg";

import "./style.scss";
import { CheckCircleOutlined } from "@ant-design/icons";

const Section6 = () => {

  return (
    <div>
      <Row className="feature6-6section6-margin-top">
        <Col xxl={12} xl={12} lg={24} md={24} sm={24} xs={24}>
          <div className="feature6-6text-shape">
            <div className="feature6-6mbl2">
              <p className="feature6-6title2">{data?.title1}</p>
              <p className="feature6-6title22">{data?.title2}</p>
              <p className="feature6-6descrypt2">{data?.description}</p>
            </div>
            <ul className="feature6-6list-ul2">
              {data?.lists.map((items) => {
                return (
                  <div className="feature6-6bullets">
                    <div className="feature6-6icon">
                      <CheckCircleOutlined className="feature6-6tick" />
                    </div>
                    <div className="feature6-6bullets-list">
                      <li className="feature6-6lists">{items}</li>
                    </div>
                  </div>
                );
              })}
            </ul>
          </div>
        </Col>
        <Col xxl={12} xl={12} lg={24} md={24} sm={24} xs={24} className="">
          <img src={img} className="feature6-6img-size2" alt="Business Registration " />
          <img src={img_mbl} className="feature6-6img-size2-mbl" alt="Business Registration " />

          <ul className="feature6-6list-ul2-mbl">
              {data?.lists.map((items) => {
                return (
                  <div className="feature6-6bullets">
                    <div className="feature6-6icon">
                      <CheckCircleOutlined className="feature6-6tick" />
                    </div>
                    <div className="feature6-6bullets-list">
                      <li className="feature6-6lists">{items}</li>
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
