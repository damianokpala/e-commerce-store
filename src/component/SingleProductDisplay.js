import React from "react";
import "./SingleProductDisplay.css";
import { useData } from "../DataContext";
import { useParams } from "react-router-dom";
import { PageTitle } from "./PageTitle";

export const SingleProductDisplay = () => {
  const { productId } = useParams();
  const { data, addToCart } = useData();

  const product = data.categories
    .flatMap((category) => category.products)
    .find((product) => product.id.toString() === productId);

  return (
    <>
      <PageTitle isProduct={true} productName={product.name} />
      <section className="singleproductdisplay-section">
        <div className="container">
          <div className="product-image-display">
            <div>
              <img
                className="main-image"
                src={product.images[0].slice(1)}
                alt=""
              />
              <div className="sub-display">
                <img src={product.images[1].slice(1)} alt="" />
                <img src={product.images[3].slice(1)} alt="" />
                <img src={product.images[2].slice(1)} alt="" />
              </div>
            </div>
          </div>
          <div className="product-details">
            <span className="add-wishlist"></span>
            <div>
              <h2 className="product-title">{product.name}</h2>
              <div className="product-id">Product id: {product.id}</div>
            </div>
            <div className="product-star">Rating {product.rating}</div>
            <div className="product-price">₦430.00</div>
            <div className="product-description">{product.description}</div>
            <div className="product-colors">
              Avaliable color
              <div className="product-color">
                {product.colors.map((color) => (
                  <span className={color.toLowerCase()}>{color}</span>
                ))}
              </div>
            </div>
            <div className="product-number">{product.availability}</div>
            <div className="product-addcart-increment">
              <span>-</span>
              <span>1</span>
              <span>+</span>
            </div>

            <div className="btns">
              <button>+ Add to Cart</button>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
