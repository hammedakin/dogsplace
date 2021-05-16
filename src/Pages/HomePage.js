import React from "react";
import HowItWorks from "../Components/HomePage.js/HowItWorks";
import Showcase from "../Components/HomePage.js/Showcase";
import Testimonials from "../Components/HomePage.js/Testimonials";
import WhatWeDo from "../Components/HomePage.js/WhatWeDo";
import WhyChooseUs from "../Components/HomePage.js/WhyChooseUs";

const Homepage = () => {
  return (
    <>
      <Showcase />
      <WhatWeDo />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials/>
    </>
  );
};

export default Homepage;
