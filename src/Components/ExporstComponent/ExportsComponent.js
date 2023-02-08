import React from "react";
import "./ExportsComponent.css";
import cross from "../../Images/crose.png"
import orange_arrow from "../../Images/org-arrow.png"
import sub_text_icon from "../../Images/gre-aa.png"
import { Link } from "react-scroll";
import export_1 from "../../Images/computer-work-man.png"
import export_2 from "../../Images/portrait.png"
import export_3 from "../../Images/professional-clothing.png"
import export_4 from "../../Images/business-team-executive.png"

import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
  } from "react-icons/fa";
  import { TiSocialTwitter } from "react-icons/ti";



const ExportsComponent = () => {
  return (
    <div class="troo-da-expert-section" id="troo-da-expert-section">
      <div class="spinner-wrap">
        <div class="spinner-item"></div>
        <div class="spinner-item spinner-item--2"></div>
        <div class="spinner-item spinner-item--3"></div>
      </div>
      <div class="zoom-in-zoom-out">
        <img src={cross} alt="cross_icon" />
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="sub-title">
              <div class="text-sub">
                <img class="up" src={sub_text_icon} alt="sub_text_icon" />
                Our Expert
              </div>
              <div class="title">
                <h2>
                  <span>
                    Meet our experienced team
                    <br />
                  </span>
                  member.
                </h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3">
              <div class="team-member">
                <div class="picture">
                  <img src={export_1} alt="export_1" />
                  <div class="mask">
                    <div class="team-member-icons">
                      <ul>
                        <li>
                          <Link to="">
                            <FaFacebookF className="s-icon"/>
                          </Link>
                        </li>
                        <li>
                          <Link to="">
                            <FaInstagram className="s-icon"/>
                          </Link>
                        </li>
                        <li>
                          <Link to="">
                            <FaLinkedinIn className="s-icon"/>
                          </Link>
                        </li>
                        <li>
                          <Link to="">
                            <TiSocialTwitter className="s-icon"/>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <strong>David Jonson</strong>
                  <span>Project Manager</span>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="team-member">
                <div class="picture">
                  <img src={export_2} alt="export_2" />
                  <div class="mask">
                    <div class="team-member-icons">
                    <ul>
                        <li>
                          <Link to="">
                            <FaFacebookF className="s-icon"/>
                          </Link>
                        </li>
                        <li>
                          <Link to="">
                            <FaInstagram className="s-icon"/>
                          </Link>
                        </li>
                        <li>
                          <Link to="">
                            <FaLinkedinIn className="s-icon"/>
                          </Link>
                        </li>
                        <li>
                          <Link to="">
                            <TiSocialTwitter className="s-icon"/>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <strong>Alexa Martin</strong>
                  <span>Product Manager</span>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="team-member">
                <div class="picture">
                  <img src={export_3} alt="export_3" />
                  <div class="mask">
                    <div class="team-member-icons">
                    <ul>
                        <li>
                          <Link to="">
                            <FaFacebookF className="s-icon"/>
                          </Link>
                        </li>
                        <li>
                          <Link to="">
                            <FaInstagram className="s-icon"/>
                          </Link>
                        </li>
                        <li>
                          <Link to="">
                            <FaLinkedinIn className="s-icon"/>
                          </Link>
                        </li>
                        <li>
                          <Link to="">
                            <TiSocialTwitter className="s-icon"/>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <strong>Nonathan Maxwell</strong>
                  <span>Finance Manager</span>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="team-member">
                <div class="picture">
                  <img src={export_4} alt="export_4" />
                  <div class="mask">
                    <div class="team-member-icons">
                    <ul>
                        <li>
                          <Link to="">
                            <FaFacebookF className="s-icon"/>
                          </Link>
                        </li>
                        <li>
                          <Link to="">
                            <FaInstagram className="s-icon"/>
                          </Link>
                        </li>
                        <li>
                          <Link to="">
                            <FaLinkedinIn className="s-icon"/>
                          </Link>
                        </li>
                        <li>
                          <Link to="">
                            <TiSocialTwitter className="s-icon"/>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <strong>Lily Denialson </strong>
                  <span>Finance Adviser</span>
                </div>
              </div>
            </div>
            <div class="col-md-12">
              <div class="case-btn">
                <div class="get-col">
                  <Link to="">View All Member</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="vert-move">
        <img src={orange_arrow} alt="orange_arrow" />
      </div>
    </div>
  );
};

export default ExportsComponent;
