import React from "react";
import { Link } from "react-router-dom";
import { StyledCard } from "../style/components/card";

const Card = ({ img, title, text, view, id }) => {
  return (
    <StyledCard id={id}>
      <Link to={`/book/` + id}>
        <div className="card_img">
          <img src={img} className="card_img-item" alt="card-img" />
        </div>
      </Link>
      <Link to={`/book/` + id} className="card_link">
        <h3 className="card_title">{title}</h3>
      </Link>
      <p className="card_text">{text}</p>
      <p className="card_view">{view} ta fikrlar</p>
    </StyledCard>
  );
};

export default Card;
