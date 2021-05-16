import React from "react";
import img1 from './img/contract.svg'
import img2 from './img/location.svg'
import img3 from './img/telephone.svg'
import img4 from './img/email.svg'

const ContactUs = () => {
  return (
    <>
      <section class="contactus">
        <div class="container mt-5">
          <section class="mb-4">
          
            <p class="text-center w-responsive mx-auto mb-5">
              Do you have any questions? Please do not hesitate to contact us
              directly. Our team will come back to you within a matter of hours
              to help you.
            </p>

            <div class="row">
              <div class="col-md-8 getintouch mb-md-0 mb-5 ml-auto mr-auto">
                <div class="text-center">
                <img src={img1} width="10%" class="mt-5"/>

                </div>
                <form
                  id="contact-form"
                  name="contact-form"
                  class=""
                  method="POST"
                >
                  <div class="row align-contents-center">
                    <div class="col-md-6">
                      <div class="md-form mb-0">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          class="form-control"
                        />
                        <label for="name" class="">
                          Your name
                        </label>
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="md-form mb-0">
                        <input
                          type="text"
                          id="email"
                          name="email"
                          class="form-control"
                        />
                        <label for="email" class="">
                          Your email
                        </label>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-12">
                      <div class="md-form mb-0">
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          class="form-control"
                        />
                        <label for="subject" class="">
                          Subject
                        </label>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-12">
                      <div class="md-form">
                        <textarea
                          type="text"
                          id="message"
                          name="message"
                          rows="3"
                          class="form-control md-textarea"
                        ></textarea>
                        <label for="message">Your message</label>
                      </div>
                    </div>
                  </div>
                </form>

                <div class="text-center">
                  <a class="btn">Send</a>
                </div>
              </div>
            </div>

            <div class="row ">
              <div class="col-md-4 mb-5 ">
                <div class="card h-100 contact-details hoverable">
                  <div class=" text-center">
                  <img src={img2} width="15%" class="mb-3"/>
                    <h5>19, George Street, Washington, DC</h5>
                  </div>
                </div>
              </div>

              <div class="col-md-4 mb-5">
                <div class="card h-100 contact-details hoverable">
                  <div class=" text-center">
                  <img src={img3} width="15%" class="mb-3"/>
                    <h5>0801 234 5678</h5>
                    <h5>0801 234 5678</h5>
                  </div>
                </div>
              </div>   <div class="col-md-4 mb-5 ">
                <div class="card h-100 contact-details hoverable">
                  <div class=" text-center">
                  <img src={img4} width="15%" class="mb-3"/>
                    <h5> website@gmail.com </h5>
                  </div>
                </div>
              </div>


            </div>

            {/* <div class="text-center mb-3 boxicons">
                    <a href="http://fb.me/" target="_blank">
                      <box-icon
                        class="box-icon"
                        size="1.5rem"
                        color=" #FC4746"
                        type="logo"
                        name="facebook"
                      ></box-icon>
                    </a>

                    <a href="http://instagram.com/" target="_blank">
                      <box-icon
                        class="box-icon"
                        size="1.5rem"
                        color=" #FC4746"
                        name="instagram"
                        type="logo"
                      ></box-icon>
                    </a>

                    <a href="http://twitter.com/" target="_blank">
                      <box-icon
                        class="box-icon"
                        size="1.5rem"
                        color=" #FC4746"
                        name="twitter"
                        type="logo"
                      ></box-icon>
                    </a>
                  </div> */}
          </section>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
