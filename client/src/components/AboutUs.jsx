import React from "react";
import BackToHome from "./BackToHome";

function AboutUs() {
  return (
    <div>
      <div className="parts-page-style navbar">
        <BackToHome />
      </div>
      <main>
        <div class="position-relative overflow-hidden text-center bg-body-tertiary abt-top">
          <h1 class="display-3 fw-bold abt-text-main my-4">
            Engineered for Performance
          </h1>
          <h3 class="fw-normal abt-text-normal my-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus,
            voluptates libero laboriosam omnis repudiandae optio fugiat porro
            quis deserunt accusamus at nihil aliquid, vel, sit qui architecto?
            Quidem temporibus porro id quod eaque quia velit, reiciendis
            veritatis amet repudiandae incidunt doloribus impedit numquam
            distinctio rerum assumenda laudantium
          </h3>
          <h3 class="fw-normal abt-text-normal my-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus,
            voluptates libero laboriosam omnis repudiandae optio fugiat porro
            quis deserunt accusamus at nihil aliquid, vel, sit qui architecto?
            Quidem temporibus porro id quod eaque quia velit, reiciendis
            veritatis amet repudiandae incidunt doloribus impedit numquam
            distinctio rerum assumenda laudantium
          </h3>
          <div class="product-device shadow-sm d-none d-md-block"></div>
          <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>

        <div class="position-relative overflow-hidden text-center bg-body-tertiary abt-mid">
          <div class="col-md-6 p-lg-5 mx-auto my-5">
            <h1 class="display-3 fw-bold abt-text-main">
              WRC PROJECTS CONTRIBUTIONS
            </h1>
            <h3 class="fw-normal abt-text-normal my-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Doloribus, voluptates libero laboriosam omnis repudiandae optio
              fugiat porro quis deserunt accusamus at nihil aliquid, vel, sit
              qui architecto? Quidem temporibus porro id quod eaque quia velit,
              reiciendis veritatis amet repudiandae incidunt doloribus impedit
              numquam distinctio rerum assumenda laudantium
            </h3>
            <div class="abt-img mx-4"></div>
          </div>
          <div class="product-device shadow-sm d-none d-md-block"></div>
          <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>

        <div class="position-relative overflow-hidden text-center bg-body-tertiary abt-bottom">
          <div class="col-md-6 p-lg-5 mx-auto my-5">
            <h1 class="display-3 fw-bold abt-text-main-dark">BEST SERVICES</h1>
            <h3 class="fw-normal text-muted mb-3 abt-text-normal my-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Doloribus, voluptates libero laboriosam omnis repudiandae optio
              fugiat porro quis deserunt accusamus at nihil aliquid, vel, sit
              qui architecto? Quidem temporibus porro id quod eaque quia velit,
              reiciendis veritatis amet repudiandae incidunt doloribus impedit
              numquam distinctio rerum assumenda laudantium
            </h3>
          </div>
          <div class="product-device shadow-sm d-none d-md-block"></div>
          <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>

        <div class="container">
          <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div class="col-md-4 d-flex align-items-center">
              <div class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                <div class="logo"></div>
              </div>
            </div>
            <span class="mb-3 mb-md-0 text-body-secondary footer">
              © 2023 Forza Customs, Inc
            </span>

            <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
              <li class="ms-3">
                <a class="text-body-secondary" href="https://www.facebook.com">
                  <div class="fb"></div>
                </a>
              </li>
              <li class="ms-3">
                <a class="text-body-secondary" href="https://www.instagram.com">
                  <div class="ig"></div>
                </a>
              </li>
              <li class="ms-3">
                <a class="text-body-secondary" href="https://www.twitter.com">
                  <div class="tw"></div>
                </a>
              </li>
            </ul>
          </footer>
        </div>
      </main>
    </div>
  );
}

export default AboutUs;
