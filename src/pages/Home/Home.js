import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from "../../components/Card";
import HomeImg from "../../assets/images/home/home.png";
import { StyledHome } from "../../style/pages/home";
import Search from "../Search/Search";

const Home = () => {
  const [books, setBooks] = useState({ payload: { docs: [] } });
  const fetchBooks = async () => {
    const urlBooks = "https://bookzone-v2.herokuapp.com/api/books";
    const { data } = await axios.get(urlBooks);
    return data;
  };
  useEffect(() => {
    fetchBooks().then((data) => {
      setBooks(data);
    });
  }, []);
  console.log(books);
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
              {books.payload.docs.map((item) => {
                return (
                  <>
                    <Card
                      key={item._id}
                      id={item._id}
                      img={item?.imageLink || HomeImg}
                      title={item?.title}
                      text={item?.author.firstName}
                      view={item?.views}
                    />
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

export default Home;
