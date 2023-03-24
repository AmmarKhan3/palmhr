import React from "react";
import { Col, Row } from "antd";

import { data } from "src/Data/DataFeature1/Section8";
import img from "src/images/feature1-four.svg"
import img_mbl from "src/images/feature1-four-mbl.svg";

import "./style.scss";
import { CheckCircleOutlined } from "@ant-design/icons";

const Section8 = () => {

  return (
    <div style={{paddingTop:30}}>
      <Row className=" ">
        <Col xxl={12} xl={11} lg={24} md={24} sm={24} xs={24}>
          <div className="feature1-text-shape">
            <div className="feature1-mbl5">
              <p className="feature1-title5">{data?.title1}</p>
              <p className="feature1-descrypt5">{data?.description}</p>
            </div>
            <ul className="feature1-list-ul5">
              {data?.lists.map((items) => {
                return (
                  <div className="feature1-bullets">
                    <div className="feature1-icon">
                      <CheckCircleOutlined
                       className="feature1-tick"
                      />
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
        <Col xxl={12} xl={13} lg={24} md={24} sm={24} xs={24} className="">
          <img src={img} className="feature1-img-size5"/>
          <img src={img_mbl} className="feature1-img-size5-mbl"/>

          <ul className="feature1-list-ul5-mbl">
              {data?.lists.map((items) => {
                return (
                  <div className="feature1-bullets">
                    <div className="feature1-icon">
                      <CheckCircleOutlined
                       className="feature1-tick"
                      />
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

export default Section8;
