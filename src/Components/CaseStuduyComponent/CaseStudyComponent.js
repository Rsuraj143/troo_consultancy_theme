import React from "react";
import "./CaseStudyComponent.css";
import { Link } from "react-scroll";
import sub_text_icon from "../../Images/gre-aa.png";
import cast_study_img_1 from "../../Images/man-working.png"
import cast_study_img_2 from "../../Images/businessman.png"
import cast_study_img_3 from "../../Images/busy-career.png"
import cast_study_img_4 from "../../Images/mobile-hand.png"
import cast_study_img_5 from "../../Images/apple-table.png"
import cast_study_img_6 from "../../Images/work-hand.png"

const CaseStudyComponent = () => {
  return (
    <div class="troo-da-case-studies-section"
    id="troo-da-case-studies-section">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="sub-title">
              <div class="text-sub">
                <img class="up" src={sub_text_icon} alt="sub_text_icon" />
                Case Studies
              </div>
              <div class="title">
                <h2>
                  <span>Our best </span>projects.
                </h2>
              </div>
            </div>
          </div>
          <div class="col-md-5">
            <div class="case-text">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard.
              </p>
            </div>
          </div>
          <div class="col-md-3">
            <div class="case-btn">
              <div class="get-col">
                <Link href="#">View All Project</Link>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="project-colum">
              <img src={cast_study_img_1} alt="case_study_img_1" />
              <div class="team-deatils">
                <p>Start up</p>
                <span>Information Technology</span>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="project-colum">
              <img src={cast_study_img_2} alt="cast_study_img_2" />
              <div class="team-deatils">
                <p>Start up</p>
                <span>Information Technology</span>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="project-colum">
              <img src={cast_study_img_3} alt="cast_study_img_3"/>
              <div class="team-deatils">
                <p>Start up</p>
                <span>Information Technology</span>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="project-colum mobile-hd">
              <img src={cast_study_img_4} alt="cast_study_img_4" />
              <div class="team-deatils">
                <p>Start up</p>
                <span>Information Technology</span>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="project-colum">
              <img src={cast_study_img_5} alt="cast_study_img_5" />
              <div class="team-deatils">
                <p>Start up</p>
                <span>Information Technology</span>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="project-colum work-hd">
              <img src={cast_study_img_6} alt="cast_study_img_6" />
              <div class="team-deatils">
                <p>Start up</p>
                <span>Information Technology</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyComponent;
