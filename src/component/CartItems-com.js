import React, { useState, useEffect } from "react";
import "./CartItems.css";
import { useData } from "../DataContext";
import { useNavigate } from "react-router-dom";

export const CartItemsCom = () => {
  const [amount, setAmount] = useState([]);
  const [sum, setSum] = useState(0);

  const { cart, removeFromCart } = useData();
  const navigate = useNavigate();

  const handleToProducts = () => {
    navigate("/products");
  };
  const handleToCheckout = () => {
    navigate("/checkout");
  };

  // Update amount whenever cart changes
  useEffect(() => {
    const newAmounts = cart.map((item) => item.price);
    setAmount(newAmounts);
  }, [cart]);

  // Update sum whenever amount changes
  useEffect(() => {
    const newSum = amount.reduce((acc, st) => acc + st, 0);
    setSum(newSum);
  }, [amount]);

  return (
    <div className="cartitems-section">
      <div className="container">
        <div className="cart-heading">
          <h3>Your Cart Items</h3>
          <span onClick={handleToProducts}>Back to Shopping</span>
        </div>

        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.length === 0 ? (
              <tr>
                <td colSpan="4">Your cart is empty</td>
              </tr>
            ) : (
              cart.map((product, index) => (
                <tr key={index}>
                  <td>
                    <img
                      src={product.images[0]}
                      className="product-image"
                      alt="Product"
                    />
                    <div>
                      <h4>{product.name}</h4>
                      <button
                        onClick={() => removeFromCart(product.id)}
                        className="remove-btn"
                      >
                        Remove
                      </button>
                    </div>
                  </td>
                  <td>₦{product.price}</td>
                  <td>
                    <span className="quantity-btn">-</span>
                    <input
                      type="text"
                      className="quantity-input"
                      value="1"
                      disabled
                    />
                    <span className="quantity-btn">+</span>
                  </td>
                  <td>₦{product.price}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        <div className="product-summary">
          {cart.length > 0 && (
            <>
              <div className="col-1">
                <div className="summary-title">
                  Sub-total: <span>₦{sum}</span>
                </div>
                <span className="note">
                  Tax and Shipping cost will be calculated later
                </span>
              </div>
              <div onClick={handleToCheckout} className="btn">
                Checkout
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
