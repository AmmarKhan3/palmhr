import React from "react";
import { Col, Row } from "antd";

import { data } from "src/Data/DataFeature6/Section5";
import img from "src/images/feature6-one.svg";
import img_mbl from "src/images/feature6-one-mbl.svg";
import "./style.scss";
import { CheckCircleOutlined } from "@ant-design/icons";

const Section3 = () => {
  return (
    <div>
      <Row className="feature6-5section5-margin-top">
        <Col xxl={11} xl={11} lg={11} md={24} sm={24} xs={24} className="">
          <div className="feature6-5desk3">
            <p className="feature6-5title3">{data?.title3}</p>
            <p className="feature6-5descrypt3">{data?.description}</p>
          </div>
          <img src={img} className="feature6-5img-size3" alt="Human Resources" />
          <img src={img_mbl} className="feature6-5img-size3-mbl" alt="Human Resources" />
        </Col>
        <Col offset={2} xxl={11} xl={11} lg={11} md={24} sm={24} xs={24}>
          <div className="feature6-5text-shape3">
            <div className="feature6-5mbl3">
              <p className="feature6-5title3">{data?.title1}</p>
              <p className="feature6-5title32">{data?.title2}</p>
              <p className="feature6-5descrypt3">{data?.description}</p>
            </div>
            <ul className="feature6-5list-ul3">
              {data?.lists.map((items) => {
                return (
                  <div className="feature6-5bullets">
                    <div className="feature6-5icon">
                      <CheckCircleOutlined className="feature6-5tick" />
                    </div>
                    <div className="feature6-5bullets-list">
                      <li className="feature6-5lists">{items}</li>
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
