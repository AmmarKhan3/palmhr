import React from "react";
import { Col, Row } from "antd";
import { Button } from "antd";
import { data } from "src/Data/DataPricing/Section1";
import Pricingplan1 from "src/images/Plane1.svg";
import Pricingplan2 from "src/images/Plane2.svg";
import Pricingplan3 from "src/images/Plan3.svg";
import Pricingplan4 from "src/images/Plan4.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import herosecMbl from "src/images/heroImagePressKi.svg";

import "./style.scss";

const pricingList = [Pricingplan1, Pricingplan2, Pricingplan3, Pricingplan4];

const MyData = [
  {
    id: 1,
    imag: Pricingplan1,
  },
  {
    id: 2,
    imag: Pricingplan2,
  },
  {
    id: 3,
    imag: Pricingplan3,
  },
  {
    id: 4,
    imag: Pricingplan4,
  },
];
const settings = {
  dots: false,
  prevArrow: false,
  nextArrow: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  pauseOnHover: false,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
  ],
};

const Section1 = () => {
  return (
    <div className="pricing-1heroSection">
      <Row>
        <div className="pricing-1position-hero">
            <p className="pricing-1title-hero">{data?.title}</p>
        </div>
      </Row>
      <Row className="pricing-1desktop">
        {pricingList?.map((item, i) => {
          return (
            <Col xs={24} sm={24} lg={6} xl={6} key={i}>
              <img
                src={item}
                className="pricing-1desktop-img"
                alt="Media Kit"
              />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};
export default Section1;
