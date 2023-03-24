import ReactDOM from "react-dom";
import React from "react";

import "./style.scss";
import pic1 from "src/images/feature5-time-manage.svg";
import pic2 from "src/images/feature5-compensation.svg";
import pic3 from "src/images/feature5-talent.svg";

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
      list2: "Salaries on Time, Error Free.",
    },
    {
      Url: pic3,
      heading: "TALENT MANAGEMENT",
      list2: "Create a Workplace You Can Call Home.",
    },
  ];
  return (
    <>
      <div className="feature5-11offerMain">
        <div className="feature5-11offerDiv">
          <div className="feature5-11offerHead">
            <p className="feature5-11offerPara"> Find out what else is on palm<span style={{color:'#1A938A'}}>.</span>hr</p>
          </div>
        </div>
        <div className="feature5-11offerBox">

          <div className="feature5-11offerBoxDiv1">
            <div className="feature5-11offerMargin">
              <p className="feature5-11card-heading">{data[0]?.heading}</p>
              <p className="feature5-11desc-p">{data[0].list2}</p>
            </div>
            <div className="feature5-11offerimg1">
              <img src={data[0]?.Url} className="" alt="TIME MANAGEMENT" />
            </div>
            <button className="feature5-11card-btn">
              <p className="feature5-11btn-text">See More</p>
            </button>
          </div>

          <div className="feature5-11offerBoxDiv2">
            <div className="feature5-11offerMargin">
              <p className="feature5-11card-heading1">{data[1]?.heading}</p>
              <p className="feature5-11desc-p1">{data[1].list2}</p>
            </div>
            <div className="feature5-11offerimg2">
              <img src={data[1]?.Url} className="" alt="COMPENSATION MANAGEMENT" />
            </div>
            <button className="feature5-11card-btn">
              <p className="feature5-11btn-text">See More</p>
            </button>
          </div>

          <div className="feature5-11offerBoxDiv1">
            <div className="feature5-11offerMargin">
              <p className="feature5-11card-heading3">{data[2]?.heading}</p>
              <p className="feature5-11desc-p3">{data[2].list2}</p>
            </div>
            <div className="feature5-11offerimg3">
              <img src={data[2]?.Url} className="" alt="TALENT MANAGEMENT" />
            </div>
            <button className="feature5-11card-btn">
              <p className="feature5-11btn-text">See More</p>
            </button>
          </div>

        </div>
      </div>
    </>
  );
};

export default Offersection;
