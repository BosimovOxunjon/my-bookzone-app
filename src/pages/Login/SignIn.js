import React from "react";
import { Link } from "react-router-dom";
import BgImg from "../../assets/images/signUp/signup.png";
import MainImg from "../../assets/images/signIn/Frame.svg";
import { StyledSignUp } from "../../style/pages/signUp";

const SignIn = () => {
  return (
    <StyledSignUp>
      <div className="row">
        <div className="content_img">
          <div className="img_wrapper">
            <img src={BgImg} className="img_item" alt="background-img" />
            <img src={MainImg} className="img_item" alt="background-img" />
          </div>
        </div>
        <div className="content_form">
          <div className="content_form-item"></div>
          <form className="form_wrapper">
            <h2 className="title">Login</h2>
            <p className="text">
              Do not have an account?{" "}
              <Link to={`/signup`} className="link">
                Sign Up
              </Link>
            </p>
            <input
              className="form_input"
              type="email"
              name="mail"
              placeholder="Email"
              required
            />
            <br />
            <input
              className="form_input"
              type="password"
              name="password"
              placeholder="Password"
              required
            />{" "}
            <br />
            <input
              className="form_submit"
              type="submit"
              name="button"
              value="Log in"
            />
          </form>
        </div>
      </div>
    </StyledSignUp>
  );
};

export default SignIn;
