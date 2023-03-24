import React from "react";

import fimg from "src/images/Slider1.svg";
import simg from "src/images/Slider2.svg";
import timg from "src/images/Slider3.svg";
import fourimg from "src/images/Slider4.svg";
import fiveimg from "src/images/Slider5.svg";
import siximg from "src/images/Slider6.svg";
import sevenimg from "src/images/Slider7.svg";

import fimgMbl from "src/images/Slider1.svg";
import simgMbl from "src/images/Slider2-mbl.svg";
import fiveimgMbl from "src/images/Slider5-mbl.svg";
import sevenimgMbl from "src/images/Slider7-mbl.svg";
import eightimgMbl from "src/images/Slider8-mbl.svg";

import ZID from "src/images/ZID.svg";
import "./style.scss";

const Section3 = () => {
  return (
    <div className="slider-p">
      <p className="slider-pp">
        Trusted by Thousands of Employees Across the Middle East
      </p>
      <div class="marquee">
        <div class="marquee-content">
          <div class="marquee-item">
            <img className="opac" src={fimg} alt="Slider Image" />
          </div>
          <div class="marquee-item">
            <img className="opac" src={simg} alt="Slider Image" />
          </div>
          <div class="marquee-item">
            <img className="opac" src={timg} alt="Slider Image" />
          </div>
          <div class="marquee-item">
            <img className="opac" src={fourimg} alt="Slider Image" />
          </div>
          <div class="marquee-item">
            <img className="opac" src={fiveimg} alt="Slider Image" />
          </div>
          <div class="marquee-item">
            <img className="opac" src={siximg} alt="Slider Image" />
          </div>
          <div class="marquee-item">
            <img className="opac" src={sevenimg} alt="Slider Image" />
          </div>
          <div class="marquee-item">
            <img className="opac" src={fimg} alt="Slider Image" />
          </div>
          <div class="marquee-item">
            <img className="opac" src={simg} alt="Slider Image" />
          </div>
          <div class="marquee-item">
            <img className="opac" src={timg} alt="Slider Image" />
          </div>
          <div class="marquee-item">
            <img className="opac" src={fourimg} alt="Slider Image" />
          </div>
          <div class="marquee-item">
            <img className="opac" src={fiveimg} alt="Slider Image" />
          </div>
          <div class="marquee-item">
            <img className="opac" src={siximg} alt="Slider Image" />
          </div>
        </div>
      </div>
      <div className="sm-img">
        <div className="sm-sec">
          <img src={fiveimgMbl} alt="Slider Image" />
          <img src={ZID} alt="Slider Image" />
        </div>
        <div className="hala-sm-sec">
          <img src={fourimg} className="four-img" alt="Slider Image" />

          <img src={timg} alt="Slider Image" />
        </div>
        <div className="sm-sec">
          <img src={simgMbl} alt="Slider Image" />
          <img src={fimgMbl} alt="Slider Image" />
        </div>
        <div className="sm-sec">
          <img src={sevenimgMbl} alt="Slider Image" />
          <img src={eightimgMbl} alt="Slider Image" />
        </div>
      </div>
    </div>
  );
};

export default Section3;
