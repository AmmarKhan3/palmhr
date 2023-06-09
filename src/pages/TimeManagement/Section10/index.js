import React from "react";
import { Button, Form, Input, Row, Col, InputNumber } from "antd";
import "./style.scss";

export default function Section12() {
  return (
    <Row justify="space-around" align="middle" className="feature2-r9">
      <Col className="feature2-r1" xs={24} sm={24} md={24} lg={12} xl={11}>
        <div className="feature2-Empower">
          <p className="feature2-r2">
            Ready to take your HR transformation to the next level?{" "}
          </p>
          <p className="feature2-r3">
            <strong className="feature2-st-css">palm.hr's </strong>
            sophisticated blend of AI technology and top-notch customer service
            offers a convenient approach for all your HR needs.
          </p>
          <p className="feature2-r33">
            Our cloud-based software is designed to make managing employees more
            straightforward than ever with automated processes, from onboarding
            to offboarding, so you can get back to running things faster.
          </p>
        
        </div>
      </Col>
      <Col xs={24} xl={10} md={24} lg={10} sm={24}>
        <Form className="feature2-r10 r8 desktop" name="basic" autoComplete="off">
          <Row>
            <Col span={11}>
              <Form.Item
                name="First Name"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input className="feature2-r5" placeholder="First Name" />
              </Form.Item>
            </Col>
            <Col offset={2} span={11}>
              <Form.Item
                name="Last Name"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input placeholder="Last Name" className="feature2-r5" />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item
                name={["user", "email"]}
                rules={[
                  {
                    type: "email",
                  },
                ]}
              >
                <Input className="feature2-r5" placeholder="Email" />
              </Form.Item>
            </Col>
          </Row>

          <Row>
            <Col span={11}>
              <Form.Item
                name="phone"
                rules={[
                  {
                    required: true,
                    message: "Please input your phone number!",
                  },
                ]}
              >
                <Input className="feature2-r5" placeholder="Phone No." />
              </Form.Item>
            </Col>
            <Col offset={2} span={11}>
              <Form.Item
                className="feature2-mr-0 "
                name="Company Name"
                rules={[
                  {
                    required: true,
                    message: "Please input your Company Name!",
                  },
                ]}
              >
                <Input className="feature2-r5" placeholder="Company Name" />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={11}>
              <Form.Item
                layout="inline"
                name="Job Title"
                rules={[
                  {
                    required: true,
                    message: "Please input your Job Title!",
                  },
                ]}
              >
                <Input placeholder="Job Title" className="feature2-r5" />
              </Form.Item>
            </Col>
            <Col offset={2} span={11}>
              <Form.Item
                className="feature2-mr-0 "
                name="InputNumber of employees"
                rules={[
                  {
                    required: true,
                    message: "Please input your No of employees!",
                  },
                ]}
              >
                <Input className="feature2-r5" placeholder="No. of Employees" />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={11}>
              <Form.Item
                layout="inline"
                name="Country"
                rules={[
                  {
                    required: true,
                    message: "Please input your Country!",
                  },
                ]}
              >
                <Input placeholder="Country" className="feature2-r5" />
              </Form.Item>
            </Col>
            <Col offset={2} span={11}>
              <Form.Item
                className="feature2-mr-0 "
                name="Feature of interest"
                rules={[
                  {
                    required: true,
                    message: "Please input your Feature of interest!",
                  },
                ]}
              >
                <Input placeholder="Feature of interest" className="feature2-r5" />
              </Form.Item>
            </Col>
          </Row>

          <Row>
            <Col span={24}>
              <Button htmlType="submit" className="feature2-zain-1" block>
                <span className="feature2-r7"> Book a Demo</span>
              </Button>
            </Col>
          </Row>
        </Form>
        <div className="feature2-mobile">
          <Form name="basic" autoComplete="off">
            <Row>
              <Col span={24}>
                <Form.Item name="First Name">
                  <Input placeholder="First Name" />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Form.Item name="Last Name">
                  <Input placeholder="Last Name" />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Form.Item name="Email">
                  <Input placeholder="Email" />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={11}>
                <Form.Item name="Last Name">
                  <Input placeholder="Phone No." />
                </Form.Item>
              </Col>
              <Col offset={2} span={11}>
                <Form.Item name="Last Name">
                  <Input placeholder="Company Name" />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={11}>
                <Form.Item name="Last Name">
                  <Input placeholder="Job Title" />
                </Form.Item>
              </Col>
              <Col offset={2} span={11}>
                <Form.Item name="Last Name">
                  <Input placeholder="No. of Employees" />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={11}>
                <Form.Item name="Last Name">
                  <Input placeholder="Country" style={{ width: "100%" }} />
                </Form.Item>
              </Col>
              <Col offset={2} span={11}>
                <Form.Item name="Last Name">
                  <Input
                    placeholder="Feature of interest"
                    style={{ width: "100%" }}
                  />
                </Form.Item>
              </Col>
            </Row>

            <Row>
              <div className="feature2-r6">
                <Button htmlType="submit" className="feature2-zain-1" block>
                  <span className="feature2-r7"> Book a Demo</span>
                </Button>
              </div>
            </Row>
          </Form>
        </div>
      </Col>
    </Row>
  );
}
