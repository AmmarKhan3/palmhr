import React from "react";
import { Col, Row } from "antd";

import { data } from "src/Data/DataFeature3/Section8";
import img from "src/images/feature3-four.svg";
import img_mbl from "src/images/feature3-four-mbl.svg";

import "./style.scss";
import { CheckCircleOutlined } from "@ant-design/icons";

const Section8 = () => {

  return (
    <div style={{paddingTop:30}}>
      <Row className=" ">
        <Col xxl={12} xl={11} lg={24} md={24} sm={24} xs={24}>
          <div className="feature3-text-shape">
            <div className="feature3-mbl5">
              <p className="feature3-title5">{data?.title1}</p>
              <p className="feature3-descrypt5">{data?.description}</p>
            </div>
            <ul className="feature3-list-ul5">
              {data?.lists.map((items) => {
                return (
                  <div className="feature3-bullets">
                    <div className="feature3-icon">
                      <CheckCircleOutlined
                       className="feature3-tick"
                      />
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
        <Col xxl={12} xl={13} lg={24} md={24} sm={24} xs={24} className="">
          <img src={img} className="feature3-img-size5" alt="Asset management"/>
          <img src={img_mbl} className="feature3-img-size5-mbl" alt="Asset management"/>

          <ul className="feature3-list-ul5-mbl">
              {data?.lists.map((items) => {
                return (
                  <div className="feature3-bullets">
                    <div className="feature3-icon">
                      <CheckCircleOutlined
                       className="feature3-tick"
                      />
                    </div>
                    <div className="feature3-bullets-list">
                      <li className="feature3-lists">{items}</li>
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
