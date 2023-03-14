import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { BiPhone } from "react-icons/bi";
import { FiMail } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
import weblogo from "../../Images/Logo.png";
import { MenuData } from "./MenuData";
import Navmenu from "./Navmenu";

const Header = () => {
  return (
    <div className="header">
      <section id="troo-da-header" className="troo-da-header">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="addres-deatls">
                <div className="add-bx">
                  <Link to="">
                    <BiPhone />
                    <span> +44 123 456 7890</span>
                  </Link>
                </div>
                <div className="add-bx">
                  <Link to="">
                    <FiMail />
                    <span>example@email.com</span>
                  </Link>
                </div>
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
          <nav className="navbar navbar-expand-lg">
            <Link className="navbar-brand" to="/">
              <img src={weblogo} alt="weblogo" />
            </Link>
            <div className="collapse navbar-collapse" id="navbarScroll">
              <ul className="navbar-nav my-2 my-lg-0 navbar-nav-scroll">
                {MenuData.map((item, index) => {
                  return <Navmenu item={item} key={index} />;
                })}
              </ul>
              <div className="get-col">
                <Link to="/get-quote">get a quote</Link>
              </div>
            </div>
          </nav>
        </div>
      </section>
    </div>
  );
};

export default Header;
