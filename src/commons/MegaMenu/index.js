import React, { useRef } from "react";
import { Button, Menu } from "antd";
import { CloseOutlined, MenuOutlined, DownOutlined } from "@ant-design/icons";
import { Link } from "gatsby";
import { Col, Row } from "antd";

import Logo from "../../images/logo-dek.svg";
import MblLogo from "../../images/logo-mbl.svg";
import CallIcon from "../../images/call.svg";
import icon1 from "../../images/megamenu1.svg";
import icon2 from "../../images/megamenu2.svg";
import icon3 from "../../images/megamenu3.svg";
import icon4 from "../../images/megamenu4.svg";
import icon5 from "../../images/megamenu5.svg";
import icon6 from "../../images/megamenu6.svg";
import icon7 from "../../images/megamenu7.svg";
import imagemenu from "../../images/megaMenuimg.svg";
import arrow from "../../images/arrow-right.svg";
import icon8 from "../../images/megamenu12.svg";
import icon9 from "../../images/megamenu13.svg";
import icon10 from "../../images/megamenu18.svg";
import icon11 from "../../images/megamenu14.svg";
import icon12 from "../../images/megamenu15.svg";
import icon13 from "../../images/megamenu16.svg";
import icon14 from "../../images/megamenu17.svg";
import icon15 from "../../images/megamenu19.svg";
import icon16 from "../../images/megamenu20.svg";
import icon17 from "../../images/megamenu21.svg";
import icon18 from "../../images/megamenu22.svg";
import mblicon from "../../images/mobile-call-icon.svg";
import lockIcon from "../../images/lock-mbl-icon.svg";

import "./style.css";

const itmeMbl = [
  {
    key: 1,
    label: <p>Our Products</p>,
    children: [
      {
        key: 11,
        label: <p className="class-HRSoftware">HR Software</p>,
      },
      {
        key: 12,
        label: (
          <div className="list-div-mbl">
            <div className="megamenuIcondiv">
              <img src={icon7} width={24} height={24} />
              People Management
            </div>
            <div className="megamenuArrowDiv">
              <img src={arrow} className="megamenuArrow" />
            </div>
          </div>
        ),
      },
      {
        key: 13,
        label: (
          <div className="list-div-mbl">
            <div className="megamenuIcondiv">
              <img src={icon6} width={24} height={24} />
              Time & Attendance
            </div>
            <div className="megamenuArrowDiv">
              <img src={arrow} className="megamenuArrow" />
            </div>
          </div>
        ),
      },
      {
        key: 14,
        label: (
          <div className="list-div-mbl">
            <div className="megamenuIcondiv">
              <img src={icon5} width={24} height={24} />
              Payroll & Compensation
            </div>
            <div className="megamenuArrowDiv">
              <img src={arrow} className="megamenuArrow" />
            </div>
          </div>
        ),
      },
      {
        key: 15,
        label: (
          <div className="list-div-mbl">
            <div className="megamenuIcondiv">
              <img src={icon4} width={24} height={24} />
              Talent Management
            </div>
            <div className="megamenuArrowDiv">
              <img src={arrow} className="megamenuArrow" />
            </div>
          </div>
        ),
      },
      {
        key: 16,
        label: (
          <div className="list-div-mbl">
            <div className="megamenuIcondiv">
              <img src={icon3} width={24} height={24} />
              Compliance & Integrations
            </div>
            <div className="megamenuArrowDiv">
              <img src={arrow} className="megamenuArrow" />
            </div>
          </div>
        ),
      },
      {
        key: 17,
        label: <p className="class-HRSoftware">HR Software</p>,
      },
      {
        key: 18,
        label: (
          <div className="list-div-mbl">
            <div className="megamenuIcondiv">
              <img src={icon2} width={24} height={24} />
              Concierge Advisory & Su..
            </div>
            <div className="megamenuArrowDiv">
              <img src={arrow} className="megamenuArrow" />
            </div>
          </div>
        ),
      },
      {
        key: 19,
        label: (
          <div className="list-div-mbl">
            <div className="megamenuIcondiv">
              <img src={icon1} width={24} height={24} />
              HR Templates & Guides
            </div>
            <div className="megamenuArrowDiv">
              <img src={arrow} className="megamenuArrow" />
            </div>
          </div>
        ),
      },
    ],
  },
  {
    type: "divider",
  },
  {
    key: 2,
    label: "Resouces",
    children: [
      {
        key: 17,
        label: <p className="class-HRSoftware">Blog</p>,
      },
      {
        key: 18,
        label: (
          <div className="list-div-mbl">
            <div className="megamenuIcondiv">
              <img src={icon8} width={24} height={24} />
              HR Strategy & Planning
            </div>
            <div className="megamenuArrowDiv">
              <img src={arrow} className="megamenuArrow" />
            </div>
          </div>
        ),
      },
      {
        key: 19,
        label: (
          <div className="list-div-mbl">
            <div className="megamenuIcondiv">
              <img src={icon9} width={24} height={24} />
              Employee Lifecycle Mana...
            </div>
            <div className="megamenuArrowDiv">
              <img src={arrow} className="megamenuArrow" />
            </div>
          </div>
        ),
      },
      {
        key: 20,
        label: (
          <div className="list-div-mbl">
            <div className="megamenuIcondiv">
              <img src={icon11} width={24} height={24} />
              Regulatory Compliance
            </div>
            <div className="megamenuArrowDiv">
              <img src={arrow} className="megamenuArrow" />
            </div>
          </div>
        ),
      },
      {
        key: 21,
        label: (
          <>
            <p className="class-HRSoftware">ask.pal.hr</p>
          </>
        ),
      },
      {
        key: 22,
        label: (
          <div className="list-div-mbl">
            <div className="megamenuIcondiv">
              <img src={icon12} width={24} height={24} />
              HR Glossary
            </div>
            <div className="megamenuArrowDiv">
              <img src={arrow} className="megamenuArrow" />
            </div>
          </div>
        ),
      },
      {
        key: 23,
        label: (
          <div className="list-div-mbl">
            <div className="megamenuIcondiv">
              <img src={icon13} width={24} height={24} />
              Labor Law
            </div>
            <div className="megamenuArrowDiv">
              <img src={arrow} className="megamenuArrow" />
            </div>
          </div>
        ),
      },
      {
        key: 24,
        label: (
          <div className="list-div-mbl">
            <div className="megamenuIcondiv">
              <img src={icon14} width={24} height={24} />
              Webinars
            </div>
            <div className="megamenuArrowDiv">
              <img src={arrow} className="megamenuArrow" />
            </div>
          </div>
        ),
      },
      {
        key: 25,
        label: (
          <>
            <p className="class-HRSoftware">Resources</p>
          </>
        ),
      },
      {
        key: 26,
        label: (
          <div className="list-div-mbl">
            <div className="megamenuIcondiv">
              <img src={icon10} width={24} height={24} />
              HR Letters and Templates
            </div>
            <div className="megamenuArrowDiv">
              <img src={arrow} className="megamenuArrow" />
            </div>
          </div>
        ),
      },
      {
        key: 27,
        label: (
          <div className="list-div-mbl">
            <div className="megamenuIcondiv">
              <img src={icon15} width={24} height={24} />
              Guides and E-books
            </div>
            <div className="megamenuArrowDiv">
              <img src={arrow} className="megamenuArrow" />
            </div>
          </div>
        ),
      },
      {
        key: 28,
        label: (
          <div className="list-div-mbl">
            <div className="megamenuIcondiv">
              <img src={icon11} width={24} height={24} />
              Checklists
            </div>
            <div className="megamenuArrowDiv">
              <img src={arrow} className="megamenuArrow" />
            </div>
          </div>
        ),
      },
      {
        key: 29,
        label: (
          <div className="list-div-mbl">
            <div className="megamenuIcondiv">
              <img src={icon16} width={24} height={24} />
              Market Insights
            </div>
            <div className="megamenuArrowDiv">
              <img src={arrow} className="megamenuArrow" />
            </div>
          </div>
        ),
      },
      {
        key: 30,
        label: (
          <div className="list-div-mbl">
            <div className="megamenuIcondiv">
              <img src={icon18} width={24} height={24} />
              Tools & Calculators
            </div>
            <div className="megamenuArrowDiv">
              <img src={arrow} className="megamenuArrow" />
            </div>
          </div>
        ),
      },
    ],
  },
  {
    type: "divider",
  },
  {
    key: 3,
    label: "Pricing",
  },
  {
    type: "divider",
  },
];

export default function Header() {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  const onClickmbl = (e) => {
    console.log("click ", e);
  };
  return (
    <>
      <header>
        <div className="header-desktop">
          <Link to="/">
            <img src={Logo} height={32} width={175} />
          </Link>

          <div className="h9-css">
            {/* ..............................................Mega Menu....................................................... */}
            <a className="dropdown h-text2">
              <span className="h-text dropbtn">
                Our Products
                <DownOutlined className="imh-t" />
              </span>
              <div className="dropdown-content">
                <div className="megamenuData">
                  <div className="megaMenuDataWidth">
                    <Row className="megaMenuRow1">
                      <Col span={8} className="megaMenuCol">
                        <div className="megaMenudiv1">
                          <p className="product-firstcol1"> HR Software</p>
                        </div>
                        <div className="megaMenudiv11">
                          <ul className="megaMenuul1">
                            <Link to="/PeopleManagement">
                              <li>
                                <div className="list-div">
                                  <div className="megamenuIcondiv">
                                    <img src={icon7} />
                                    People Management
                                  </div>
                                  <div className="megamenuArrowDiv">
                                    <img
                                      src={arrow}
                                      className="megamenuArrow"
                                    />
                                  </div>
                                </div>
                              </li>
                            </Link>
                            <Link className="h-text2" to="/TimeManagement">
                              <li>
                                <div className="list-div">
                                  <div className="megamenuIcondiv">
                                    <img src={icon6} />
                                    Time & Attendance
                                  </div>
                                  <div className="megamenuArrowDiv">
                                    <img
                                      src={arrow}
                                      className="megamenuArrow"
                                    />
                                  </div>
                                </div>
                              </li>
                            </Link>
                            <Link
                              className="h-text2"
                              to="/CompensationManagement"
                            >
                              <li>
                                <div className="list-div">
                                  <div className="megamenuIcondiv">
                                    <img src={icon5} />
                                    Payroll & Compensation
                                  </div>
                                  <div className="megamenuArrowDiv">
                                    <img
                                      src={arrow}
                                      className="megamenuArrow"
                                    />
                                  </div>
                                </div>
                              </li>
                            </Link>
                            <Link className="h-text2" to="/TalentManagement">
                              <li>
                                <div className="list-div">
                                  <div className="megamenuIcondiv">
                                    <img src={icon4} />
                                    Talent Management
                                  </div>
                                  <div className="megamenuArrowDiv">
                                    <img
                                      src={arrow}
                                      className="megamenuArrow"
                                    />
                                  </div>
                                </div>
                              </li>
                            </Link>
                            <Link className="h-text2" to="/Integration">
                              <li>
                                <div className="list-div">
                                  <div className="megamenuIcondiv">
                                    <img src={icon3} />
                                    Compliance & Integrations
                                  </div>
                                  <div className="megamenuArrowDiv">
                                    <img
                                      src={arrow}
                                      className="megamenuArrow"
                                    />
                                  </div>
                                </div>
                              </li>
                            </Link>
                          </ul>
                        </div>
                      </Col>
                      <Col span={8} className="megaMenuCol2">
                        <div className="megaMenudiv1">
                          <p className="product-firstcol1"> HR Software</p>
                        </div>
                        <div className="megaMenudiv11">
                          <ul className="megaMenuul1">
                            <Link className="h-text2" to="/AdvisorySupport">
                              <li>
                                <div className="list-div">
                                  <div className="megamenuIcondiv">
                                    <img src={icon2} />
                                    Concierge Advisory & Support
                                  </div>
                                  <div className="megamenuArrowDiv">
                                    <img
                                      src={arrow}
                                      className="megamenuArrow"
                                    />
                                  </div>
                                </div>
                              </li>
                            </Link>
                            <li>
                              <div className="list-div">
                                <div className="megamenuIcondiv">
                                  <img src={icon1} />
                                  HR Templates & Guides
                                </div>
                                <div className="megamenuArrowDiv">
                                  <img src={arrow} className="megamenuArrow" />
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </Col>

                      <Col span={8} className="megaMenuCol3">
                        <div className="megaMenudiv1">
                          <p className="product-firstcol1">What's New</p>
                        </div>
                        <div className="megaMenudiv3311">
                          <img src={imagemenu} className="megaMenuimage" />
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
            </a>
            <a className="dropdown h-text2">
              <span className="h-text dropbtn">
                Who we serve
                <DownOutlined className="imh-t" />
              </span>
            </a>

            <a className="dropdown h-text2">
              <span className="h-text dropbtn">
                Resources
                <DownOutlined className="imh-t" />
              </span>
              <div className="dropdown-content">
                <div className="megamenuData">
                  <div className="megaMenuDataWidth">
                    <Row className="megaMenuRow1">
                      <Col span={8} className="megaMenuCol">
                        <div className="megaMenudiv1">
                          <p className="product-firstcol1">Blog</p>
                        </div>
                        <div className="megaMenudiv11">
                          <ul className="megaMenuul1">
                            <li>
                              <div className="list-div">
                                <div className="megamenuIcondiv">
                                  <img src={icon8} />
                                  HR Strategy & Planning
                                </div>
                                <div className="megamenuArrowDiv">
                                  <img src={arrow} className="megamenuArrow" />
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="list-div">
                                <div className="megamenuIcondiv">
                                  <img src={icon9} />
                                  Employee Lifecycle Management
                                </div>
                                <div className="megamenuArrowDiv">
                                  <img src={arrow} className="megamenuArrow" />
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="list-div">
                                <div className="megamenuIcondiv">
                                  <img src={icon11} />
                                  Regulatory Compliance
                                </div>
                                <div className="megamenuArrowDiv">
                                  <img src={arrow} className="megamenuArrow" />
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </Col>
                      <Col span={8} className="megaMenuCol2">
                        <div className="megaMenudiv1">
                          <p className="product-firstcol1">ask.pal.hr</p>
                        </div>
                        <div className="megaMenudiv11">
                          <ul className="megaMenuul1">
                            <li>
                              <div className="list-div">
                                <div className="megamenuIcondiv">
                                  <img src={icon12} />
                                  HR Glossary
                                </div>
                                <div className="megamenuArrowDiv">
                                  <img src={arrow} className="megamenuArrow" />
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="list-div">
                                <div className="megamenuIcondiv">
                                  <img src={icon13} />
                                  Labor Law
                                </div>
                                <div className="megamenuArrowDiv">
                                  <img src={arrow} className="megamenuArrow" />
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="list-div">
                                <div className="megamenuIcondiv">
                                  <img src={icon14} />
                                  Webinars
                                </div>
                                <div className="megamenuArrowDiv">
                                  <img src={arrow} className="megamenuArrow" />
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </Col>
                      <Col span={8} className="megaMenuCol3">
                        <div className="megaMenudiv1">
                          <p className="product-firstcol1"> Resources</p>
                        </div>
                        <div className="megaMenudiv11">
                          <ul className="megaMenuul1">
                            <li>
                              <div className="list-div">
                                <div className="megamenuIcondiv">
                                  <img src={icon10} />
                                  HR Letters and Templates
                                </div>
                                <div className="megamenuArrowDiv">
                                  <img src={arrow} className="megamenuArrow" />
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="list-div">
                                <div className="megamenuIcondiv">
                                  <img src={icon15} />
                                  Guides and E-books
                                </div>
                                <div className="megamenuArrowDiv">
                                  <img src={arrow} className="megamenuArrow" />
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="list-div">
                                <div className="megamenuIcondiv">
                                  <img src={icon11} />
                                  Checklists
                                </div>
                                <div className="megamenuArrowDiv">
                                  <img src={arrow} className="megamenuArrow" />
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="list-div">
                                <div className="megamenuIcondiv">
                                  <img src={icon16} />
                                  Market Insights
                                </div>
                                <div className="megamenuArrowDiv">
                                  <img src={arrow} className="megamenuArrow" />
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="list-div">
                                <div className="megamenuIcondiv">
                                  <img src={icon18} />
                                  Tools & Calculators
                                </div>
                                <div className="megamenuArrowDiv">
                                  <img src={arrow} className="megamenuArrow" />
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
            </a>
            <Link to="/PricingPage" className="h-text2">
              <span className="h-text">Pricing</span>
            </Link>
          </div>

          <div className="h10-css">
            <img className="img-tell" src={CallIcon} />
            <a href="tel:+966 11 520 2868" className="h-tell">
              <span className="span-h">+966 11 520 2868</span>
            </a>
            <Button className="h-button">Get Started</Button>
          </div>
        </div>

        <div className="header-mbl">
          <img src={MblLogo} height={32} width={175} />

          <nav ref={navRef}>
            <div className="menu-header">
              <img src={MblLogo} height={32} width={175} />
            </div>
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
              <CloseOutlined style={{ color: "black", fontSize: 30 }} />
            </button>
            <Menu
              onClick={onClickmbl}
              style={{
                width: "90%",
                // marginRight: "5%",
                // marginLeft: "5%"
                backgroundColor: "red",
              }}
              defaultOpenKeys={["sub3"]}
              mode="inline"
              items={itmeMbl}
            />
            <div className="calling">
              <img src={mblicon} />
              <p className="calling-p">+966 11 520 2868</p>
            </div>
            <div className="detail">
              <p className="detail-p">Blog</p>
              <p className="detail-p">Careers</p>

              <p className="detail-p">Help Desk</p>
              <div className="lock-mbl">
                <img src={lockIcon} />
                <p className="detail-pp">Login</p>
              </div>
            </div>
            <Button className="mbl-button">Get Started</Button>
          </nav>
          <button className="nav-btn" onClick={showNavbar}>
            <MenuOutlined style={{ color: "black", fontSize: 25 }} />
          </button>
        </div>
      </header>
    </>
  );
}
