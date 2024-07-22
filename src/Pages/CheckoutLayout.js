import React from "react";

import { Outlet } from "react-router-dom";
import { Footer } from "../component/Footer";
import { Features } from "../component/Features";
import { Header } from "../component/Header";

export const Checkout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet /> {/* This is where the nested routes will be rendered */}
      </main>
      <Features />
      <Footer />
    </>
  );
};
