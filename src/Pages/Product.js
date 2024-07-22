import React from "react";
import { Header } from "../component/Header";
import { PageTitle } from "../component/PageTitle";
import { Features } from "../component/Features";
import { Footer } from "../component/Footer";
import { SingleProductDisplay } from "../component/SingleProductDisplay";
import { useData } from "../DataContext";

export const Product = () => {
  return (
    <>
      <Header />

      <SingleProductDisplay />
      <Features />
      <Footer />
    </>
  );
};
