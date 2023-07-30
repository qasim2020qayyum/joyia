import React from "react";
import './footer.css'

function Footer() {
  return (
    <div>
      <footer
        className="site-footer"
        style={{ backgroundImage: "url(assets/images/footer-bg-img.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div
                className="footer-widget__column footer-widget__about wow fadeInUp animated"
                data-wow-delay="100ms"
              >
                <div className="footer-widget__about_logo">
                  <a href="index.html">
                    <img src="assets/images/petrolium1.png" alt="" className="foot" />
                  </a>
                </div>
                <div className="footer-widget_about_text__box">
                  <p>
                    Duis aute irure dolor in reprehen derit in voluptate velit
                    esse cillum dolore eu.
                  </p>
                </div>
                <ul className="list-unstyled">
                  <li>
                    <div className="footer-widget_about_icon">
                    <i class="fa-regular fa-envelope"></i>
                      <span  />
                    </div>
                    <div className="footer-widget_about_text">
                      <a href="mailto:needhelp@company.com">
                        needhelp@company.com
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="footer-widget_about_icon">
                    <i class="fa-solid fa-phone "></i>
                      <span />
                    </div>
                    <div className="footer-widget_about_text">
                      <a href="tel:92-666-888-0000">92 666 888 0000</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div
                className="footer-widget__column footer-widget__explore wow fadeInUp animated"
                data-wow-delay="200ms"
              >
                <div className="footer-widget__title">
                  <h3>Explore</h3>
                </div>
                <ul className="footer-widget__explore_list list-unstyled">
                  <li>
                    <a href="about.html">About</a>
                  </li>
                  <li>
                    <a href="projects.html">New Projects</a>
                  </li>
                  <li>
                    <a href="history.html">Our History</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                  <li>
                    <a href="#">Blog Posts</a>
                  </li>
                </ul>
                <ul className="footer-widget__explore_list_two list-unstyled">
                  <li>
                    <a href="blog.html">Press</a>
                  </li>
                  <li>
                    <a href="contact.html">Help Topics</a>
                  </li>
                  <li>
                    <a href="contact.html">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="about.html">Terms of Use</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div
                className="footer-widget__column footer-widget__latest_news wow fadeInUp animated"
                data-wow-delay="300ms"
              >
                <div className="footer-widget__title">
                  <h3>Latest News</h3>
                </div>
                <ul className="footer-widget__latest_news_list list-unstyled">
                  <li>
                    <div className="footer-widget__latest_news_image">
                      <img src="assets/images/fotter-l-n-img-1.jpg" alt="" />
                    </div>
                    <div className="footer-widget__latest_news_content">
                      <h4>16 Oct, 2020</h4>
                      <p>
                        <a href="blog-details.html">
                          We are Building New Quality Machinery
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="footer-widget__latest_news_image">
                      <img src="assets/images/fotter-l-n-img-2.jpg" alt="" />
                    </div>
                    <div className="footer-widget__latest_news_content">
                      <h4>16 Oct, 2020</h4>
                      <p>
                        <a href="blog-details.html">
                          Organically grow the holistic world
                        </a>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div
                className="footer-widget__column footer-widget__newsletter wow fadeInUp animated"
                data-wow-delay="400ms"
                style={{
                  visibility: "visible",
                  animationDelay: "400ms",
                  animationName: "fadeInUp",
                }}
              >
                <div className="footer-widget__title">
                  <h3>Newsletter</h3>
                </div>
                <div className="footer-widget__newsletter_text">
                  <p>
                    Duis aute irure dolor in reprehen derit in voluptate velit
                    esse.
                  </p>
                </div>
                <form
                  data-url="https://xyz.us18.list-manage.com/subscribe/post?u=20e91746ef818cd941998c598&id=cc0ee8140e"
                  className="mc-form"
                >
                  <div className="footer_input-box">
                    <input
                      type="email"
                      name="EMAIL"
                      id="mc-email"
                      placeholder="Email Address"
                    />
                    <button type="submit" className="button">
                    <i class="fa-regular fa-envelope"></i>
                      <span  />
                    </button>
                  </div>
                </form>
                <div className="mc-form__response" />
                {/* /.mc-form__response */}
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="site-footer_bottom">
        <div className="container">
          <div className="site-footer_bottom_copyright">
            <p>
              © Copyright 2020 by <a href="#">Layerdrops.com</a>
            </p>
          </div>
          <div className="site-footer__social">
            <a href="#" className="tw-clr">
              <i className="fab fa-twitter" />
            </a>
            <a href="#" className="fb-clr">
              <i className="fab fa-facebook-square" />
            </a>
            <a href="#" className="dr-clr">
              <i className="fab fa-dribbble" />
            </a>
            <a href="#" className="ins-clr">
              <i className="fab fa-instagram" />
            </a>
          </div>
        </div>
      </div>
      <a href="#" data-target="html" className="scroll-to-target scroll-to-top">
        <i className="fa fa-angle-up" />
      </a>
      <div className="mobile-nav__wrapper">
        <div className="mobile-nav__overlay side-menu__toggler mobile-nav__toggler" />
        {/* /.mobile-nav__overlay */}
        <div className="mobile-nav__content">
          <span className="mobile-nav__close side-menu__toggler mobile-nav__toggler">
            <i className="fa fa-times" />
          </span>
          <div className="logo-box">
            <a href="index.html" aria-label="logo image">
              <img src="assets/images/logo.png" width={101} alt="" />
            </a>
          </div>
          {/* /.logo-box */}
          <div className="mobile-nav__container clearfix" />
          {/* /.mobile-nav__container */}
          <ul className="mobile-nav__contact list-unstyled">
            <li>
              <i className="flaticon-email" />
              <a href="mailto:needhelp@azino.com">needhelp@inusti.com</a>
            </li>
            <li>
              <i className="flaticon-telephone" />
              <a href="tel:666-888-0000">666 888 0000</a>
            </li>
          </ul>
          {/* /.mobile-nav__contact */}
          <div className="mobile-nav__top">
            <div className="mobile-nav__language">
              <img src="assets/images/flag-1-1.jpg" alt="" />
              <label className="sr-only" htmlFor="language-select">
                select language
              </label>
              {/* /#language-select.sr-only */}
              <select className="selectpicker" id="language-select">
                <option value="english">English</option>
                <option value="arabic">Arabic</option>
              </select>
            </div>
            {/* /.mobile-nav__language */}
            <div className="mobile-nav__social">
              <a href="#" aria-label="twitter">
                <i className="fab fa-twitter" />
              </a>
              <a href="#" aria-label="facebook">
                <i className="fab fa-facebook-square" />
              </a>
              <a href="#" aria-label="pinterest">
                <i className="fab fa-pinterest-p" />
              </a>
              <a href="#" aria-label="instagram">
                <i className="fab fa-instagram" />
              </a>
            </div>
            {/* /.mobile-nav__social */}
          </div>
          {/* /.mobile-nav__top */}
        </div>
        {/* /.mobile-nav__content */}
      </div>
      <div className="search-popup">
        <div className="search-popup__overlay custom-cursor__overlay">
          <div className="cursor" />
          <div className="cursor-follower" />
        </div>
        {/* /.search-popup__overlay */}
        <div className="search-popup__inner">
          <form action="#" className="search-popup__form">
            <input
              type="text"
              name="search"
              placeholder="Type here to Search...."
            />
            <button type="submit">
              <i className="fa fa-search" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Footer;
