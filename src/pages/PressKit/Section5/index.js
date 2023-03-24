import React from "react";
import { Col, Row } from "antd";
import { data } from "src/Data/DataMediaKit/Section5";
import herosecMbl from "src/images/colorsMediaKit.svg";
import herosec from "src/images/colorsMediaKit.svg";

import "./style.scss";

const Section5 = () => {
  return (
    <div className="mediaKit-5heroSection">
      <Row className="mediaKit-5background-hero">
        <Col xxl={10} xl={10} lg={10} md={24} sm={24} xs={24}>
          <div className="mediaKit-5position-hero">
            <div className="mediaKit-5leftmargin-hero">
              <p className="mediaKit-5title-hero">{data?.title}</p>
              <p className="mediaKit-5second-line">
                <strong className="MediaKitGenoa">Genoa™ </strong> and
                <strong className="MediaKitTarawera">Tarawera™</strong>
                {data?.description}
              </p>
              <p className="mediaKit-5second-line">{data?.description1}</p>
            </div>
          </div>
        </Col>
        <Col
          xxl={14}
          xl={14}
          lg={14}
          md={24}
          sm={24}
          xs={24}
          className="mediaKit-5heroSection-img"
        >
          <img src={herosec} className="mediaKit-5desktop-img" alt="Colors" />
          <img
            src={herosecMbl}
            className="mediaKit-5mobile-img"
            alt="Colors Mobile"
          />
        </Col>
      </Row>
    </div>
  );
};
export default Section5;
