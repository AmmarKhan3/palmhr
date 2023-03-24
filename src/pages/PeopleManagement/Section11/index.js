import React from "react";

import "./style.scss";
import pic1 from "src/images/feature1-time-manage.svg";
import pic2 from "src/images/feature1-compensation.svg";
import pic3 from "src/images/feature1-talent.svg";

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
      <div className="feature1-offerMain">
        <div className="feature1-offerDiv">
          <div className="feature1-offerHead">
            <p className="feature1-offerPara">Find out what else is on palm<span style={{color:'#1A938A'}}>.</span>hr</p>
          </div>
        </div>
        <div className="feature1-offerBox">

          <div className="feature1-offerBoxDiv1">
            <div className="feature1-offerMargin">
              <p className="feature1-card-heading">{data[0]?.heading}</p>
              <p className="feature1-desc-p">{data[0].list2}</p>
            </div>
            <div className="feature1-offerimg1">
              <img src={data[0]?.Url} className="" />
            </div>
            <button className="feature1-card-btn">
              <p className="feature1-btn-text">See More</p>
            </button>
          </div>

          <div className="feature1-offerBoxDiv2">
            <div className="feature1-offerMargin">
              <p className="feature1-card-heading1">{data[1]?.heading}</p>
              <p className="feature1-desc-p1">{data[1].list2}</p>
            </div>
            <div className="feature1-offerimg2">
              <img src={data[1]?.Url} className="" />
            </div>
            <button className="feature1-card-btn">
              <p className="feature1-btn-text">See More</p>
            </button>
          </div>

          <div className="feature1-offerBoxDiv1">
            <div className="feature1-offerMargin">
              <p className="feature1-card-heading3">{data[2]?.heading}</p>
              <p className="feature1-desc-p3">{data[2].list2}</p>
            </div>
            <div className="feature1-offerimg3">
              <img src={data[2]?.Url} className="" />
            </div>
            <button className="feature1-card-btn">
              <p className="feature1-btn-text">See More</p>
            </button>
          </div>

        </div>
      </div>
    </>
  );
};

export default Offersection;
