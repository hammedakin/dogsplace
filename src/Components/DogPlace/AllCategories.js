import React from "react";
import { Link } from "react-router-dom";
import img1 from "./img/001-australian shepherd.svg";
import img2 from "./img/008-bulldog.svg";
import img3 from "./img/020-Pitbull.svg";
import img4 from "./img/024-Rottweiler.svg";

const AllCategories = () => {
  return (
    <>
      <section class="allcategories">
        <div class="container">
          <h4 class=" "> CATEGORIES </h4>

          <div class="row">
              
            <div class="col-lg-3 col-md-3 col-6">
                
              <div class="card h-100">
                  <Link to="/store/categories/german-shepards">
                <div class="card-img p-5">
                  <img src={img1} width="100%" alt="" />
                </div>
                </Link>
                <div class="card-footer text-center">
                  <h5> German Shepards</h5>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-3 col-6">
              <div class="card h-100">
                  <Link to="">
                <div class="card-img p-5">
                  <img src={img2} width="100%" alt="" />
                </div>
                </Link>
                <div class="card-footer text-center">
                  <h5> Bulldogs</h5>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-3 col-6">
              <div class="card h-100">
                  <Link to="">
                <div class="card-img p-5">
                  <img src={img3} width="100%" alt="" />
                </div>
                </Link>
                <div class="card-footer text-center">
                  <h5> Pitbulls</h5>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-3 col-6">
              <div class="card h-100">
                  <Link to="">
                <div class="card-img p-5">
                  <img src={img4} width="100%" alt="" />
                </div>
                </Link>
                <div class="card-footer text-center">
                  <h5> Rottweiler </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AllCategories;
