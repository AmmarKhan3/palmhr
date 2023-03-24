import React from "react";
import { Col, Row } from "antd";

import { data } from "src/Data/DataFeature2/Section6";
import img from "src/images/feature2-two.svg";
import img_mbl from "src/images/feature2-two-mbl.svg";

import "./style.scss";
import { CheckCircleOutlined } from "@ant-design/icons";

const Section6 = () => {

  return (
    <div>
      <Row className=" feature2-margin">
        <Col xxl={12} xl={12} lg={24} md={24} sm={24} xs={24}>
          <div className="feature2-text-shape">
            <div className="feature2-mbl2">
              <p className="feature2-title2">{data?.title1}</p>
              <p className="feature2-title22">{data?.title2}</p>
              <p className="feature2-descrypt2">{data?.description}</p>
            </div>
            <ul className="feature2-list-ul2">
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
        <Col xxl={12} xl={12} lg={24} md={24} sm={24} xs={24} className="">
          <img src={img} className="feature2-img-size2" />
          <img src={img_mbl} className="feature2-img-size2-mbl" />

          <ul className="feature2-list-ul2-mbl">
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

export default Section6;
