import React from "react";
import img1 from "./img/1.png";
import img2 from "./img/2.png";
import img3 from "./img/3.png";

const HowItWorks = () => {
  return (
    <>
      <section class="howitworks">
        <div class="container text-center">
          <div class="col-md-7 mr-auto  ml-auto">
            <h3>
              {" "}
              How It <span class="color-red"> Works </span>
            </h3>
            <h6 class="mt-3">
              Bright's Place provides you with different breeds of Dogs and you
              can easily find a Dog of your choice here.
            </h6>
          </div>

          <div class="row mt-5">
            <div class="col-md-4 ">
              <div class="card hoverable">
                <div class="card-img">
                  <img src={img1} class="" width="50%" />
                </div>
                <div class="card-body">
                  <h4> Find a Dog(s) you want</h4>
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-4 ">
              <div class="card hoverable">
                <div class="card-img">
                  <img src={img2} class="" width="50%" />
                </div>
                <div class="card-body">
                  <h4> Request a Dog Visit or Lorem</h4>
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-4 ">
              <div class="card hoverable">
                <div class="card-img">
                  <img src={img3} class="" width="50%" />
                </div>
                <div class="card-body">
                  <h4> Pay</h4>
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
