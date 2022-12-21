import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { VscListSelection } from "react-icons/vsc";
import Logo from "../../assets/images/logo/Badiiyat.png";
import ProfileImg from "../../assets/images/profile/profile.png";
import { StyledHeader } from "../../style/pages/header";

const Header = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window
      .matchMedia("(max-width: 768px)")
      .addEventListener("change", (e) => setShow(e.matches));
  }, []);
  return (
    <StyledHeader>
      <div className="container">
        <Link to="/home" className="logo">
          <img src={Logo} alt="logo_img" />
        </Link>
        <nav
          style={{
            display: !show ? "flex" : "none",
            visibility: !show ? "visible" : "hidden",
            opacity: !show ? "1" : "0",
            transition: "1.7s",
          }}
        >
          <ul className="navbar_list">
            <li className="nav_item">
              <Link to={`/home`} className="nav_link">
                Bosh sahifa
              </Link>
            </li>
            <li className="nav_item">
              <Link to={`/authors`} className="nav_link">
                Adiblar
              </Link>
            </li>
            <li className="nav_item">
              <Link to={`/addbook`} className="nav_link">
                Kitob qo'shish
              </Link>
            </li>
            {/* <li className="nav_item">
              <Link to={`/addauthor`} className="nav_link">
                Adib qo'shish
              </Link>
            </li> */}
          </ul>
        </nav>
        <button className="btn" onClick={() => setShow(!show)}>
          <VscListSelection />
        </button>
        <div className="header_profile">
          <Link to={`/profile`}>
            <div className="img_wrapper">
              <img src={ProfileImg} className="img" alt="profie-img" />
            </div>
          </Link>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
