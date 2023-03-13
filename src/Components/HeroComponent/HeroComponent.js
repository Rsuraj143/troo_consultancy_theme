import React from "react";
import "./HeroComponent.css";
import circle_one from "../../Images/cr.png";
import circle_two from "../../Images/cr-2.png"
import frame from "../../Images/Frame.png"
import arrow from "../../Images/arrow.png"
import triangle from "../../Images/triangle.png"
import { Link } from "react-scroll";
import sun_img from "../../Images/sub-Image.png"

const HeroComponent = () => {
  return (
    <div class="troo-da-hero-section" id="troo-da-hero-section">
      <div class="cricle-one">
        <img src={circle_one} alt="circle-one" />
      </div>
      <div class="cricle-one">
        <img src={circle_two} alt="circle-two" />
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="text-col">
              <div class="up">
                <img src={frame} alt="frame" />
              </div>
              <div class="text">Grow up your company</div>
              <h1>
                Branding, Digital Marketing
                <span class="hero-sub-title"> and Business Solutions</span>
              </h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                <br />
                industry. Lorem Ipsum has been the industry dummy text of the
                <br />
                printing and typesetting industry. Lorem Ipsum has
              </p>
              <img class="arr-img" src={arrow} alt="arrow" />
              <div class="get-col">
                <Link href="#">get a quote</Link>
              </div>

              <button
                type="button"
                class="vide-btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                <img src={triangle} alt="triangle" /> <span>Watch video</span>
              </button>
              {/* video section */}
              <div
                class="modal fade"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <video controls>
                        <source src="movie.mp4" type="video/mp4" />
                        <source src="movie.ogg" type="video/ogg" />
                      </video>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div class="col-md-6">
            <div class="vert-move">
              <img src={sun_img} alt="sub-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
