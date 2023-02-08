import React from "react";
import "./AboutComponent.css"
import about_img from "../../Images/about-image.png"
import sub_text_icon from "../../Images/gre-aa.png"
import arrow_icon from "../../Images/Icon.png"
import { Link } from "react-scroll";
import man_img from "../../Images/men-img.png"

const AboutComponent = () => {
  return (
    <div class="troo-da-about-section" id="troo-da-about-section">
      <div class="galaxy">
        <div class="mercury"></div>
        <div class="orbit-mercury"></div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="about-left-img">
              <img src={about_img} alt="about_img" />
            </div>
          </div>
          <div class="col-md-6">
            <div class="about-text">
              <div class="sub-title">
                <div class="text-sub">
                  <img class="up" src={sub_text_icon} alt="sub_text_icon" />
                  Little about usy
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
                  <img src={arrow_icon} alt="arrow_icon" />
                  <span>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy.
                  </span>
                </li>
                <li>
                  <img src={arrow_icon} alt="arrow_icon"/>
                  <span>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy.
                  </span>
                </li>
                <li>
                  <img src={arrow_icon} alt="arrow_icon" />
                  <span>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy.
                  </span>
                </li>
              </ul>
              <div class="get-col">
                <Link to="">Learn More</Link>
              </div>
              <div class="clinet-ss">
                <div class="cl-img">
                  <img src={man_img} alt="man_img"/>
                </div>
                <div class="cl-tx">
                  <strong>Navil Williams</strong>
                  <span>Founder and CEO</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="arrowAnim">
        <div class="arrowSliding">
          <div class="arrow"></div>
        </div>
        <div class="arrowSliding delay1">
          <div class="arrow"></div>
        </div>
        <div class="arrowSliding delay2">
          <div class="arrow"></div>
        </div>
        <div class="arrowSliding delay3">
          <div class="arrow"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
