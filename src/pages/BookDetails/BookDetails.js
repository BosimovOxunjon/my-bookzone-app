import React from "react";
import BookImg from "../../assets/images/book/book.png";
import { StyledBookDetails } from "../../style/pages/bookDetails";

const BookDetails = () => {
  return (
    <StyledBookDetails>
      <div className="row">
        <div className="col">
          <div className="img_wrapper">
            <img src={BookImg} alt="book-details" />
          </div>
        </div>
        <div className="col">hello world</div>
      </div>
    </StyledBookDetails>
  );
};

export default BookDetails;
