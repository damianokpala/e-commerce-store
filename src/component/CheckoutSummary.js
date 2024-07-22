import React from "react";
import "./CheckoutSummary.css";

export const CheckoutSummary = ({ cartItems, subtotal }) => {
  return (
    <div className="summary-section">
      <div className="summary-items">
        {cartItems.map((item, index) => (
          <div className="summary-item" key={index}>
            <img
              src={item.image}
              alt={item.name}
              className="summary-item-image"
            />
            <div className="summary-item-details">
              <p>{item.name}</p>
              <p>
                {item.quantity} x {item.price} LE
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="coupon-code">
        <input type="text" placeholder="Coupon code" />
        <button>Add code</button>
      </div>
      <div className="summary-totals">
        <div className="summary-total">
          <span>Subtotal</span>
          <span>{subtotal} LE</span>
        </div>
        <div className="summary-total">
          <span>Shipping</span>
          <span>Calculated at the next step</span>
        </div>
        <div className="summary-total">
          <span>Total</span>
          <span>{subtotal} LE</span>
        </div>
      </div>
    </div>
  );
};
