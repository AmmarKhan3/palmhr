import React from "react";
import { Col, Row } from "antd";

import { data } from "src/Data/DataFeature2/Section4";
import img from "src/images/feature2-zero.svg";
import img_mbl from "src/images/feature2-zero-mbl.svg";

import "./style.scss";
import { CheckCircleOutlined } from "@ant-design/icons";

const Section4 = () => {
  return (
    <div>
      <div className="feature2-mobile11">
        <p className="feature2-main-heading">
        Time & Attendance
        </p>
        <p className="feature2-main-heading-mbl-first">
        Time
        </p>
      </div>
      <div className="feature2-mobile112">
        <p className="feature2-main-heading-mbl-second">& Attendance</p>
      </div>
      <Row className=" ">
        <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
          <div className="feature2-text-shape">
            <div className="feature2-mbl">
              <p className="feature2-title14">{data?.title1}</p>
              <p className="feature2-descrypt14">{data?.description}</p>
            </div>
            <ul className="feature2-list-ul1">
              {data?.lists.map((items) => {
                return (
                  <div className="feature2-bullets">
                    <div className="feature2-icon">
                      <CheckCircleOutlined className="feature2-tick" />
                    </div>
                    <div className="feature2-bullets-list">
                      <li className="feature2-lists">{items}</li>
                    </div>
                  </div>
                );
              })}
            </ul>
          </div>
        </Col>
        <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24} className="">
          <img src={img} className="feature2-img-size1" />
          <img src={img_mbl} className="feature2-img-size1-mbl" />

          <ul className="feature2-list-ul1-mbl">
            {data?.lists.map((items) => {
              return (
                <div className="feature2-bullets">
                  <div className="feature2-icon">
                    <CheckCircleOutlined className="feature2-tick" />
                  </div>
                  <div className="feature2-bullets-list">
                    <li className="feature2-lists">{items}</li>
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
