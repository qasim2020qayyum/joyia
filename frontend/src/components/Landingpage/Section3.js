import React from "react";

function Section3() {
  return (
    <div>
      <section className="blog_one">
        <div className="container">
          <div className="block-title text-center">
            <h4>From The Blog</h4>
            <h2>News &amp; Articles</h2>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-4">
              {/*Blog One Single*/}
              <div
                className="blog_one_single wow fadeInLeft"
                data-wow-duration="1500ms"
                data-wow-delay="0ms"
              >
                <div className="blog_one_image">
                  <img src="assets/images/blog-1-img-1.jpg" alt="" />
                  <div className="blog_one_date_box">
                    <p>
                      20 <br /> Oct
                    </p>
                  </div>
                </div>
                <div className="blog-one__content">
                  <ul className="list-unstyled blog-one__meta">
                    <li>
                      <a href="blog-details.html">
                        <i className="far fa-user-circle" /> Admin
                      </a>
                    </li>
                    <li>
                      <a href="blog-details.html">
                        <i className="far fa-comments" /> 2 Comments
                      </a>
                    </li>
                  </ul>
                  <div className="blog_one_title">
                    <h3>
                      <a href="blog-details.html">
                        We are best for any industrial business solutions
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4">
              {/*Blog One Single*/}
              <div
                className="blog_one_single wow fadeInDown"
                data-wow-duration="1500ms"
                data-wow-delay="100ms"
              >
                <div className="blog_one_image">
                  <img src="assets/images/blog-1-img-2.jpg" alt="" />
                  <div className="blog_one_date_box">
                    <p>
                      20 <br /> Oct
                    </p>
                  </div>
                </div>
                <div className="blog-one__content">
                  <ul className="list-unstyled blog-one__meta">
                    <li>
                      <a href="blog-details.html">
                        <i className="far fa-user-circle" /> Admin
                      </a>
                    </li>
                    <li>
                      <a href="blog-details.html">
                        <i className="far fa-comments" /> 2 Comments
                      </a>
                    </li>
                  </ul>
                  <div className="blog_one_title">
                    <h3>
                      <a href="blog-details.html">
                        Organically grow the holistic world view of disruptive
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4">
              {/*Blog One Single*/}
              <div
                className="blog_one_single wow fadeInRight"
                data-wow-duration="1500ms"
                data-wow-delay="200ms"
              >
                <div className="blog_one_image">
                  <img src="assets/images/blog-1-img-3.jpg" alt="" />
                  <div className="blog_one_date_box">
                    <p>
                      20 <br /> Oct
                    </p>
                  </div>
                </div>
                <div className="blog-one__content">
                  <ul className="list-unstyled blog-one__meta">
                    <li>
                      <a href="blog-details.html">
                        <i className="far fa-user-circle" /> Admin
                      </a>
                    </li>
                    <li>
                      <a href="blog-details.html">
                        <i className="far fa-comments" /> 2 Comments
                      </a>
                    </li>
                  </ul>
                  <div className="blog_one_title">
                    <h3>
                      <a href="blog-details.html">
                        Bring to the table win-win survival strategies to
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Call One Start*/}
      <section className="call_one">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="call_one_inner">
                <div className="call_one_image">
                  <img src="assets/images/call_1-img-1.jpg" alt="" />
                </div>
                <div className="call_one_content">
                  <div className="text">
                    <p>
                      Gravida sodales condimentum pellentesq <br /> accumsan
                      orci quam sagittis sapien. san <br /> orci quam sagittis
                      sapien.
                    </p>
                  </div>
                  <div className="call_one_number">
                    <h4>Get a Free Estimate</h4>
                    <a href="tel:92-666-888-0000">92 666 888 0000</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Google Map*/}
      <section className="google_map">
        <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54508.4265652015!2d74.13971031101501!3d31.365141779176128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918ff9a30fa362d%3A0x528615a7981ce611!2sBahria%20Town%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1690799665187!5m2!1sen!2s"
          className="google-map__contact"
          allowFullScreen=""
        />
      </section>
    </div>
  );
}

export default Section3;
