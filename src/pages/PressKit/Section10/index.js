import React from "react";
import { Button, Form, Input, Row, Col } from "antd";
import { data } from "src/Data/DataMediaKit/Section6";

import "./style.scss";

export default function Section6() {
  return (
    <Row justify="space-around" align="middle" className="mediaKit-6r9">
      <Col className="mediaKit-6r1" xs={24} sm={24} md={12} lg={12} xl={12}>
        <div className="mediaKit-6Empower">
          <p className="mediaKit-6r2">
            {data?.title}
          </p>
          <p className="mediaKit-6r3">
            <strong className="mediaKit-6st-css">palm.hr's </strong>
            {data?.description}
          </p>
          <p className="mediaKit-6r33">
          {data?.description1}
          </p>
          <p className="mediaKit-6r33">
            {data?.description2}
          </p>
        </div>
      </Col>
      <Col xs={24} xl={11} md={11} lg={11} sm={24}>
        <Form className="mediaKit-6r10 mediaKit-6r8 mediaKit-6desktop" name="basic" autoComplete="off">
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
                <Input className="mediaKit-6r5" placeholder="First Name" />
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
                <Input placeholder="Last Name" className="mediaKit-6r5" />
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
                <Input className="mediaKit-6r5" placeholder="Email" />
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
                <Input className="mediaKit-6r5" placeholder="Phone No." />
              </Form.Item>
            </Col>
            <Col offset={2} span={11}>
              <Form.Item
                className="mediaKit-6mr-0 "
                name="Company Name"
                rules={[
                  {
                    required: true,
                    message: "Please input your Company Name!",
                  },
                ]}
              >
                <Input className="mediaKit-6r5" placeholder="Company Name" />
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
                <Input placeholder="Job Title" className="mediaKit-6r5" />
              </Form.Item>
            </Col>
            <Col offset={2} span={11}>
              <Form.Item
                className="mediaKit-6mediaKit-6mr-0 "
                name="InputNumber of employees"
                rules={[
                  {
                    required: true,
                    message: "Please input your No of employees!",
                  },
                ]}
              >
                <Input className="mediaKit-6r5" placeholder="No. of Employees" />
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
                <Input placeholder="Country" className="mediaKit-6r5" />
              </Form.Item>
            </Col>
            <Col offset={2} span={11}>
              <Form.Item
                className="mediaKit-6mr-0 "
                name="Feature of interest"
                rules={[
                  {
                    required: true,
                    message: "Please input your Feature of interest!",
                  },
                ]}
              >
                <Input placeholder="Feature of interest" className="mediaKit-6r5" />
              </Form.Item>
            </Col>
          </Row>

          <Row>
            <Col span={24}>
              <Button htmlType="submit" className="zain-1" block>
                <span className="mediaKit-6r7"> Book a Demo</span>
              </Button>
            </Col>
          </Row>
        </Form>
        <div className="mediaKit-6mobile">
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
              <div className="mediaKit-6r6">
                <Button htmlType="submit" className="mediaKit-6zain-1" block>
                  <span className="mediaKit-6r7"> Book a Demo</span>
                </Button>
              </div>
            </Row>
          </Form>
        </div>
      </Col>
    </Row>
  );
}
