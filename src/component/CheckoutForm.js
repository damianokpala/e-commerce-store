import React from "react";
import "./CheckoutForm.css";
import { Link } from "react-router-dom";
import { CheckoutHeader } from "./CheckoutHeader";
import { CheckoutSummary } from "./CheckoutSummary";

export const CheckoutForm = () => {
  return (
    <div className="checkout-container">
      <div className="form-section">
        <CheckoutHeader />
        <h2>Contact</h2>
        <form>
          <input type="text" placeholder="Email or mobile phone number" />
          <label>
            <input type="checkbox" />
            Add me to Candleaf newsletter for a 10% discount
          </label>
          <h2>Shipping Address</h2>
          <div className="name-fields">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Second Name" />
          </div>
          <input type="text" placeholder="Address and number" />
          <input type="text" placeholder="Shipping note (optional)" />
          <div className="city-postcode-fields">
            <input type="text" placeholder="City" />
            <input type="text" placeholder="Postal Code" />
            <select>
              <option value="" disabled selected>
                Province
              </option>
              <option value="province1">Province 1</option>
              <option value="province2">Province 2</option>
            </select>
          </div>
          <input
            type="text"
            placeholder="Country/Region"
            defaultValue="Egypt"
            disabled
          />
          <label>
            <input type="checkbox" />
            Save this information for a future fast checkout
          </label>
          <div className="form-buttons">
            <a href="#" className="back-to-cart">
              Back to cart
            </a>
            <Link className="submit-btn" to="confirm-details">
              Go to shipping
            </Link>
          </div>
        </form>
      </div>

      <CheckoutSummary cartItems={cartItems} subtotal={subtotal} />
    </div>
  );
};
