import React from "react";
import "./Footer.css";
import text_sub_icon from "../../Images/gre-aa.png";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";

const Footer = () => {
  return (
    <div>
      <section className="consultations">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="sub-title">
                <div className="text-sub">
                  <img className="up" src={text_sub_icon} alt="text_sub_icon" />
                  Let’s talk with us
                </div>
                <div className="title">
                  <h2>
                    Get Free <span>Consultations</span> ! <br />
                    We're Ready to Work Together
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="case-btn">
                <div className="get-col">
                  <Link to="">Let’s talk today</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="troo-da-footer" className="troo-da-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="footer-text">
                <h5>Address</h5>
                <p>Lerchenfelder Street 74, Korbin, Union Austria, 8542</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="footer-text cll-ss">
                <h5>Contact</h5>
                <div className="call-dd">
                  <div className="call-deails">
                    <span>Call us directly</span>
                    <strong>
                      <Link to="">
                        +43 0660 782 57 89
                      </Link>
                    </strong>
                  </div>
                  <div className="mail-desails">
                    <span>Email us directly</span>
                    <strong>
                      <Link to="">
                        info@troothems@email.com
                      </Link>
                    </strong>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="footer-text servi-link">
                <h5>Services</h5>
                <ul>
                  <li>
                    <Link to="">Contact Us</Link>
                  </li>
                  <li>
                    <Link to=""> FAQ</Link>
                  </li>
                  <li>
                    <Link to=""> Report A Bug</Link>
                  </li>
                  <li>
                    <Link to=""> Careers</Link>
                  </li>
                  <li>
                    <Link to=""> About Us</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="bottom-text">
                <p>
                  © 2022 Consulting Theme by <span>Troo Theme</span>. All rights
                  reserved
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="socail-con">
                <div className="socal-icon">
                  <ul>
                    <li>
                      <Link to="">
                      <FaFacebookF className="s_icon" />
                        <span>Facebook</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                      <FaInstagram className="s_icon" />
                        <span>Instagram</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                      <FaLinkedinIn className="s_icon" />
                        <span>Linkedin</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                      <TiSocialTwitter className="s_icon" />
                        <span>Twitter</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
