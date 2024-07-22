import React from "react";
import "./CheckoutHeader.css";

export const CheckoutHeader = () => {
  // const
  // switch (key) {
  //   case value:
  //     break;

  //   default:
  //     break;
  // }

  return (
    <div className="checkhead">
      <h1>SHELIS</h1>
      <nav className="breadcrumb">
        <span>Cart</span>
        <span>Details</span>
        <span>Shipping</span>
        <span>Payment</span>
      </nav>
    </div>
  );
};
