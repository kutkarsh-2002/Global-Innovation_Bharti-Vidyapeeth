import React from "react";
import "./customer-rating.css";
const Customer = () => {
  return (
    <div>
      <div className="customer_decor">
        <div class="container-customer">
          <div
            class="accordion d-flex justify-content-center align-items-center height"
            id="accordionExample"
          >
            <div class="row">
              <div class="col-md-6">
                <div class="p-3">
                  <ul class="testimonial-list">
                    <li>
                      <div
                        class="card-customer p-3"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        <div class="d-flex flex-row align-items-center">
                          {" "}
                          <img
                            src="https://i.imgur.com/G1pXs7D.jpg"
                            width="50"
                            class="rounded-circle"
                          />
                          <div class="d-flex flex-column ml-2 customer-name">
                            {" "}
                            <span class="font-weight-normal customer-name">
                              Milton Austin
                            </span>{" "}
                            <span>Sales Manager, Stack</span>{" "}
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div
                        class="card-customer p-3"
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        <div class="d-flex flex-row align-items-center">
                          {" "}
                          <img
                            src="https://i.imgur.com/udGH5tO.jpg"
                            width="50"
                            class="rounded-circle"
                          />
                          <div class="d-flex flex-column ml-2">
                            {" "}
                            <span class="font-weight-normal customer-name">
                              John Reeves
                            </span>{" "}
                            <span className="customer-name">
                              Head of Sales, Asana
                            </span>{" "}
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div
                        class="card-customer p-3"
                        data-toggle="collapse"
                        data-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        <div class="d-flex flex-row align-items-center">
                          {" "}
                          <img
                            src="https://i.imgur.com/Uz4FjGZ.jpg"
                            width="50"
                            class="rounded-circle"
                          />
                          <div class="d-flex flex-column ml-2">
                            {" "}
                            <span class="font-weight-normal customer-name">
                              Luke Harper
                            </span>{" "}
                            <span className="customer-name">
                              Sales Team Lead,Sketch
                            </span>{" "}
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-6">
                <div class="p-3 testimonials-margin">
                  <div
                    id="collapseOne"
                    class="collapse show"
                    aria-labelledby="headingOne"
                    data-parent="#accordionExample"
                  >
                    <div class="card-body">
                      <h4>Thanks for this great service, Team Wabrone!</h4>
                      <div class="ratings">
                        {" "}
                        <i class="fa fa-star"></i> <i class="fa fa-star"></i>{" "}
                        <i class="fa fa-star"></i>{" "}
                      </div>
                      <br />
                      <p>
                        The incubator helps entrepreneurs to convert their ideas
                        in becoming successful and profitable ventures by
                        supporting them in business planning, mentoring,
                        recruiting their top team, commercializing their
                        technologies, developing their products, getting early
                        seed funding, help in forging partnerships at the
                        national and global level, advice on intellectual
                        property, training and development and many other
                        things. Wabrone is reputed for its huge network of
                        successful entrepreneurs, domain experts, academicians
                        and experienced professionals
                      </p>
                    </div>
                  </div>
                  <div
                    id="collapseTwo"
                    class="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordionExample"
                  >
                    <div class="card-body">
                      <h4>This is an excellent platform!</h4>
                      <div class="ratings">
                        {" "}
                        <i class="fa fa-star"></i> <i class="fa fa-star"></i>{" "}
                        <i class="fa fa-star"></i> <i class="fa fa-star"></i>{" "}
                        <i class="fa fa-star"></i>{" "}
                      </div>

                      <br />
                      <p>
                        Wabrone provides seed stage investment to technology
                        startups. It target startups that are based out of
                        India, or have India as a target market and its
                        incubation period is for a year. It conducts various
                        seminars, reach-out programs, networking events and more
                        for both students and aspiring entrepreneurs. The
                        grooming and incubation program is conducted in a batch
                        of 25 with duration of 13 weeks
                      </p>
                    </div>
                  </div>
                  <div
                    id="collapseThree"
                    class="collapse"
                    aria-labelledby="headingThree"
                    data-parent="#accordionExample"
                  >
                    <div class="card-body">
                      <h4>Utilize this platform to the most!</h4>
                      <div class="ratings">
                        {" "}
                        <i class="fa fa-star"></i> <i class="fa fa-star"></i>{" "}
                        <i class="fa fa-star"></i> <i class="fa fa-star"></i>{" "}
                      </div>
                      <br />
                      <p>
                        It helps the young firms to survive and grow by
                        providing specialised support services during the
                        critical period of a business venture i.e. the start-up
                        phase. The goal is to nurture successful indigenous
                        technologies and growth oriented
                        entrepreneurs/enterprises. It provides space as well as
                        seed fund to the startups.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
