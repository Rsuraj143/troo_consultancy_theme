import React from "react";
import "./ServiceComponent.css";
import sub_text_icon from "../../Images/gre-aa.png";
import { Link } from "react-scroll";

const ServiceComponent = () => {
  return (
    <div class="troo-da-services-section" id="troo-da-services-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
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
          <div class="row">
            <div class="col-md-4">
              <div class="services-colum">
                <span>01</span>
                <h3>Financial Planning</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since.
                </p>
                <div class="get-col">
                  <Link to="">Read More</Link>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="services-colum">
                <span>02</span>
                <h3>Quality Resourcing</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since.
                </p>
                <div class="get-col">
                  <Link to="">Read More</Link>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="services-colum">
                <span>03</span>
                <h3>Business Services</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since.
                </p>
                <div class="get-col">
                  <Link to="">Read More</Link>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <div class="services-colum">
                <span>04</span>
                <h3>Travel And Aviation</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since.
                </p>
                <div class="get-col">
                  <Link to="">Read More</Link>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="services-colum">
                <span>05</span>
                <h3>Software & Research</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since.
                </p>
                <div class="get-col">
                  <Link to="">Read More</Link>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="services-colum">
                <span>06</span>
                <h3>Healthcare Services</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since.
                </p>
                <div class="get-col">
                  <Link to="">Read More</Link>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-12">
            <div class="get-col service-btn">
              <Link to="">View All Services</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceComponent;
