import React from "react";
import img1 from "./img/dog.png";

const Showcase = () => {
  return (
    <>
      <section class="showcase ">
        <div class="container ">
          <div class="row">
            <div class="col-md-6 content ">
              
                  <h1 class="">
                  Welcome to Bright's Dog Place

                  </h1>

                  <h5 class="mt-5">
                  Lorem ipsum dolor sit amet, consectetur
adipiscing elit, sed do eiusmod.
                  </h5>
               
<button class="btn"> GET STARTED</button>

            </div>
              <div class="col-md-6 dog-banner ">
                <img src={img1} width="100%" alt="dog" />
              </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Showcase;
