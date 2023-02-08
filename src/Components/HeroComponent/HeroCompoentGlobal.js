import React, { Component } from "react";
import cr from "../../Images/cr.png";
import cr_2 from "../../Images/cr-2.png";
import { Link } from "react-router-dom";

export default class HeroCompoentGlobal extends Component {
  render() {
    return (
      <div class="troo-da-sub-hero-section" id="troo-da-sub-hero-section">
        <div class="cricle-one">
          <img src={cr} alt="cr" />
        </div>
        <div class="cricle-one">
          <img src={cr_2} alt="cr-2" />
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="sub-page-title">
                <h2>{this.props.heading}</h2>
                <ul class="breadcrumb">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/">About</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
