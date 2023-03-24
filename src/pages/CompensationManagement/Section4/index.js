import React from "react";
import { Col, Row } from "antd";

import { data } from "src/Data/DataFeature3/Section4";
import img from "src/images/feature3-zero.svg";
import img_mbl from "src/images/feature3-zero-mbl.svg";

import "./style.scss";
import { CheckCircleOutlined } from "@ant-design/icons";

const Section4 = () => {
  return (
    <div>
      <div className="feature3-mobile11">
        <p className="feature3-main-heading">Payroll & Compensation</p>
        <p className="feature3-main-heading-mbl-first">Payroll & </p>
      </div>
      <div className="feature3-mobile112">
        <p className="feature3-main-heading-mbl-second">Compensation</p>
      </div>
      <Row className="feature3- ">
        <Col xxl={12} xl={12} lg={24} md={24} sm={24} xs={24}>
          <div className="feature3-text-shape">
            <div className="feature3-mbl">
              <p className="feature3-title1">{data?.title1}</p>
              <p className="feature3-title11heading">{data?.title2}</p>
              <p className="feature3-title12heading">{data?.title3}</p>
              <p className="feature3-descrypt1111">{data?.description}</p>
            </div>
            <ul className="feature3-list-ul1">
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
        <Col xxl={12} xl={12} lg={24} md={24} sm={24} xs={24} className="feature3-">
          <img src={img} className="feature3-img-size1" alt="self-service portal" />
          <img src={img_mbl} className="feature3-img-size1-mbl" alt="self-service portal" />

          <ul className="feature3-list-ul1-mbl">
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

export default Section4;
