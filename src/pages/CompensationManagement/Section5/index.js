import React from "react";
import { Col, Row } from "antd";

import { data } from "src/Data/DataFeature3/Section5";
import img from "src/images/feature3-one.svg";
import img_mbl from "src/images/feature3-one-mbl.svg";
import "./style.scss";
import { CheckCircleOutlined } from "@ant-design/icons";

const Section3 = () => {
  return (
    <div>
      <Row className=" ">
        <Col xxl={12} xl={12} lg={24} md={24} sm={24} xs={24} className="">
          <div className="feature3-desk3">
            <p className="feature3-title3">{data?.title3}</p>
            <p className="feature3-descrypt3">{data?.description}</p>
          </div>
          <img src={img} className="feature3-img-size3"  alt="Documents management"/>
          <img src={img_mbl} className="feature3-img-size3-mbl" alt="Documents management" />
        </Col>
        <Col xxl={12} xl={12} lg={24} md={24} sm={24} xs={24}>
          <div className="feature3-text-shape3">
            <div className="feature3-mbl3">
              <p className="feature3-title3">{data?.title1}</p>
              <p className="feature3-title32">{data?.title2}</p>
              <p className="feature3-descrypt3">{data?.description}</p>
            </div>
            <ul className="feature3-list-ul3">
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
      </Row>
    </div>
  );
};

export default Section3;
