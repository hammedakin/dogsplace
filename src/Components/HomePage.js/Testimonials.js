import React from "react";
import img from "./img/team.jpg";


const Testimonials = () => {
  return (
    <>
      <section class="testimonials">
        <div class="container text-center">
        <div class="pb-5 white-text">
            <h4> Our Customers Love What We Do </h4>
          </div>
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">



              <div class="row">
            <div class="col-md-6">
              <div class="card">
                <img src={img} width="30%" alt="" />

                <div class="py-3 px-3">
                  <p class="mt-4">
                    We help to set financial goals that can help you save
                    towards the future
                  </p>
                  <h5 class="mt-4">Timothy</h5>
                </div>
              </div>
            </div>

           

            </div>


            
              </div>
              <div class="carousel-item">
            <div class="row">
            <div class="col-md-6">
              <div class="card">
                <img src={img} width="30%" alt="" />

                <div class="py-3 px-3">
                  <p class="mt-4">
                    We help to set financial goals that can help you save
                    towards the future
                  </p>
                  <h5 class="mt-4">Seun</h5>
                </div>
              </div>
            </div>

            </div>
              </div>

              <div class="carousel-item">
            <div class="row">
            <div class="col-md-6">
              <div class="card">
                <img src={img} width="30%" alt="" />

                <div class="py-3 px-3">
                  <p class="mt-4">
                    We help to set financial goals that can help you save
                    towards the future
                  </p>
                  <h5 class="mt-4">Samuel</h5>
                </div>
              </div>
            </div>

            </div>
              </div>
             
             
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
