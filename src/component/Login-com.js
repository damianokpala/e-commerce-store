import React from "react";
import "./Login.css";

export const LoginCom = () => {
  return (
    <div className="login-section">
      <div className="login-container">
        <div className="display-image">
          <img src="./images/download.jpeg" alt="" />
        </div>
        <div>
          <h3>Login</h3>
          <form>
            <div className="form-group">
              <label id="email">Email</label>
              <input type="email" />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input type="password" />
              <span>
                <a href="#">Forgot Password</a>
              </span>
            </div>

            <button className="btn">Login</button>
          </form>

          <div className="divider">Or</div>

          <div className="socials">
            <div className="btn">
              <img
                src="./icons/entypo-social_facebook-with-circle.svg"
                alt=""
              />
              <a href="Login">Login with Instagram</a>
            </div>

            <div className="btn">
              <img
                src="./icons/entypo-social_instagram-with-circle.svg"
                alt=""
              />
              <a href="Login">Login with Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
