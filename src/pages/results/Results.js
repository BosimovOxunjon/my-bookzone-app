import React, { useState, useEffect } from "react";
import HomeImg from "../../assets/images/home/home.png";
import Header from "../Header/Header";
import Card from "../../components/Card";
import { Link } from "react-router-dom";
import "antd";
import { StyledResults } from "../../style/pages/results";
import { Button } from "antd";

const Results = () => {
  const [data, setData] = useState({ payload: [{}] });
  const user = () => {
    setData(JSON.parse(localStorage.getItem("results")));
  };
  if (data.payload === []) {
    console.log("wrong");
  }

  useEffect(() => {
    user();
  }, []);

  console.log(user);
  console.log(data);
  return (
    <>
      <Header />
      <StyledResults>
        <div className="container">
          <h1 className="title">Natijalar</h1>
          <div style={{ marginTop: "100px" }}>
            <div className="card_wrapper">
              {data.payload > [0] ? (
                data.payload.map((item) => {
                  return (
                    <>
                      <Card
                        id={item._id}
                        title={item.title || "We don't have any information"}
                        key={item._id}
                        img={item?.imageLink || HomeImg}
                        // text={item?.author.firstName}
                        view={item?.views}
                      />
                    </>
                  );
                })
              ) : (
                <>
                  <span className="results_text">
                    Bu ma'lumov mavjud emas.{"  "}
                  </span>
                  <Link to={`/home`} className="results_link">
                    <Button type="link">Bosh sahifada o'tish</Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </StyledResults>
    </>
  );
};

export default Results;
