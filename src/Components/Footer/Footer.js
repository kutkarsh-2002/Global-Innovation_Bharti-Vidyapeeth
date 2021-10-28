import React from "react";
import "./footer.css";
import footerlogo from "../image/Wabrone-logo.png";

const footer = () => {
  return (
    <div>
      <div className="footer_decor" id="footer-reach">
        <footer>
          <div class="footer-wrap">
            <div class="container first_class">
              <div class="row">
                <div class="col-md-4 col-sm-6">
                  <h3>BE THE FIRST TO KNOW</h3>
                  <br />

                  <p>
                    Get all the latest information on Wabrone Services, Events,
                    Webinars and upcoming features. Sign up for our newsletter
                    today.
                  </p>
                </div>
                <div class="col-md-4 col-sm-6">
                  <form class="newsletter">
                    <input type="text" placeholder="Email Address" />
                    <button class="newsletter_submit_btn" type="submit">
                      <i class="fa fa-paper-plane"></i>
                    </button>
                  </form>
                </div>
                <div class="col-md-4 col-sm-6">
                  <div class="col-md-12">
                    <div class="standard_social_links">
                      <div>
                        <li class="round-btn btn-facebook">
                          <a href="#">
                            <i class="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li class="round-btn btn-linkedin">
                          <a href="#">
                            <i
                              class="fab fa-linkedin-in"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li class="round-btn btn-twitter">
                          <a href="#">
                            <i class="fab fa-twitter" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li class="round-btn btn-instagram">
                          <a href="#">
                            <i class="fab fa-instagram" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li class="round-btn btn-whatsapp">
                          <a href="#">
                            <i class="fab fa-whatsapp" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li class="round-btn btn-envelop">
                          <a href="#">
                            <i class="fa fa-envelope" aria-hidden="true"></i>
                          </a>
                        </li>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="second_class">
              <div class="container second_class_bdr">
                <div class="row">
                  <div class="col-md-4 col-sm-6">
                    <div class="footer-logo">
                      <img src={footerlogo} alt="logo" />
                    </div>
                    <p>
                      Your one-stop startup platform to find all the solutions
                      for your problems. Our community assists entrepreneurs in
                      developing their business and solving problems associated
                      with it, especially in the initial stages, by providing an
                      array of business and technical services, initial seed
                      funds, lab facilities, advisory, network and linkages.
                    </p>
                  </div>
                  <div class="col-md-2 col-sm-6">
                    <h3>Quick LInks</h3>
                    <ul class="footer-links">
                      <li>
                        <a href="#">Home</a>
                      </li>
                      <li>
                        <a href="#">About us</a>
                      </li>
                      <li>
                        <a href="#">Wabrone Partners</a>
                      </li>
                      <li>
                        <a href="#">Contact Us</a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          Terms &amp; Conditions
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          Privacy Policy
                        </a>
                      </li>
                      <li>
                        <a href="#">Sitemap</a>
                      </li>
                    </ul>
                  </div>
                  <div class="col-md-3 col-sm-6">
                    <h3>OUR SERVICES</h3>
                    <ul class="footer-category">
                      <li>
                        <a href="#">Incubation Centre</a>
                      </li>
                      <li>
                        <a href="#">Connect to Mentors </a>
                      </li>
                      <li>
                        <a href="#">Raise Funds</a>
                      </li>
                      <li>
                        <a href="#">Acquire Startups</a>
                      </li>
                      <li>
                        <a href="#">Wabrone Campus Ambassadors</a>
                      </li>
                    </ul>
                    <div class="clearfix"></div>
                  </div>
                  <div class="col-md-3 col-sm-6">
                    <h3>Wabrone Events</h3>
                    <ul class="footer-links">
                      <li>
                        <a href="#">Webinars</a>
                      </li>

                      <li>
                        <a href="#">History</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="container-fluid">
                <div class="copyright">
                  {" "}
                  Copyright 2021 | All Rights Reserved by Wabrone Pvt. Ltd.
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default footer;
