import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import BgImg from "../../assets/images/signUp/signup.png";
import MainImg from "../../assets/images/signUp/main.png";
import { Form, Input, Button, Radio } from "antd";
import keys from "../../configs";
import { StyledSignUp } from "../../style/pages/signUp";

const SignUp = () => {
  const [phone, setPhone] = useState({});
  const [value, setValue] = useState();
  // const onFinish = (e) => {
  //   console.log(e);
  // };

  const handleSignUp = async (values) => {
    const { data } = await axios.post(`${keys.BACKEND_API}/api/sign-up`, {
      ...values,
    });
    console.log(data);
    console.log(e);
    return data;
  };

  console.log(phone);
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
          <Form onFinish={handleSignUp} className="form_wrapper">
            <h2 className="title">Sign Up</h2>
            <p className="text">
              Already have an account.{" "}
              <Link to={`/signin`} className="link">
                Log in
              </Link>
            </p>
            <Form.Item name="firstName">
              <Input
                className="form_input"
                type="text"
                name="Name"
                placeholder="First name"
                required
              />
            </Form.Item>
            <Form.Item name="lastName">
              <Input
                className="form_input"
                type="text"
                placeholder="Last name"
                required
              />
            </Form.Item>
            <Form.Item name="phone">
              <PhoneInput
                className="form_input form_input-phone"
                defaultCountry="UZ"
                international
                placeholder="Enter phone number"
                value={value}
                onChange={setValue}
              />
            </Form.Item>
            <Form.Item name="email">
              <Input
                className="form_input"
                type="mail"
                name="mail"
                placeholder="Email"
                required
              />
            </Form.Item>
            <Form.Item name="role">
              <Radio.Group>
                <Radio value="reader"> Reader </Radio>
                <Radio value="author"> Author </Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item name="password">
              <Input.Password
                className="form_input"
                style={{ padding: "15px" }}
                type="password"
                name="password"
                placeholder="Password"
                required
              />
            </Form.Item>
            <Form.Item>
              <Button className="form_submit" htmlType="submit">
                Next step
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </StyledSignUp>
  );
};

export default SignUp;
