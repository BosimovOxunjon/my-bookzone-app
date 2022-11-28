import styled from "styled-components";
import "bootstrap";

const StyledSignUp = styled.section`
  .row {
    display: flex;
    align-items: center;
  }
  .img {
    width: 50%;
    margin-left: 0;
  }
  .img_wrapper {
    display: flex;
    positon: relative;
    justify-content: flex-start;
    align-items: center;
    .img_item:last-child {
      position: absolute;
    }
  }
  .form_wrapper {
    display: flex;
    flex-direction: column;
    width: 70%;
    // margin-left: auto;
    // justify-content: space-around;
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
      width: 50%;
      border-radius: 10px;
      padding: 15px 0 15px 30px;
      font-size: 14px;
    }
    .form_submit {
      font-style: normal;
      font-weight: 500;
      width: 50%;
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
    .row {
      display: block;
      margin: 0 auto;
    }
    .form_wrapper,
    .img {
      width: 100%;
      align-items: center;
    }
    .img_item:first-child {
      left: inherit;
    }
  }
  @media screen and (max-width: 576px) {
    .form_wrapper {
      .form_input {
        width: 95%;
      }
    }
  }
`;

export { StyledSignUp };
