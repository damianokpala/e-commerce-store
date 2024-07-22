import React from "react";

import { Header } from "../component/Header";
import { Hero } from "../component/Hero";
import { Features } from "../component/Features";
import { ScrollText } from "../component/ScrollText";
import { Deals } from "../component/Deals";
import { Categories } from "../component/Categories";
import { Products } from "../component/Products";
import { Testimonials } from "../component/Testimonials";
import { Blogs } from "../component/Blogs";
import { Newsletter } from "../component/Newsletter";
import { Footer } from "../component/Footer";

export const Homepage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <ScrollText />
      <Deals />
      <Categories />
      <Products />
      <Testimonials />
      <Blogs />
      <Newsletter />
      <Footer />
    </>
  );
};
