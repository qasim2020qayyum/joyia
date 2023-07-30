import React from "react";

function Section() {
  return (
    <div>
      
      <section className="our_projects_one">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="block-title text-left">
                <h4>Closed Projects</h4>
                <h2>Explore Our Projects</h2>
              </div>
            </div>
            <div className="col-xl-6">
              <ul className="project-filter style1 post-filter has-dynamic-filters-counter list-unstyled">
                <li data-filter=".filter-item" className="">
                  <span className="filter-text">All</span>
                </li>
                <li data-filter=".inds">
                  <span className="filter-text">Industry</span>
                </li>
                <li data-filter=".fac">
                  <span className="filter-text">Factory</span>
                </li>
                <li data-filter=".elec">
                  <span className="filter-text">Electronics</span>
                </li>
                <li data-filter=".cons">
                  <span className="filter-text last-pd-none">Construction</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="row filter-layout masonary-layout">
            <div className="col-xl-4 col-lg-4 col-md-6 filter-item inds cons elec">
              {/*Projects One Single*/}
              <div className="our_projects_one_single">
                <div className="our_projects_one_image">
                  <img src="assets/images/project-1-img-1.jpg" alt="" />
                  <div className="our_projects_one_icon">
                    <a href="projects-details.html">
                    <img src="assets/images/plus.png" alt="" style={{width:"35px"}} />
                    </a>
                  </div>
                  <div className="our_projects_one_text">
                    <h4>
                      Bridge <br /> Construction
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 filter-item elec cons">
              {/*Projects One Single*/}
              <div className="our_projects_one_single">
                <div className="our_projects_one_image">
                  <img src="assets/images/project-1-img-2.jpg" alt="" />
                  <div className="our_projects_one_icon">
                    <a href="projects-details.html">
                    <img src="assets/images/plus.png" alt="" style={{width:"35px"}} />
                    </a>
                  </div>
                  <div className="our_projects_one_text">
                    <h4>
                      Bridge <br /> Construction
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 filter-item elec fac">
              {/*Projects One Single*/}
              <div className="our_projects_one_single">
                <div className="our_projects_one_image">
                  <img src="assets/images/project-1-img-3.jpg" alt="" />
                  <div className="our_projects_one_icon">
                    <a href="projects-details.html">
                    <img src="assets/images/plus.png" alt="" style={{width:"35px"}} />
                    </a>
                  </div>
                  <div className="our_projects_one_text">
                    <h4>
                      Bridge <br /> Construction
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 filter-item inds cons">
              {/*Projects One Single*/}
              <div className="our_projects_one_single">
                <div className="our_projects_one_image">
                  <img src="assets/images/project-1-img-4.jpg" alt="" />
                  <div className="our_projects_one_icon">
                    <a href="projects-details.html">
                    <img src="assets/images/plus.png" alt="" style={{width:"35px"}} />
                    </a>
                  </div>
                  <div className="our_projects_one_text">
                    <h4>
                      Bridge <br /> Construction
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 filter-item fac cons">
              {/*Projects One Single*/}
              <div className="our_projects_one_single">
                <div className="our_projects_one_image">
                  <img src="assets/images/project-1-img-5.jpg" alt="" />
                  <div className="our_projects_one_icon">
                    <a href="projects-details.html">
                    <img src="assets/images/plus.png" alt="" style={{width:"35px"}} />
                    </a>
                  </div>
                  <div className="our_projects_one_text">
                    <h4>
                      Bridge <br /> Construction
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 filter-item inds elec">
              {/*Projects One Single*/}
              <div className="our_projects_one_single">
                <div className="our_projects_one_image">
                  <img src="assets/images/project-1-img-6.jpg" alt="" />
                  <div className="our_projects_one_icon">
                    <a href="projects-details.html">
                    <img src="assets/images/plus.png" alt="" style={{width:"35px"}} />
                    </a>
                  </div>
                  <div className="our_projects_one_text">
                    <h4>
                      Bridge <br /> Construction
                    </h4>
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

export default Section;
