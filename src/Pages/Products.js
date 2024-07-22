import React from "react";
import { Header } from "../component/Header";
import { Features } from "../component/Features";
import { Footer } from "../component/Footer";
import { PageTitle } from "../component/PageTitle";
import { ProductDisplay } from "../component/ProductDisplay";

export const Products = () => {
  return (
    <>
      <Header />
      <PageTitle />
      <ProductDisplay />
      <Features />
      <Footer />
    </>
  );
};
