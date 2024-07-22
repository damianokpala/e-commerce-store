import React from "react";
import "./Deals.css";
import { SingleProductView } from "./SingleProductView";
import { useData } from "../DataContext";

export const Deals = () => {
  const { data } = useData();


  return (
    <section id="deals-section" className="deals-section">
      <div className="container">
        <h2>Deals of the day</h2>

        <section>
          {data.categories.map((category) =>
            category.products.map((product) => (
              <SingleProductView product={product} />
            ))
          )}
        </section>

        <div className="more-deals">
          <span></span>
          <span className="active"></span>
          <span></span>
        </div>
      </div>
    </section>
  );
};
