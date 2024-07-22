import React from "react";
import { Header } from "../component/Header";
import { Features } from "../component/Features";
import { Footer } from "../component/Footer";
import ContactForm from "../component/ContactForm";

export const Contact = () => {
  return (
    <>
      <Header />
      <ContactForm />
      <Features />
      <Footer />
    </>
  );
};
