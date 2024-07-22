import React from "react";
import "./Payment.css";
import { CheckoutHeader } from "./CheckoutHeader";
import { useNavigate } from "react-router-dom";

export const Payment = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
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
        <div className="contact-info">
          <div className="info">
            <span>Method</span>
            <span>Standard Shipping - FREE</span>
          </div>
          <button className="edit-btn">Edit</button>
        </div>
        <h2>Payment method</h2>
        <div className="payment-method">
          <input type="radio" name="payment" checked readOnly />
          <label>
            <span className="payment-icon">💳</span>
            <span>Credit Card</span>
          </label>
          <div className="credit-card-info">
            <input type="text" placeholder="Card Number" />
            <input type="text" placeholder="Holder Name" />
            <input type="text" placeholder="Expiration (MM/YY)" />
            <input type="text" placeholder="CVV" />
          </div>
        </div>
        <h2>Billing address</h2>
        <div className="billing-address">
          <div>
            <input type="radio" name="billing" checked readOnly />
            <label>Same as the shipping address</label>
          </div>
          <div>
            <input type="radio" name="billing" />
            <label>Use a different address for billing</label>
          </div>
        </div>
        <div className="form-buttons">
          <button onClick={handleGoBack} className="back-to-details">
            Back to Shipping
          </button>
          <button type="submit" className="submit-btn">
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};
