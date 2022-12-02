import axios from "axios";
import React, { useEffect, useState } from "react";
import BookImg from "../../assets/images/book/book.png";
import { useParams } from "react-router-dom";
import { StyledBookDetails } from "../../style/pages/bookDetails";
import Search from "../Search/Search";

const BookDetails = () => {
  const { id } = useParams();
  const [books, setBooks] = useState({
    payload: { book: {} },
  });
  const fetchBooks = async () => {
    const urlBooks = `https://bookzone-v2.herokuapp.com/api/books/${id}`;
    const { data } = await axios.get(urlBooks);
    return data;
  };
  useEffect(() => {
    fetchBooks().then((data) => {
      setBooks(data);
    });
  }, []);
  console.log(id);
  console.log(books);

  return (
    <StyledBookDetails>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="img_wrapper">
              <img src={BookImg} alt="book-details" />
            </div>
          </div>
          <div className="col">
            <h1 className="title">{books.payload.book.title}</h1>
            <p className="author">
              {/* {books.payload.book.author.firstName +
                " " +
                books.payload.book.author.lastName} */}
            </p>
            <p className="book_info">
              <span>Sahifalar soni: </span> 376
            </p>
            <p className="book_info">
              <span>Chop etilgan:</span> 2021
            </p>
            <p className="book_info">
              <span>Janri:</span> Tarixiy
            </p>
            <p className="book_info">
              <span>Nashriyot:</span> Nihol nashri
            </p>
            {/* <p>{books.payload.book.author.lastName}</p> */}
            <p className="description">
              Toliq ma'lumot <hr />
            </p>
            <p className="book_description">{books.payload.book.description}</p>
          </div>
        </div>
      </div>
    </StyledBookDetails>
  );
};

export default BookDetails;
