import React from "react";
import { Col, Row } from "antd";

import { data } from "src/Data/DataFeature6/Section8";
import img from "src/images/feature6-four.svg";
import img_mbl from "src/images/feature6-four-mbl.svg";

import "./style.scss";
import { CheckCircleOutlined } from "@ant-design/icons";

const Section8 = () => {

  return (
    <div >
      <Row className="feature6-8Section8-margin-top ">
        <Col xxl={12} xl={11} lg={24} md={24} sm={24} xs={24} className="feature6-8section8-margin">
          <div className="feature6-8text-shape">
            <div className="feature6-8mbl5">
              <p className="feature6-8title5">{data?.title1}</p>
              <p className="feature6-8descrypt5">{data?.description}</p>
            </div>
            <ul className="feature6-8list-ul5">
              {data?.lists.map((items) => {
                return (
                  <div className="feature6-8bullets">
                    <div className="feature6-8icon">
                      <CheckCircleOutlined
                       className="feature6-8tick"
                      />
                    </div>
                    <div className="feature6-8bullets-list">
                      <li className="feature6-8lists">{items}</li>
                    </div>
                  </div>
                );
              })}
            </ul>
          </div>
        </Col>
        <Col xxl={12} xl={13} lg={24} md={24} sm={24} xs={24} className="">
          <img src={img} className="feature6-8img-size5" alt="Local business"/>
          <img src={img_mbl} className="feature6-8img-size5-mbl" alt="Local business"/>

          <ul className="feature6-8list-ul5-mbl">
              {data?.lists.map((items) => {
                return (
                  <div className="feature6-8bullets">
                    <div className="feature6-8icon">
                      <CheckCircleOutlined
                       className="feature6-8tick"
                      />
                    </div>
                    <div className="feature6-8bullets-list">
                      <li className="feature6-8lists">{items}</li>
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

export default Section8;
