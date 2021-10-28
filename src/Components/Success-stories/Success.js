import React from "react";
import "./success.css";
import snapchat from "../image/snapchat.png";
import airbnb from "../image/airbnb.png";
import twitter from "../image/twitter.png";
const Success = () => {
  return (
    <div className="success_stories">
      <div>
        {/* Testimonials Section */}
        <section id="testimonial">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="section-title">
                  <h2>Success Stories</h2>
                </div>
              </div>
              <div class="col-12">
                <div
                  id="testimonialCarousel"
                  class="carousel slide"
                  data-ride="carousel"
                >
                  {/* Slide Indicators */}
                  <ol class="carousel-indicators">
                    <li
                      data-target="#testimonialCarousel"
                      data-slide-to="0"
                      class="active"
                    ></li>
                    <li
                      data-target="#testimonialCarousel"
                      data-slide-to="1"
                    ></li>
                    <li
                      data-target="#testimonialCarousel"
                      data-slide-to="2"
                    ></li>
                  </ol>
                  <div class="carousel-inner" role="listbox">
                    {/* Slide 1 */}
                    <div class="carousel-item active">
                      <div class="carousel-content">
                        <div class="client-img">
                          <img src={snapchat} />
                        </div>
                        <p>
                          <i>
                            When starting a business or launching a new product,
                            use prototypes to test business assumptions and
                            refine your idea. If possible, build the prototype
                            yourself, or with a small team. Developing and
                            refining early prototypes is a common trait of
                            successful ventures.
                          </i>
                        </p>
                        <h3>
                          <span>-</span> Kumar Utkarsh <span>-</span>
                        </h3>
                      </div>
                    </div>
                    {/*  Slide 2  */}
                    <div class="carousel-item">
                      <div class="carousel-content">
                        <div class="client-img">
                          <img src={airbnb} />
                        </div>
                        <p>
                          <i>
                            Test the “unicorn-ness” of your startup concept or
                            new product by determining whether it has the
                            potential to carve out an entirely new category in
                            your market. Is your offering different than
                            anything else out there? Does it satisfy a need
                            currently unmet anywhere? If so, you’re on the right
                            track.
                          </i>
                        </p>
                        <h3>
                          <span>-</span> Sumit Anand <span>-</span>
                        </h3>
                      </div>
                    </div>
                    {/* Slide 3 */}
                    <div class="carousel-item">
                      <div class="carousel-content">
                        <div class="client-img">
                          <img src={twitter} />
                        </div>
                        <p>
                          <i>
                            In starting a company or launching a new initiative,
                            the key is to pay attention to your everyday ideas
                            and consider whether the problems you encounter
                            might affect others, too. Do you have a solution to
                            this problem? Is it different than what anyone else
                            is doing in the market? If so, you might be onto
                            something.
                          </i>
                        </p>
                        <h3>
                          <span>-</span> Priyansh Kumar <span>-</span>
                        </h3>
                      </div>
                    </div>
                    {/* Slider pre and next arrow  */}
                    <a
                      class="carousel-control-prev text-white"
                      href="#testimonialCarousel"
                      role="button"
                      data-slide="prev"
                    >
                      <i class="fas fa-chevron-left"></i>
                    </a>
                    <a
                      class="carousel-control-next text-white"
                      href="#testimonialCarousel"
                      role="button"
                      data-slide="next"
                    >
                      <i class="fas fa-chevron-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  End testimonials Section  */}
      </div>
    </div>
  );
};

export default Success;
