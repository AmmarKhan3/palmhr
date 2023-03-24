import React from "react";
import { Col, Row } from "antd";

import { data } from "src/Data/DataFeature5/Section7";
import img from "src/images/feature5-third.svg";
import img_mbl from "src/images/feature5-third-mbl.svg";

import "./style.scss";
import { CheckCircleOutlined } from "@ant-design/icons";

const Section3 = () => {

  return (
    <div>
      <Row className="feature5-7Section7-padding">
        <Col xxl={12} xl={12} lg={24} md={24} sm={24} xs={24} className="">
          <div className="feature5-7mobile-show">
            <p className="feature5-7title4">{data?.title1}</p>
            <p className="feature5-7descrypt4">{data?.description}</p>
          </div>
          <img src={img} className="feature5-7img-size4"  alt="Integration with GOSI" />
          <img src={img_mbl} className="feature5-7img-size4-mbl" alt="Integration with GOSI"  />

        </Col>
        <Col xxl={12} xl={12} lg={24} md={24} sm={24} xs={24}>
          <div className="feature5-7text-shape4">
            <div className="feature5-7mobile-hide">
              <p className="feature5-7title4">{data?.title1}</p>
              <p className="feature5-7descrypt4">{data?.description}</p>
            </div>
            <ul className="feature5-7list-ul4">
              {data?.lists.map((items) => {
                return (
                  <div className="feature5-7bullets">
                    <div className="feature5-7icon">
                      <CheckCircleOutlined className="feature5-7tick" />
                    </div>
                    <div className="feature5-7bullets-list">
                      <li className="feature5-7lists">{items}</li>
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
