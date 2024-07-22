import React from "react";
import "./ContactForm.css";
import { Link } from "react-router-dom";

const ContactForm = () => {
  return (
    <div className="contact-form-container">
      <div className="form-section">
        <h2>Get in touch</h2>
        <p>
          Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
          molestie vel, ornare non id blandit netus.
        </p>
        <form>
          <input type="text" placeholder="Contact name" />
          <input type="text" placeholder="Street" />
          <div className="city-postcode">
            <input type="text" placeholder="City" />
            <input type="text" placeholder="Postcode" />
          </div>
          <input type="text" placeholder="Contact Phone" />
          <input type="email" placeholder="E-mail" />
          <input type="text" placeholder="Product ID" />
          <input type="text" placeholder="Package Number" />
          <textarea placeholder="Let's talk about your problem"></textarea>
          <div className="file-upload">
            <label>
              <input type="file" />
              Upload Additional file
            </label>
            <p>
              Attach file. File size of your documents should not exceed 10MB
            </p>
          </div>
          <button type="submit" className="submit-btn">
            SUBMIT
          </button>
        </form>
      </div>
      <div className="map-section">
        <img src="path-to-map-image.png" alt="Map" />
      </div>
      <div className="contact-info">
        <div>
          <p>
            <strong>Phone</strong> <br /> +2 125 301 147
          </p>
        </div>
        <div>
          <p>
            <strong>E-MAIL</strong> <br /> info@helis.com
          </p>
        </div>
        <div>
          <p>
            <strong>FAX</strong> <br /> 02 5432 1234
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
