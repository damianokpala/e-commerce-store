import React from "react";
import "./Features.css";

export const Features = () => {
  return (
    <section id="shopping-features" className="shopping-features-section">
      <div className="container">
        <div>
          <span>
            <img src="/icons/hugeicons_shipping-truck-02.svg" alt="" />
          </span>
          <div>
            <span>Free Shipping</span>
            <span>Tell about your service</span>
          </div>
        </div>

        <div>
          <span>
            <img src="/icons/Vector-1.svg" alt="" />
          </span>
          <div>
            <span>Money Guarantee</span>
            <span>30 days for exchange</span>
          </div>
        </div>

        <div>
          <span>
            <img
              src="/icons/material-symbols_support-agent-rounded.svg"
              alt=""
            />
          </span>
          <div>
            <span>Online Support</span>
            <span>24hrs a day, 7 days a week</span>
          </div>
        </div>

        <div>
          <span>
            <img src="/icons/ion_card.svg" alt="" />
          </span>
          <div>
            <span>Flexible Payment</span>
            <span>Pay with multiple Credit Card</span>
          </div>
        </div>
      </div>
    </section>
  );
};
