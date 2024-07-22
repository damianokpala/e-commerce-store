import React from "react";
import "./SingleProductView.css";
import { useNavigate } from "react-router-dom";

export const SingleProductView = ({ product }) => {
  const navigate = useNavigate();

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <article
      className="single-product-view"
      onClick={() => handleProductClick(product.id)}
    >
      <div>
        <span className={false ? "" : ""}></span>
        <img
          className="product-image"
          src={`${product.images[0].slice(1)}`}
          alt=""
        />
      </div>
      <div>
        <span id="stars"></span>

        <h4>{product.name}</h4>
        <div>
          <span className="real-price">₦{product.price} </span>
          <span className="crossed-price">₦600</span>
        </div>
      </div>
    </article>
  );
};
