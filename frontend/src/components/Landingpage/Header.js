import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
function Header() {
  return (
    <div>
      {/* <div className="preloader">
        <img
          src="assets/images/loader.png"
          className="preloader__image"
          alt=""
        />
      </div> */}
      {/* /.preloader */}
      <div className="page-wrapper">
        <div className="site-header__header-one-wrap clearfix">
          <div className="header_top_one">
            <div className="container">
              <div className="header_top_one_inner clearfix">
                <div className="header_top_one_inner_left float-left">
                  <div className="header_social_1">
                    <ul className="list-unstyled">
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-square" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-pinterest" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="header_top_one_inner_left_text">
                    <p>Welcome to factory &amp; industry business</p>
                  </div>
                </div>
                <div className="header_top_one_inner_right float-right">
                  <div className="header_topmenu_1">
                    <ul className="list-unstyled">
                      <li>
                        <a href="mailto:needhelp@company.com">

                        <i class="fa-regular fa-envelope"></i>
                        <span/>
                          needhelp@company.com                             
                        </a>
                      </li>
                      <li>
                        <a href="tel:92-666-888-0000">
                        <i class="fa-solid fa-phone "></i>
                          <span  />
                          92 666 888 0000
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <header className="main-nav__header-one">
            <div className="container">
              <Navbar />
            </div>
          </header>
        </div>
      </div>
    </div>
  );
}

export default Header;
