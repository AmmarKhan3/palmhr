import React from "react";
import s1 from "src/images/s1.png";
import s2 from "src/images/s2.png";
import s3 from "src/images/s3.png";
import { Col, Row } from "antd";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.scss";

export default function Section13() {
  const MyData = [
    {
      id: 1,
      imag: s1,
      title: "Lorem Ipsum ",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 2,
      imag: s2,
      title: "Lorem Ipsum ",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 3,
      imag: s3,
      title: "Lorem Ipsum ",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 4,
      imag: s1,
      title: "Lorem Ipsum ",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 5,
      imag: s2,
      title: "Lorem Ipsum ",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 6,
      imag: s3,
      title: "Lorem Ipsum ",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];
  const settings = {
    dots: true,
    prevArrow: false,
    nextArrow: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    pauseOnHover:false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: true,
        },
      },
    ],
  };
  return (
    <>
      <Col justify="middle" gutter={10} align="center" className="r90">
        <div>
          <p className="l1">Latest News & Updates</p>
        </div>
        <div>
          <p className="l2">
            Stay in the know! Uncover the Most Up-to-Date Information
          </p>
        </div>
        <div>
          <p className="l3" justify="center" align="center">
            Check out our curated selection of news and articles to stay
            informed on all that's happening at palm.hr and in the industry.
          </p>
        </div>
      </Col>
      <div className="slider-Sect13">
        <Slider className="slider3" {...settings}>
          {MyData.map((item) => (
            <div>
              <Row>
                <Col className="slider2">
                  <div className="">
                    <img className="img2" src={item.imag} alt="Lorem Slider"  ></img>
                  </div>
                  <p className="s1">{item.title}</p>

                  <div>
                    <p className="s2">{item.para}</p>
                  </div>
                </Col>
              </Row>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
