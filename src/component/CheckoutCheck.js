import React from "react";
import "./CheckoutCheck.css";
import "./CheckoutForm.css";
import { Link, useNavigate } from "react-router-dom";
import { CheckoutHeader } from "./CheckoutHeader";
import { CheckoutSummary } from "./CheckoutSummary";

export const CheckoutCheck = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleGoToPayment = () => {
    navigate("/checkout/payment");
  };

  return (
    <div className="checkout-container">
      <div className="form-section">
        <CheckoutHeader />
        <h2>Contact</h2>
        <div className="contact-info">
          <div className="info">
            <span>Contact</span>
            <span>Khaled_Sam123@Lomail.com</span>
          </div>
          <button className="edit-btn">Edit</button>
        </div>
        <div className="contact-info">
          <div className="info">
            <span>Ship to</span>
            <span>Banzan 23, 92023, Nasr City, Egypt</span>
          </div>
          <button className="edit-btn">Edit</button>
        </div>
        <h2>Shipping method</h2>
        <div className="shipping-method">
          <input type="radio" name="shipping" checked readOnly />
          <label>
            <span>Standard Shipping</span>
            <span>Free</span>
          </label>
        </div>
        <div className="form-buttons">
          <button onClick={handleGoBack} className="back-to-details">
            Back to details
          </button>
          <button
            onClick={handleGoToPayment}
            type="submit"
            className="submit-btn"
          >
            Go to payment
          </button>
        </div>
      </div>
      <CheckoutSummary />
    </div>
  );
};
