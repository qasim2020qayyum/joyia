import React from "react";

function Section2() {
  return (
    <div>
      <section
        className="testimonails_one"
        style={{ backgroundImage: "url(assets/images/testimonails_1-bg.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-12">
              <div className="block-title text-left">
                <h4>Clients feedbacks</h4>
                <h2>What They’re Talking About Company Work</h2>
              </div>
              <div
                className="swiper-pagination"
                id="testimonials-one-pagination"
              />
              {/* /.swiper-pagination */}
            </div>
          </div>
        </div>
        <div
          className="thm-swiper__slider swiper-container"
          data-swiper-options='{"spaceBetween": 100, "slidesPerView": 4, "autoplay": { "delay": 5000 }, "pagination": {
          "el": "#testimonials-one-pagination",
          "type": "bullets",
          "clickable": true
        },"breakpoints": {
          "0": {
              "spaceBetween": 30,
              "slidesPerView": 1
          },
          "425": {
              "spaceBetween": 30,
              "slidesPerView": 1
          },
          "575": {
              "spaceBetween": 30,
              "slidesPerView": 2
          },
          "767": {
              "spaceBetween": 30,
              "slidesPerView": 2
          },
          "991": {
              "spaceBetween": 20,
              "slidesPerView": 2
          },
          "1289": {
              "spaceBetween": 20,
              "slidesPerView": 2
          },
          "1440": {
              "spaceBetween": 20,
              "slidesPerView": 2
          }
      }}'
        >
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              {/*Testimonails One Single*/}
              <div className="testimonails_one_single">
                <div className="testimonails_one_quote_icon">
                  <i className="fa fa-quote-left" />
                </div>
                <div className="testimonails_one_text">
                  <p>
                    I was very impresed by the company service lore ipsum is
                    simply free text used by copy typing refreshing. Neque porro
                    est qui{" "}
                  </p>
                </div>
                <div className="testimonails_one_client_name">
                  <h3>Mike Hardson</h3>
                  <p>CO Founder</p>
                </div>
                <div className="testimonails_one_image">
                  <img src="assets/images/testimonails_1-img-1.jpg" alt="" />
                </div>
              </div>
            </div>
            {/* /.swiper-slide */}
            <div className="swiper-slide">
              {/*Testimonails One Single*/}
              <div className="testimonails_one_single">
                <div className="testimonails_one_quote_icon">
                  <i className="fa fa-quote-left" />
                </div>
                <div className="testimonails_one_text">
                  <p>
                    I was very impresed by the company service lore ipsum is
                    simply free text used by copy typing refreshing. Neque porro
                    est qui{" "}
                  </p>
                </div>
                <div className="testimonails_one_client_name">
                  <h3>Jessica Brown</h3>
                  <p>CO Founder</p>
                </div>
                <div className="testimonails_one_image">
                  <img src="assets/images/testimonails_1-img-2.jpg" alt="" />
                </div>
              </div>
            </div>
            {/* /.swiper-slide */}
            <div className="swiper-slide">
              {/*Testimonails One Single*/}
              <div className="testimonails_one_single">
                <div className="testimonails_one_quote_icon">
                  <i className="fa fa-quote-left" />
                </div>
                <div className="testimonails_one_text">
                  <p>
                    I was very impresed by the company service lore ipsum is
                    simply free text used by copy typing refreshing. Neque porro
                    est qui{" "}
                  </p>
                </div>
                <div className="testimonails_one_client_name">
                  <h3>Mike Hardson</h3>
                  <p>CO Founder</p>
                </div>
                <div className="testimonails_one_image">
                  <img src="assets/images/testimonails_1-img-1.jpg" alt="" />
                </div>
              </div>
            </div>
            {/* /.swiper-slide */}
            <div className="swiper-slide">
              {/*Testimonails One Single*/}
              <div className="testimonails_one_single">
                <div className="testimonails_one_quote_icon">
                  <i className="fa fa-quote-left" />
                </div>
                <div className="testimonails_one_text">
                  <p>
                    I was very impresed by the company service lore ipsum is
                    simply free text used by copy typing refreshing. Neque porro
                    est qui{" "}
                  </p>
                </div>
                <div className="testimonails_one_client_name">
                  <h3>Jessica Brown</h3>
                  <p>CO Founder</p>
                </div>
                <div className="testimonails_one_image">
                  <img src="assets/images/testimonails_1-img-2.jpg" alt="" />
                </div>
              </div>
            </div>
            {/* /.swiper-slide */}
          </div>
          {/* /.swiper-wrapper */}
        </div>
        {/* /.swiper-container */}
      </section>
      {/*Two_sections One Start*/}
      <section className="two_sections_one">
        <div
          className="two_sections_one_map"
          style={{
            backgroundImage: "url(assets/images/two_sections-1-map.png)",
          }}
        />
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-6">
              <div className="two_sections_one_left">
                <ul className="list-unstyled">
                  <li>
                    <div className="icon_box">
                    <img src="assets/images/eco-factory.png" alt="" style={{width:"60px"}} />
                    </div>
                    <div className="content_box">
                      <h3>We’re Professional</h3>
                      <p>
                        Lorem ipsum is simply free <br /> dolor sit amet.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon_box">
                    <img src="assets/images/water-factory.png" alt="" style={{width:"60px"}} />
                    </div>
                    <div className="content_box">
                      <h3>Delivery on Time</h3>
                      <p>
                        Lorem ipsum is simply free <br /> dolor sit amet.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon_box">
                    <img src="assets/images/robot-arm.png" alt="" style={{width:"60px"}} />
                    </div>
                    <div className="content_box">
                      <h3>Quality Materials</h3>
                      <p>
                        Lorem ipsum is simply free <br /> dolor sit amet.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6">
              <div className="two_sections_one_right">
                <div className="block-title text-left">
                  <h4>Industrial Groups</h4>
                  <h2>We Create Big Things with Big Ideas</h2>
                </div>
                <div className="two_sections_one_text_box">
                  <p>
                    Lorem ipsum dolor sit amet, conse ctetur adipisicing elit
                    sed do eiusm od tempor ut labore. Many desktop publishing
                    packages and wpage editors now use Lorem Ipsum as their
                    defamodel text, and a search for sit amet ctetur adipisicing
                    elit.
                  </p>
                </div>
                <div className="two_sections_one_image">
                  <img src="assets/images/2_sections_1-img-1.jpg" alt="" />
                  <div className="two_sections_one_phone_number">
                    <div className="icon">
                      <span className="flaticon-telephone" />{" "}
                    </div>
                    <div className="phone_number">
                      <a href="tel:92-666-888-0000">92 666 888 0000</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Section2;
