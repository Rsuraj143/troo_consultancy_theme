import React from "react";
import "./BrandLogo.css";
import nvidia from "../../Images/nvidia.png"
import paypal from "../../Images/paypal.png"
import intel from "../../Images/intel.png"
import Citibank from "../../Images/Citibank.png"
import google from "../../Images/google.png"
import walmart from "../../Images/walmart.png"


const BrandLogo = () => {
  return (
    <div class="troo-da-brand-logo-section" id="troo-da-brand-logo-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="brand-logo">
              <div class="row">
                <div class="col-md-2">
                  <div class="img-ss">
                    <img src={nvidia} alt="nvidia" />
                  </div>
                </div>
                <div class="col-md-2">
                  <div class="img-ss">
                    <img src={paypal} alt="paypal"/>
                  </div>
                </div>
                <div class="col-md-2">
                  <div class="img-ss">
                    <img src={intel} alt="intel" />
                  </div>
                </div>
                <div class="col-md-2">
                  <div class="img-ss">
                    <img src={Citibank} alt="Citibank"/>
                  </div>
                </div>
                <div class="col-md-2">
                  <div class="img-ss">
                    <img src={google} alt="google"/>
                  </div>
                </div>
                <div class="col-md-2">
                  <div class="img-ss">
                    <img src={walmart} alt="walmart" />
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

export default BrandLogo;
