import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { BiPhone } from "react-icons/bi";
import { FiMail } from "react-icons/fi";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
import weblogo from "../../Images/Logo.png";

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
            {/* <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarScroll"
              aria-controls="navbarScroll"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon">
                <img src="images/Humberders.png" alt="" />
              </span>
            </button> */}
            <div className="collapse navbar-collapse" id="navbarScroll">
              <ul className="navbar-nav my-2 my-lg-0 navbar-nav-scroll">
                <li className="nav-item">
                  <Link className="nav-link active" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About Us
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="/service"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Services
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/consulting-services-pages"
                      >
                        Consulting Services pages
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/consulting-services-pages-two"
                      >
                        Consulting Services pages Two
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/consulting-services-details"
                      >
                        Consulting Services Details
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="/pages"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Pages
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link className="dropdown-item" to="/case-studies">
                        Case Studies
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/portfolio">
                        Portfolio
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/meet-team-member">
                        Meet team member
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/clients-review">
                        Clients Review
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/Faq">
                        Faq
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/404">
                        404
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/coming-soon">
                        Coming Soon
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="/blogs"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Blogs
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link className="dropdown-item" to="/latest-blogs.html">
                        Latest Blogs
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/blog-detail.html">
                        Blog Detail
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact Us
                  </Link>
                </li>
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
