import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer>
      <div className="footer-head">
        <div className="container">
          <div>
            <span className="logo">SHELIS</span>
            <p>
              Best information about the company goes here. Laughing out loud!
            </p>

            <ul>
              <li>
                <a href="">
                  <img
                    src="/icons/entypo-social_facebook-with-circle.svg"
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    src="/icons/entypo-social_instagram-with-circle.svg"
                    alt=""
                  />
                </a>
              </li>

              <li>
                <a href="#">
                  <img
                    src="/icons/entypo-social_linkedin-with-circle.svg"
                    alt=""
                  />
                </a>
              </li>

              <li>
                <a href="#">
                  <img
                    src="/icons/entypo-social_youtube-with-circle.svg"
                    alt=""
                  />
                </a>
              </li>
            </ul>
          </div>

          <nav>
            <h3>About</h3>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Find store</a>
              </li>
              <li>
                <a href="#">Categories</a>
              </li>
              <li>
                <a href="#">Blogs</a>
              </li>
            </ul>
          </nav>

          <nav>
            <h3>Patnership</h3>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Find store</a>
              </li>
              <li>
                <a href="#">Categories</a>
              </li>
              <li>
                <a href="#">Blogs</a>
              </li>
            </ul>
          </nav>

          <nav>
            <h3>Information</h3>
            <ul>
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Money Refunnd</a>
              </li>
              <li>
                <a href="#">Shipping</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
            </ul>
          </nav>

          <nav>
            <h3>For Users</h3>
            <ul>
              <li>
                <a href="#">Login</a>
              </li>
              <li>
                <a href="#">Register</a>
              </li>
              <li>
                <a href="#">Settings</a>
              </li>
              <li>
                <a href="#">My Orders</a>
              </li>
            </ul>
          </nav>

          <nav className="downloads">
            <h3>Get App</h3>
            <ul>
              <li>
                <img src="/icons/mage_playstore.svg" alt="" />
                <span>
                  <span>Download from</span> Playstore
                </span>
              </li>
              <li>
                <img src="/icons/tdesign_logo-apple-filled.svg" alt="" />
                <span>
                  <span>Get on</span> AppleStore
                </span>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="footer-note">SHELIS &copy; 2024 All Rights Reserved</div>
    </footer>
  );
};
