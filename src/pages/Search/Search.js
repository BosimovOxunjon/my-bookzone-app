import axios from "axios";
import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { useSearchParams } from "react-router-dom";
import { Form, Input, Button } from "antd";
import { StyledSearch } from "../../style/pages/search";
import keys from "../../configs";

const Search = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  const [info, setInfo] = useState({});
  const searchHandler = async () => {
    const { data } = await axios.get(
      `${keys.BACKEND_API}/api/books/search?title=${searchParam.get("query")}`
    );
    console.log(data);
    if (!data === "") {
      alert("We do not any information about this");
    } else {
      window.location.replace("/results");
    }
    localStorage.setItem("results", JSON.stringify(data));
    setInfo(data);
    return data;
  };
  console.log(info);
  return (
    <StyledSearch>
      <div className="container">
        <div className="row">
          <div className="content_search">
            <h3 className="title">Qidirish</h3>
            <Form onFinish={searchHandler}>
              <Input
                className="form_input"
                type="text"
                name="title"
                onChange={(e) => setSearchParam({ query: e.target.value })}
                placeholder="Adiblar, kitoblar, audiolar, maqolalar..."
              />
              <Button className="form_btn" htmlType="submit">
                <BiSearchAlt />
                izlash
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </StyledSearch>
  );
};

export default Search;
