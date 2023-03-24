import ReactDOM from "react-dom";
import React from "react";

import "./style.scss";
import OfferSectionList from "./card";
import pic1 from "src/images/feature3-time-manage.svg";
import pic2 from "src/images/feature3-compensation.svg";
import pic3 from "src/images/feature3-talent.svg";

const Offersection = () => {
  const data = [
    {
      Url: pic1,
      heading: "TIME MANAGEMENT",
      list2: "Intelligent Time Tracking.",
    },
    {
      Url: pic2,
      heading: "COMPENSATION MANAGEMENT",
      list2: "Salaries on Time,Error Free.",
    },
    {
      Url: pic3,
      heading: "TALENT MANAGEMENT",
      list2: "Create a Workplace You Can Call Home.",
    },
  ];
  return (
    <>
      <div className="feature3-offerMain">
        <div className="feature3-offerDiv">
          <div className="feature3-offerHead">
            <p className="feature3-offerPara"> Find out what else is on palm<span style={{color:'#1A938A'}}>.</span>hr</p>
            <p className="feature3-offerPara-mbl">palm<span style={{color:'#1A938A'}}>.</span>hr People Management</p>

          </div>
        </div>
        <div className="feature3-offerBox">

          <div className="feature3-offerBoxDiv1">
            <div className="feature3-offerMargin">
              <p className="feature3-card-heading">{data[0]?.heading}</p>
              <p className="feature3-desc-p">{data[0].list2}</p>
            </div>
            <div className="feature3-offerimg1">
              <img src={data[0]?.Url} className="" alt="TIME MANAGEMENT" />
            </div>
            <button className="feature3-card-btn">
              <p className="feature3-btn-text">See More</p>
            </button>
          </div>

          <div className="feature3-offerBoxDiv2">
            <div className="feature3-offerMargin">
              <p className="feature3-card-heading1">{data[1]?.heading}</p>
              <p className="feature3-desc-p1">{data[1].list2}</p>
            </div>
            <div className="feature3-offerimg2">
              <img src={data[1]?.Url} className="" alt="COMPENSATION MANAGEMENT" />
            </div>
            <button className="feature3-card-btn">
              <p className="feature3-btn-text">See More</p>
            </button>
          </div>

          <div className="feature3-offerBoxDiv1">
            <div className="feature3-offerMargin">
              <p className="feature3-card-heading3">{data[2]?.heading}</p>
              <p className="feature3-desc-p3">{data[2].list2}</p>
            </div>
            <div className="feature3-offerimg3">
              <img src={data[2]?.Url} className="" alt="TALENT MANAGEMENT" />
            </div>
            <button className="feature3-card-btn">
              <p className="feature3-btn-text">See More</p>
            </button>
          </div>

        </div>
      </div>
    </>
  );
};

export default Offersection;
