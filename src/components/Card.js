import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { StyledCard } from "../style/components/card";

const Card = ({ img, title, text, view, id }) => {
  const [books, setBooks] = useState({ payload: { docs: [] } });
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
  return (
    <StyledCard id={id}>
      <Link to={`/book/` + id}>
        <div className="card_img">
          <img src={img} className="card_img-item" alt="card-img" />
        </div>
      </Link>
      <h3 className="card_title">{title}</h3>
      <p className="card_text">{text}</p>
      <p className="card_view">{view} ta fikrlar</p>
    </StyledCard>
  );
};

export default Card;
