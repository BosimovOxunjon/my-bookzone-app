import React from "react";
import AddBookImg from "../../assets/images/addbook/book.png";
import { StyledAddBook } from "../../style/pages/addBook";

const AddBook = () => {
  return (
    <StyledAddBook>
      <div className="row">
        <div className="col">
          <div className="addbook_img">
            <img className="addbook_img-item" src={AddBookImg} alt="book-img" />
          </div>
          <h3 className="addbook_title">
            Ulug'bek xazinasi
          </h3>
          <button className="addbook_btn">
            upload cover
          </button>
        </div>
        <div className="col">
            <h1>
                Add book
            </h1>
            <form>
                <input type="text" name="title" placeholder="Title" /> <br />
                <input type="text" name="pages" placeholder="Pages" /> <br />
                <input type="number" name="date" placeholder="Year" /> <br />
                <input type="number" name="price" placeholder="Price" /> <br />
                <input type="text" name="country" placeholder="Country" /> <br />
                <input type="text" name="author" placeholder="Author" /> <br />
                <textarea name="description" id="" cols="30" rows="10" placeholder="Description"></textarea>
            </form>
        </div>
      </div>
    </StyledAddBook>
  );
};

export default AddBook;
