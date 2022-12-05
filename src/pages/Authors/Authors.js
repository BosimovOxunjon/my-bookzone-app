import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from "../../components/Card";
import { TiBook } from "react-icons/ti";
import { BiHeadphone } from "react-icons/bi";
import HomeImg from "../../assets/images/home/home.png";
import { StyledHome } from "../../style/pages/home";
import keys from "../../configs";
import Search from "../Search/Search";
import { Link } from "react-router-dom";

const Authors = () => {
  const [authors, setAuthors] = useState({ payload: [] });
  const fetchBooks = async () => {
    const urlAuthors = `${keys.BACKEND_API}/api/authors`;
    const { data } = await axios.get(urlAuthors);
    console.log(data);
    return data;
  };
  useEffect(() => {
    fetchBooks().then((data) => {
      setAuthors(data);
    });
  }, []);
  console.log(authors);
  return (
    <>
      <Search />
      <StyledHome>
        <div className="container">
          <div className="row">
            <h2 className="title">Asosiy kategoriyalar</h2>
            <ul className="links_list">
              <li>
                <a href="#" className="links_item">
                  temuriylar davri
                </a>
              </li>
              <li>
                <a href="#" className="links_item">
                  jadid adabiyoti
                </a>
              </li>
              <li>
                <a href="#" className="links_item">
                  sovet davri
                </a>
              </li>
              <li>
                <a href="#" className="links_item">
                  mustaqillik davri
                </a>
              </li>
            </ul>
          </div>
          <div className="row">
            <div className="col card_wrapper">
              {authors.payload.map((item) => {
                return (
                  <>
                    <div className="card" id={item?._id}>
                        <Link to={`/author/` + item?._id}>
                      <img src={HomeImg} alt="author-img" />
                        </Link>
                      <div className="card_text-wrapper">
                        <h3 className="card_title">
                          {item?.firstName + " " + item?.lastName}
                        </h3>
                        <p className="card_text">
                          {item?.date_of_birth.slice(0, 4)}
                        </p>
                      </div>
                      <div className="card_icon-wrapper">
                        <span>
                          <TiBook className="card_icon" /> 34
                        </span>
                        <span>
                          <BiHeadphone className="card_icon" /> 13
                        </span>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </StyledHome>
    </>
  );
};

export default Authors;
