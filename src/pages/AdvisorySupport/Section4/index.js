import React from "react";
import { Col, Row } from "antd";

import { data } from "src/Data/DataFeature6/Section4";
import img from "src/images/feature6-zero.svg";
import img_mbl from "src/images/feature6-zero-mbl.svg";

import "./style.scss";
import { CheckCircleOutlined } from "@ant-design/icons";

const Section4 = () => {
  return (
    <div>
      <Row className="feature6-section4-margin-top">
        <Col xxl={12} xl={12} lg={24} md={24} sm={24} xs={24}>
          <div className="feature6-text-shape">
            <div className="feature6-mbl">
              <p className="feature6-title1">{data?.title1}</p>
              <p className="feature6-descrypt1">{data?.description}</p>
            </div>
            <ul className="feature6-list-ul1">
              {data?.lists.map((items) => {
                return (
                  <div className="feature6-bullets">
                    <div className="feature6-icon">
                      <CheckCircleOutlined className="feature6-tick" />
                    </div>
                    <div className="feature6-bullets-list">
                      <li className="feature6-lists">{items}</li>
                    </div>
                  </div>
                );
              })}
            </ul>
          </div>
        </Col>
        <Col xxl={12} xl={12} lg={24} md={24} sm={24} xs={24} className="">
          <img src={img} className="feature6-img-size1" alt="Human Resources" />
          <img src={img_mbl} className="feature6-img-size1-mbl" alt="Human Resources" />

          <ul className="feature6-list-ul1-mbl">
            {data?.lists.map((items) => {
              return (
                <div className="feature6-bullets">
                  <div className="feature6-icon">
                    <CheckCircleOutlined className="feature6-tick" />
                  </div>
                  <div className="feature6-bullets-list">
                    <li className="feature6-lists">{items}</li>
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

export default Section4;
