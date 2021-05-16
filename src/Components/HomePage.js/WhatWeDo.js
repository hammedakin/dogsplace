import React from "react";
import img1 from "./img/020-Pitbull.svg";
import img2 from "./img/007-bull terrier.svg";
import img3 from "./img/012-dalmatian.svg";


const WhatWeDo = () => {
  return (
    <>
      <section class="whatwedo">
        <div class="container text-center">
          <div class="col-md-7 mr-auto  ml-auto">
            <h3>
              {" "}
              <span class="color-red"> Services </span> for every Dog
            </h3>
            <h6 class="mt-3">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </h6>
          </div>

          <div class="row">
            <div class="col-md-4 ">
              <div class="card hoverable">
                <div class="">
                  <img src={img1} class="" width="50%" />
                </div>
                <div class="card-body">
                  <h4> Sales of Dogs</h4>
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-4 ">
              <div class="card hoverable">
                <div class="">
                  <img src={img2} class="" width="50%" />
                </div>
                <div class="card-body">
                  <h4> Sales of Dogs</h4>
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-4 ">
              <div class="card hoverable">
                <div class="">
                  <img src={img3} class="" width="50%" />
                </div>
                <div class="card-body">
                  <h4> Sales of Dogs</h4>
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut
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

export default WhatWeDo;
