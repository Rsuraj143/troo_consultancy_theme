import React from "react";
import "./CounterComponent.css"
import sub_text_icon from "../../Images/gre-aa.png"

import smil_normal from "../../Images/smaile-Icon-blu.png"
import smil_hover from "../../Images/smaile-Icon.png"
import file_normal from "../../Images/file-Icon.png"
import file_hover from "../../Images/file-Icon-org.png"
import thumb_normal from "../../Images/tamb-Icon.png"
import thumb_hover from "../../Images/tamb-Icon-org.png"
import award_normal from "../../Images/award-Icon.png"
import award_hover from "../../Images/award-Icon-org.png"

const CounterComponent = () => {
  return (
    <div class="troo-da-counter-section" id="troo-da-counter-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="sub-title">
              <div class="text-sub">
                <img class="up" src={sub_text_icon} alt="sub_icon" />
                Our Progress
              </div>
              <div class="title">
                <h2>
                  <span>
                    Doing the right thing, at the
                    <br />
                  </span>
                  right time.
                </h2>
              </div>
            </div>
          </div>
          <div class="col-md-12">
            <div class="row">
              <div class="col-md-3">
                <div class="counter-box">
                  <div class="img-conter">
                    <img class="normal-img" src={smil_normal} alt="smile_normal" />
                    <img class="hover-img" src={smil_hover} alt="smile_hover" />
                  </div>
                  <div class="con-text">
                    <span class="counter">25</span>
                    <strong>K +</strong>
                    <p>Happy Clients</p>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="counter-box">
                  <div class="img-conter">
                    <img class="normal-img" src={file_normal} alt="file_normal" />
                    <img class="hover-img" src={file_hover} alt="file_hover" />
                  </div>
                  <div class="con-text">
                    <span class="counter">366 </span>
                    <strong>+</strong>
                    <p>Project Done</p>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="counter-box">
                  <div class="img-conter">
                    <img class="normal-img" src={thumb_normal} alt="thumb_normal" />
                    <img class="hover-img" src={thumb_hover} alt="thumb_hover" />
                  </div>
                  <div class="con-text">
                    <span class="counter">152 </span>
                    <strong>+</strong>
                    <p>Business Partner</p>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="counter-box">
                  <div class="img-conter">
                    <img class="normal-img" src={award_normal} alt="award_normal" />
                    <img class="hover-img" src={award_hover} alt="award_hover" />
                  </div>
                  <div class="con-text">
                    <span class="counter">82 </span>
                    <strong>+</strong>
                    <p>Awards Winning</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterComponent;
