import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { VscListSelection } from "react-icons/vsc";
import Logo from "../../assets/images/logo/Badiiyat.png";
import ProfileImg from "../../assets/images/profile/profile.png";
import { StyledHeader } from "../../style/pages/header";

const Header = () => {
  const [show, setShow] = useState(
    window.matchMedia("(max-width: 768px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setShow(e.matches));
  }, []);
  return (
    <StyledHeader>
      <div className="container">
        <Link to="/" className="logo">
          <img src={Logo} alt="logo_img" />
        </Link>
        <nav>
          <ul
            className="navbar_list"
            style={{
              display: show ? "flex" : "none",
              visibility: "visible",
              opacity: "1",
              transition: "1.7s",
            }}
          >
            <li className="nav_item">
              <Link to={`/home`} className="nav_link">
                Bosh sahifa
              </Link>
            </li>
            <li className="nav_item">
              <a href="#" className="nav_link">
                Nasr
              </a>
            </li>
            <li className="nav_item">
              <a href="#" className="nav_link">
                Nazm
              </a>
            </li>
            <li className="nav_item">
              <a href="#" className="nav_link">
                Maqolalar
              </a>
            </li>
            <li className="nav_item">
              <a href="#" className="nav_link">
                Forum
              </a>
            </li>
          </ul>
        </nav>
        <button className="btn" onClick={() => setShow(!show)}>
          <VscListSelection />
        </button>
        <div className="header_profile">
          <div className="img_wrapper">
            <img src={ProfileImg} className="img" alt="profie-img" />
          </div>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
