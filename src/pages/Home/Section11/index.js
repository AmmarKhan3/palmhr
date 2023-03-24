import React from "react";
import { Col, Row } from "antd";
import "./style.scss";
import useWindowDimensions from "src/pages/utiles.js";

import f1 from "src/images/f1.svg";
import f2 from "src/images/f2.svg";
import f3 from "src/images/f3.svg";

import f1mbl from "src/images/f1-mbl.svg";
import f2mbl from "src/images/f2-mbl.svg";
import f3mbl from "src/images/f3-mbl.svg";

export default function Section11() {
   const { width } = useWindowDimensions();
   console.log(width,"sdjavchddcvjda");
  const Data = [
    {
      id: 1,
      imag: width < 800?  f1mbl:f1,
      title: "Fast ",
      t2: "Implementation.",
      p1: "Set up all your parameters and",
      p2: " automate your HR tasks in just",
      p3: "a few clicks.",
    },
    {
      id: 2,
      imag:  width < 800?  f2mbl:f2,
      title: "100% ",
      t2: "Secure.",

      p1: "Keep your Data Safe and",
      p2: " Compliant with Industry ",
      p3: "Standards",
    },
    {
      id: 3,
      imag:  width < 800?  f3mbl:f3,
      title: "Customer",
      t2: "Service Excellence",
      p1: "Our team is on standby to",
      p2: " assist you in all your needs",
      p3: "with the palm.hr.",
    },
  ];
  return (
    <Row className="main-top">
      {Data.map((item) => (
        <Col className="col-1 swing " xs={24} sm={24} md={12} lg={8} xl={8}>
          <div>
            <img className="img8" src={item.imag} alt="Services"></img>
          </div>
          <div className=" p1">
            <p className="" style={{marginTop:'0px'}}>
              {item.title}
              <br />
              {item.t2}
            </p>
          </div>
          <div className="para">
            <p>
              {item.p1}
              <br />
              {item.p2}
              <br />
              {item.p3}
            </p>
          </div>
        </Col>
      ))}
    </Row>
  );
}
