import React from "react";
import tri_icon from "../../Images/tri.png"
import sub_text_icon from "../../Images/gre-aa.png"
import org_tr from "../../Images/org-tr.png"
import cross from "../../Images/crose.png"
import { Link } from "react-scroll";
import faq_img from "../../Images/faq.png"
import "./FaqComponent.css"

const FaqComponent = () => {
  return (
    <div class="troo-da-faqs-section" id="troo-da-faqs-section">
      <div class="pot">
        <img src={tri_icon} alt="tri_icon" />
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="sub-title">
              <div class="text-sub">
                <img class="up" src={sub_text_icon} alt="sub_text_icon" />
                FAQs
              </div>
              <div class="title">
                <h2>
                  <span>Have you any </span> question?
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
                <Link href="#">Contact us</Link>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Why do I need a business consulting service?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting. Lorem Ipsum has been the industry's standard
                    dummy text ever since.simply dummy text of the printing and
                    typesetting.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    How much does it cost to hire a business consultant?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting. Lorem Ipsum has been the industry's standard
                    dummy text ever since.simply dummy text of the printing and
                    typesetting.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    What industries or businesses do you specialize in?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting. Lorem Ipsum has been the industry's standard
                    dummy text ever since.simply dummy text of the printing and
                    typesetting.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingfour">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsefour"
                    aria-expanded="false"
                    aria-controls="collapsefour"
                  >
                    How do you price your services?
                  </button>
                </h2>
                <div
                  id="collapsefour"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingfour"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting. Lorem Ipsum has been the industry's standard
                    dummy text ever since.simply dummy text of the printing and
                    typesetting.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingfive">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsefive"
                    aria-expanded="false"
                    aria-controls="collapsefive"
                  >
                    What are the terms of working with a business consultant?
                  </button>
                </h2>
                <div
                  id="collapsefive"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingfive"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting. Lorem Ipsum has been the industry's standard
                    dummy text ever since.simply dummy text of the printing and
                    typesetting.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="zoom-in-zoom-out">
              <img src={cross} alt="cross_icon" />
            </div>
            <div class="vert-move">
              <img src={faq_img} alt="faq_img" />
            </div>
          </div>
        </div>
      </div>
      <div class="vid-fig">
        <img src={org_tr} alt="org-tr" />
      </div>
    </div>
  );
};

export default FaqComponent;
