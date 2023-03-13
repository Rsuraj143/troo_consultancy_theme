import React from "react";
import "./TestimonialComponent.css";

import sub_text_icon from "../../Images/gre-aa.png";
import testi_img_1 from "../../Images/business-team.png"
import testi_img_2 from "../../Images/hand-man.png"
import testi_img_3 from "../../Images/computer-work-hand.png"
import { FaStar } from 'react-icons/fa';

const TestimonialComponent = () => {
  return (
    <>
      <div class="troo-da-testimonial-section" id="troo-da-testimonial-section">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="sub-title">
                <div class="text-sub">
                  <img class="up" src={sub_text_icon} alt="sub_text_icon" />
                  Testimonial
                </div>
                <div class="title">
                  <h2>
                    <span>
                      Our customers love <br />
                    </span>
                    what we do.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="testimonial-sub">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div class="test-client">
                <div class="client-deatils">
                  <div class="client-img">
                    <img src={testi_img_1} alt="testi-img-1" />
                  </div>
                  <div class="client-con">
                    <strong>Jessca Arow</strong>
                    <span>abc company, CEO</span>
                    <FaStar className="fa_star"/>
                    <FaStar className="fa_star"/>
                    <FaStar className="fa_star"/>
                    <FaStar className="fa_star"/>
                  </div>
                </div>
                <p>
                  Lorem Ipsum is simply and dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been and the industry's
                  standard dummy Lorem and Ipsum.
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="test-client">
                <div class="client-deatils">
                  <div class="client-img">
                  <img src={testi_img_2} alt="testi-img-2" />
                  </div>
                  <div class="client-con">
                    <strong>Robert James</strong>
                    <span>xyz, Finance Manager</span>
                    <FaStar className="fa_star"/>
                    <FaStar className="fa_star"/>
                    <FaStar className="fa_star"/>
                    <FaStar className="fa_star"/>
                  </div>
                </div>
                <p>
                  Lorem Ipsum is simply and dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been and the industry's
                  standard dummy Lorem and Ipsum.
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="test-client">
                <div class="client-deatils">
                  <div class="client-img">
                  <img src={testi_img_3} alt="testi-img-3" />
                  </div>
                  <div class="client-con">
                    <strong>Kevin Martin</strong>
                    <span>abc Company, MD</span>
                    <FaStar className="fa_star"/>
                    <FaStar className="fa_star"/>
                    <FaStar className="fa_star"/>
                    <FaStar className="fa_star"/>
                  </div>
                </div>
                <p>
                  Lorem Ipsum is simply and dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been and the industry's
                  standard dummy Lorem and Ipsum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialComponent;
