import React from "react";
import "./Categories.css";
import { Link } from "react-router-dom";

export const Categories = () => {
  return (
    <section id="category-section" className="category-section">
      <div className="container">
        <h2>Shop By Category</h2>
        <section className="">
          <Link to="/contact">
            <img src="./images/th.jpg" alt="" />
            <p>Men Clothes</p>
          </Link>

          <div>
            <img src="./images/th.jpg" alt="" />
            <p>Men Clothes</p>
          </div>

          <div>
            <img src="./images/th.jpg" alt="" />
            <p>Men Clothes</p>
          </div>

          <div>
            <img src="./images/th.jpg" alt="" />
            <p>Men Clothes</p>
          </div>
        </section>
      </div>
    </section>
  );
};
