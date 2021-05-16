
import React from 'react';


const Footer = () => {
    return ( 
        <>

<section class="footer">
        <footer class="page-footer font-small">
          <div class="container text-center text-md-left mb-5 pt-5">
            <div class="row">
              <div class="col-md-3 mx-auto">
                <h5 class=" mt-3 mb-4">Ready to get started?</h5>

                <button class="btn "> BUY A DOG </button>
              </div>
 
              <hr class="clearfix w-100 d-md-none" />

              <div class="col-md-3 mx-auto">
                <h6 class="font-weight-bold mt-3 mb-4">
                Services
                </h6>

                <ul class="list-unstyled">
                  <li>
                    <a href="#!">Sales of Dogs</a>
                  </li>
                  <li>
                    <a href="#!"> Sales of Dogs</a>
                  </li>
                  <li>
                    <a href="#!"> Sales of Dogs</a>
                  </li>
                  <li>
                    <a href="#!"> Consulting Services</a>
                  </li>
                </ul>
              </div>

              <hr class="clearfix w-100 d-md-none" />

              <div class="col-md-3 mx-auto">
                <h6 class="font-weight-bold mt-3 mb-4"> Quick Links</h6>

                <ul class="list-unstyled">
                  <li>
                    <a href="#!"> Home </a>
                  </li>
                  <li>
                    <a href="#!"> About Us</a>
                  </li>
                  <li>
                    <a href="#!"> Product Page</a>
                  </li>
                  <li>
                    <a href="#!"> Testimonials </a>
                  </li>
                </ul>
              </div>

              <hr class="clearfix w-100 d-md-none" />

              <div class="col-md-3 mx-auto">
                <h6 class="font-weight-bold mt-3 mb-4">Contact Us</h6>

                <ul class="list-unstyled">
                  <li>
                    <a href="#!"> 
                    <span class="mr-2">
                    {" "}
                    <box-icon
                      class="box-icon"
                      size="12px"
                      color=" #fff"
                      name="location-plus"
                      type="solid"
                    ></box-icon> 
                  </span> 
                     15, George Street, Washington DC. </a>
                  </li>
                  <li>
                    <a href="#!"> 
                    <span class="mr-2">
                    {" "}
                    <box-icon
                      class="box-icon"
                      size="12px"
                      color=" #fff"
                      name="phone"
                      type="solid"
                    ></box-icon> 
                  </span> 
                     +234 801 234 5678 </a>
                  </li>
               
                  <li>
                    <a href="#!"> 
                    <span class="mr-2">
                    {" "}
                    <box-icon
                      class="box-icon"
                      size="12px"
                      color=" #fff"
                      name="envelope"
                      type="solid"
                    ></box-icon> 
                  </span> 
                     website@gmail.com </a>
                  </li>
                </ul>

                <div class="text-center mb-3 boxicons">
                <a href="http://fb.me/" target="_blank">
                  <box-icon
                    class="box-icon"
                    size="1.5rem"
                    color=" #fff"
                    type="logo"
                    name="facebook"
                  ></box-icon>
                </a>

                <a href="http://instagram.com/" target="_blank">
                  <box-icon
                    class="box-icon"
                    size="1.5rem"
                    color=" #fff"
                    name="instagram"
                    type="logo"
                  ></box-icon>
                </a>

                <a href="http://twitter.com/" target="_blank">
                  <box-icon
                    class="box-icon"
                    size="1.5rem"
                    color=" #fff"
                    name="twitter"
                    type="logo"
                  ></box-icon>
                </a>
              </div>
              </div>
            </div>
          </div>

          <div class="footer-copyright white black-text text-center py-3">
          Copyright © 2021 <a href="!#" class="black-text "> Bright's Dog Place </a>  || All rights reserved © 2020 Copyright:
            
          </div>
        </footer>
      </section>

        </>
     );
}
 
export default Footer;
