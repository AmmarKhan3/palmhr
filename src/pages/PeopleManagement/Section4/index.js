import React from "react";
import { Col, Row } from "antd";

import { data } from "src/Data/DataFeature1/Section4";
import img from "src/images/feature1-zero.svg";
import img_mbl from "src/images/feature1-zero-mbl.svg";

import "./style.scss";
import { CheckCircleOutlined } from "@ant-design/icons";

const Section4 = () => {
  return (
    <div>
      <div className="feature1-mobile11">
        <p className="feature1-main-heading">
           People Management
        </p>
        <p className="feature1-main-heading-mbl-first">
        People 
        </p>
      </div>
      <div className="feature1-mobile112">
        <p className="feature1-main-heading-mbl-second">Management</p>
      </div>
      <Row className=" ">
        <Col xxl={12} xl={12} lg={24} md={24} sm={24} xs={24}>
          <div className="feature1-text-shape">
            <div className="feature1-mbl">
              <p className="feature1-title1">{data?.title1}</p>
              <p className="feature1-descrypt1">{data?.description}</p>
            </div>
            <ul className="feature1-list-ul1">
              {data?.lists.map((items) => {
                return (
                  <div className="feature1-bullets">
                    <div className="feature1-icon">
                      <CheckCircleOutlined className="tick" />
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
          <img src={img} className="feature1-img-size1" />
          <img src={img_mbl} className="feature1-img-size1-mbl" />

          <ul className="feature1-list-ul1-mbl">
            {data?.lists.map((items) => {
              return (
                <div className="feature1-bullets">
                  <div className="feature1-icon">
                    <CheckCircleOutlined className="tick" />
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

export default Section4;
