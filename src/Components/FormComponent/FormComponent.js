import React from "react";
import "./FormComponent.css";
import line_one from "../../Images/line-one.png";
import sub_text_icon from "../../Images/gre-aa.png";
import cross from "../../Images/crose.png";

const FormComponent = () => {
  return (
    <div class="troo-da-form-section" id="troo-da-form-section">
      <div class="car-line">
        <img class="ineer1" src={line_one} alt="line_one" />
      </div>
      <div class="galaxy">
        <div class="mercury"></div>
        <div class="orbit-mercury"></div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-5">
            <div class="sub-title">
              <div class="text-sub">
                <img class="up" src={sub_text_icon} alt="sub_text_icon" />
                Grow your business with us
              </div>
              <div class="title">
                <h2>
                  <span> We are Here to Help You & Your </span> Business.
                </h2>
              </div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry
              </p>
            </div>
          </div>
          <div class="col-md-7">
            <div class="form-section">
              <form class="row">
                <div class="col-md-6">
                  <input
                    type="FullName"
                    class="form-control"
                    id="inputFullName"
                    placeholder="Full Name"
                  />
                </div>
                <div class="col-md-6">
                  <input
                    type="EmailAddress"
                    class="form-control"
                    id="inputEmailAddress"
                    placeholder="Email Address"
                  />
                </div>
                <div class="col-md-6">
                  <input
                    type="Phone"
                    class="form-control"
                    id="inputPhone"
                    placeholder="Phone No"
                  />
                </div>
                <div class="col-md-6">
                  <input
                    type="EmailSubject"
                    class="form-control"
                    id="inputSubject"
                    placeholder="Subject"
                  />
                </div>
                <div class="col-md-12">
                  <textarea placeholder="Write a message....."> </textarea>
                </div>
                <div class="col-12">
                  <button type="submit" class="btn btn-primary">
                    Submit form
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="zoom-in-zoom-out">
          <img src={cross} alt="cross_icon" />
        </div>
      </div>
    </div>
  );
};

export default FormComponent;
