import React from "react";
import "./Filter.css";

export const Filters = () => {
  return (
    <div className="filers-section">
      <h2>Filters</h2>

      <div>
        <h4>Size</h4>

        <div>
          <div className="sizes">
            <span>XS</span>
            <span>S</span>
            <span>M</span>
            <span>L</span>
            <span>XL</span>
            <span>2X</span>
          </div>
        </div>
      </div>

      <div>
        <h4>Avaliability</h4>

        <div>
          <div>
            <input type="checkbox" /> <label>In Stock (952)</label>
          </div>

          <div>
            <input type="checkbox" /> <label>Out of Stock (23)</label>
          </div>
        </div>
      </div>
      <div>
        <h4>Categories</h4>

        <div>
          <div>
            <input type="checkbox" /> <label>In Stock (952)</label>
          </div>

          <div>
            <input type="checkbox" /> <label>Out of Stock (23)</label>
          </div>
        </div>
      </div>

      <div>
        <h4>Colors</h4>

        <div>
          <div>
            <span>O</span>
            <span>O</span>
            <span>O</span>
            <span>O</span>
            <span>O</span>
          </div>
        </div>
      </div>

      <div>
        <h4>Price Range</h4>

        <div>
          <div>
            <input
              type="range"
              min=""
              max="10"
              minLength="20"
              maxLength="100"
            />
          </div>

          <form>
            <div>
              Min
              <input type="text" />
            </div>
            <div>
              Max
              <input type="text" />
            </div>

            <button>Apply</button>
          </form>
        </div>
      </div>

      <div>
        <h4>Collections</h4>

        <div>
          <div>
            <input type="checkbox" /> <label>Features</label>
          </div>

          <div>
            <input type="checkbox" /> <label>New Arrivals</label>
          </div>

          <div>
            <input type="checkbox" /> <label>Best Seller</label>
          </div>

          <div>
            <input type="checkbox" /> <label>Winter</label>
          </div>

          <div>
            <input type="checkbox" /> <label>Sales</label>
          </div>
        </div>
      </div>

      <div>
        <h4>Tags</h4>

        <div>
          <div>
            <input type="checkbox" /> <label>Dress</label>
          </div>

          <div>
            <input type="checkbox" /> <label>Hats</label>
          </div>

          <div>
            <input type="checkbox" /> <label>Bags</label>
          </div>

          <div>
            <input type="checkbox" /> <label>Shoes</label>
          </div>

          <div>
            <input type="checkbox" /> <label>Jeans</label>
          </div>

          <div>
            <input type="checkbox" /> <label>Sunglasses</label>
          </div>
        </div>
      </div>
    </div>
  );
};
