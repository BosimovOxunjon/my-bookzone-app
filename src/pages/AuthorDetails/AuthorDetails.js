import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TiBook } from "react-icons/ti";
import { BiHeadphone } from "react-icons/bi";
import { IoMdPhonePortrait } from "react-icons/io";
import { ImQuotesLeft } from "react-icons/im";
import keys from "../../configs";
import BookImg from "../../assets/images/book/book.png";
import { StyledBookDetails } from "../../style/pages/bookDetails";

const AuthorDetails = () => {
  const { id } = useParams();
  const [books, setBooks] = useState({
    payload: {},
  });
  const fetchBooks = async () => {
    const urlBooks = `${keys.BACKEND_API}/api/authors/${id}`;
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
            <p className="description">
              Toliq ma'lumot <hr />
            </p>
            <p className="book_description">{books.payload.book.description}</p>
            <p style={{ color: "#C9AC8C" }}>Mavjud formatlar</p>
            <div className="book_types">
              <div className="book_types-wrapper">
                <div className="book_types-item">
                  <TiBook className="book_icon" />
                  <p>Qog'oz kitob</p>
                  <span>27 000 so'm</span>
                </div>
                <div className="book_types-item">
                  <BiHeadphone className="book_icon" />
                  <p>Audiokitob</p>
                  <span>6:23 soat</span>
                </div>
                <div className="book_types-item">
                  <IoMdPhonePortrait className="book_icon" />
                  <p>Elektron</p>
                  <span>pdf, epub</span>
                </div>
                <div />
              </div>
              <button className="book_types-btn">Javonga qo'shish</button>
            </div>
          </div>
        </div>
        <section className="quotes">
          <ul className="quotes_link">
            <li>
              <a className="quotes_link-item" href="#">
                Muallif haqida
              </a>
            </li>
            <li>
              <a className="quotes_link-item" href="#">
                Kitobdan iqtiboslar
              </a>
            </li>
            <li>
              <a className="quotes_link-item" href="#">
                Kitoblar taqrizi
              </a>
            </li>
          </ul>
          <div className="row quotes_info">
            <div className="quotes_info-link">
              <ImQuotesLeft className="quotes_icon" />
              Inson bolasi ne kunlarni ko‘rmaydi?! Har bir odam o‘z g‘ami bilan
              bo‘lsa, hayotdan ko‘z yumib ketganlarga umr bo‘yi motam tutib
              o‘tsa, bu moddiy olam shu kunlarga yetolarmidi? Hayot to‘lqini
              ojizlarni qirg‘oqqa irg‘itib tashlaydi. Oqimga qarshi suza
              olganlar, to‘lqinni egarlaganlargina ertangi kunga yetib keladi.
            </div>
            <div className="quotes_info-link">
              <ImQuotesLeft className="quotes_icon" />
              Yer kurrasida chumolidek mehnat qilayotganlardan ko‘ra, tuproq
              tagida yotganlar ko‘p. Yer qatlami odam suyaklariga to‘lib ketgan.
            </div>
          </div>
        </section>
      </div>
    </StyledBookDetails>
  );
};

export default AuthorDetails;
