import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section id="hero-section" className="hero-section">
      <div className="container">
        <section className="col-1">
          <div>
            <h1>Elevate your style with luxury outfits</h1>
            <p>Immerse Yourself in Exquisite Designs and Impeccable</p>
            <Link to="products">Shop Now</Link>
          </div>

          <div>
            <p>
              "Products finely crafted clothing places influenced from popularr
              culture and street fashion and high-end brands."
            </p>

            <div className="hero-stats">
              <span>
                <span>25k+</span>
                <span>HAPPY CUSTOMERS</span>
              </span>

              <span>
                <span>5k+</span>
                <span>MONTHLY ORDERS</span>
              </span>
            </div>
          </div>
        </section>
        <section>
          <div>
            <img src="./products/hero.jpg" alt="" />
          </div>
        </section>
      </div>
    </section>
  );
};
