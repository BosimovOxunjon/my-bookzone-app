import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import BgImg from "../../assets/images/signUp/signup.png";
import MainImg from "../../assets/images/signIn/Frame.svg";
import { Form, Input, Button } from "antd";
import keys from "../../configs";
import { StyledSignUp } from "../../style/pages/signUp";

const SignIn = () => {
  const handleSignIn = async (values) => {
    const { data } = await axios.post(`${keys.BACKEND_API}/api/login`, {
      ...values,
    });
    console.log(data);
    if (data.success == true) {
      window.location.replace("/home");
    }
    return data;
  };
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
          <Form onFinish={handleSignIn} className="form_wrapper">
            <h2 className="title">Login</h2>
            <p className="text">
              Do not have an account?{" "}
              <Link to={`/signup`} className="link">
                Sign Up
              </Link>
            </p>
            <Form.Item name="email">
              <Input
                className="form_input"
                type="email"
                name="mail"
                placeholder="Email"
                required
              />
            </Form.Item>
            <Form.Item name="password">
              <Input.Password
                className="form_input"
                name="password"
                placeholder="Password"
                required
              />
            </Form.Item>
            <Form.Item>
              <Button className="form_submit" htmlType="submit" name="button">
                Log in
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </StyledSignUp>
  );
};

export default SignIn;
