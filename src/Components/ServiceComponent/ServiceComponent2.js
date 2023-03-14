import React from "react";
import { Link } from "react-router-dom";
import "./ServiceComponent2.css";
import sub_text_icon from "../../Images/gre-aa.png";
import service1 from "../../Images/service-1.png"
import service2 from "../../Images/service-2.png"
import service3 from "../../Images/service-3.png"
import service4 from "../../Images/service-4.png"

const ServiceComponent2 = () => {
  return (
    <div class="troo-da-services-section2" id="troo-da-services-section2">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="sub-title">
              <div class="text-sub">
                <img class="up" src={sub_text_icon} alt="sub_text_icon" />
                Our Services
              </div>
              <div class="title">
                <h2>
                  <span>
                    We always try to understand <br />
                  </span>
                  users expectation.
                </h2>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="ser-tt">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard.
              </p>
            </div>
          </div>
        </div>
        <div class="row  service-col">
          <div class="col-md-6">
            <div class="service-img financ">
              <img src={service1} alt="service1" />
            </div>
          </div>
          <div class="col-md-6">
            <div class="services-colum">
              <span>01</span>
              <h3>Financial Planning</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                ever since.Lorem Ipsum is simply dummy of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since.
              </p>
              <div class="get-col">
                <Link to="/">Read More</Link>
              </div>
            </div>
          </div>
        </div>

        <div class="row service-col">
          <div class="col-md-6">
            <div class="service-img">
              <img src={service2} alt="service2" />
            </div>
          </div>
          <div class="col-md-6">
            <div class="services-colum">
              <span>02</span>
              <h3>Quality Resourcing</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since.
              </p>
              <div class="get-col">
                <Link to="/">Read More</Link>
              </div>
            </div>
          </div>
        </div>

        <div class="row service-col">
          <div class="col-md-6">
            <div class="service-img">
              <img src={service3} alt="service3" />
            </div>
          </div>

          <div class="col-md-6">
            <div class="services-colum">
              <span>03</span>
              <h3>Business Services</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since.
              </p>
              <div class="get-col">
                <Link to="/">Read More</Link>
              </div>
            </div>
          </div>
        </div>
        <div class="row service-col">
          <div class="col-md-6">
            <div class="service-img">
              <img src={service4} alt="service4" />
            </div>
          </div>
          <div class="col-md-6">
            <div class="services-colum">
              <span>04</span>
              <h3>Travel And Aviation</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since.
              </p>
              <div class="get-col">
                <Link to="/">Read More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceComponent2;
