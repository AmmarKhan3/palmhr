import React from "react";
import { Col, Row } from "antd";

import { data } from "src/Data/DataFeature6/Section7";
import img from "src/images/feature6-third.svg";
import img_mbl from "src/images/feature6-third-mbl.svg";

import "./style.scss";
import { CheckCircleOutlined } from "@ant-design/icons";

const Section3 = () => {

  return (
    <div>
      <Row className="feature6-7Section7-margin-top">
        <Col xxl={11} xl={11} lg={11} md={24} sm={24} xs={24} className="">
          <div className="feature6-7mobile-show">
            <p className="feature6-7title4">{data?.title1}</p>
            <p className="feature6-7descrypt4">{data?.description}</p>
          </div>
          <img src={img} className="feature6-7img-size4" alt="Employee Self Service" />
          <img src={img_mbl} className="feature6-7img-size4-mbl" alt="Employee Self Service" />

        </Col>
        <Col offset={1} xxl={11} xl={11} lg={11} md={24} sm={24} xs={24}>
          <div className="feature6-7text-shape4">
            <div className="feature6-7mobile-hide">
              <p className="feature6-7title4">{data?.title1}</p>
              <p className="feature6-7descrypt4">{data?.description}</p>
            </div>
            <ul className="feature6-7list-ul4">
              {data?.lists.map((items) => {
                return (
                  <div className="feature6-7bullets">
                    <div className="feature6-7icon">
                      <CheckCircleOutlined className="feature6-7tick" />
                    </div>
                    <div className="feature6-7bullets-list">
                      <li className="feature6-7lists">{items}</li>
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
