import React, { useState } from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  const handleCart = () => {
    navigate("/cart");
  };

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?query=${searchQuery}`);
  };

  return (
    <header>
      <div className="header-message">
        <p>Free Delivery On Order Over $150. Don't Miss Discount</p>
        <span id="closeBtn" className="btn">
          X
        </span>
      </div>

      <nav className="mobile-nav">
        <div>
          <span className="btn">
            <img src="/icons/" alt="" />
          </span>

          <Link to="/">SHELIS</Link>
        </div>

        <ul>
          <li className="btn">
            <i>
              <img src="/icons/search.svg" alt="" />
            </i>
          </li>
          <li className="btn">
            <i>
              <img src="/icons/account.svg" alt="" />
            </i>
          </li>
          <li className="btn">
            <i>
              <img src="/icons/ph_heart.svg" alt="" />
            </i>
          </li>
          <li className="btn" onClick={handleCart}>
            <i>
              <img src="/icons/solar_bag-4-linear.svg" alt="" />
            </i>
          </li>
        </ul>
      </nav>

      <nav className="header-top-nav">
        <div className="col-1">
          <span className="btn">
            <img src="/icons/ep_location.svg" alt="" />
            Location
          </span>

          <span className="btn">
            <img src="/icons/fluent_person-support-28-regular.svg" alt="" />
            Support
          </span>
        </div>

        <div className="col-2">
          Open Doors to a world of fashion - <a href="#">Discover More</a>
        </div>

        <div className="col-3">
          <span className="btn">
            NGN
            <i>
              <img src="/icons/ph_caret-down.svg" alt="" />
            </i>
          </span>
          <span className="btn">
            English
            <i>
              <img src="/icons/ph_caret-down.svg" alt="" />
            </i>
          </span>
        </div>
      </nav>

      <nav className="header-nav">
        <div className="container">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li className="btn">
              View Collections
              <i>
                <img src="/icons/ph_caret-down.svg" alt="" />
              </i>
            </li>
            <li>
              <Link to="/products">View all our products</Link>
            </li>
          </ul>

          <Link className="logo" to="/">
            SHELIS
          </Link>

          <ul>
            <li className="btn">
              <i>
                <img src="/icons/search.svg" alt="" />
              </i>
              Search
            </li>
            <li className="btn">
              <i>
                <img src="/icons/account.svg" alt="" />
              </i>
              Account
            </li>
            <li className="btn">
              <i>
                <img src="/icons/ph_heart.svg" alt="" />
              </i>
              Wishlist
            </li>
            <li className="btn" onClick={handleCart}>
              <i>
                <img src="/icons/solar_bag-4-linear.svg" alt="" />
              </i>
              Cart
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
