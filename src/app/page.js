import {  About,Contact,FeaturedOffer,Footer,Home,Nav,Partner,Portfolio,Pricing,Subscribe,Testimonial } from "../../component";

import React from "react";

function main() {
  return (
    <div>
      <Nav />
      <Home />
      <FeaturedOffer />
      <Portfolio />
      <Pricing />
      <Partner />
      <Testimonial />
      <About/>
      <Contact />
      <Footer />
    </div>
  );
}

export default main;
