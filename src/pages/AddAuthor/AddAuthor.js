import axios from "axios";
import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import AddAuthorImg from "../../assets/images/addauthor/avloniy.png";
import { StyledAddBook } from "../../style/pages/addBook";
import TextArea from "antd/es/input/TextArea";
import keys from "../../configs";

const AddAuthor = () => {
  const [newAuthors, setNewAuthors] = useState({});
  const onFinish = async (e) => {
    const configs = {
      headers: {
        authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      `${keys.BACKEND_API}/api/books`,
      e,
      configs
    );
    if (newAuthors && newAuthors.success == true) {
      return window.location.replace("/success");
    }
    setNewAuthors(data);
  };

  console.log(newAuthors);
  return (
    <StyledAddBook>
      <div className="row">
        <div className="col">
          <div className="addbook_img">
            <img
              className="addbook_img-item"
              src={AddAuthorImg}
              alt="book-img"
            />
          </div>
          <h3 className="addbook_title">Ulug'bek xazinasi</h3>
          <button className="addbook_btn">Upload image</button>
        </div>
        <div className="col">
          <h1 className="title">Add author</h1>
          <Form onFinish={onFinish} className="addbook_form">
            <Form.Item name="firstName">
              <Input
                className="addbook_form-input"
                type="text"
                placeholder="First name"
                required
              />
            </Form.Item>
            <Form.Item name="lastName">
              <Input
                className="addbook_form-input"
                type="text"
                placeholder="Last name"
                required
              />
            </Form.Item>
            <Form.Item name="date_of_birth">
              <Input
                className="addbook_form-input"
                type="number"
                placeholder="Date of birth"
                required
              />
            </Form.Item>
            <Form.Item name="date_of_death">
              <Input
                className="addbook_form-input"
                type="number"
                placeholder="Date of death"
                required
              />
            </Form.Item>
            <Form.Item name="country">
              <Input
                className="addbook_form-input"
                type="text"
                placeholder="Country"
                required
              />
            </Form.Item>
            <Form.Item className="description">
              <TextArea
                className="addbook_form-input addbook_form-text"
                id=""
                cols="30"
                rows="5"
                placeholder="Bio"
                required
              ></TextArea>
            </Form.Item>
            <Form.Item>
              <Button
                className="addbook_btn addbook_form-btn"
                type="submit"
                name="submit"
                htmlType="submit"
              >
                Create
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </StyledAddBook>
  );
};

export default AddAuthor;
