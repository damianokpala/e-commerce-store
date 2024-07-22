import React from "react";
import "./Newsletter.css";

export const Newsletter = () => {
  return (
    <section id="newsletter-section" className="newsletter-section">
      <div className="container">
        <h3>Subscribe on our newsletter</h3>
        <p>
          Get daily news on upcoming offers and collections from many brands all
          over the world
        </p>

        <form action="">
          <span>
            <i></i>
            <input type="text" />
          </span>
          <button>Subscribe</button>
        </form>
      </div>
    </section>
  );
};
