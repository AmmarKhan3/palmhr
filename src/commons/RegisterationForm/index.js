import React from "react";
import { Button, Form, Input, Row, Col, InputNumber } from "antd";
import HubForm from "./RegisterationForm";
import { navigate } from "gatsby";

import "./style.scss";

export default function Section12() {
  const handleClick = ()=> {
  navigate("/ThankYouPage")
  }
  return (
    <Row justify="space-around" align="middle" className="feature1-r9">
      <Col className="feature1-r1" xs={24} sm={24} md={24} lg={12} xl={11}>
        <div className="feature1-Empower">
          <p className="feature1-r2">
            Ready to take your HR transformation to the next level?{" "}
          </p>
          <p className="feature1-r3">
            <strong className="feature1-st-css">palm.hr's </strong>
            sophisticated blend of AI technology and top-notch customer service
            offers a convenient approach for all your HR needs.
          </p>
          <p className="feature1-r33">
            Our cloud-based software is designed to make managing employees more
            straightforward than ever with automated processes, from onboarding
            to offboarding, so you can get back to running things faster.
          </p>
          <p className="feature1-r33">
            <p className="feature1-r33">
              PalmHR LLC is committed to protecting and respecting your privacy,
              and we’ll only use your personal information to administer your
              account and to provide the products and services you requested
              from us. From time to time, we would like to contact you about our
              products and services, as well as other content that may be of
              interest to you. If you consent to us contacting you for this
              purpose, please tick below to say how you would like us to contact
              you:
            </p>
            <p className="feature1-r33">
              You may unsubscribe from these communications at any time. For
              more information on how to unsubscribe, our privacy practices, and
              how we are committed to protecting and respecting your privacy,
              please review our Privacy Policy. By clicking submit below, you
              consent to allow PalmHR LLC to store and process the personal
              information submitted above to provide you the content requested.
            </p>
          </p>
          <p className="feature1-r33" onClick={handleClick}>
            Fill the form and our team will reach out to you and answer all your
            questions.
          </p>
        </div>
      </Col>
      <Col xs={24} xl={10} md={24} lg={10} sm={24}>
        <div className="feature1-r10 feature1-r8 feature1-desktop">
          <HubForm />
        </div>
        <div className="feature1-mobile">
        <HubForm />
        </div>
      </Col>
    </Row>
  );
}
