import React from "react";
import { Products } from "./Products";
import { Filters } from "./Filters";
import { SingleProductView } from "./SingleProductView";

import "./ProductDisplay.css";
import { useNavigate } from "react-router-dom";
import { useData } from "../DataContext";

export const ProductDisplay = () => {
  const { data } = useData();
  // const images = [];

  // data.categories.forEach((category) => {
  //   category.products.forEach((product) => {
  //     images.push(product.images[0]);
  //   });
  // });

  return (
    <div className="productdisplay-section">
      <div className="container">
        <div>
          <Filters />
        </div>
        <div>
          <span className="sorting">
            Sort by:
            <select>
              <option value="all" key="1">
                All
              </option>
              <option value="female" key="1">
                Female
              </option>
              <option value="male" key="1">
                Male
              </option>
            </select>
          </span>

          <section className="product-section">
            {data.categories.map((category) =>
              category.products.map((product) => (
                <SingleProductView product={product} />
              ))
            )}
          </section>

          <div className="navigation">
            <span>-</span>
            <span>1</span>
            <div>of</div>
            <span>14</span>
            <span>+</span>
          </div>
        </div>
      </div>
    </div>
  );
};
