import React from "react";
import "./Testimonials.css";

export const Testimonials = () => {
  return (
    <section id="testimonial-section" className="testimonial-section">
      <div className="container">
        <div>
          {/* <img style="width: 100%" src="./images/OIP.jpg" alt="" /> */}
          <img src="./images/OIP.jpg" alt="" />
        </div>
        <section>
          <article>
            <span>
              <img src="./icons/teenyicons_quote-outline-1.svg" alt="" />
            </span>
            <blockquote>
              I never thought shopping online could be this enjoyable. It's
              organized and every click feels purposeful. Finally, an ecommerce
              experience that feels as good as it looks!
            </blockquote>
            <span>
              <img src="./icons/teenyicons_quote-outline.svg" alt="" />
            </span>
            <cite>
              <img src="" alt="" />
              <div>
                <span>Fatma Hamid</span>
                <span>CEO</span>
              </div>
            </cite>
          </article>

          <div className="more-testimonials">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </section>
      </div>
    </section>
  );
};
