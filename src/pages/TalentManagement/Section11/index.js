import ReactDOM from "react-dom";
import React from "react";

import "./style.scss";
import pic1 from "src/images/feature4-time-manage.svg";
import pic2 from "src/images/feature4-compensation.svg";
import pic3 from "src/images/feature4-talent.svg";

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
      <div className="offerMain">
        <div className="offerDiv">
          <div className="offerHead">
            <p className="offerPara"> Find out what else is on palm<span style={{color:'#1A938A'}}>.</span>hr</p>
          </div>
        </div>
        <div className="offerBox">

          <div className="offerBoxDiv1">
            <div className="offerMargin">
              <p className="card-heading">{data[0]?.heading}</p>
              <p className="desc-p">{data[0].list2}</p>
            </div>
            <div className="offerimg1">
              <img src={data[0]?.Url} className="" />
            </div>
            <button className="card-btn">
              <p className="btn-text">See More</p>
            </button>
          </div>

          <div className="offerBoxDiv2">
            <div className="offerMargin">
              <p className="card-heading1">{data[1]?.heading}</p>
              <p className="desc-p1">{data[1].list2}</p>
            </div>
            <div className="offerimg2">
              <img src={data[1]?.Url} className="" />
            </div>
            <button className="card-btn">
              <p className="btn-text">See More</p>
            </button>
          </div>

          <div className="offerBoxDiv1">
            <div className="offerMargin">
              <p className="card-heading3">{data[2]?.heading}</p>
              <p className="desc-p3">{data[2].list2}</p>
            </div>
            <div className="offerimg3">
              <img src={data[2]?.Url} className="" />
            </div>
            <button className="card-btn">
              <p className="btn-text">See More</p>
            </button>
          </div>

        </div>
      </div>
    </>
  );
};

export default Offersection;
