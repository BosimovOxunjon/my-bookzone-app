import React from "react";
import AddAuthorImg from "../../assets/images/addauthor/avloniy.png";
import { StyledAddBook } from "../../style/pages/addBook";

const AddAuthor = () => {
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
            />{" "}
            <br />
            <input
              className="addbook_form-input"
              type="text"
              name="pages"
              placeholder="Pages"
            />{" "}
            <br />
            <input
              className="addbook_form-input"
              type="number"
              name="date"
              placeholder="Year"
            />{" "}
            <br />
            <input
              className="addbook_form-input"
              type="number"
              name="price"
              placeholder="Price"
            />{" "}
            <br />
            <input
              className="addbook_form-input"
              type="text"
              name="country"
              placeholder="Country"
            />{" "}
            <br />
            <input
              className="addbook_form-input"
              type="text"
              name="author"
              placeholder="Author"
            />{" "}
            <br />
            <textarea
              className="addbook_form-input addbook_form-text"
              name="description"
              id=""
              cols="30"
              rows="5"
              placeholder="Description"
            ></textarea>{" "}
            <br />
            <input
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

export default AddAuthor;