import React from "react";

import pic1 from "src/images/feature2-time-manage.svg";
import pic2 from "src/images/feature2-compensation.svg";
import pic3 from "src/images/feature2-talent.svg";

import "./style.scss";

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
      <div className="feature2-offerMain">
        <div className="feature2-offerDiv">
          <div className="feature2-offerHead">
            <p className="feature2-offerPara"> Find out what else is on palm<span style={{color:'#1A938A'}}>.</span>hr</p>
          </div>
        </div>
        <div className="feature2-offerBox">

          <div className="feature2-offerBoxDiv1">
            <div className="feature2-offerMargin">
              <p className="feature2-card-heading">{data[0]?.heading}</p>
              <p className="feature2-desc-p">{data[0].list2}</p>
            </div>
            <div className="feature2-offerimg1">
              <img src={data[0]?.Url} className="feature2-" />
            </div>
            <button className="feature2-card-btn">
              <p className="feature2-btn-text">See More</p>
            </button>
          </div>

          <div className="feature2-offerBoxDiv2">
            <div className="feature2-offerMargin">
              <p className="feature2-card-heading1">{data[1]?.heading}</p>
              <p className="feature2-desc-p1">{data[1].list2}</p>
            </div>
            <div className="feature2-offerimg2">
              <img src={data[1]?.Url} className="" />
            </div>
            <button className="feature2-card-btn">
              <p className="feature2-btn-text">See More</p>
            </button>
          </div>

          <div className="feature2-offerBoxDiv1">
            <div className="feature2-offerMargin">
              <p className="feature2-card-heading3">{data[2]?.heading}</p>
              <p className="feature2-desc-p3">{data[2].list2}</p>
            </div>
            <div className="feature2-offerimg3">
              <img src={data[2]?.Url} className="" />
            </div>
            <button className="feature2-card-btn">
              <p className="feature2-btn-text">See More</p>
            </button>
          </div>

        </div>
      </div>
    </>
  );
};

export default Offersection;
