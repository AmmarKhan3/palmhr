import React from "react";
import { Col, Row } from "antd";

import { data } from "src/Data/DataFeature2/Section8";
import img from "src/images/feature2-four.svg";
import img_mbl from "src/images/feature2-four-mbl.svg";

import "./style.scss";
import { CheckCircleOutlined } from "@ant-design/icons";

const Section8 = () => {

  return (
    <div>
      <Row className="feature2-margin8">
        <Col xxl={12} xl={11} lg={24} md={24} sm={24} xs={24}>
          <div className="feature2-text-shape">
            <div className="feature2-mbl5">
              <p className="feature2-title5">{data?.title1}</p>
              <p className="feature2-descrypt5">{data?.description}</p>
            </div>
            <ul className="feature2-list-ul5">
              {data?.lists.map((items) => {
                return (
                  <div className="feature2-bullets">
                    <div className="feature2-icon">
                      <CheckCircleOutlined
                       className="feature2-tick"
                      />
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
        <Col xxl={12} xl={13} lg={24} md={24} sm={24} xs={24} className="">
          <img src={img} className="feature2-img-size5"/>
          <img src={img_mbl} className="feature2-img-size5-mbl"/>

          <ul className="feature2-list-ul5-mbl">
              {data?.lists.map((items) => {
                return (
                  <div className="feature2-bullets">
                    <div className="feature2-icon">
                      <CheckCircleOutlined
                       className="feature2-tick"
                      />
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

export default Section8;
