import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { StyledSearch } from "../../style/pages/search";

const Search = () => {
  return (
    <StyledSearch>
      <div className="container">
        <div className="row">
          <div className="content_search">
            <h3 className="title">Qidirish</h3>
            <form>
              <input
                className="form_input"
                type="text"
                placeholder="Adiblar, kitoblar, audiolar, maqolalar..."
              />
              <button className="form_btn">
                <BiSearchAlt />
                izlash
              </button>
            </form>
          </div>
        </div>
      </div>
    </StyledSearch>
  );
};

export default Search;
