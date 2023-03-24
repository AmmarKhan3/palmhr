import React from "react";
import { Col, Row } from "antd";

import { data } from "src/Data/DataFeature5/Section5";
import img from "src/images/feature5-one.svg";
import img_mbl from "src/images/feature5-one-mbl.svg";
import "./style.scss";
import { CheckCircleOutlined } from "@ant-design/icons";

const Section3 = () => {
  return (
    <div>
      <Row className="feature5-5Section5-padding ">
        <Col xxl={12} xl={12} lg={24} md={24} sm={24} xs={24} className="">
          <div className="feature5-5desk3">
            <p className="feature5-5title3">{data?.title3}</p>
            <p className="feature5-5descrypt3">{data?.description}</p>
          </div>
          <img
            src={img}
            className="feature5-5img-size3"
            alt="Integration with Mudad"
          />
          <img
            src={img_mbl}
            className="feature5-5img-size3-mbl"
            alt="Integration with Mudad"
          />
        </Col>
        <Col xxl={12} xl={12} lg={24} md={24} sm={24} xs={24}>
          <div className="feature5-5text-shape3">
            <div className="feature5-5mbl3">
              <p className="feature5-5title3">{data?.title1}</p>
              <p className="feature5-5title32">{data?.title2}</p>
              <p className="feature5-5descrypt3">{data?.description}</p>
            </div>
            <ul className="feature5-5list-ul3">
              {data?.lists.map((items) => {
                return (
                  <div className="feature5-5bullets">
                    <div className="feature5-5icon">
                      <CheckCircleOutlined className="feature5-5tick" />
                    </div>
                    <div className="feature5-5bullets-list">
                      <li className="feature5-5lists">{items}</li>
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
