import React from "react";
import sub_text_icon from "../../Images/gre-aa.png";
import person from "../../Images/men-img.png";
import abtImg from "../../Images/about.png";
import trangle from "../../Images/org-tr.png";
import dots from "../../Images/ab-dot.png";
import "./AboutComponentDetails.css";


const AboutComponentDetails = () => {
  return (
    <div class="troo-da-about-section" id="troo-da-about-section"> 
      <div class="galaxy">
        <div class="mercury"></div>
      </div>
      <div class="vert-move ab-ss">
        <img src="images/ab-dot.png" alt="" />
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="about-text sub-about-pa">
              <div class="sub-title">
                <div class="text-sub">
                  <img class="up" src={sub_text_icon} alt="sub-text-icon" />
                  About us
                </div>
                <div class="title">
                  <h2>
                    <span>
                      We working for you to build your <br />
                    </span>
                    business fast
                  </h2>
                </div>
              </div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer too.
              </p>
              <ul>
                <li>
                  <strong>Our Mission</strong>
                  <span>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy.
                  </span>
                </li>
                <li>
                  <strong>Our Vission</strong>
                  <span>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy.
                  </span>
                </li>
              </ul>
              <div class="clinet-ss">
                <div class="cl-img">
                  <img src={person} alt="" />
                </div>
                <div class="cl-tx">
                  <strong>Navil Williams</strong>
                  <span>Founder and CEO</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="about-left-img">
              <img src={abtImg} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="vid-fig">
        <img src={trangle} alt="" />
      </div>
      <div class="vert-move ">
        <img src={dots} alt="" />
      </div>
    </div>
  );
};

export default AboutComponentDetails;
