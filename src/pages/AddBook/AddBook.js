import axios from "axios";
import React, { useState } from "react";
import AddBookImg from "../../assets/images/addbook/book.png";
import { Form, Input, Button, Radio } from "antd";
import keys from "../../configs";
import { StyledAddBook } from "../../style/pages/addBook";

const AddBook = () => {
  const [newBooks, setNewBooks] = useState({});
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
    if (newBooks && newBooks.success == true) {
      return window.location.replace("/success");
    }
    setNewBooks(data);
  };

  console.log(newBooks);
  return (
    <StyledAddBook>
      <div className="row">
        <div className="col">
          <div className="addbook_img">
            <img className="addbook_img-item" src={AddBookImg} alt="book-img" />
          </div>
          <h3 className="addbook_title">Ulug'bek xazinasi</h3>
          <button className="addbook_btn">Upload cover</button>
        </div>
        <div className="col">
          <h1 className="title">Add book</h1>
          <Form onFinish={onFinish} className="addbook_form">
            <Form.Item name="title">
              <Input
                className="addbook_form-input"
                placeholder="Title"
                required
              />
            </Form.Item>
            <Form.Item name="pages">
              <Input
                className="addbook_form-input"
                type="number"
                name="pages"
                placeholder="Pages"
                required
              />
            </Form.Item>
            <Form.Item name="year">
              <Input
                className="addbook_form-input"
                type="number"
                name="date"
                placeholder="Year"
                required
              />
            </Form.Item>
            <Form.Item name="price">
              <Input
                className="addbook_form-input"
                type="number"
                name="price"
                placeholder="Price"
                required
              />
            </Form.Item>
            <Form.Item name="country">
              <Input
                className="addbook_form-input"
                type="text"
                name="country"
                placeholder="Country"
                required
              />
            </Form.Item>
            <Form.Item name="description">
              <Input.TextArea
                className="addbook_form-input addbook_form-text"
                name="description"
                id=""
                cols="30"
                rows="5"
                placeholder="Description"
                required
              ></Input.TextArea>
            </Form.Item>
            <Form.Item name="category">
              <Radio.Group>
                <Radio value="classic"> Classic </Radio>
                <Radio value="biography"> Biography </Radio>
                <Radio value="science"> Science </Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item>
              <Button
                block
                type="primary"
                className="addbook_btn addbook_form-btn"
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

export default AddBook;
