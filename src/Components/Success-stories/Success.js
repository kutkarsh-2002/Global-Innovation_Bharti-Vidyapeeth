import React from "react";
import "./success.css";
const Success = () => {
  return (
    <div>
      <div>
        {/* Testimonials Section */}
        <section id="testimonial">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="section-title">
                  <h2>Client Testimonials</h2>
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
                          <img
                            src="images/user-img-1.jpg"
                            alt="Testimonial Slider"
                          />
                        </div>
                        <p>
                          <i>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text. There are many
                            variations of passages of Lorem Ipsum available, but
                            the majority have suffered alteration in some form
                          </i>
                        </p>
                        <h3>
                          <span>-</span> Gourav Kumar <span>-</span>
                        </h3>
                      </div>
                    </div>
                    {/*  Slide 2  */}
                    <div class="carousel-item">
                      <div class="carousel-content">
                        <div class="client-img">
                          <img
                            src="images/user-img-2.jpg"
                            alt="Testimonial Slider"
                          />
                        </div>
                        <p>
                          <i>
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout. There are many variations of
                            passages of Lorem Ipsum available. Lorem Ipsum is
                            simply dummy text of the printing and typesetting
                            industry
                          </i>
                        </p>
                        <h3>
                          <span>-</span> Mukesh Kumar <span>-</span>
                        </h3>
                      </div>
                    </div>
                    {/* Slide 3 */}
                    <div class="carousel-item">
                      <div class="carousel-content">
                        <div class="client-img">
                          <img
                            src="images/user-img-3.jpg"
                            alt="Testimonial Slider"
                          />
                        </div>
                        <p>
                          <i>
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form. There are many variations of passages
                            of Lorem Ipsum available. Lorem Ipsum is simply
                            dummy text of the printing and typesetting industry
                          </i>
                        </p>
                        <h3>
                          <span>-</span> Rajnish Kumar <span>-</span>
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
