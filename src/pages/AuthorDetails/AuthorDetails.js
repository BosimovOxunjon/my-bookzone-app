import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BsFillBookmarkFill } from "react-icons/bs";
import keys from "../../configs";
import AuthorImg from "../../assets/images/authors/author.png";
import { StyledAuthorDetails } from "../../style/pages/authorDetails";

const AuthorDetails = () => {
  const { id } = useParams();
  const [author, setAuthor] = useState({
    payload: {},
  });

  const fetchBooks = async () => {
    const urlAuthor = `${keys.BACKEND_API}/api/authors/${id}`;
    const { data } = await axios.get(urlAuthor);
    return data;
  };
  useEffect(() => {
    fetchBooks().then((data) => {
      setAuthor(data);
    });
  }, []);
  console.log(id);
  console.log(author);
  return (
    <StyledAuthorDetails>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="img_wrapper">
              <img src={AuthorImg} alt="book-details" />
            </div>
            <div className="author_date">
              <p className="author_date-text">Tavallud sanasi</p>
              <p className="author_date-of-birth">
                {/* {author.payload.date_of_birth} */}
              </p>
              <p className="author_date-text">Toshkent, Uzbekistan</p>
            </div>
          </div>
          <div className="col">
            <h1 className="author_title">
              {author.payload.firstName + " " + author.payload.lastName}
            </h1>
            <p className="author_text">
              O'tkir Hoshimov 1941 yil Toshkent viloyatining Zangiota (hozirgi
              Chilonzor) tumanidagi Do'mbiravot mavzeida tug'ildi. O'. Hoshimov
              mehnat faoliyatini erta boshladi. Toshkent Davlat universiteti
              (hozirgi O'zbekiston Milliy universiteti)ning jurnalistika
              kulliyotida o'qish bilan baravar gazeta tahririyatida ishladi.
              1959 yildan 1963 yilgacha “Temiryo'lchi”, “Qizil O'zbekiston”,
              “Transportniy rabochiy” gazetalarida xat tashuvchi, mussaxhih,
              tarjimon bo'lib ishladi. So'ng “Toshkent haqiqati” gazetasida
              adabiy xodim (1963-1966), “Toshkent oqshomi” gazetasida bo'lim
              mudiri (1966-1982), G'. G'ulom nomidagi Adabiyot va san'at
              nashriyotida bosh muharrir o'rinbosari (1982-1985) bo'ldi.
              1985-1995 yillarda “Sharq yulduzi” jurnaliga bosh muharrirlik
              qildi. 1995 yildan 2005 yilgacha O'zbekiston Respublikasi Oliy
              Majlisining Matbuot va axborot qo'mitasi raisi lavozimida ishladi.
              2005 yildan “Teatr“ jurnalida bosh muharrir bo'lib ishladi.
            </p>
            <div className="author_creativy">
              <h2 className="author_creativity-title">
                <BsFillBookmarkFill className="author_creativy-icon" />
                <span>IJODI</span>
              </h2>
              <p className="author_creativy-text">
                Yozuvchining ilk asari 1962-yilda „Po'lat chavandoz“ nomida
                ocherklar to'plami tarzida nashrdan chiqdi. Ammo yozuvchiga
                muvaffaqiyat keltirgan asar 1970-yilda nashr qilingan „Bahor
                qaytmaydi“ qissasi bo'ldi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </StyledAuthorDetails>
  );
};

export default AuthorDetails;
