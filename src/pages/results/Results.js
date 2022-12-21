import React, { useState } from "react";
import Header from "../Header/Header";
import Card from "../../components/Card";

const Results = () => {
  const [data, setData] = useState({ payload: [] });
  const user = () => {
    setData(localStorage.getItem("results"));
  };
  console.log(user);
  console.log(data);
  return (
    <>
      <Header />
      <div>
        {}
        <Card />
      </div>
    </>
  );
};

export default Results;
