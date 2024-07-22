import React from "react";
import "./Products.css";
import { SingleProductView } from "./SingleProductView";
import { useData } from "../DataContext";
import { useNavigate } from "react-router-dom";

export const Products = () => {
  const navigate = useNavigate();
  // const { data } = useData();
  // const images = [];

  // const handleProductClick = (productId) => {
  //   navigate(`/product/${productId}`);
  // };

  // data.categories.forEach((category) => {
  //   category.products.forEach((product) => {
  //     images.push(product.images[0]);
  //   });
  // });

  return (
    <section id="products-section" className="products-section">
      <div className="container">
        <h2>Our Products</h2>

        <ul className="tabs">
          <li className="tab active">All</li>
          <li className="tab">New Arrivals</li>
          <li className="tab">Best Seller</li>
          <li className="tab">Discount</li>
        </ul>

        <section id="products">
          {/* {images.map((data) => (
            <SingleProductView
              data={data}
              handleProductClick={handleProductClick}
            />
          ))} */}
        </section>

        <button id="more-products">View All Products</button>
      </div>
    </section>
  );
};
