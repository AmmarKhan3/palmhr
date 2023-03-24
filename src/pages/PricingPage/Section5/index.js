import React from "react";
import { Button, Form, Input, Row, Col } from "antd";
import { data } from "src/Data/DataMediaKit/Section6";

import "./style.scss";

export default function Section5() {
  return (
    <Row justify="space-around" align="middle" className="pricing-5r9">
      <Col className="pricing-5r1" xs={24} sm={24} md={12} lg={12} xl={12}>
        <div className="pricing-5Empower">
          <p className="pricing-5r2">
            {data?.title}
          </p>
          <p className="pricing-5r3">
            <strong className="pricing-5st-css">palm.hr's </strong>
            {data?.description}
          </p>
          <p className="pricing-5r33">
          {data?.description1}
          </p>
          <p className="pricing-5r33">
            {data?.description2}
          </p>
        </div>
      </Col>
      <Col xs={24} xl={11} md={11} lg={11} sm={24}>
        <Form className="pricing-5r10 pricing-5r8 pricing-5desktop" name="basic" autoComplete="off">
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
                <Input className="pricing-5r5" placeholder="First Name" />
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
                <Input placeholder="Last Name" className="pricing-5r5" />
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
                <Input className="pricing-5r5" placeholder="Email" />
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
                <Input className="pricing-5r5" placeholder="Phone No." />
              </Form.Item>
            </Col>
            <Col offset={2} span={11}>
              <Form.Item
                className="pricing-5mr-0 "
                name="Company Name"
                rules={[
                  {
                    required: true,
                    message: "Please input your Company Name!",
                  },
                ]}
              >
                <Input className="pricing-5r5" placeholder="Company Name" />
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
                <Input placeholder="Job Title" className="pricing-5r5" />
              </Form.Item>
            </Col>
            <Col offset={2} span={11}>
              <Form.Item
                className="pricing-5pricing-5mr-0 "
                name="InputNumber of employees"
                rules={[
                  {
                    required: true,
                    message: "Please input your No of employees!",
                  },
                ]}
              >
                <Input className="pricing-5r5" placeholder="No. of Employees" />
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
                <Input placeholder="Country" className="pricing-5r5" />
              </Form.Item>
            </Col>
            <Col offset={2} span={11}>
              <Form.Item
                className="pricing-5mr-0 "
                name="Feature of interest"
                rules={[
                  {
                    required: true,
                    message: "Please input your Feature of interest!",
                  },
                ]}
              >
                <Input placeholder="Feature of interest" className="pricing-5r5" />
              </Form.Item>
            </Col>
          </Row>

          <Row>
            <Col span={24}>
              <Button htmlType="submit" className="zain-1" block>
                <span className="pricing-5r7"> Book a Demo</span>
              </Button>
            </Col>
          </Row>
        </Form>
        <div className="pricing-5mobile">
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
              <div className="pricing-5r6">
                <Button htmlType="submit" className="pricing-5zain-1" block>
                  <span className="pricing-5r7"> Book a Demo</span>
                </Button>
              </div>
            </Row>
          </Form>
        </div>
      </Col>
    </Row>
  );
}
