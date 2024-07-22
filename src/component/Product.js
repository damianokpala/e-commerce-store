import React from "react";
import { Deals } from "./Deals";

export const Product = () => {
  return (
    <div className="product-section">
      <div className="container">
        <div className="product-image-display">
          <img className="main-image" src="" alt="" />
          <div className="sub-display">
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div>
        <div className="product-details">
          <span className="add-wishlist"></span>
          <h2 className="product-title"></h2>
          <div className="product-id"></div>
          <div className="product-star"></div>
          <div className="product-price"></div>
          <div className="product-description"></div>
          <div className="product-colors">
            Avaliable color
            <div className="product-color"></div>
          </div>
          <div className="product-number">10 in stock</div>
          <div className="product-addcart-increment">
            <span>-</span>
            <input type="text" disabled />
            <span>+</span>
          </div>
        </div>
      </div>

      <div className="container">
        You might also like
        <Deals />
      </div>
    </div>
  );
};
