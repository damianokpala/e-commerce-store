import React from "react";
import "./PageTitle.css";
import { Link, useNavigate } from "react-router-dom";

export const PageTitle = ({ isProduct = false, productName }) => {
  const navigate = useNavigate();

  const handleToProduct = () => {
    navigate("/products");
  };
  return (
    <div className="container pagetitle">
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            {isProduct ? (
              <span onClick={handleToProduct}>Products</span>
            ) : (
              <span>Products</span>
            )}
          </li>

          {isProduct ? <a href="#">{productName}</a> : ""}
        </ul>
      </nav>
      {isProduct ? <h3>{productName}</h3> : <h3>Products</h3>}
    </div>
  );
};
