import React from "react";
import { Header } from "../component/Header";
import { Features } from "../component/Features";
import { Footer } from "../component/Footer";
import { LoginCom } from "../component/Login-com";

export const Login = () => {
  return (
    <>
      <Header />
      <LoginCom />
      <Features />
      <Footer />
    </>
  );
};
