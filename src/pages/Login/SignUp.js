import React from "react";
import { Link } from "react-router-dom";
import BgImg from "../../assets/images/signUp/signup.png";
import MainImg from "../../assets/images/signUp/main.png";
import { StyledSignUp } from "../../style/pages/signUp";

const SignUp = () => {
  return (
    <StyledSignUp>
      <div className="container">
        <div className="row">
          <div className="img">
            <div className="img_wrapper">
              <img src={BgImg} className="img_item" alt="background-img" />
              <img src={MainImg} className="img_item" alt="background-img" />
            </div>
          </div>
          <form className="form_wrapper">
            <h2 className="title">Sign Up</h2>
            <p className="text">
              Already have an account.
              {/* <Link to={`/`}>Sign In</Link> */}
            </p>
            <input
              className="form_input"
              type="text"
              name="Name"
              placeholder="First name"
              required
            />{" "}
            <br />
            <input
              className="form_input"
              type="text"
              name="Last name"
              placeholder="Last name"
              required
            />{" "}
            <br />
            <input
              className="form_input"
              type="tel"
              name="phone"
              placeholder="Phone"
              defaultValue="+998"
              pattern="[+]{1}[0-9]{3}[0-9]{2}[0-9]{2}"
              maxLength="13"
              required
            />
            <br />
            <input
              className="form_input"
              type="mail"
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
              value="Next step"
            />
          </form>
        </div>
      </div>
    </StyledSignUp>
  );
};

export default SignUp;
