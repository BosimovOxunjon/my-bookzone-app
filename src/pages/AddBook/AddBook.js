import axios from "axios";
import React, { useState } from "react";
import AddBookImg from "../../assets/images/addbook/book.png";
import keys from "../../configs";
import { StyledAddBook } from "../../style/pages/addBook";

const AddBook = () => {
  const [newBooks, setNewBooks] = useState({});
  const fetchBooks = async () => {
    const { data } = await axios.post(keys.BACKEND_API, {
      method: "POST",
      body: new FormData(document.getElementsByClassName(".addbook_form")),
    });
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
          <form className="addbook_form">
            <input
              className="addbook_form-input"
              type="text"
              name="title"
              placeholder="Title"
              required
            />{" "}
            <br />
            <input
              className="addbook_form-input"
              type="number"
              name="pages"
              placeholder="Pages"
              required
            />{" "}
            <br />
            <input
              className="addbook_form-input"
              type="number"
              name="date"
              placeholder="Year"
              required
            />{" "}
            <br />
            <input
              className="addbook_form-input"
              type="number"
              name="price"
              placeholder="Price"
              required
            />{" "}
            <br />
            <input
              className="addbook_form-input"
              type="text"
              name="country"
              placeholder="Country"
              required
            />{" "}
            <br />
            <input
              className="addbook_form-input"
              type="text"
              name="author"
              placeholder="Author"
              required
            />{" "}
            <br />
            <textarea
              className="addbook_form-input addbook_form-text"
              name="description"
              id=""
              cols="30"
              rows="5"
              placeholder="Description"
              required
            ></textarea>{" "}
            <br />
            <input
              onSubmit={() => fetchBooks()}
              className="addbook_btn"
              type="submit"
              name="submit"
              value="Create"
            />
          </form>
        </div>
      </div>
    </StyledAddBook>
  );
};

export default AddBook;
