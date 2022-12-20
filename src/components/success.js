import React from "react";
import { Link } from "react-router-dom";
import { StyledSuccess } from "../style/components/success";

const Success = () => {
  return (
    <>
      <StyledSuccess>
        <div className="success_wrapper">
          You've done successfully!{" "}
          <Link to={`/home`} className="success_link">
            Go home page
          </Link>
        </div>
      </StyledSuccess>
    </>
  );
};

export default Success;
