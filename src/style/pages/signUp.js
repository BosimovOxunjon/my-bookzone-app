import styled from "styled-components";
import "bootstrap";

const StyledSignUp = styled.section`
  .img {
    width: 50%;
  }
  .img_wrapper {
    display: flex;
    positon: relative;
    justify-content: center;
    .img_item {
      position: absolute;
    }
    .img_item:first-child {
      left: 0;
      top: 0;
      bottom: 0;
    }
  }
  .form_wrapper {
    display: grid;
    width: 50%;
    margin-left: auto;
    justify-content: space-around;
    .title {
      font-family: "Arial Black";
      font-style: normal;
      font-weight: 900;
      font-size: 36px;
      line-height: 51px;
      margin-bottom: 0;
    }
    .text {
      margin-top: 0;
      font-style: normal;
      font-weight: 400;
      font-size: 13px;
      line-height: 15px;
    }
    .form_input {
      border: 1px solid #b4b4bb;
      border-radius: 10px;
      padding: 15px 0 15px 30px;
      font-size: 14px;
      min-width: 300px;
    }
    .form_submit {
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      padding: 12px 0;
      color: white;
      font-weight: 700;
      background: #152540;
      border: none;
      border-radius: 35px;
    }
  }
  @media screen and (max-width: 769px) {
    .form_wrapper,
    .img {
      width: 100%;
    }
  }
`;

export { StyledSignUp };
