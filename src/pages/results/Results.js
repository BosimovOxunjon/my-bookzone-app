import React, { useState, useEffect } from "react";
import HomeImg from "../../assets/images/home/home.png";
import Header from "../Header/Header";
import Card from "../../components/Card";
import { Link } from "react-router-dom";
import { StyledResults } from "../../style/pages/results";

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
          <div style={{ marginTop: "100px" }}>
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
                  We don't have any information about this.{"  "}
                </span>
                <Link to={`/home`} className="results_link">
                  Go to main page
                </Link>
              </>
            )}
          </div>
        </div>
      </StyledResults>
    </>
  );
};

export default Results;
