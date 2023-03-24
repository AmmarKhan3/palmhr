import React from "react";
import { Col, Row } from "antd";

import { data } from "src/Data/DataFeature5/Section6";
import img from "src/images/feature5-two.svg";
import img_mbl from "src/images/feature5-two-mbl.svg";

import "./style.scss";
import { CheckCircleOutlined } from "@ant-design/icons";

const Section6 = () => {

  return (
    <div>
      <Row className="feature5-6section6-padding ">
        <Col xxl={12} xl={12} lg={24} md={24} sm={24} xs={24}>
          <div className="feature5-6text-shape6">
            <div className="feature5-6mbl2">
              <p className="feature5-6title2">{data?.title1}</p>
              <p className="feature5-6title22">{data?.title2}</p>
              <p className="feature5-6descrypt2">{data?.description}</p>
            </div>
            <ul className="feature5-6list-ul2">
              {data?.lists.map((items) => {
                return (
                  <div className="feature5-6bullets">
                    <div className="feature5-6icon">
                      <CheckCircleOutlined className="feature5-6tick" />
                    </div>
                    <div className="feature5-6bullets-list">
                      <li className="feature5-6lists">{items}</li>
                    </div>
                  </div>
                );
              })}
            </ul>
          </div>
        </Col>
        <Col xxl={12} xl={12} lg={24} md={24} sm={24} xs={24} className="">
          <img src={img} className="feature5-6img-size2" alt="GOSI" />
          <img src={img_mbl} className="feature5-6img-size2-mbl" alt="GOSI" />

          <ul className="feature5-6list-ul2-mbl">
              {data?.lists.map((items) => {
                return (
                  <div className="feature5-6bullets">
                    <div className="feature5-6icon">
                      <CheckCircleOutlined className="feature5-6tick" />
                    </div>
                    <div className="feature5-6bullets-list">
                      <li className="feature5-6lists">{items}</li>
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
