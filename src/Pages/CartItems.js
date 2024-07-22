import React from "react";
import { Header } from "../component/Header";
import { CartItemsCom } from "../component/CartItems-com";

import { Features } from "../component/Features";
import { Footer } from "../component/Footer";

export const CartItems = () => {
  return (
    <>
      <Header />
      <CartItemsCom />

      <Features />
      <Footer />
    </>
  );
};
