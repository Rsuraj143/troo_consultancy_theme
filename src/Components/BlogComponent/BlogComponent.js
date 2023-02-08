import React from "react";
import "./BlogComponent.css";
import sub_text_icon from "../../Images/gre-aa.png"

import blog_1 from "../../Images/blog-1.png"
import blog_2 from "../../Images/blog-2.png"
import blog_3 from "../../Images/blog-3.png"
import blog_person_1 from "../../Images/blog-persone-1.png"
import blog_person_2 from "../../Images/blog-persone-2.png"
import { Link } from "react-scroll";



const BlogComponent = () => {
  return (
    <div  className="troo-da-blogs-section" id="troo-da-blogs-section">
      <div  className="container">
        <div  className="row">
          <div  className="col-md-12">
            <div  className="sub-title">
              <div  className="text-sub">
                <img  className="up" src={sub_text_icon} alt="sub_text" />
                Our Blog Post
              </div>
              <div  className="title">
                <h2>
                  <span>
                    View the Latest News in <br />
                  </span>
                  Consultancy.
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div  className="row">
          <div  className="col-md-4">
            <div  className="blog-content">
              <div  className="bl-img">
                <img src={blog_1} alt="blog-1" />
                <div  className="date-ss">08 Aug 2022</div>
              </div>
              <div  className="blog-text">
                <h3>New Birmingham office for Accenture</h3>
                <div  className="blog-client">
                  <div  className="blog-img">
                    <img src={blog_person_1} alt="blog_proson_1" />
                    <strong> By Admin</strong>
                  </div>
                  <div  className="blog-con">
                    <span>Investment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div  className="col-md-4">
            <div  className="blog-content">
              <div  className="bl-img">
                <img src={blog_2} alt="blog-2"/>
                <div  className="date-ss">07 Aug 2022</div>
              </div>
              <div  className="blog-text">
                <h3>3Cloud acquires Microsoft data specialist BlueGranite</h3>
                <div  className="blog-client">
                  <div  className="blog-img">
                    <img src={blog_person_2} alt="blog_proson_2" />
                    <strong> By Admin</strong>
                  </div>
                  <div  className="blog-con">
                    <span>Marketing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div  className="col-md-4">
            <div  className="blog-content">
              <div  className="bl-img">
                <img src={blog_3} alt="blog-3" />
                <div  className="date-ss">06 Aug 2022</div>
              </div>
              <div  className="blog-text">
                <h3>Flexible working: The rights of employers and employees</h3>
                <div  className="blog-client">
                  <div  className="blog-img">
                    <img src={blog_person_1} alt="blog_proson_1" />
                    <strong> By Admin</strong>
                  </div>
                  <div  className="blog-con">
                    <span>Sales</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div  className="col-md-12">
            <div  className="case-btn">
              <div  className="get-col">
                <Link to="">Read all blogs</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogComponent;
