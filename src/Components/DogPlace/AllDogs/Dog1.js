import React from "react";
import {Link} from 'react-router-dom'

const Dog1 = () => {
  return (
    <>
      <section class="dog">
        <div class="container">

            <Link to="/store">
                <button class="btn btn2"> Back </button>
            </Link>
          <div class="row white">
            <div class="col-md-6"></div>
            <div class="col-md-6 details">
              <div class="card-body">
                <h4> 1 year Male Bull Dog - Friendly and Well Trained </h4>
                <h4> ₦100,000</h4>
                <h5 class="">
                  {" "}
                  <span class="unbold"> Age: </span> 1 year
                </h5>
                <h5 class="">
                  {" "}
                  <span class="unbold"> Gender: </span> Male{" "}
                </h5>
                <h5 class="">
                  <span class="unbold"> Breed: </span> Bull Dogs
                </h5>
                <h5 class="">
                  {" "}
                  <span class="unbold"> Breed Type: </span> Pure Breed
                </h5>

              </div>
              <div class="text-center">
              <button class="btn btn2 "> CONTACT FOR PURCHASE </button>

              </div>

            </div>
          </div>

<div class="row mt-4 white description ">
<div class="card-body col-md-8 ml-auto mr-auto">
            <h4> DESCRIPTION: </h4>

            <h5 class="white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </h5>
          </div>
</div>
         
        </div>
      </section>
    </>
  );
};

export default Dog1;
