import React from "react";
import { Col, Row } from "antd";

import { data } from "src/Data/DataFeature2/Section5";
import img from "src/images/feature2-one.svg";
import img_mbl from "src/images/feature2-one-mbl.svg";
import "./style.scss";
import { CheckCircleOutlined } from "@ant-design/icons";

const Section3 = () => {
  return (
    <div>
      <Row className=" ">
        <Col xxl={12} xl={12} lg={24} md={24} sm={24} xs={24} className="">
          <div className="feature2-desk3">
            <p className="feature2-title3">{data?.title3}</p>
            <p className="feature2-descrypt3">{data?.description}</p>
          </div>
          <img src={img} className="feature2-img-size3" />
          <img src={img_mbl} className="feature2-img-size3-mbl" />
        </Col>
        <Col xxl={12} xl={12} lg={24} md={24} sm={24} xs={24}>
          <div className="feature2-text-shape3">
            <div className="feature2-mbl3">
              <p className="feature2-title3">{data?.title1}</p>
              <p className="feature2-title32">{data?.title2}</p>
              <p className="feature2-descrypt3">{data?.description}</p>
            </div>
            <ul className="feature2-list-ul3">
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
      </Row>
    </div>
  );
};

export default Section3;
