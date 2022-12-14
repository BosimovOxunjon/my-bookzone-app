import styled from "styled-components";

const StyledSignUp = styled.section`
  .row {
    display: flex;
    align-items: center;
  }
  .content_img {
    width: 50%;
    height: 100vh;
    margin-left: 0;
  }
  .img_wrapper {
    display: flex;
    positon: relative;
    height: 100%;
    justify-content: center;
    align-items: center;
    .img_item:first-child {
      height: 100%;
      width: 100%;
    }
    .img_item:last-child {
      position: absolute;
    }
  }
  .content_form {
    display: flex;
    width: 50%;
    .content_form-item {
      width: 30%;
      min-height: 100px;
    }
  }
  .form_wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
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
      .link {
        text-decoration: none;
        color: #549ff9;
      }
    }
    .form_input {
      border: 1px solid #b4b4bb;
      width: 70%;
      border-radius: 10px;
      padding: 15px 0 15px 30px;
      font-size: 14px;
    }
    .form_input-phone {
      padding: 5px 0px 5px 15px;
      input {
        border: none;
        padding: 15px;
      }
    }
    .form_submit {
      height: 100%;
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
      cursor: pointer;
    }
  }
  @media screen and (max-width: 992px) {
    .content_img {
      width: 60%;
      .img_item {
        width: 100%;
      }
      .img_item:last-child {
        width: 50%;
      }
    }
    .content_form {
      width: 40%;
    }
  }
  @media screen and (max-width: 769px) {
    .row {
      display: block;
      margin: 0 auto;
    }
    .content_form,
    .content_img {
      width: 100%;
      align-items: center;
    }
    .form_wrapper {
      margin-bottom: 50px;
    }
    .img_item:first-child {
      left: inherit;
      width: 100%;
    }
    .img_item:last:child {
      width: 70%;
    }
  }
  @media screen and (max-width: 576px) {
    .content_form-item {
      width: 5% !important;
    }
    .form_wrapper {
      .form_input {
        width: 95%;
      }
    }
  }
`;

export { StyledSignUp };
