import React from "react";
import { ContactForm } from "./ContactForm";
import { Map } from "./Map";

export const Contact = () => {
  return (
    <div className="contact-section">
      <div className="container">
        <div>
          <h3>Get in touch</h3>
          <p>
            Enim tempor eget pharetra facilsissed maecenas adipuscig. Eu leo
            molestie vel, ornare non id blandu betus
          </p>

          <ContactForm />

          <div className="contact-info">
            <div>
              <span>PHONE</span>
              <span>Phone +2 1125 301 147</span>
            </div>

            <div>
              <span>EMAIL</span>
              <span>Phone +2 1125 301 147</span>
            </div>

            <div>
              <span>FAX</span>
              <span>Phone +2 1125 301 147</span>
            </div>
          </div>
        </div>

        <div>
          <Map />
        </div>
      </div>
    </div>
  );
};
