import React from "react";

function MainSlider() {
  return (
    <div>
      <section className="main-slider">
        <div
          className="swiper-container thm-swiper__slider"
          data-swiper-options='{"slidesPerView": 1, "loop": true,
    "effect": "fade",
    "pagination": {
  "el": "#main-slider-pagination",
  "type": "bullets",
  "clickable": true
},
    "navigation": {
  "nextEl": ".banner-slider-button-next",
  "prevEl": ".banner-slider-button-prev",
  "clickable": true
    },
    "autoplay": {
  "delay": 5000
    }}'
        >
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div
                className="image-layer"
                style={{ backgroundImage: "url(assets/images/slider-1-1.jpg)" }}
              />
              <div className="container">
                <div className="swiper-slide-inner">
                  <div className="row">
                    <div className="col-xl-12">
                      <p>Welcome to Factory &amp; Industry Business</p>
                      <h2>
                        Build Everything <br /> With Passion
                      </h2>
                      <a href="about.html" className="thm-btn">
                        get to know us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div
                className="image-layer"
                style={{ backgroundImage: "url(assets/images/slider-1-2.jpg)" }}
              />
              <div className="container">
                <div className="swiper-slide-inner">
                  <div className="row">
                    <div className="col-xl-12">
                      <p>Welcome to Factory &amp; Industry Business</p>
                      <h2>
                        Build Everything <br /> With Passion
                      </h2>
                      <a href="about.html" className="thm-btn">
                        get to know us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div
                className="image-layer"
                style={{ backgroundImage: "url(assets/images/slider-1-3.jpg)" }}
              />
              <div className="container">
                <div className="swiper-slide-inner">
                  <div className="row">
                    <div className="col-xl-12">
                      <p>Welcome to Factory &amp; Industry Business</p>
                      <h2>
                        Build Everything <br /> With Passion
                      </h2>
                      <a href="about.html" className="thm-btn">
                        get to know us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-pagination" id="main-slider-pagination" />
          <div className="banner-slider-nav">
            <div className="banner-slider-button-prev">
            <img src="assets/images/right-arrow1.png" alt="" style={{width:"40px"}} />
            </div>
            <div className="banner-slider-button-next">
            <img src="assets/images/right-arrow1.png" alt="" style={{width:"40px"}} />
            </div>
          </div>
        </div>
      </section>
      {/* CTA One Start */}
      <section className="cta_one">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="cta_one_inner">
                <div className="cta_one_left_text">
                  <h3>A High Quality Industrial Services</h3>
                </div>
                <div className="cta_one_right_btn">
                  <a href="services.html" className="thm-btn">
                    Discover more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Welcome One Start */}
      <section className="welcome_one">
        <div
          className="welcome_one_shape_bg"
          style={{
            backgroundImage: "url(assets/images/welcome_one_shape-bg.png)",
          }}
        />
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="welcome_one_left">
                <div className="welcome_one_left_image">
                  <img src="assets/images/welcome-1-img-1.jpg" alt="" />
                  <ul className="counter_one list-unstyled">
                    <li className="counter_one_single">
                      <h2 className="counter">660</h2>
                      <p>Industrial Solutions</p>
                    </li>
                    <li className="counter_one_single">
                      <div className="counter_one_experience">
                        <h2>
                          <span className="counter">30</span>
                          {/* /.counter */}+
                        </h2>
                      </div>
                      <p>Years Experience</p>
                    </li>
                    <li className="counter_one_single">
                      <h2 className="counter">800</h2>
                      <p>Projects Completed</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="welcome_one_right_content">
                <div className="block-title text-left">
                  <h4>About Company</h4>
                  <h2>We’re More than a Industrial Company</h2>
                </div>
                <div className="welcome_one_right_text_box">
                  <p className="welcome_one_right_first_text">
                    Lorem are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered.
                  </p>
                  <p className="welcome_one_right_second_text">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour.
                  </p>
                </div>
                <ul className="list-unstyled">
                  <li>
                    <i className="fa fa-check" />
                    Invest in your simply neighborhood
                  </li>
                  <li>
                    <i className="fa fa-check" />
                    Support people in free text extreme need
                  </li>
                  <li>
                    <i className="fa fa-check" />
                    Largest global industrial business community
                  </li>
                  <li>
                    <i className="fa fa-check" />
                    Share your love for factory community
                  </li>
                </ul>
                <div className="welcome_one_signature_box">
                  <div
                    className="welcome_one_signature_bg"
                    style={{
                      backgroundImage:
                        "url(assets/images/welcome_one_signature.png)",
                    }}
                  ></div>
                  <h3>William Smith</h3>
                  <p>Co Founder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MainSlider;
